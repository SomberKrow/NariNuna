# Nari Face-Safe Composition Pass

**Date:** 2026-08-31  
**Authority:** Jake's direction that Nari's face must remain unobstructed by text on desktop and mobile  
**Branch:** `kiva/nari-client-feedback-pass`

## Goal

Any hero or opening painting that visibly contains Nari must preserve her face as a protected visual focal point. Copy may frame the painting, but it must not cross her face at supported desktop, tablet, or mobile widths.

## Affected pages

The face-safe composition layer applies to:

- Home
- Meet Nari
- Streams
- Nail Studio
- Haven
- Support
- Story Time
- Work With Nari

Resources, the 404 page, and the hidden Prinny route are intentionally excluded because their primary hero artwork does not present Nari's face.

## Composition rules

### Desktop

- Home and painted-background chapter pages keep text in a capped left-side lane.
- Nari's painting focal point is positioned toward the right side of the viewport.
- Veils become opaque through the copy lane and fall away before the protected Nari focal area.
- Streams and Work With Nari no longer treat Nari's illustration as a background behind copy. Their hero is a real two-column layout with copy and artwork in physically separate columns.

### Tablet and mobile

- Every painted page uses a shared chapter-frame system driven by `--hero-mobile-focus-x`, `--hero-mobile-focus-y`, `--hero-mobile-art-height`, and `--hero-mobile-copy-width`.
- Copy stays in a compact upper field while the environmental painting becomes a bordered chapter plate beneath it. The plate uses `cover` inside a deliberately shallow frame instead of sizing a wide desktop painting against the entire hero height.
- Meet Nari, Nail Studio, Haven, Support, and Story Time each define their own focal coordinates and art height so character and room context survive together.
- Streams and Work With Nari remain physically separate copy/image compositions. Phones use a joined editorial spread; tablets return to two columns when the content has enough width.
- Home keeps copy, Nari's scene, and the three room gateways in one opening composition. Its social dock and actions compress before the painting is sacrificed.

## Implementation

- New final SCSS layer: `src/styles/_face-safe.scss`
- Loaded after `src/styles/_feedback.scss`
- No JavaScript breakpoint logic
- No duplicate mobile markup
- No new dependency
- No route changes
- No copy changes required to manufacture layout space
- No JavaScript layout measurement or duplicated mobile artwork

## Regression protection

`tests/face-safe-composition.test.ts` verifies:

- the face-safe layer is loaded last;
- all Nari-containing hero pages remain covered by the contract;
- desktop left-lane/right-focal geometry remains present;
- Streams and Work keep their artwork physically separate from copy;
- tablet/mobile paintings remain below the copy field in compact framed plates;
- every affected page exposes explicit focal variables instead of inheriting one universal crop;
- Nari-specific rules are not applied to Resources, 404, or Prinny pages.

## Validation

The repository's existing GitHub Actions quality gate remains the execution authority for lint, strict type checking, tests, production build, document validation, and preview verification. Human visual review should still confirm the final crop at approximately 320, 390-430, 768-1024, 1366, and 1920px widths across all three themes before merge.
