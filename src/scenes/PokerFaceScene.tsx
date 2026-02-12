import React, { useEffect, useRef, useState } from 'react';
import { SmileEngine } from '../smile/SmileEngine';

// Tunable constants (per spec)
const STAGE_DURATION_SECONDS = 20;
// Use same sensitivity as SmileChargeScene (0.2) - SmileEngine rarely hits 0.6 for real smiles
const SMILE_THRESHOLD = 0.25;
const SMILE_RECOVERY_THRESHOLD = 0.15;
const SMILE_PENALTY_RATE = 1.2; // composure loss per second when smiling
const RECOVERY_RATE = 0.6; // composure gain per second when not smiling
const MIN_METER_TO_PASS = 0.3;
const UPDATE_INTERVAL_MS = 100;

export type AttackInfo = {
  prompt: string;
  durationSec?: number;
  penaltyImage?: string;
};

export type PokerFaceResult = {
  survived: boolean;
  durationSeconds: number;
  minComposureReached: number;
};

const DEFAULT_ATTACKS: AttackInfo[] = [
  { prompt: 'Your smile is basically a superpower.', durationSec: 4 },
  { prompt: 'Remember that time you laughed so hard you cried?', durationSec: 5 },
  { prompt: 'Someone just said you look nice today.', durationSec: 4 },
  { prompt: 'A tiny puppy just walked by.', durationSec: 5 },
  { prompt: 'Your secret admirer is watching.', durationSec: 4 },
  { prompt: 'Okay fine, you made it. Almost.', durationSec: 4 },
];

type SceneState = 'idle' | 'countdown' | 'active' | 'success' | 'fail-but-continue';
type CameraStatus = 'idle' | 'starting' | 'running' | 'denied' | 'error';

type PokerFaceSceneProps = {
  onComplete: (result: PokerFaceResult) => void;
  attacks?: AttackInfo[];
  stageDurationSeconds?: number;
};

