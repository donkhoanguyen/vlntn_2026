import React from 'react';
import ReactDOM from 'react-dom/client';
import { SmileChargeScene, SmileChargeResult } from '../scenes/SmileChargeScene';
import '../styles.css';

export type RenderSmileChargeOptions = {
  mountNode: HTMLElement;
  onComplete: (result: SmileChargeResult) => void;
};

/**
 * Mounts the Smile Charge scene into a DOM node.
 *
 * Returns a small handle with an `unmount` method so the caller can clean up.
 */
export function renderSmileChargeScene(options: RenderSmileChargeOptions) {
  const { mountNode, onComplete } = options;

  const root = ReactDOM.createRoot(mountNode);
  root.render(
    <React.StrictMode>
      <SmileChargeScene onComplete={onComplete} />
    </React.StrictMode>,
  );

  return {
    unmount() {
      root.unmount();
    },
  };
}

