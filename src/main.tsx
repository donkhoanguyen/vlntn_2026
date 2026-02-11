import React from 'react';
import ReactDOM from 'react-dom/client';
import { SmileDebugApp } from './smile/SmileDebugApp';

import './styles.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <SmileDebugApp />
    </React.StrictMode>,
  );
}

