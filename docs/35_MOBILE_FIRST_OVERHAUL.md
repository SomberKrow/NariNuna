# Mobile-first experience overhaul

**Status:** `IMPLEMENTED` for client review; production clearance remains blocked
**Date:** 2026-09-09
**Branch:** `kiva/mobile-first-overhaul`
**Scope:** Phone composition, compact navigation, narrow-width reflow, and Resources wayfinding

## Outcome

The phone experience is now a sequence of distinct rooms rather than one desktop composition or one reusable caption card scaled down. Below `48rem`, each ordinary route owns a different first-screen silhouette while keeping the approved artwork, copy, route, and content order:

| Route | Phone opening |
|---|---|
| Home | Full-height illustrated arrival with copy and the labelled social directory integrated into the lower scene |
| Meet Nari | Portrait above a notebook-page introduction |
| Streams | Full-bleed broadcast art joined to a dark console with a gold rail |
| Haven | Tall doorway composition with the welcome copy embedded in the light path |
| Work With Nari | Polaroid-like artwork tucked behind a cream correspondence sheet |
| Resources | Shelf image joined to an open-book/spine treatment |
| Nail Studio | Full artwork followed by a clipped workbench note |
| Story Time | Mounted album photograph followed by its paper caption |
| Support | Arched room crop beside a personal note |

Desktop and tablet composition remains owned by the existing layers at `48rem` and above. The mobile menu exposes all eight ordinary rooms as a plain two-column directory, collapsing to one column at the narrowest widths. It retains native disclosure behavior, current-page state, Escape-to-close behavior, and focus return without decorative numbering.

Resources continues directly into its three shelves. The redundant category jump links remain removed, while stable section IDs and the Nail Studio cross-link remain intact.

## Implementation contract

| Concern | Implementation |
|---|---|
| Phone authority | `src/styles/_mobile-first.scss`, imported last from `main.scss` |
| Breakpoint | Phone rules apply below `48rem`; existing desktop/tablet composition remains unchanged |
| Opening ownership | Shared spacing/type/control rules stop at the system layer; each route receives its own silhouette and material treatment |
| Interior ownership | Existing route SFC SCSS continues to own journal, desk, workbench, shelves, ledger, album, and gratitude-wall sections |
| Social labels | `SocialDock.vue` provides visible text; `_polish.scss` keeps the desktop icon-only default; the Home phone composition reveals the labels |
| Mobile navigation | Flat eight-room directory in `SiteHeader.vue`; the desktop primary/More hierarchy is unchanged |
| Resources | Category jump navigation removed; all shelves, records, disclosures, and stable section IDs retained |
| Accessibility | One H1 per document, no horizontal overflow in the observed matrix, touch-sized menu controls, focus return, and existing reduced-motion behavior |

No route, dependency, approved copy, external destination, artwork record, canon claim, or MPA behavior changed.

## Observed validation

Browser review covered all 11 HTML documents at `320×844`, `390×844`, `430×932`, `667×375`, and `768×1024` CSS pixels. Every route exposed exactly one H1 and no horizontal overflow. A separate `390×844` pass with the document root text size set to 200% produced the same result across all 11 documents.

Interaction review at `390×844` confirmed all eight mobile menu destinations, Escape closure, and focus return to the menu trigger. The Haven doorway progressed through all three knocks, revealed the Discord action only in the open state, and returned to the first-knock state with focus restored after reset. Home was also reviewed at `1363×936`; no desktop overflow or opening-composition regression was observed. Meet Nari and Resources were inspected beyond their openings to confirm the journal and shelf treatments remain distinct.

`npm run check` passes lint, strict type checking, 65 Vitest checks across 14 files, the production build, asset/budget validation, and direct preview verification for all 11 documents. Shared JS plus CSS is 70.97 KB gzip against the 120 KB budget. The largest route CSS remains Haven at 5.33 KB against 12 KB, and the largest combined route graph is Haven at 82.62 KB. Preview validation covers 137 essential identity/environment assets and all 27 supplied Prinny designs.

## Remaining release work

This is review evidence, not production clearance. The environment did not provide a physical Pixel 9, native browser zoom telemetry, a named screen reader, measured contrast tooling, or the production host. Those checks, content/rights closure, and client approval remain pending under the existing release contract.

## Rollback

Revert the focused mobile-overhaul commit. The change is limited to the final phone stylesheet, the mobile directory/social-label markup, their source contracts, and this documentation; it requires no data migration or asset rollback.
