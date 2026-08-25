# Code Standards

**Status:** `ACTIVE`  
**Owns:** TypeScript, Vue, content, SCSS, browser behavior, dependencies, errors, naming, review quality  
**Update trigger:** Architecture, tooling, format/lint, state, or coding convention changes

## General engineering rules

- Inspect existing behavior and owning documentation before editing.
- Prefer the smallest coherent implementation that closes the active contract.
- Keep product content, Vue behavior, styles, assets, and records in their documented layers.
- Use semantic names tied to purpose, not accidents such as `purple-box` or `left-thing`.
- Preserve unrelated code and user changes.
- Remove dead code only after references, behavior, and rollback are understood.
- Do not commit lorem ipsum, fake data, TODO-driven shells, commented-out old implementations, or nonfunctional controls.
- Comments explain intent, constraints, or non-obvious browser behavior; they do not narrate syntax.
- Production console output should be quiet.

## TypeScript

- Keep strict TypeScript and `noEmit` checking.
- Avoid `any`, unjustified non-null assertions, and casts used only to silence errors.
- Narrow unknown data at trust boundaries.
- Use literal unions for themes, states, kinds, and content ratings.
- Prefer `satisfies` and readonly/static arrays where they preserve useful literal information.
- Keep DOM/timer/media-query types explicit and guard nullable references.
- Do not declare rich target interfaces and imply runtime validation exists.

Example for future content:

```ts
export const resources = [
  {
    id: "example-id",
    state: "draft",
    relationship: "none"
  }
] as const satisfies readonly ResourceItem[];
```

Approved production records need provenance; this structural example is not publishable content.

## Vue components

- Use `<script setup lang="ts">`.
- Define typed props and emits.
- Treat props/imported records as readonly; derive display state with computed values.
- Keep state local to the smallest owner.
- Use native links for navigation and buttons for actions.
- Use lifecycle hooks to clean listeners, observers, timers, animation contexts, and object URLs.
- Prefer owned template refs over broad document queries when component scope is available.
- Split a component when it owns meaningful behavior, reuse, state, or an accessibility contract—not to chase a line count.
- Do not make the global shell own route-specific copy.
- Do not reimplement header/footer/theme logic inside page components.

## Composables and global state

A composable has one clear browser/reactive responsibility and lifecycle-safe cleanup. If a function merely transforms a value, use a utility rather than disguising it as a composable.

Avoid:

- composables returning unrelated bags of refs;
- unreviewed module-level mutable singletons;
- a global store for page-local interactions;
- persisted state without a privacy/expiry need.

The current theme singleton is deliberate because it synchronizes one global document preference. Haven door, menu, floorboard, and Ghostie state remain local.

## Content modules

- Public strings remain UTF-8 source.
- One canonical record owns each volatile/repeated destination or item.
- Use stable IDs/slugs; labels may change without breaking identity.
- Store verification/review dates as ISO `YYYY-MM-DD`.
- Validate HTTPS and allowed origins.
- Keep content rating and publish state explicit when the family supports them.
- Never put private URLs, notes, credentials, or development-only endpoints in public data.
- Do not mutate imported content at runtime.
- Retiring content should require a record/state change, not layout surgery.

## HTML and routing

- Preserve one real HTML entry per documented route inside the repository-level `pages/` document root.
- Keep Vue page implementations in `src/pages/`; do not scatter route-entry folders across the repository root.
- Each entry owns accurate title, description, robots, viewport, theme color, icons/manifest, theme boot, and module entry.
- Primary top-level navigation uses ordinary anchors.
- Route paths are lowercase kebab-case with trailing slash, except `404.html`.
- Keep Vite entries, Router records, validator, tests, navigation, metadata, and docs synchronized.
- Do not use a universal SPA rewrite or conceal a missing document behind client fallback.

## SCSS and CSS

- Use SCSS for organization and CSS custom properties for semantic runtime tokens.
- Preserve layer order: tokens → base → components → pages → responsive.
- Prefer low-specificity class selectors and shallow nesting.
- Do not style by generated Vue scope attribute, brittle DOM depth, or text content.
- Avoid `!important` except a documented accessibility/preference override.
- Prefer logical properties where clear.
- Use `clamp()` for bounded fluid behavior, not every value.
- Never rely on viewport height alone for critical mobile content.
- Keep raw colors restricted to documented art/contrast/secret exceptions.
- Tokens represent shared decisions; do not create a token for every one-off art-directed offset.

## Responsive implementation

- Start from content behavior at 320px, not named devices.
- Recompose order, crop, grid, density, and action priority.
- Add a breakpoint only when content demonstrates a failure that current thresholds cannot solve.
- Touch/keyboard functionality does not depend on hover.
- Fixed UI must survive zoom, short height, browser chrome, and safe-area review.
- Test final art at the CSS `object-position` actually shipped.

## Motion code

- CSS handles small state transitions; Motion for Vue handles isolated component transitions.
- Animate transform/opacity where possible.
- No endless `requestAnimationFrame`, particle canvas, layout animation loop, autoplay media, or scroll hijacking.
- Honor the shared reduced-motion preference at initial render and during changes.
- Clean up listeners/timers and test repeated navigation/activation.
- Motion may not gate content or delay navigation.

## Images

- Follow `06_ASSET_MANIFEST_AND_ART_PIPELINE.md` before code integration.
- Use `<picture>`/`srcset` when the layout can select meaningful sizes or art direction.
- Always set intrinsic dimensions.
- `sizes` must reflect the CSS composition.
- Eager/high-priority is reserved for the actual route LCP image.
- Decorative images use empty alt; informative art gets concise useful alt and visible credit/context.
- Broken optional imagery must not remove the title, destination, or core meaning.

## Links and errors

- External URLs are HTTPS and reviewed.
- New-tab links use `noopener noreferrer` and announce the behavior.
- A failure-capable action needs a visible failure state; do not swallow promises.
- Expired Discord/media/contact content falls back honestly.
- Unknown routes preserve a usable recovery action.
- Avoid exceptions during rapid interaction/navigation.

## Dependencies

A new dependency requires:

- documented requirement;
- evidence the platform/current stack cannot solve it cleanly;
- bundle/runtime/maintenance impact;
- license compatibility;
- privacy/security review;
- focused introduction and tests;
- removal plan for anything it replaces.

Do not add Tailwind, component kits, a second icon pack, another animation wrapper, or a state library for a handful of local needs. All `VITE_*` values are public.

## Security and data boundaries

- Never render untrusted raw HTML.
- External Markdown/CMS content requires schema validation and allowlist sanitization.
- No secret, token, webhook, private ID, or credential in client code/config.
- A form requires a real server/privacy/error/spam design.
- Hidden/noindex paths contain no private data.
- Do not log private content or approval evidence.

## Formatting

Follow existing ESLint and style conventions. Introduce an automated formatter only as a deliberate mechanical change, ideally separate from visual/content work. Avoid repository-wide whitespace churn in a focused feature PR.

## Review questions

- Which documented contract authorizes the change?
- Does the correct layer own it?
- Is state as local and typed as practical?
- Are failure, keyboard, reduced-motion, mobile, and privacy behavior complete?
- Did a dependency/raw color/global abstraction enter without justification?
- Which automated and manual evidence was actually observed?
- Are docs, approvals, assets, tests, and rollback synchronized?