export const PokerFaceScene: React.FC<PokerFaceSceneProps> = ({
  onComplete,
  attacks = DEFAULT_ATTACKS,
  stageDurationSeconds = STAGE_DURATION_SECONDS,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const engineRef = useRef<SmileEngine | null>(null);

  const smileScoreRef = useRef(0);
  const wasAboveThresholdRef = useRef(false);
  const fallbackTappedRef = useRef(false);

  const [sceneState, setSceneState] = useState<SceneState>('idle');
  const [cameraStatus, setCameraStatus] = useState<CameraStatus>('idle');

  const [composure, setComposure] = useState(1);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [smileScore, setSmileScore] = useState(0);
  const [countdownValue, setCountdownValue] = useState(3);
  const [penaltyPop, setPenaltyPop] = useState<string | null>(null);
  const [fallbackPosition, setFallbackPosition] = useState({ x: 0, y: 0 });

  const minComposureRef = useRef(1);
  const startedAtRef = useRef<number | null>(null);
  const completedRef = useRef(false);
  const justResetRef = useRef(false);
  const penaltyPopTimeoutRef = useRef<number | null>(null);
  const fallbackContainerRef = useRef<HTMLDivElement | null>(null);

  // Initialize SmileEngine
  useEffect(() => {
    if (!videoRef.current || engineRef.current || cameraStatus !== 'idle') return;

    const videoEl = videoRef.current;
    const engine = new SmileEngine({
      videoElement: videoEl,
      strongThreshold: SMILE_THRESHOLD,
      weakThreshold: SMILE_RECOVERY_THRESHOLD,
      onFrame: ({ smileScore: score }) => {
        smileScoreRef.current = score;
        setSmileScore(score);
      },
    });

    engineRef.current = engine;
    setCameraStatus('starting');

    engine
      .start()
      .then(() => {
        setCameraStatus('running');
        setSceneState('countdown');
        setCountdownValue(3);
      })
      .catch((err: unknown) => {
        // eslint-disable-next-line no-console
        console.error('PokerFaceScene camera error', err);

        if (
          err instanceof DOMException &&
          (err.name === 'NotAllowedError' || err.name === 'SecurityError')
        ) {
          setCameraStatus('denied');
        } else {
          setCameraStatus('error');
        }

        setSceneState('countdown');
        setCountdownValue(3);
      });

    return () => {
      engine.stop();
      engineRef.current = null;
    };
  }, [cameraStatus]);

  // Countdown 3-2-1 before starting
  useEffect(() => {
    if (sceneState !== 'countdown') return;

    const id = window.setInterval(() => {
      setCountdownValue((prev) => {
        if (prev <= 1) {
          setSceneState('active');
          startedAtRef.current = performance.now();
          wasAboveThresholdRef.current = false; // Reset so we don't trigger immediately
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(id);
  }, [sceneState]);

  // Composure meter + timer loop
  useEffect(() => {
    if (sceneState !== 'active') return;

    const id = window.setInterval(() => {
      const now = performance.now();
      const startedAt = startedAtRef.current ?? now;
      const dt = (now - startedAt) / 1000;

      setElapsedSeconds(Math.min(dt, stageDurationSeconds));

      const currentSmile = smileScoreRef.current;
      const effectiveSmiling =
        currentSmile >= SMILE_THRESHOLD || fallbackTappedRef.current;

      // Penalty pop on threshold crossing (below → above)
      if (!wasAboveThresholdRef.current && effectiveSmiling) {
        wasAboveThresholdRef.current = true;
        const promptIndex = Math.floor(dt / 4) % attacks.length;
        setPenaltyPop(attacks[promptIndex]?.penaltyImage ?? 'penalty');
        if (penaltyPopTimeoutRef.current != null) {
          window.clearTimeout(penaltyPopTimeoutRef.current);
        }
        penaltyPopTimeoutRef.current = window.setTimeout(() => {
          setPenaltyPop(null);
          penaltyPopTimeoutRef.current = null;
        }, 2000);
      } else if (!effectiveSmiling) {
        wasAboveThresholdRef.current = false;
      }

      // While smiling, keep resetting the timer – clock only counts when NOT smiling
      if (effectiveSmiling) {
        startedAtRef.current = now;
        setElapsedSeconds(0);
        setComposure(1);
        minComposureRef.current = 1;
        justResetRef.current = true;
      }
      const wasFallbackTap = fallbackTappedRef.current;
      fallbackTappedRef.current = false;

      if (justResetRef.current) {
        justResetRef.current = false;
      } else {
        setComposure((prev) => {
        let next = prev;
        const delta = UPDATE_INTERVAL_MS / 1000;

        if (effectiveSmiling) {
          const smileAmount = wasFallbackTap
            ? 0.8
            : Math.max(0, currentSmile - SMILE_THRESHOLD);
          next -= smileAmount * SMILE_PENALTY_RATE * delta;
        } else {
          next += RECOVERY_RATE * delta;
        }

        next = Math.max(0, Math.min(1, next));
        minComposureRef.current = Math.min(minComposureRef.current, next);
        return next;
      });
      }

    }, UPDATE_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [sceneState, stageDurationSeconds, attacks]);

  // Completion check - when timer ends, show result and wait for Continue click
  useEffect(() => {
    if (sceneState !== 'active' || completedRef.current) return;

    const id = window.setInterval(() => {
      const startedAt = startedAtRef.current ?? performance.now();
      const elapsed = (performance.now() - startedAt) / 1000;

      if (elapsed >= stageDurationSeconds) {
        completedRef.current = true;
        const survived = minComposureRef.current >= MIN_METER_TO_PASS;
        setSceneState(survived ? 'success' : 'fail-but-continue');
      }
    }, 200);

    return () => window.clearInterval(id);
  }, [sceneState, stageDurationSeconds]);

  const handleContinue = () => {
    if (sceneState !== 'success' && sceneState !== 'fail-but-continue') return;
    const startedAt = startedAtRef.current ?? performance.now();
    const elapsed = (performance.now() - startedAt) / 1000;
    onComplete({
      survived: sceneState === 'success',
      durationSeconds: elapsed,
      minComposureReached: minComposureRef.current,
    });
  };

  // Move fallback button randomly (manual mode)
  useEffect(() => {
    if (cameraStatus !== 'denied' && cameraStatus !== 'error') return;

    const moveButton = () => {
      if (!fallbackContainerRef.current) return;
      const container = fallbackContainerRef.current.getBoundingClientRect();
      const btnWidth = 180;
      const btnHeight = 56;
      const padding = 20;

      const maxX = Math.max(0, container.width - btnWidth - padding * 2);
      const maxY = Math.max(0, container.height - btnHeight - padding * 2);

      const x = padding + Math.random() * maxX;
      const y = padding + Math.random() * maxY;

      setFallbackPosition({ x, y });
    };

    moveButton();
    const interval = window.setInterval(moveButton, 2000);
    return () => window.clearInterval(interval);
  }, [cameraStatus]);

  const handleFallbackTap = () => {
    fallbackTappedRef.current = true;
  };

  const showCameraErrorOverlay =
    cameraStatus === 'denied' || cameraStatus === 'error';

  const currentPromptIndex = Math.floor(elapsedSeconds / 4) % attacks.length;
  const currentPrompt = attacks[currentPromptIndex]?.prompt ?? '';

  const statusText = (() => {
    if (sceneState === 'success') {
      return "Okay, you're stronger than I thought.";
    }
    if (sceneState === 'fail-but-continue') {
      return "Your smile is too powerful to contain anyway.";
    }
    if (showCameraErrorOverlay) {
      return "Camera isn't available. Try not to tap the moving button instead.";
    }
    return "Don't smile. Not even a little.";
  })();

  return (
    <div className="app-shell">
      <div className="app-shell-header">
        <div className="app-title-block">
          <div className="app-title">Keep It Together</div>
          <div className="app-subtitle">Poker face challenge</div>
        </div>
        <div className="app-pill">Scene · Poker face</div>
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
                  <div className="charge-camera-overlay-title">
                    Camera is shy
                  </div>
                  <div className="charge-camera-overlay-text">
                    That&apos;s okay. Avoid tapping the moving button instead –
                    tapping counts as a smile!
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="privacy-text">
            Camera is processed locally. Nothing is uploaded.
          </div>
        </div>

        <div className="score-panel poker-panel">
          <div className="poker-composure-section">
            <div className="poker-composure-label">KEEP IT TOGETHER</div>
            <div className="meter-track poker-meter">
              <div
                className="meter-fill poker-meter-fill"
                style={
                  {
                    '--ratio': composure,
                  } as React.CSSProperties
                }
              />
            </div>
          </div>

          <div className="poker-prompt-area">
            {sceneState === 'countdown' ? (
              <div className="poker-countdown">{countdownValue}</div>
            ) : sceneState === 'active' ? (
              <div className="poker-prompt-bubble">{currentPrompt}</div>
            ) : null}
          </div>

          <div className="poker-timer">
            {sceneState === 'countdown'
              ? 'Get ready...'
              : `${elapsedSeconds.toFixed(1)}s / ${stageDurationSeconds}s`}
          </div>

          <div className="charge-text-main">{statusText}</div>

          <div className="charge-debug">
            smileScore={smileScore.toFixed(3)} (threshold 0.2)
          </div>

          {(sceneState === 'success' || sceneState === 'fail-but-continue') && (
            <div className="controls-row">
              <button
                type="button"
                className="button"
                onClick={handleContinue}
              >
                Continue →
              </button>
            </div>
          )}

          {showCameraErrorOverlay && sceneState === 'active' && (
            <div
              ref={fallbackContainerRef}
              className="poker-fallback-container"
              style={{ position: 'relative', minHeight: 120 }}
            >
              <button
                type="button"
                className="button poker-fallback-button"
                style={{
                  position: 'absolute',
                  left: fallbackPosition.x,
                  top: fallbackPosition.y,
                  transition: 'left 0.3s ease, top 0.3s ease',
                }}
                onClick={handleFallbackTap}
              >
                Try not to tap!
              </button>
            </div>
          )}
        </div>
      </div>

      {penaltyPop && (
        <div className="poker-penalty-overlay">
          <div className="poker-penalty-pop">
            {penaltyPop === 'penalty' ? (
              <span className="poker-penalty-emoji">😄</span>
            ) : (
              <img
                src={penaltyPop}
                alt=""
                className="poker-penalty-image"
              />
            )}
            <div className="poker-penalty-text">You smiled!</div>
          </div>
        </div>
      )}
    </div>
  );
};
