# Interaction and Motion Specification

Motion is punctuation, not wallpaper. Every action must remain clear and complete with animation disabled.

## Motion tokens

| Class | Range | Use |
|---|---:|---|
| Instant/state | 0–120ms | Pressed/selected/focus feedback |
| Fast | 140–180ms | Button and link hover/tap |
| Base | 240–320ms | Ghostie card, small reveal, panel |
| Large | 360–500ms | Rare image/card emphasis; no blocking page choreography |

Default ease-out is `cubic-bezier(.22,1,.36,1)`. Avoid spring overshoot on reading surfaces and avoid chained delays that make content wait.

## Page navigation

Top-level routes are real document navigations. No cross-document animation is required; cancelled browser View Transition operations produced console noise during rapid navigation and were deliberately removed. The correct-theme preflight and reserved dimensions provide continuity. Future transitions must be progressive enhancement and must not delay navigation, break history, or log errors.

## Implemented interactions

| Interaction | Full-motion behavior | Reduced-motion replacement | Input parity |
|---|---|---|---|
| Buttons/cards | 2–6px lift; occasional 0.25° card rotation | No transform; color/border only | Hover, focus, tap |
| Theme | Token colors/backgrounds transition ~280ms | Near-instant token update | Three labelled buttons, keyboard/touch |
| Ghostie summoner | Opacity + 24px rise + scale over 280ms; reverse on close | Static/opacity state | Button, close button, Escape not required |
| Mobile nav | Immediate panel visibility with shell state | Same | Menu button, Escape, link close |
| Haven door | Text/action state replaces through four steps; three progress bars | Same, no travel animation | Native buttons; visible text |
| Floorboard | Three text stages reveal a key | Same | Native button; no hover secret |
| Secret oath | Oath card swaps to Rule Eleven | Same | Button; “P” key and button increment counter |
| Media images | Very small scale on card hover | No scale | Link focus preserves affordance |

Do not rely on the keyboard-only `P` shortcut; the visible “Inspect ceremonial pillow” button is canonical.

## Ghosties and future emote bursts

- Maximum one summoner card and a small capped number of decorative sprites.
- Never spawn continuously, on scroll, or before user action.
- Use transforms/opacity only; do not animate layout properties.
- Clamp lifetime and instance count; stop when document is hidden.
- Keep effects outside reading/focus targets and `pointer-events: none` for decorative sprites.
- Canonical emote assets require website/animation rights; current placeholder is not a style reference to trace.
- Reduced motion uses a static appearance or short text status; no drifting/falling.

## Environmental responses

Allowed future examples: lamp glow strengthens on a theme selection, a single Ghostie peeks after a meaningful completion, a pillow shifts after deliberate inspection. Each has one trigger, a cap/cooldown, a touch equivalent, and a reduced-motion state.

Never animate: body copy while reading, safety/privacy/support disclaimers, primary navigation position, professional metrics, form labels/errors, flashing emerald cues, or background parallax that competes with scroll.

## Theme changes

Theme control updates `data-theme`, local storage, and browser theme color immediately. It does not play sound, swap unrelated worlds, move focus, or announce a fake “saved” network operation. Color is not the only state signal: icons, button state, and labels remain.

## Mobile behavior

Touch targets stay at least 44×44 CSS px where practical. Hover effects are enhancement only. Fixed Ghostie control stays away from browser edges and never overlays the mobile nav. Decorative density and multi-column motion collapse before typography or controls.

## Reduced motion and user preference

`prefers-reduced-motion: reduce` sets scroll behavior to auto, collapses animation/transition duration to effectively instant, removes hover transforms, and passes a reactive boolean to Motion for Vue. Do not add a second site-level motion preference until there is an owner requirement; the operating-system preference is authoritative today.

## Performance and QA

- Animate compositor-friendly transform/opacity only.
- Avoid more than one animated focal event at a time.
- No autoplay audio, video, canvas particle field, or animation loop.
- Inspect 60fps behavior on representative mid-range mobile hardware before adding bursts.
- Verify keyboard focus does not move on decorative reveals.
- Verify screen-reader output is not flooded by repeated live regions.
- Rapidly activate and navigate components to expose stale-state/cancelled-transition errors.
