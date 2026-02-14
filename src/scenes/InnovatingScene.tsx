import React, { useState } from 'react';

type Phase = 'message' | 'questionnaire' | 'submitted';

// Your email – put in .env as VITE_INNOVATING_EMAIL so the "Request next visit" email is sent to you
const YOUR_EMAIL = import.meta.env.VITE_INNOVATING_EMAIL as string | undefined;

export const InnovatingScene: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [phase, setPhase] = useState<Phase>('message');
  const [flavor, setFlavor] = useState('');
  const [feedback, setFeedback] = useState('');
  const [visitRequest, setVisitRequest] = useState('');

  // Message section first (speech.md §4)
  if (phase === 'message') {
    return (
      <div className="app-shell">
        <div className="app-shell-header">
          <div className="app-shell-header-left">
            <button type="button" className="button button-secondary app-back-btn" onClick={onBack}>
              Back to home
            </button>
            <div className="app-pill brand">Don Kitchen</div>
          </div>
          <div className="app-title-block">
            <div className="app-title">We Never Stop Improving.</div>
            <div className="app-subtitle">Always Innovating</div>
          </div>
        </div>
        <div className="app-shell-inner scene-message-block">
          <div className="scene-message-body">
            <p>
              <span className="brand">Don Kitchen</span> has grown over the years, but one thing has never changed: we never want to stay the same. We experiment. We listen. We learn from our customers. And we constantly look for ways to make the <span className="brand">Don Kitchen</span> experience better—whether it&apos;s a new flavor, a new dish, or a better way to serve you.
            </p>
            <p className="scene-message-cta">Request your next visit with <span className="brand">Don Kitchen</span> here!</p>
          </div>
          <button type="button" className="button" onClick={() => setPhase('questionnaire')}>
            Answer a few questions
          </button>
        </div>
      </div>
    );
  }

  // Thank you after submit
  if (phase === 'submitted') {
    return (
      <div className="app-shell">
        <div className="app-shell-header">
          <div className="app-shell-header-left">
            <button type="button" className="button button-secondary app-back-btn" onClick={onBack}>
              Back to home
            </button>
            <div className="app-pill brand">Don Kitchen</div>
          </div>
          <div className="app-title-block">
            <div className="app-title brand">Don Kitchen</div>
            <div className="app-subtitle">Always Innovating</div>
          </div>
        </div>
        <div className="app-shell-inner scene-message-block">
          <div className="scene-message-body">
            <h3 className="innovating-thanks-title">Thank you!</h3>
            <p>We love hearing from you. Your ideas help us keep improving—we&apos;ll reach out about your next visit.</p>
          </div>
          <button type="button" className="button" onClick={onBack}>
            Back to home
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Don Kitchen – Always Innovating responses');
    const body = encodeURIComponent(
      [
        '--- Always Innovating (Don Kitchen) ---',
        '',
        'What new flavor or dish would you love to see?',
        flavor || '(none)',
        '',
        'Ideas to make next visit better?',
        feedback || '(none)',
        '',
        'Request next visit',
        visitRequest || '(none)',
      ].join('\n')
    );
    const mailto = YOUR_EMAIL
      ? `mailto:${YOUR_EMAIL}?subject=${subject}&body=${body}`
      : `mailto:?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    setPhase('submitted');
  };

  // Questionnaire (speech.md §4 – we listen, we learn)
  return (
    <div className="app-shell">
      <div className="app-shell-header">
        <div className="app-shell-header-left">
          <button type="button" className="button button-secondary app-back-btn" onClick={onBack}>
            Back to home
          </button>
          <div className="app-pill brand">Don Kitchen</div>
        </div>
        <div className="app-title-block">
          <div className="app-title">We Never Stop Improving.</div>
          <div className="app-subtitle">Always Innovating</div>
        </div>
      </div>
      <div className="app-shell-inner innovating-form-wrap">
        <form
          className="innovating-form"
          onSubmit={handleSubmit}
        >
          <label className="innovating-label" htmlFor="innovating-flavor">
            What new flavor or dish would you love to see at <span className="brand">Don Kitchen</span>?
          </label>
          <textarea
            id="innovating-flavor"
            className="innovating-input innovating-textarea"
            placeholder="e.g. a new dessert, a seasonal special…"
            value={flavor}
            onChange={(e) => setFlavor(e.target.value)}
            rows={2}
          />

          <label className="innovating-label" htmlFor="innovating-feedback">
            Any ideas to make your next visit even better?
          </label>
          <textarea
            id="innovating-feedback"
            className="innovating-input innovating-textarea"
            placeholder="We really do read these."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={3}
          />

          <label className="innovating-label" htmlFor="innovating-visit">
            Request your next visit
          </label>
          <input
            id="innovating-visit"
            type="text"
            className="innovating-input"
            placeholder="e.g. Next weekend, or a special occasion…"
            value={visitRequest}
            onChange={(e) => setVisitRequest(e.target.value)}
          />

          <button type="submit" className="button innovating-submit">
            Request your next visit with <span className="brand">Don Kitchen</span>
          </button>
        </form>
      </div>
    </div>
  );
};
