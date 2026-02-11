## Smile Diner – Visual & Interaction Spec

This document defines the **visual modules** and **scenes** for the Valentine project so another Cursor agent can safely implement the frontend while the aesthetics are being refined separately.

The core idea: she is in a cozy kitchen, gradually **making a dish**. The dish is “good but missing one central ingredient” – which turns out to be **her** (her smile, presence, and choices).

Implementation is expected in **React + TypeScript** (Vite or similar), but the contracts below are UI‑framework agnostic.

---

## Global Requirements

- **Art style:** hand‑drawn, warm, minimal (user will supply background and character PNG/SVG assets; you just compose them).
- **Layout target:** mobile‑first (375–430px width), but responsive up to tablet.
- **State management:** scene state + per‑scene progress stored in a top‑level `AppState`.
- **Audio:** optional; code should work without assets.
- **Camera/mic:** used only in dedicated stages; all processing local in browser; always request permission with a clear overlay.

---

## Scene Flow Overview

1. **Scene 0 – Title**
   - Static screen with title, small character illustration, and a single “tap to start” button.
   - On tap → go to **Scene 1**.

2. **Scene 1 – Empty Kitchen (Background Establishing Shot)**
   - Shows the **empty cozy kitchen** (background image similar to the attached reference).
   - Light ambient motion only (e.g., subtle parallax, tiny steam loop if desired).
   - One interactive hotspot: the **stove area**.
   - Tapping the stove triggers:
     - A short animation (stove “wakes up”, tiny steam/heat).
     - A caption/narration line: “This kitchen has been quiet for a while… It’s missing something.”
   - When animation completes → mark scene as complete and show a “continue” button → **Scene 2**.

3. **Scene 2 – Smile Charge Stage (Camera ON)**
   - Uses the camera to **measure how big and how long she smiles**.
   - Visual metaphor: she is **charging a key ingredient** (e.g., a glowing jar of “warmth”).

4. **Scene 3 – Poker‑Face Stage (Camera ON)**
   - Uses the camera to **detect when she smiles**, but here smiling causes **funny penalties**.
   - Visual metaphor: she must keep a **serious face** while the UI constantly tries to make her smile.

5. **Scene 4 – Dish Assembly**
   - A more traditional interactive scene where she **assembles the dish** using the ingredients unlocked by previous stages.

6. **Scene 5 – Final Reveal**
   - The dish is shown as “good but missing something”.
   - Final beat reveals that the missing ingredient is **her**; transitions into the Valentine ask.

This spec primarily details **Scenes 2 & 3** as separate reusable visual modules so another agent can focus on building them.

---

## Module 1 – Scene Shell & Router

**Responsibility**
- Provide a **full‑screen scene container** with simple fading transitions between scenes.

**Suggested API (React)**

```ts
type SceneId = 'title' | 'kitchen' | 'smile-stage' | 'poker-stage' | 'assembly' | 'final';

interface SceneShellProps {
  currentScene: SceneId;
  onSceneComplete: (nextScene: SceneId) => void;
}
```

**Behavior**
- Only one scene is visible at a time.
- Scene components receive `onComplete()` callbacks to advance to the next scene.

---

## Module 2 – Kitchen Establishing Scene

**Goal**
- Show the **empty kitchen** reference background and introduce the mood.

**Visuals**
- Background image supplied by user (similar to `image-379dbf4b-...png`):
  - Centered, letterboxed with plenty of white margin.
  - Optional: subtle “hand‑drawn wobble” (small CSS `transform` animation).
- Overlay caption area at the bottom (comic‑style speech/narration bubble).

**Interaction**
- A transparent button region over the **stove** area:
  - On tap:
    - Brief “stove wakes up” animation (e.g., overlay sprite or simple CSS scale/jitter).
    - Show first narration line.
    - After animation, show a “continue” button that calls `onComplete('smile-stage')`.

No camera/mic here; this is a safe, static intro.

---

## Module 3 – Smile Charge Stage (Camera ON)

**Goal**
- Use the camera to **measure smile intensity over time** and “charge” an ingredient.
- Mechanic: maintain a big genuine smile long enough to fill a meter.

**Visual Layout**
- Top: small preview of her camera (`<video>` element, 4:3 or square), rounded corners.
- Middle: **ingredient card**:
  - Illustration (user‑supplied asset) of an empty jar or orb.
  - A **vertical or circular progress bar** around/under the jar.
- Bottom: instruction text + button row (retry/continue).

**State & Logic**
- States:
  - `idle` → awaiting permission
  - `calibrating` → 1–2 seconds of neutral face
  - `active` → listening for smiles
  - `success` → meter full
  - `error` → camera not available / model failed

