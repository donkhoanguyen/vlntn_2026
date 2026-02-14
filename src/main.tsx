import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { SmileChargeScene } from './scenes/SmileChargeScene';
import { PokerFaceScene } from './scenes/PokerFaceScene';
import { InnovatingScene } from './scenes/InnovatingScene';
import { SmileDebugApp } from './smile/SmileDebugApp';
import stage1Kitchen from '../images/stage1_kitchen.png';
import './styles.css';

type Route = 'landing' | 'home' | 'smile-debug' | 'smile-charge' | 'poker-face' | 'always-innovating';

function App() {
  const [route, setRoute] = useState<Route>('landing');

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash === 'smile-debug' || hash === 'smile-charge' || hash === 'poker-face' || hash === 'always-innovating') {
      setRoute(hash);
    } else if (hash === 'home') {
      setRoute('home');
    } else {
      setRoute('landing');
    }

    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1);
      if (newHash === 'smile-debug' || newHash === 'smile-charge' || newHash === 'poker-face' || newHash === 'always-innovating') {
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

  // Landing – script from speech.md §1 (no added info; rest is on home)
  if (route === 'landing') {
    return (
      <div className="hero">
        <div className="hero-image-wrap">
          <img
            src={stage1Kitchen}
            alt="Cozy hand-drawn kitchen with stove, sink, and dining table"
          />
          <div className="hero-content">
            <p className="hero-from">Thank you from</p>
            <h1 className="hero-brand">Don Kitchen</h1>
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

  // Home – full landing script from speech.md §1 (headline + body + 3 qualities + closing)
  if (route === 'home') {
    return (
      <div className="app-shell">
        <div className="app-shell-header">
          <button
            type="button"
            className="button button-secondary app-back-btn"
            onClick={() => navigate('landing')}
          >
            ← Back
          </button>
          <div className="app-title-block">
            <div className="app-title"><span className="brand">Don Kitchen</span></div>
            <div className="app-subtitle">Anniversary</div>
          </div>
        </div>
        <div className="app-shell-inner app-home-content">
          <h2 className="home-headline">Tribute to Mai Pham — from the team at <span className="brand">Don Kitchen</span></h2>
          <div className="home-body">
            <p>Hi Mai,</p>
            <p>
              We want to begin with one simple message: <strong>Thank you!</strong>
            </p>
            <p>
              On this third valentine day since meeting you, <span className="brand">Don Kitchen</span> would like to extend our most sincere gratitude. We of course are not offended that you have been choosing other restaurants and kitchens for your filling—no, even though that was very nice of you to keep us hanging.
            </p>
            <p>
              With that being said, your love and support have helped us grow, improve, and keep doing what we truly enjoy—making food that Mai Pham can enjoy.
            </p>
            <p>
              To celebrate this anniversary, we wanted to share the values that have shaped <span className="brand">Don Kitchen </span>  from the very beginning. These are the three qualities we&apos;ve always stood for, and the ones we promise to keep carrying forward.
            </p>
          </div>
          {/* <p className="home-cta-intro">Take a quick journey through what makes <span className="brand">Don Kitchen</span>… <span className="brand">Don Kitchen</span>.</p> */}
          <div className="app-home-buttons">
            <button
              type="button"
              className="button button-secondary"
              onClick={() => navigate('smile-charge')}
              style={{ width: '100%', padding: '16px' }}
            >
              <strong>Food with Love &amp; Fun</strong>
              <div style={{ fontSize: '11px', marginTop: '4px', opacity: 0.8 }}>
                Because great food should always feel joyful.
              </div>
            </button>
            <button
              type="button"
              className="button button-secondary"
              onClick={() => navigate('poker-face')}
              style={{ width: '100%', padding: '16px' }}
            >
              <strong>Meticulous When It Matters</strong>
              <div style={{ fontSize: '11px', marginTop: '4px', opacity: 0.8 }}>
                Because the details are what make the difference.
              </div>
            </button>
            <button
              type="button"
              className="button button-secondary"
              onClick={() => navigate('always-innovating')}
              style={{ width: '100%', padding: '16px' }}
            >
              <strong>Always Innovating</strong>
              <div style={{ fontSize: '11px', marginTop: '4px', opacity: 0.8 }}>
                Because we never stop improving for you.
              </div>
            </button>
          </div>
          {/* <blockquote className="home-closing">
            Thank you for being part of our story—now and always.
          </blockquote> */}
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

  // Smile Charge Scene (Food with Love & Fun)
  if (route === 'smile-charge') {
    return (
      <SmileChargeScene
        onBack={() => navigate('home')}
        onComplete={() => navigate('home')}
      />
    );
  }

  // Poker Face Scene (Meticulous When It Matters)
  if (route === 'poker-face') {
    return (
      <PokerFaceScene
        onBack={() => navigate('home')}
        onComplete={() => navigate('home')}
      />
    );
  }

  // Always Innovating (questionnaire)
  if (route === 'always-innovating') {
    return <InnovatingScene onBack={() => navigate('home')} />;
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