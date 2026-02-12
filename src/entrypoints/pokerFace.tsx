import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  PokerFaceScene,
  PokerFaceResult,
  AttackInfo,
} from '../scenes/PokerFaceScene';
import '../styles.css';

export type RenderPokerFaceOptions = {
  mountNode: HTMLElement;
  attacks?: AttackInfo[];
  stageDurationSeconds?: number;
  onComplete: (result: PokerFaceResult) => void;
};

/**
 * Mounts the Poker Face scene into a DOM node.
 *
 * Returns a small handle with an `unmount` method so the caller can clean up.
 */
export function renderPokerFaceScene(options: RenderPokerFaceOptions) {
  const { mountNode, onComplete, attacks, stageDurationSeconds } = options;

  const root = ReactDOM.createRoot(mountNode);
  root.render(
    <React.StrictMode>
      <PokerFaceScene
        onComplete={onComplete}
        attacks={attacks}
        stageDurationSeconds={stageDurationSeconds}
      />
    </React.StrictMode>,
  );

  return {
    unmount() {
      root.unmount();
    },
  };
}
