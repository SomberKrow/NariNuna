# Nari-Only Atmosphere Demo

**Status:** `PROPOSED` / `CLIENT REVIEW`  
**Authority:** Jake-directed Phase A implementation; Nari/Panda approval not yet recorded  
**Scope:** Reversible runtime simplification only  
**Update trigger:** Client approval/rejection or any change to the public atmosphere decision

## Purpose

This branch presents one authored Nari atmosphere so Jake, Nari, and Panda can judge whether the site feels cleaner and more cohesive without a public Dark/Light selector. It does not amend the locked three-atmosphere product history in `00_PROJECT_SOURCE_OF_TRUTH.md` or record client approval that has not happened.

## Implemented review state

- `SiteHeader` contains navigation, More, and Twitch without a replacement theme control.
- Every real HTML document declares `data-theme="nari"` and `theme-color` `#2a1820` directly.
- The browser no longer loads a pre-paint theme script or reads/writes `nari-haven-theme-v1`.
- `ThemeSwitcher`, `useTheme`, `ThemeName`, and inactive Dark/Light CSS branches are absent from the runtime.
- Semantic tokens such as `--bg`, `--story-surface`, `--story-copy`, `--story-muted`, `--story-accent`, and `--story-line` remain intact.
- Existing midnight/daybreak artwork and historical documentation remain in the repository where they carry provenance or decision history.

## Accessibility contract

The Nari atmosphere must independently meet the WCAG 2.2 AA target, including contrast, visible focus, keyboard parity, zoom/reflow, target sizing, semantic landmarks, and reduced-motion behavior. Light and Dark modes are not substitutes for accessible base colors or controls.

## Reversibility

Phase A is one coherent commit on the existing review branch. If the proposal is rejected, revert that commit; do not rebuild the former runtime by hand. No source artwork, route, content, dependency, or MPA behavior is removed by the demo.

## Decision boundary

If Nari/Panda approve the singular atmosphere, update the canonical source of truth, governance decision log, design system, art direction, release QA, and historical handoff documents in a separate owner-approved decision pass. Until then, this document is the explicit exception record for the working demo.