- Smile metric:
  - A scalar `smileScore` in [0,1] (placeholder implementation allowed; real smile detection can be stubbed).
  - We care mainly about:
    - **Threshold**: `SMILE_ON = 0.6`, `SMILE_OFF = 0.4` (hysteresis).
    - **Accumulated charge**: fill progress while `smileScore >= SMILE_ON`.
  - Target: `REQUIRED_SMILE_TIME = 8–12 seconds` of “on” time.

- Progress behavior:
  - While smiling above threshold → progress increases linearly.
  - When below threshold → progress slightly decays (e.g., 10–20% of fill rate) so she has to re‑engage but doesn’t lose everything instantly.
  - On reaching 100%:
    - Lock the meter.
    - Trigger a **short celebratory animation** on the ingredient (glow, scale, particles).
    - Call `onComplete('poker-stage')` after a delay.

**Camera Handling**
- Show a **full‑screen permission overlay** before starting:
  - “We’ll use your camera only on this page to see your smile. Nothing is recorded or uploaded.”
  - Buttons: `Allow` / `Skip camera`.
- If camera permission denied:
  - Switch to **manual mode**: a big “Hold to charge” button that behaves as if she is smiling while pressed.

**Props (suggested)**

```ts
interface SmileStageProps {
  onComplete: () => void;              // called when ingredient is fully charged
  onBack?: () => void;                 // optional back navigation
  ingredientName?: string;             // e.g. \"Warmth\"
  targetSeconds?: number;              // override REQUIRED_SMILE_TIME
}
```

Implementation detail (for another agent):
- Use `requestAnimationFrame` or a fixed interval (e.g. 30–60 FPS) to sample `smileScore` and update progress.
- For now, `smileScore` can be a stub driven from a slider/dev controls; later it can be wired to a real smile model.

---

## Module 4 – Poker‑Face Stage (Camera ON)

**Goal**
- Invert the mechanic: she **must not smile** while the UI constantly tries to make her smile.
- Smiling triggers playful “penalties” (e.g., popping up her goofy photos).

**Visual Layout**
- Top:
  - Same camera preview as Smile Stage (for continuity).
- Middle:
  - A **“composure meter”** that starts full and drains when she smiles.
  - Could be:
    - A horizontal bar labeled “KEEP IT TOGETHER”.
    - Or a heart that cracks when meter is low.
- Foreground:
  - A **prompt area** where teasing content appears:
    - Text jokes/compliments.
    - Small images/memes (user‑provided assets).
- Bottom:
  - Instructions: “Don’t smile. Not even a little.”
  - After success or timeout, a continue button.

**State & Logic**
- States:
  - `idle` → waiting for camera or manual start.
  - `active` → monitoring for smiles and pushing prompts.
  - `success` → she held composure long enough.
  - `fail-but-continue` → she smiled too much, but we still move on with a joke.

- Parameters (tunable constants):
  - `STAGE_DURATION = 18–25 seconds` total.
  - `SMILE_PENALTY_RATE` – how fast the meter drains when `smileScore >= 0.6`.
  - `RECOVERY_RATE` – how fast the meter refills when `smileScore < 0.4`.
  - `MIN_METER_TO_PASS` – e.g. `0.3` (she can crack, but not constantly).

- Prompt schedule:
  - Predefined script array:

    ```ts
    interface Prompt {
      atSecond: number;
      type: 'text' | 'image';
      payload: string; // text or asset key
    }
    ```

  - Render a new prompt when `currentTime >= atSecond`.
  - Prompts can overlap for chaos (e.g., a queue of bubbles/images).

- Smile detection:
  - Same `smileScore` logic as Module 3 with hysteresis.
  - Each time `smileScore` crosses from below to above threshold, trigger a **penalty pop**:
    - Show a small overlay using one of her “not‑so‑presentable” photos (asset keys provided later).
    - Play a tiny sound (optional).

- Completion rules:
  - If timer reaches `STAGE_DURATION` **and** meter > `MIN_METER_TO_PASS`:
    - Show success text: “Okay, you’re stronger than I thought.”
    - Call `onComplete('assembly')`.
  - Else:
    - Show playful text: “Your smile is too powerful to contain anyway.”
    - Still call `onComplete('assembly')` after a beat.

**Camera Handling**
- Same permission + manual fallback pattern as Module 3.
- Manual mode: a large “Try not to tap” button that randomly moves; tapping it acts as a “smile event” and drains the meter.

**Props (suggested)**

```ts
interface PokerFaceStageProps {
  onComplete: () => void;
  prompts: Prompt[];            // scripted teasing content
  penaltyImages?: string[];     // asset keys for her goofy photos
  stageDurationSeconds?: number;
}
```

---

## Module 5 – Dish Assembly (Outline Only)

Another agent can implement this later; high‑level specification:

- Show a **plate** in the center.
- Below it, show **ingredient tokens/cards**:
  - One for each successful stage (e.g., “Warmth” from Smile Stage, “Composure” from Poker‑Face Stage).
- She drags or taps ingredients to assemble the final dish.
- When all required tokens are placed:
  - Plate artwork swaps to a “completed dish”.
  - Trigger transition to **Final Reveal**.

