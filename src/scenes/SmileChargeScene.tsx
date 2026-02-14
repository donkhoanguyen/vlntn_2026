import React, { useEffect, useRef, useState } from 'react';
import { SmileEngine } from '../smile/SmileEngine';

const REQUIRED_SMILE_TIME_SECONDS = 5; // Reduced from 8 to make it easier
const DECAY_RATE = 0.4; // seconds of progress lost per second when not smiling (unused now)
const UPDATE_INTERVAL_MS = 100;
const FILL_SPEED_MULTIPLIER = 1.5; // Fill 1.5x faster when smiling

type SceneState = 'idle' | 'charging' | 'completed';

type CameraStatus = 'idle' | 'starting' | 'running' | 'denied' | 'error';

export type SmileChargeResult = {
  durationSeconds: number;
  cumulativeScore: number;
  viaFallback: boolean;
};

type SmileChargeSceneProps = {
  onComplete: (result: SmileChargeResult) => void;
  onBack?: () => void;
};

type Phase = 'message' | 'interaction';

export const SmileChargeScene: React.FC<SmileChargeSceneProps> = ({ onComplete, onBack }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const engineRef = useRef<SmileEngine | null>(null);

  const smileScoreRef = useRef(0);
  const fallbackHeldRef = useRef(false);

  const [phase, setPhase] = useState<Phase>('message');
  const [sceneState, setSceneState] = useState<SceneState>('idle');
  const [cameraStatus, setCameraStatus] = useState<CameraStatus>('idle');

  const [progressSeconds, setProgressSeconds] = useState(0);
  const [smileScore, setSmileScore] = useState(0);
  const [hasStrongSmile, setHasStrongSmile] = useState(false);
  const [noFace, setNoFace] = useState(false);

  const [fallbackHeld, setFallbackHeld] = useState(false);
  const [viaFallback, setViaFallback] = useState(false);

  const accumulatedScoreRef = useRef(0);
  const lastTickRef = useRef<number | null>(null);
  const startedAtRef = useRef<number | null>(null);
  const completedRef = useRef(false);

  // Track whether fallback was used at all.
  useEffect(() => {
    // Keep the ref in sync for the timer loop.
    fallbackHeldRef.current = fallbackHeld;

    if (fallbackHeld) {
      setViaFallback(true);
    }
  }, [fallbackHeld]);

  // Initialize SmileEngine only after user has passed the message screen.
  useEffect(() => {
    if (phase !== 'interaction' || !videoRef.current || engineRef.current || cameraStatus !== 'idle') return;

    const videoEl = videoRef.current;
    const engine = new SmileEngine({
      videoElement: videoEl,
      // For this scene we want to be generous about what counts as "strong".
      strongThreshold: 0.6,
      weakThreshold: 0.35,
      onFrame: ({ smileScore: score }) => {
        smileScoreRef.current = score;
        setSmileScore(score);
        setHasStrongSmile(engine.isSmilingStrong());
        setNoFace(engine.hasNoFace());
      },
    });

    engineRef.current = engine;
    setCameraStatus('starting');

    engine
      .start()
      .then(() => {
        setCameraStatus('running');
        setSceneState('charging');
        startedAtRef.current = performance.now();
      })
      .catch((err: unknown) => {
        // eslint-disable-next-line no-console
        console.error('SmileChargeScene camera error', err);

        if (
          err instanceof DOMException &&
          (err.name === 'NotAllowedError' || err.name === 'SecurityError')
        ) {
          setCameraStatus('denied');
        } else {
          setCameraStatus('error');
        }

        // Even without camera, allow progress through fallback button.
        setSceneState('charging');
        startedAtRef.current = performance.now();
      });

    return () => {
      engine.stop();
      engineRef.current = null;
    };
  }, [phase, cameraStatus]);

  // Progress integration loop (100ms tick).
  useEffect(() => {
    if (sceneState === 'completed') return;
    // Always use refs inside the loop so we don't depend on re-renders.

    const id = window.setInterval(() => {
      const now = performance.now();
      const last = lastTickRef.current ?? now;
      const dt = (now - last) / 1000;
      lastTickRef.current = now;

      const currentSmile = smileScoreRef.current;
      // Lower threshold (0.2 instead of 0.35) + fill faster to make it easier
      const effectiveStrongSmile = currentSmile > 0.2 || fallbackHeldRef.current;

      setProgressSeconds((prev) => {
        let next = prev;

        if (effectiveStrongSmile) {
          // Integrate above-threshold smile time.
          // Progress is cumulative - it only goes up, never down.
          // Fill faster with multiplier to make it easier
          next += dt * FILL_SPEED_MULTIPLIER;
          accumulatedScoreRef.current += currentSmile * dt * FILL_SPEED_MULTIPLIER;
        }
        // When not smiling, progress stays where it is (no decay)

        if (next < 0) next = 0;

        if (next >= REQUIRED_SMILE_TIME_SECONDS) {
          next = REQUIRED_SMILE_TIME_SECONDS;

          if (!completedRef.current) {
            completedRef.current = true;
            setSceneState('completed');

            const startedAt = startedAtRef.current ?? now;
            const durationSeconds = (now - startedAt) / 1000;

            onComplete({
              durationSeconds,
              cumulativeScore: accumulatedScoreRef.current,
              viaFallback,
            });
          }
        }

        return next;
      });
    }, UPDATE_INTERVAL_MS);

    return () => {
      window.clearInterval(id);
    };
  }, [sceneState, onComplete, viaFallback]);

  const progressRatio = Math.max(
    0,
    Math.min(1, progressSeconds / REQUIRED_SMILE_TIME_SECONDS),
  );

  const showCameraErrorOverlay =
    cameraStatus === 'denied' || cameraStatus === 'error';

  const statusText = (() => {
    if (sceneState === 'completed') {
      return "Thank you for letting us share that love with you.";
    }

    if (showCameraErrorOverlay) {
      return 'Camera is not available. You can still hold the button below to fill the jar.';
    }

    if (cameraStatus === 'starting' || cameraStatus === 'idle') {
      return 'Connecting to camera and getting a feel for your neutral face…';
    }

    if (noFace) {
      return "I can't see you clearly – move closer or face the camera.";
    }

    if (hasStrongSmile) {
      return 'Hold that smile — cooking with energy, warmth, and love.';
    }

    if (progressRatio > 0.2) {
      return "Don't let it leak away…";
    }

    return "When it's made with fun, you can feel it. Smile to fill the jar.";
  })();

  // Message section first (speech.md §2)
  if (phase === 'message') {
    return (
      <div className="app-shell">
        <div className="app-shell-header">
          <div className="app-shell-header-left">
            <button type="button" className="button button-secondary app-back-btn" onClick={onBack ?? (() => {})}>
              Back to home
            </button>
            <div className="app-pill brand">Don Kitchen</div>
          </div>
          <div className="app-title-block">
            <div className="app-title">We Cook with Love. And a Little Fun.</div>
            <div className="app-subtitle">Food with Love &amp; Fun</div>
          </div>
        </div>
        <div className="app-shell-inner scene-message-block">
          <div className="scene-message-body">
            <p>
              We make sure that our staff at <span className="brand">Don Kitchen</span> brings the energy and love into the food making process. We treat ingredients and our craft with respect and use joy as a special form of seasoning here at <span className="brand">Don Kitchen</span>—a secret ingredient.
            </p>
            <p>
              From the first ingredient to the final plating, our goal has always been the same: to serve you something that feels special.
            </p>
            <p>
              Because when food is made with love, you can taste it. And when it&apos;s made with fun, you can feel it.
            </p>
            <p className="scene-message-cta">Matter of fact you can try it right now.</p>
          </div>
          <button
            type="button"
            className="button"
            onClick={() => setPhase('interaction')}
          >
            Try it now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <div className="app-shell-header">
        <div className="app-shell-header-left">
          <button type="button" className="button button-secondary app-back-btn" onClick={onBack ?? (() => {})}>
            Back to home
          </button>
          <div className="app-pill brand">Don Kitchen</div>
        </div>
        <div className="app-title-block">
          <div className="app-title">We Cook with Love. And a Little Fun.</div>
          <div className="app-subtitle">Food with Love &amp; Fun — because when food is made with love, you can taste it.</div>
        </div>
      </div>

      <div className="app-shell-inner">
        <div className="video-panel">
          <div className="video-wrapper">
            <video
              ref={videoRef}
              className="video-element"
              autoPlay
              playsInline
              muted
            />
            {showCameraErrorOverlay && (
              <div className="charge-camera-overlay">
                <div className="charge-camera-overlay-body">
                  <div className="charge-camera-overlay-title">Camera is shy</div>
                  <div className="charge-camera-overlay-text">
                    That&apos;s okay. You can still pour warmth in manually by holding the
                    button below.
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="privacy-text">
            Camera is processed locally in your browser. Nothing is uploaded.
          </div>
        </div>

        <div className="score-panel charge-panel">
          <div className="charge-jar-wrapper">
            <div
              className={
                'charge-jar ' +
                (sceneState === 'completed'
                  ? 'charge-jar--completed'
                  : smileScore > 0.2 || fallbackHeld
                    ? 'charge-jar--smiling'
                    : '')
              }
            >
              <div className="charge-jar-glass">
                <div
                  className="charge-jar-fill"
                  style={
                    { '--fill-ratio': progressRatio } as React.CSSProperties
                  }
                />
                <div className="charge-jar-highlight" />
              </div>
              <div className="charge-jar-label">Love &amp; Fun</div>
            </div>
          </div>

          <div className="charge-text-main">{statusText}</div>
          <div className="charge-text-secondary">
            Hold your smile:{' '}
            {progressSeconds.toFixed(1)}s / {REQUIRED_SMILE_TIME_SECONDS}s
          </div>
          <div className="charge-debug">
            smileScore={smileScore.toFixed(3)}
          </div>

          <div className="controls-row">
            <button
              type="button"
              className="button button-secondary charge-fallback-button"
              onPointerDown={() => setFallbackHeld(true)}
              onPointerUp={() => setFallbackHeld(false)}
              onPointerCancel={() => setFallbackHeld(false)}
              onPointerLeave={() => setFallbackHeld(false)}
              onMouseDown={() => setFallbackHeld(true)}
              onMouseUp={() => setFallbackHeld(false)}
              onMouseLeave={() => setFallbackHeld(false)}
              onTouchStart={() => setFallbackHeld(true)}
              onTouchEnd={() => setFallbackHeld(false)}
            >
              Hold to fill instead
            </button>
          </div>

          <div className="charge-hint">
            Camera being weird? This button fills the jar at the same pace while you hold
            it, then slowly leaks when you let go.
          </div>
        </div>
      </div>
    </div>
  );
};

