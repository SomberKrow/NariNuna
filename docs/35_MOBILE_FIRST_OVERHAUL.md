# Mobile-first experience overhaul

**Status:** `IMPLEMENTED` for client review; production clearance remains blocked  
**Date:** 2026-09-08  
**Branch:** `kiva/mobile-first-overhaul`  
**Scope:** Phone composition, compact navigation, narrow-width reflow, and Resources wayfinding

## Outcome

The phone experience is now a deliberate composition rather than a compressed desktop banner. At widths below `48rem`, each ordinary route leads with its approved chapter artwork and pulls the existing opening copy into a compact, overlapping caption card. Desktop and tablet composition remains owned by the existing layers at `48rem` and above.

The mobile menu exposes all eight ordinary rooms in one numbered two-column directory, collapsing to one column on the narrowest screens. It retains the native disclosure, current-page state, Escape-to-close behavior, and focus return.

Resources no longer presents the redundant Nail desk, Creator shelf, and Game files jump links. The three shelves remain in the document, with their stable IDs preserved for existing direct links and the Nail Studio cross-link.

## Implementation contract

| Concern | Implementation |
|---|---|
| Phone authority | `src/styles/_mobile-first.scss`, imported last from `main.scss` |
| Breakpoint | Phone rules apply below `48rem`; existing desktop/tablet composition remains unchanged |
| Chapter openings | Artwork first, then a compact overlapping copy surface with route-specific focal placement |
| Mobile navigation | Flat eight-room directory in `SiteHeader.vue`; the desktop primary/More hierarchy is unchanged |
| Interior rhythm | Route-owned SCSS reduces padding, reshapes grids, and preserves each room's existing signature device |
| Resources | Category jump navigation removed; all shelves, records, disclosures, and stable section IDs retained |
| Accessibility | One H1 per document, no horizontal overflow in the tested matrix, touch-sized controls, visible focus, native disclosure semantics, and existing reduced-motion behavior |

No route, dependency, approved copy, external destination, artwork record, canon claim, or MPA behavior changed.

## Observed validation

`npm run check` passes lint, strict type checking, 65 Vitest checks across 14 files, production build validation, performance budgets, and direct preview verification for all 11 HTML documents. The build verifies 137 essential assets and all 27 retained Prinny designs. Shared JS plus CSS is 69.71 KB gzip against the 120 KB budget; the largest route CSS is Haven at 5.33 KB against 12 KB; the largest combined route graph is Haven at 81.36 KB.

Headless Chromium checks cover all 11 documents at 320, 390, and 768 CSS pixels. A 390-pixel viewport with the root text size increased to 200% also has no horizontal overflow. Resources renders zero category jump links and all three shelves. The expanded mobile menu renders all eight room links; Escape closes it and returns focus to the menu control.

## Remaining release work

This is review evidence, not production clearance. Physical-device touch review, named screen-reader review, measured contrast verification, production-host validation, content/rights closure, and client approval remain pending under the existing release contract.

## Rollback

Remove the final `mobile-first` import and restore the Resources index markup to return to the prior narrow layout. The route-owned compacting rules and mobile header directory can be reverted independently; no data migration is required.