---

## Module 6 – Final Reveal (Outline Only)

- Show the finished dish but overlay text like: “It’s good, but something is still missing…”
- Fade in your character holding a letter.
- Show the final message and Valentine question with soft animation.
- Two buttons: `Yes` (primary), `no` (playfully dodges).

---

## Notes for the Implementing Agent

- Do **not** block on real ML for smile detection. Implement a clean abstraction:

  ```ts
  type SmileListener = (score: number) => void;

  function startSmileStream(options: { onSmile: SmileListener }): StopFn;
  ```

  and stub it with deterministic/random data behind a dev toggle. The project owner can later wire this to a real model.

- Keep assets and constants **data‑driven** so the project owner can easily tweak:
  - text prompts
  - durations
  - thresholds
  - which images are used as penalties

---

---

## Implementation Spec – Core Engine and Scene Modules

Below is a module interface spec for how another agent should implement the **smile detection engine** and the **two most technical scenes**. Placeholder UI is acceptable for the core logic; visuals will be layered in later.

### 1. SmileEngine – API and Placeholder UI

**Goal:**  
Stub a `SmileEngine` abstraction providing real‑time smile score streaming via webcam, behind a friendly API.

#### Type Signatures

```ts
// Called repeatedly with current smile confidence [0, 1].
type SmileListener = (smileScore: number) => void;

// Returns a function that, when called, stops listening and releases camera resources.
type StopFn = () => void;

/**
 * Starts the camera and streams smile confidence to onSmile().
 * In dev mode, generates random/deterministic data instead of using a real ML model.
 */
function startSmileStream(options: { onSmile: SmileListener }): StopFn;
```

#### Placeholder UI

- Render a barebones component that mounts the smile stream.
- Show a live numeric `smileScore` indicator.
- Optionally, show colored bar or smiley icon for demonstration (actual visuals can be replaced later).

---

### 2. SmileChargeScene – Progress Model

**Goal:**  
Uses camera/SmileEngine to fill a “smile jar.” Progress is the *integral* of smileScore above threshold over time.

#### State Model

- `progress: number` – [0, 1], capped at 1.
- `progress += (smileScore > threshold ? (smileScore - threshold) : 0) * rate * deltaTime`
- `charged: boolean` – set `true` when progress reaches 1.

#### UX Flow

- On mount: Start smile detection; show simple animated bar or “jar filling.”
- Show live feedback as user smiles.
- On full charge: call `onComplete({ duration, cumulativeScore })`.

#### Entry Point API

```ts
// Mounts and controls the Smile Charge scene. Cleans up on unmount.
function renderSmileChargeScene({
  mountNode,
  onComplete, // ({ duration, cumulativeScore }) => void
}: {
  mountNode: HTMLElement,
  onComplete: (result: { duration: number, cumulativeScore: number }) => void,
}): void
```

---

### 3. PokerFaceScene – Composure, Penalties, and Attacks

**Goal:**  
User must *not* smile while confronted by comedic “attacks”. Smiling depletes “composure,” triggers penalties.

#### State Model

- `composure: number` – [0, 1], starts at 1.
- Every frame: `if (smileScore > threshold) composure -= (smileScore - threshold) * penaltyRate * deltaTime`
- If `composure` hits 0, user “loses” or gets a funny penalty (e.g., forced to see a silly photo).
- If user survives all attacks, `onComplete({ survived })`.

#### Attacks Model

- `attacks: AttackInfo[]`
    - e.g., `{ prompt: string, durationSec: number, penaltyImage?: string }`
- For each attack: show prompt, animate, track composure.

#### Entry Point API

```ts
// Mounts and controls the Poker Face scene. Handles attacks and penalties.
function renderPokerFaceScene({
  mountNode,
  attacks, // see above
  onComplete, // ({ survived }) => void
}: {
  mountNode: HTMLElement,
  attacks: { prompt: string, durationSec: number, penaltyImage?: string }[],
  onComplete: (result: { survived: boolean }) => void,
}): void
```

---

### Usage Example

```js
// (Pseudo-usage; real frontend will route between these entry points.)
renderSmileChargeScene({
  mountNode: document.getElementById('scene'),
  onComplete: ({ duration, cumulativeScore }) => {
    // Proceed to PokerFaceScene or next stage.
  }
});

renderPokerFaceScene({
  mountNode: document.getElementById('scene'),
  attacks: [
    { prompt: "Try not to smile while the cat dances!", durationSec: 7, penaltyImage: "cat_dance.png" },
    { prompt: "Grandma tells a joke...", durationSec: 5 },
    // ...more attacks
  ],
  onComplete: ({ survived }) => {
    // Handle result and continue scene flow.
  }
});
```

**NOTE:** Visual presentation, animation, and asset integration will be fully defined by the frontend-design agent; use neutral placeholders for now.

---




