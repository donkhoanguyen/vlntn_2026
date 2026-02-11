import type * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';

export type SmileEngineConfig = {
  videoElement: HTMLVideoElement;
  onFrame?: (data: { smileScore: number }) => void;
  strongThreshold?: number; // center of strong hysteresis band (approx)
  weakThreshold?: number; // center of weak hysteresis band (approx)
};

type Detector =
  | faceLandmarksDetection.FaceLandmarksDetector
  | null;

/**
 * SmileEngine
 *
 * - Manages camera stream.
 * - Runs face-landmarks-detection (MediaPipeFaceMesh) in-browser.
 * - Produces a normalized smileScore in [0, 1] with EMA smoothing + hysteresis.
 */
export class SmileEngine {
  private videoElement: HTMLVideoElement;
  private onFrame?: (data: { smileScore: number }) => void;

  private strongOn = 0.75;
  private strongOff = 0.65;
  private weakOn = 0.5;
  private weakOff = 0.4;

  private detector: Detector = null;
  private stream: MediaStream | null = null;
  private running = false;
  private rafId: number | null = null;

  private smoothedSmile = 0;
  private emaAlpha = 0.3;

  private isStrong = false;
  private isAny = false;

  private lastFrameTime = 0;
  private targetFps = 20;

  private noFaceSince: number | null = null;
  private _noFace = false;

  // Per-user neutral baseline for mouth shape, learned over time.
  private baselineWidth = 0;
  private baselineOpen = 0;
  private baselineInitialized = false;
  private baselineAlpha = 0.02; // very slow EMA so it doesn't jump around

  constructor(config: SmileEngineConfig) {
    this.videoElement = config.videoElement;
    this.onFrame = config.onFrame;

    if (config.strongThreshold !== undefined) {
      const c = config.strongThreshold;
      this.strongOn = Math.min(1, Math.max(0, c + 0.05));
      this.strongOff = Math.min(1, Math.max(0, c - 0.05));
    }

    if (config.weakThreshold !== undefined) {
      const c = config.weakThreshold;
      this.weakOn = Math.min(1, Math.max(0, c + 0.05));
      this.weakOff = Math.min(1, Math.max(0, c - 0.05));
    }
  }

