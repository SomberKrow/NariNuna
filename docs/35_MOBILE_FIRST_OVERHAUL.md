# Mobile-first experience overhaul

**Status:** PR #16 `MERGED`; PR #17 experiential follow-up `IMPLEMENTED` for client review; production clearance remains blocked
**Date:** 2026-09-09
**Branches:** `kiva/mobile-first-overhaul`; `kiva/mobile-refinement-pass-2`
**Scope:** Phone composition, compact navigation, narrow-width reflow, Resources wayfinding, and room-to-room continuity

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

## Continuation refinement

The follow-up pass keeps the nine silhouettes intact and resolves the remaining small-control issues found during visual review:

- Home social labels now render at 13px without truncation; the primary Haven action is 14px with a 48px target.
- The open mobile directory contains Tab and Shift+Tab focus between its close control, eight room links, and Twitch link. Escape still closes the panel and returns focus to the menu control.
- The current room gains an inset gold marker in addition to its existing `aria-current` state.
- Haven knock count, progress labels, and stage copy now render at 12–13px on phones.
- The optional floorboard reveal and hidden-room return link use 14px interactive text and at least 44px targets.

## Connected journey refinement

The next client-review pass turns the separate rooms into a continuous mobile visit without replacing their individual compositions:

- Every ordinary public route ends with a compact, doorway-shaped passage showing the current room's place in the nine-stop journey.
- Large previous/next-room anchors follow the site's actual chapter order: Home, Meet Nari, Streams, Nail Studio, Haven, Resources, Work With Nari, Story Time, and Support. Support returns visitors to Home.
- The shared passage reuses the existing room notes rather than adding lore or promotional copy. Those notes now live in `src/data/journey.ts`, which is also the single ordered journey registry.
- The expanded phone menu reads as a Haven directory: each room keeps a clear destination label and gains its existing one-line room note. The panel fills the available short-screen height and remains scrollable.
- Same-origin document changes use a short progressive-enhancement transition. Reduced-motion preference disables cross-document navigation animation, and the 404 and hidden Prinny routes do not render the journey passage.

## Implementation contract

| Concern | Implementation |
|---|---|
| Phone authority | `src/styles/_mobile-first.scss`, imported last from `main.scss` |
| Breakpoint | Phone rules apply below `48rem`; existing desktop/tablet composition remains unchanged |
| Opening ownership | Shared spacing/type/control rules stop at the system layer; each route receives its own silhouette and material treatment |
| Interior ownership | Existing route SFC SCSS continues to own journal, desk, workbench, shelves, ledger, album, and gratitude-wall sections |
| Social labels | `SocialDock.vue` provides visible text; `_polish.scss` keeps the desktop icon-only default; the Home phone composition reveals the labels |
| Mobile navigation | Flat eight-room directory in `SiteHeader.vue`; the desktop primary/More hierarchy is unchanged |
| Room continuity | `RoomPassage.vue` and `src/data/journey.ts` connect the nine ordinary public rooms in chapter order below `48rem` |
| Resources | Category jump navigation removed; all shelves, records, disclosures, and stable section IDs retained |
| Accessibility | One H1 per document, no horizontal overflow in the observed matrix, touch-sized menu controls, focus return, and existing reduced-motion behavior |

No route, dependency, approved copy, external destination, artwork record, canon claim, or MPA behavior changed.

## Observed validation

Browser review covered all 11 HTML documents at `320×844`, `390×844`, `430×932`, `667×375`, and `768×1024` CSS pixels. Every route exposed exactly one H1 and no horizontal overflow. A separate `390×844` pass with the document root text size set to 200% produced the same result across all 11 documents.

Interaction review at `390×844` confirmed all eight mobile menu destinations, Tab/Shift+Tab containment, Escape closure, and focus return to the menu trigger. The Haven doorway progressed through all three knocks, revealed the Discord action only in the open state, and returned to the first-knock state with focus restored after reset. Home was also reviewed at `1363×936`; no desktop overflow or opening-composition regression was observed. Meet Nari and Resources were inspected beyond their openings to confirm the journal and shelf treatments remain distinct.

The connected-journey browser review covered all nine ordinary routes at `320×844` and `390×844`. Every route rendered one H1, its correct progress state, 52–77px passage links, and no horizontal overflow. All nine were also rechecked at `390×844` with a 200% root text size; no passage or page overflow appeared. The expanded directory fit a `390×667` short screen, retained internal scrolling, and kept all room targets at roughly 80px. Tab/Shift+Tab containment, Escape closure/focus return, real document navigation from Home to Meet Nari, 404/Prinny exclusion, and desktop passage suppression at 1348px were observed.

`npm run check` passes lint, strict type checking, 68 Vitest checks across 14 files, the production build, asset/budget validation, and direct preview verification for all 11 documents. Shared JS plus CSS is 72.80 KB gzip against the 120 KB budget. The largest route CSS remains Haven at 5.36 KB against 12 KB, and the largest combined route graph is Haven at 84.17 KB. Preview validation covers 137 essential identity/environment assets and all 27 supplied Prinny designs.

## Remaining release work

This is review evidence, not production clearance. The environment did not provide a physical Pixel 9, native browser zoom telemetry, a named screen reader, measured contrast tooling, or the production host. Those checks, content/rights closure, and client approval remain pending under the existing release contract.

## Rollback

Revert the focused mobile-overhaul or experiential follow-up commit. The connected-journey layer is isolated to `RoomPassage.vue`, `src/data/journey.ts`, the shell/header/footer wiring, the progressive transition rules, tests, and this documentation; it requires no data migration or asset rollback.
