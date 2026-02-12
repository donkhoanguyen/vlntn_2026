import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { SmileChargeScene } from './scenes/SmileChargeScene';
import { PokerFaceScene } from './scenes/PokerFaceScene';
import { SmileDebugApp } from './smile/SmileDebugApp';
import stage1Kitchen from '../images/stage1_kitchen.png';
import './styles.css';

type Route = 'landing' | 'home' | 'smile-debug' | 'smile-charge' | 'poker-face';

function App() {
  const [route, setRoute] = useState<Route>('landing');

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash === 'smile-debug' || hash === 'smile-charge' || hash === 'poker-face') {
      setRoute(hash);
    } else if (hash === 'home') {
      setRoute('home');
    } else {
      setRoute('landing');
    }

    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1);
      if (newHash === 'smile-debug' || newHash === 'smile-charge' || newHash === 'poker-face') {
        setRoute(newHash);
      } else if (newHash === 'home') {
        setRoute('home');
      } else {
        setRoute('landing');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (newRoute: Route) => {
    setRoute(newRoute);
    if (newRoute === 'landing') {
      window.location.hash = '';
    } else {
      window.location.hash = newRoute;
    }
  };

  // Landing / hero
  if (route === 'landing') {
    return (
      <div className="hero">
        <div className="hero-image-wrap">
          <img
            src={stage1Kitchen}
            alt="Cozy hand-drawn kitchen with stove, sink, and dining table"
          />
          <div className="hero-content">
            <h1 className="hero-title">Don&apos;s Kitchen</h1>
            <p className="hero-tagline">A cozy interactive story</p>
            <button
              type="button"
              className="hero-start-btn"
              onClick={() => navigate('home')}
            >
              Start
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Scene selector (home page)
  if (route === 'home') {
    return (
      <div className="app-shell">
        <div className="app-shell-header">
          <div className="app-title-block">
            <div className="app-title">Don&apos;s Kitchen</div>
            <div className="app-subtitle">Scene selector</div>
          </div>
        </div>
        <div className="app-shell-inner" style={{ padding: '40px 20px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              maxWidth: '400px',
              margin: '0 auto',
            }}
          >
            <button
              type="button"
              className="button"
              onClick={() => navigate('smile-debug')}
              style={{ width: '100%', padding: '16px' }}
            >
              Smile Engine Lab
              <div style={{ fontSize: '11px', marginTop: '4px', opacity: 0.8 }}>
                Test camera + smile detection
              </div>
            </button>
            <button
              type="button"
              className="button button-secondary"
              onClick={() => navigate('smile-charge')}
              style={{ width: '100%', padding: '16px' }}
            >
              Smile Charge Scene
              <div style={{ fontSize: '11px', marginTop: '4px', opacity: 0.8 }}>
                Full scene: charge ingredient by smiling
              </div>
            </button>
            <button
              type="button"
              className="button button-secondary"
              onClick={() => navigate('poker-face')}
              style={{ width: '100%', padding: '16px' }}
            >
              Poker Face Scene
              <div style={{ fontSize: '11px', marginTop: '4px', opacity: 0.8 }}>
                Don&apos;t smile while the UI tries to make you
              </div>
            </button>
            <div
              style={{
                marginTop: '24px',
                padding: '12px',
                background: 'rgba(148, 163, 184, 0.1)',
                borderRadius: '8px',
                fontSize: '12px',
                color: 'var(--text-muted)',
              }}
            >
              <strong>Quick links:</strong>
              <br />
              <a
                href="#smile-debug"
                style={{ color: 'var(--accent)', textDecoration: 'none' }}
              >
                #smile-debug
              </a>
              {' · '}
              <a
                href="#smile-charge"
                style={{ color: 'var(--accent)', textDecoration: 'none' }}
              >
                #smile-charge
              </a>
              {' · '}
              <a
                href="#poker-face"
                style={{ color: 'var(--accent)', textDecoration: 'none' }}
              >
                #poker-face
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Smile Engine Debug
  if (route === 'smile-debug') {
    return (
      <>
        <div
          style={{
            position: 'fixed',
            top: '12px',
            left: '12px',
            zIndex: 1000,
          }}
        >
          <button
            type="button"
            className="button button-secondary"
            onClick={() => navigate('home')}
            style={{ fontSize: '11px', padding: '6px 12px' }}
          >
            ← Back
          </button>
        </div>
        <SmileDebugApp />
      </>
    );
  }

  // Smile Charge Scene
  if (route === 'smile-charge') {
    return (
      <>
        <div
          style={{
            position: 'fixed',
            top: '12px',
            left: '12px',
            zIndex: 1000,
          }}
        >
          <button
            type="button"
            className="button button-secondary"
            onClick={() => navigate('home')}
            style={{ fontSize: '11px', padding: '6px 12px' }}
          >
            ← Back
          </button>
        </div>
        <SmileChargeScene
          onComplete={(result) => {
            console.log('SmileCharge complete', result);
            alert(
              `Done!\nDuration: ${result.durationSeconds.toFixed(
                1,
              )}s\nCumulative score: ${result.cumulativeScore.toFixed(
                2,
              )}\nVia fallback: ${result.viaFallback}`,
            );
          }}
        />
      </>
    );
  }

  // Poker Face Scene
  if (route === 'poker-face') {
    return (
      <>
        <div
          style={{
            position: 'fixed',
            top: '12px',
            left: '12px',
            zIndex: 1000,
          }}
        >
          <button
            type="button"
            className="button button-secondary"
            onClick={() => navigate('home')}
            style={{ fontSize: '11px', padding: '6px 12px' }}
          >
            ← Back
          </button>
        </div>
        <PokerFaceScene
          onComplete={(result) => {
            console.log('PokerFace complete', result);
            alert(
              `Done!\nSurvived: ${result.survived}\nDuration: ${result.durationSeconds.toFixed(
                1,
              )}s\nMin composure: ${(result.minComposureReached * 100).toFixed(
                0,
              )}%`,
            );
          }}
        />
      </>
    );
  }

  return null;
}

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}