  /**
   * Start camera + model and begin processing frames.
   */
  async start(): Promise<void> {
    if (this.running) return;

    // 1) Request camera
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: 'user',
      },
      audio: false,
    });

    this.stream = stream;
    this.videoElement.srcObject = stream;
    this.videoElement.playsInline = true;

    await this.videoElement.play();

    // 2) Lazy-load face-landmarks-detection model using MediaPipe runtime.
    const module = await import('@tensorflow-models/face-landmarks-detection');

    const model = module.SupportedModels.MediaPipeFaceMesh;
    const detectorConfig: faceLandmarksDetection.MediaPipeFaceMeshMediaPipeModelConfig = {
      runtime: 'mediapipe',
      // Uses CDN; you can host this yourself later if desired.
      solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh',
    };

    this.detector = await module.createDetector(model, detectorConfig);

    this.running = true;
    this.lastFrameTime = performance.now();
    this.loop();
  }

  /**
   * Stop processing and release camera.
   */
  stop(): void {
    this.running = false;
    if (this.rafId != null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }

    if (this.stream) {
      this.stream.getTracks().forEach((t) => t.stop());
      this.stream = null;
    }

    this.detector = null;
  }

  getSmoothedSmileScore(): number {
    return this.smoothedSmile;
  }

  isSmilingStrong(): boolean {
    return this.isStrong;
  }

  isSmilingAny(): boolean {
    return this.isAny;
  }

  /**
   * Whether no face has been seen for a few seconds.
   */
  hasNoFace(): boolean {
    return this._noFace;
  }

  private loop = () => {
    if (!this.running) return;

    this.rafId = requestAnimationFrame(this.loop);

    const now = performance.now();
    const minFrameInterval = 1000 / this.targetFps;

    if (now - this.lastFrameTime < minFrameInterval) {
      return;
    }
    this.lastFrameTime = now;

    void this.processFrame();
  };

  private async processFrame() {
    if (!this.detector) return;

    try {
      const faces = await this.detector.estimateFaces(this.videoElement, {
        flipHorizontal: true,
      });

      let rawScore = 0;

      if (!faces || faces.length === 0) {
        // No face → treat as zero.
        rawScore = 0;
        this.handleNoFace(true);
      } else {
        const face = faces[0];
        rawScore = this.estimateSmileFromFace(face);
        this.handleNoFace(false);
      }

      // EMA smoothing.
      this.smoothedSmile =
        this.emaAlpha * rawScore + (1 - this.emaAlpha) * this.smoothedSmile;

      // Hysteresis for strong / any flags.
      this.updateHysteresisFlags();

      if (this.onFrame) {
        this.onFrame({ smileScore: this.smoothedSmile });
      }
    } catch (err) {
      // In case of transient model errors, fail soft.
      // eslint-disable-next-line no-console
      console.warn('SmileEngine frame error', err);
    }
  }

  /**
   * Very simple heuristic to convert MediaPipe face output to smileScore in [0,1].
   *
   * NOTE: This is intentionally simple and may need tuning.
   * It uses a few key landmarks to approximate mouth width + curvature.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private estimateSmileFromFace(face: any): number {
    const keypoints = face.keypoints as Array<{
      x: number;
      y: number;
      z?: number;
      name?: string;
    }>;

    if (!keypoints || keypoints.length === 0) return 0;

    // MediaPipe FaceMesh indices commonly used for mouth:
    // 61: mouth left, 291: mouth right, 13: upper lip, 14: lower lip.
    const p = (index: number) => keypoints[Math.min(keypoints.length - 1, index)];

    const left = p(61);
    const right = p(291);
    const upperLip = p(13);
    const lowerLip = p(14);

    const dx = right.x - left.x;
    const dy = right.y - left.y;

    const mouthWidth = Math.hypot(dx, dy);
    const mouthOpen = Math.abs(lowerLip.y - upperLip.y);

    // Face size normalization using bounding box.
    const boxWidth =
      face.box && face.box.width
        ? face.box.width
        : this.approxFaceWidthFromKeypoints(keypoints);

    const normWidth = boxWidth > 0 ? mouthWidth / boxWidth : mouthWidth;
    const normOpen = boxWidth > 0 ? mouthOpen / boxWidth : mouthOpen;

    // Update neutral baseline when we're not obviously smiling.
    this.updateBaseline(normWidth, normOpen);

    // Convert to deltas above baseline so neutral tends toward 0.
    const widthDelta = Math.max(0, normWidth - this.baselineWidth);
    const openDelta = Math.max(0, normOpen - this.baselineOpen);

    // Heuristic ranges: how much wider/more open than baseline counts as "full smile".
    const widthComponent = this.normalizeRange(widthDelta, 0.01, 0.15);
    const openComponent = this.normalizeRange(openDelta, 0.005, 0.08);

    // Slightly favor width (a wide mouth vs just open).
    let score = 0.65 * widthComponent + 0.35 * openComponent;

    // Clamp to [0,1].
    score = Math.max(0, Math.min(1, score));
    return score;
  }

  private approxFaceWidthFromKeypoints(
    keypoints: Array<{ x: number; y: number }>,
  ): number {
    let minX = Number.POSITIVE_INFINITY;
    let maxX = Number.NEGATIVE_INFINITY;

    for (const { x } of keypoints) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
    }

    if (!isFinite(minX) || !isFinite(maxX)) return 0;
    return maxX - minX;
  }

  private normalizeRange(value: number, min: number, max: number): number {
    if (value <= min) return 0;
    if (value >= max) return 1;
    return (value - min) / (max - min);
  }

  private updateBaseline(normWidth: number, normOpen: number) {
    // First time we see a face: initialize baseline.
    if (!this.baselineInitialized) {
      this.baselineWidth = normWidth;
      this.baselineOpen = normOpen;
      this.baselineInitialized = true;
      return;
    }

    // Only adapt baseline when current smoothed smile is low
    // (we assume user is roughly neutral then).
    if (this.smoothedSmile > 0.25) return;

    const a = this.baselineAlpha;
    this.baselineWidth = a * normWidth + (1 - a) * this.baselineWidth;
    this.baselineOpen = a * normOpen + (1 - a) * this.baselineOpen;
  }

  private updateHysteresisFlags() {
    const s = this.smoothedSmile;

    // Strong smile hysteresis.
    if (!this.isStrong && s > this.strongOn) {
      this.isStrong = true;
    } else if (this.isStrong && s < this.strongOff) {
      this.isStrong = false;
    }

    // Weak smile hysteresis.
    if (!this.isAny && s > this.weakOn) {
      this.isAny = true;
    } else if (this.isAny && s < this.weakOff) {
      this.isAny = false;
    }
  }

  private handleNoFace(noFace: boolean) {
    const now = performance.now();

    if (noFace) {
      if (this.noFaceSince == null) {
        this.noFaceSince = now;
      }
    } else {
      this.noFaceSince = null;
      this._noFace = false;
      return;
    }

    if (this.noFaceSince != null && now - this.noFaceSince > 3000) {
      this._noFace = true;
    }
  }
}

