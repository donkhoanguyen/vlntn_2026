import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { SmileChargeScene } from './scenes/SmileChargeScene';
import { SmileDebugApp } from './smile/SmileDebugApp';
import './styles.css';

type Route = 'home' | 'smile-debug' | 'smile-charge';

function App() {
  const [route, setRoute] = useState<Route>('home');

  useEffect(() => {
    // Read initial route from hash
    const hash = window.location.hash.slice(1);
    if (hash === 'smile-debug' || hash === 'smile-charge') {
      setRoute(hash);
    }

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1);
      if (newHash === 'smile-debug' || newHash === 'smile-charge') {
        setRoute(newHash);
      } else {
        setRoute('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (newRoute: Route) => {
    setRoute(newRoute);
    if (newRoute === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = newRoute;
    }
  };

  // Route selector (home page)
  if (route === 'home') {
    return (
      <div className="app-shell">
        <div className="app-shell-header">
          <div className="app-title-block">
            <div className="app-title">Smile Diner</div>
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