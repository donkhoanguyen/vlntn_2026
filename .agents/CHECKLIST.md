## Build Checklist

**Context:** Don Kitchen – fully immersive experience for **Mai** as our cherished customer. We show Don Kitchen's qualities (Warmth, Composure, etc.) through game-like scenes. Final ask: **Will Mai continue to be our finest, most lovable customer of Don Kitchen?**

- [x] **SmileEngine core**
  - [x] Camera stream management (`getUserMedia`, front-facing when available)
  - [x] In-browser face landmarks model (`@tensorflow-models/face-landmarks-detection`)
  - [x] Normalized `smileScore ∈ [0,1]` with EMA smoothing
  - [x] Strong/weak smile hysteresis flags
  - [x] Per-user neutral baseline calibration

- [x] **SmileEngine debug harness**
  - [x] Live numeric score + meter
  - [x] Strong / weak smile indicators
  - [x] Camera permission / error messaging

- [x] **SmileChargeScene**
  - [x] Integrates with `SmileEngine` for strong-smile detection
  - [x] Time-based progress model with decay
  - [x] Jar fill visualization + completion animation hooks
  - [x] Fallback “hold to fill” interaction
  - [x] Entry point `renderSmileChargeScene({ mountNode, onComplete })`

- [x] **PokerFaceScene**
  - [x] Composure meter with smile-based decay/regen
  - [x] Penalty trigger on smile threshold crossing
  - [x] Attack scheduling / rendering area
  - [x] Manual fallback mode when camera unavailable
  - [x] Entry point `renderPokerFaceScene({ mountNode, attacks, onComplete })`

