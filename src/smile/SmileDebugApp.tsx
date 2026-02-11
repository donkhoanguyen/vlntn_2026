import React, { useEffect, useRef, useState } from 'react';
import { SmileEngine } from './SmileEngine';

type EngineStatus =
  | 'idle'
  | 'starting'
  | 'running'
  | 'camera_denied'
  | 'camera_error';

export const SmileDebugApp: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const engineRef = useRef<SmileEngine | null>(null);

  const [status, setStatus] = useState<EngineStatus>('idle');
  const [smileScore, setSmileScore] = useState(0);
  const [isStrong, setIsStrong] = useState(false);
  const [isAny, setIsAny] = useState(false);
  const [noFace, setNoFace] = useState(false);

  useEffect(() => {
    // Auto-start when video is ready.
    if (!videoRef.current || engineRef.current) return;

    const video = videoRef.current;
    const engine = new SmileEngine({
      videoElement: video,
      onFrame: ({ smileScore: s }) => {
        setSmileScore(s);
        setIsStrong(engine.isSmilingStrong());
        setIsAny(engine.isSmilingAny());
        setNoFace(engine.hasNoFace());
      },
    });

    engineRef.current = engine;
    setStatus('starting');

    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: 'user' }, audio: false })
      .then((stream) => {
        // We only requested to trigger permission prompt; SmileEngine will request again.
        stream.getTracks().forEach((t) => t.stop());
        return engine.start();
      })
      .then(() => {
        setStatus('running');
      })
      .catch((err: unknown) => {
        // eslint-disable-next-line no-console
        console.error('Camera error', err);
        if (
          err instanceof DOMException &&
          (err.name === 'NotAllowedError' || err.name === 'SecurityError')
        ) {
          setStatus('camera_denied');
        } else {
          setStatus('camera_error');
        }
      });

    return () => {
      engine.stop();
      engineRef.current = null;
    };
  }, []);

  const handleRestart = () => {
    if (!videoRef.current) return;
    if (engineRef.current) {
      engineRef.current.stop();
      engineRef.current = null;
    }

    const video = videoRef.current;
    const engine = new SmileEngine({
      videoElement: video,
      onFrame: ({ smileScore: s }) => {
        setSmileScore(s);
        setIsStrong(engine.isSmilingStrong());
        setIsAny(engine.isSmilingAny());
        setNoFace(engine.hasNoFace());
      },
    });
    engineRef.current = engine;
    setStatus('starting');

    engine
      .start()
      .then(() => setStatus('running'))
      .catch((err: unknown) => {
        // eslint-disable-next-line no-console
        console.error('Camera error', err);
        setStatus('camera_error');
      });
  };

  const ratio = Math.max(0, Math.min(1, smileScore));

  let scoreClass = 'score-number-neutral';
  if (isStrong) scoreClass = 'score-number-strong';
  else if (isAny) scoreClass = 'score-number-weak';

  const statusText = (() => {
    switch (status) {
      case 'idle':
      case 'starting':
        return 'Connecting to camera and loading smile model...';
      case 'running':
        if (noFace) {
          return "I can't see your face clearly – move closer or face the camera.";
        }
        if (isStrong) return 'Strong smile detected 😄';
        if (isAny) return 'I see a hint of a smile…';
        return 'Try smiling to see the meter react.';
      case 'camera_denied':
        return 'Camera permission was denied. Enable it in your browser settings and hit “Retry”.';
      case 'camera_error':
        return 'There was an unexpected camera or model error. Try reloading the page or hitting “Retry”.';
      default:
        return '';
    }
  })();

  return (
    <div className="app-shell">
      <div className="app-shell-header">
        <div className="app-title-block">
          <div className="app-title">Smile Engine Lab</div>
          <div className="app-subtitle">Real-time warmth calibration</div>
        </div>
        <div className="app-pill">v0.1 · Dev preview</div>
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
          </div>
          <div className="privacy-text">
            Camera is processed locally in your browser. Nothing is uploaded.
          </div>
          <div className="controls-row">
            <button
              type="button"
              className="button"
              onClick={handleRestart}
              disabled={status === 'starting'}
            >
              {status === 'running' ? 'Restart engine' : 'Retry camera'}
            </button>
          </div>
        </div>

        <div className="score-panel">
          <div className="score-header">Smilescore (smoothed)</div>

          <div className={['score-number', scoreClass].join(' ')}>
            {ratio.toFixed(3)}
          </div>

          <div
            className="meter-track"
            style={{ '--ratio': ratio } as React.CSSProperties}
          >
            <div className="meter-fill" />
          </div>

          <div className="flags">
            <div
              className={
                'flag-pill ' + (isAny ? 'flag-pill--active' : '')
              }
            >
              Weak smile
            </div>
            <div
              className={
                'flag-pill ' + (isStrong ? 'flag-pill--active' : '')
              }
            >
              Strong smile
            </div>
          </div>

          <div
            className={
              'status-text ' +
              (status === 'camera_denied' || status === 'camera_error'
                ? 'status-text--error'
                : noFace
                  ? 'status-text--hint'
                  : '')
            }
          >
            {statusText}
          </div>
        </div>
      </div>
    </div>
  );
};

