# Don Kitchen – Experience for Mai

A **fully immersive, game-like experience** that welcomes **Mai** as the cherished customer of Don Kitchen. Through playful games and interactions, we show Mai the qualities that make Don Kitchen special. The experience culminates in the ask:

**Will Mai continue to be our finest, most lovable customer of Don Kitchen?**

## What’s inside

- **Landing** – Welcome Mai as our cherished customer; Enter the experience.
- **Experience hub** – “See what we bring to you, Mai — through a few playful games.”
- **Warmth** – Smile to fill a jar; we meet you with warmth (camera or hold-to-fill).
- **Composure** – Keep it together while we try to make you smile; we keep our cool (camera or don’t-tap fallback).
- **Final ask** (when implemented) – Will Mai continue to be our finest, most lovable customer? (Yes / no.)

## Tech

- **React + TypeScript**, Vite.
- **SmileEngine** – in-browser face landmarks, smile score; camera optional with manual fallbacks.
- **Scenes** – SmileChargeScene (Warmth), PokerFaceScene (Composure).

## Docs

- [User Journey](.agents/USER_JOURNEY.md) – flow, emotional arc, Don Kitchen qualities, final ask.
- [Scenes Spec](.agents/SCENES_SPEC.md) – visual and interaction spec for all scenes and modules.
- [Checklist](.agents/CHECKLIST.md) – build and implementation checklist.

## Run

```bash
npm install
npm run dev
```

Open the dev URL (e.g. `http://localhost:5173`), allow camera when prompted for the full experience, or use the on-screen fallbacks.
