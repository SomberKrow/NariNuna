# Preservation-first size maintenance

**Date:** 11 September 2026. **Branch:** `kiva/nari-size-maintenance`.
**Baseline:** main `8c7fe67b91882f7379ab762d24c34fbeae7e4ffc`, merged PR #20; remote main was checked before implementation.
**State:** implemented and automated checks passed; browser-dependent acceptance remains pending. Review delivery does not authorize merge or deployment.

## Result

Shared browser JS/CSS falls by **7,466 bytes gzip (10.25%)**, from **72,859 to 65,393 bytes**. The full artwork provenance stays in the repository/tooling; browser selection uses a compact projection. All existing raster bytes, image crops, responsive candidates, public content and ordinary/hidden route contracts remain intact.

The local source tree grows because the requested explanatory comments, second generated manifest and auditable ownership/asset records outweigh source cleanup. This is a measured browser delivery improvement, not a claim that Git history or the total checkout became smaller. The operational README is 73.70% smaller; detailed owners remain linked rather than duplicated there.

## Exact measurements

Bytes are file lengths; KB elsewhere means 1,000 bytes. Graph gzip uses the existing validator’s Node default `gzipSync` and unique emitted files. Rows overlap and must not be added together. Tracked totals include the new records and exclude dependencies, caches, `.git` and `dist`.

| Measurement | Before bytes | After bytes | Change |
| --- | ---: | ---: | ---: |
| Tracked working tree including records | 28,629,620 | 28,715,192 | +85,572 |
| Public directory | 12,297,702 | 12,299,954 | +2,252 |
| Production dist | 12,698,945 | 12,677,238 | -21,707 |
| Shared JS + CSS, Node gzip | 72,859 | 65,393 | -7,466 |
| Root README | 43,194 | 11,358 | -31,836 |

Public bytes rise slightly from concise SVG/host-rule comments. Production output still shrinks after that overhead. All eight social JPEGs remain **1,969,849 bytes** total; the 121 responsive WebPs remain **6,038,214 bytes**. Neither whole family is an individual visitor’s initial download. No cold/warm network transfer, Lighthouse score or field Core Web Vitals were measured.

### Per-route graph comparison

Each combined graph includes shared files once. Route-only JS/CSS retain their 35,000/12,000-byte ceilings; the shared ceiling remains 120,000. Tiny gzip differences can reflect content hashes and emitted scope names after source comments; rendering equivalence is checked separately.

| Route module | Before combined gzip | After combined gzip | After route JS gzip | After route CSS gzip |
| --- | ---: | ---: | ---: | ---: |
| `HavenPage` | 84,361 | 76,893 | 6,039 | 5,461 |
| `HomePage` | 75,140 | 67,675 | 2,282 | 0 |
| `MeetNariPage` | 78,588 | 71,122 | 3,861 | 1,868 |
| `NailStudioPage` | 75,747 | 68,284 | 1,888 | 1,003 |
| `NotFoundPage` | 74,055 | 66,586 | 842 | 351 |
| `PrinnyCultPage` | 74,375 | 66,909 | 916 | 600 |
| `ResourcesPage` | 76,793 | 69,328 | 2,815 | 1,120 |
| `StoriesPage` | 76,947 | 69,481 | 2,706 | 1,382 |
| `StreamsPage` | 78,292 | 70,826 | 3,716 | 1,717 |
| `SupportPage` | 75,643 | 68,178 | 1,961 | 824 |
| `WorkWithNariPage` | 76,738 | 69,271 | 2,300 | 1,578 |

## Changes and preservation proof

1. **Artwork metadata.** `prepare-responsive-artwork.py` writes the unchanged full provenance schema and compact strict-JSON runtime projection from the same result set. Only intrinsic width/height and ordered candidate URL/width/height are delivered. `artworkDelivery.ts` retains missing-key errors, width sorting, capped selection, no-upscale fallback, source-set strings, hero bands and CSS variables. Byte-budget tests read the full manifest directly. Projection equality checks the entire shape, candidate order and exact values; the performance validator rejects known provenance markers in shared JS. The full manifest is byte-identical to baseline.
2. **Bounded CSS cleanup.** A CSS parser identified and removed 59 rule groups consisting solely of selectors rooted at unmounted `cult-` classes. No Vue template or dynamically constructed source class consumes them; collection data and public assets are retained. The [removed-selector inventory](evidence/2026-09-11-maintenance/retired-selectors.md) records the affected owners. One adjacent identical selector block for doorway knock rings was merged by appending declarations in place. No specificity, breakpoint, selector scope or cross-layer ordering changed.
3. **Maintenance comments.** Responsibility, contracts, semantic regions, local state, lifecycle/focus, generator decisions, validation limitations and style ownership are explained in source. The [102-file primary inventory](38_CODE_OWNERSHIP.md) distinguishes 101 baseline files plus the new test, dormant modules, strict JSON, binary assets and all 121 SVGs. The imported SVG pack boundary is documented in `prepare-client-assets.sh`; 18 editable snapshots gain concise XML notes. No comment-per-line quota or marker-count acceptance test was introduced.
4. **Behavior corrections.** Fragment scrolling checks the current reduced-motion preference and requests `instant` instead of smooth movement when appropriate. History restoration still wins. The dormant motion helper has one listener per consumer, and its two-consumer regression proves that unmounting one leaves the other subscribed. The dormant summoner resolves its image through responsive delivery; it remains absent from the shell. These are maintenance/accessibility changes, not byte-only optimizations.
5. **Records and configuration.** The README links operational owners, outdated architecture singleton/shell/oath wording is reconciled, and asset disposition is explicit. `_headers` drops only the obsolete immutable rule for the empty generated-media family. Python generator bytecode is ignored. No dependency or lockfile changes were mixed into this work.

### Structural comparison method

The baseline `src`, scripts, tests and HTML were exported from the pinned commit into a separate temporary tree. Comparisons used the project’s installed compilers:

- Vue SFC/template compilation with one fixed scope ID and comments disabled produced identical render functions for **23 active component/page templates**. The dormant summoner is excluded because its intentionally corrected image renderer differs.
- Sass compiled baseline/current global sources. A CSS parser flattened ordered declaration records containing the complete parent selector/at-rule chain, property, value and important flag. After removing only the recorded retired cult groups from the baseline, the entire sequence matched. This covers all media/preference branches present in source without selecting a viewport.
- The same ordered-declaration comparison passed for **nine inline component/page style blocks**, including the adjacent doorway merge. External stylesheet references and style-block counts were unchanged.
- All **121 SVGs** compare identically after stripping XML comments and normalizing inter-element whitespace. Geometry, IDs, paint/filter definitions and accessible text are unchanged.
- Existing hash tests preserve relocated sources and content-addressed candidates; independent comparison confirms every public raster is byte-identical and no public URL was removed.

These are structural/compiled assertions, not screenshots or proof of physical keyboard/screen-reader behavior. The repository remains an MPA; SSR compilation here is test evidence, not a new server-rendered architecture.

## Validation

Local environment: **Node 24.19.0 / npm 11.9.0**. CI requests Node 22; remote status belongs to the PR checks.

| Check | Observed |
| --- | --- |
| Fresh `npm ci` | Passed against the existing lockfile |
| Baseline `npm run check` | Passed; 68 tests / 14 files |
| Final `npm run check` | Passed; ESLint, strict Vue/TS, **71 tests / 15 files**, build/document/performance validators |
| HTTP preview | **11** independently served documents, **137** essential asset entries, **27** supplied Prinny designs |
| Full/runtime consistency | Exact selection projection and retained full manifest passed |
| Structural comparison | 23 templates, remaining global declaration order, nine inline styles, 121 SVGs passed |
| `git diff --check` | Passed |
| Fresh full npm audit | Four affected development packages: two high, two moderate |
| Fresh production-only npm audit | Zero reported advisories |

Raw [full](evidence/2026-09-11-maintenance/npm-audit.json) and [production-only](evidence/2026-09-11-maintenance/npm-audit-production.json) audits are dated registry evidence. Findings remain open; no exploitation/zero-day claim is made.

## Deferred acceptance and optimization

Chromium was not installed. The Playwright Chromium installer exhausted its download attempts with network timeouts. Therefore the following remain **not performed**, and the complete browser acceptance definition from the handoff is not yet met:

- All eleven routes at 320/390/768/1920, with 430/1024, short-height, wide, threshold and DPR 1/2 checks as relevant.
- Menu Escape/Tab/Shift+Tab and desktop-breakpoint transitions; all three door activations, final/reset focus and failed/slow interior; floorboard and secret exits; blocked-thumbnail fallback; direct entry/refresh/history/fragments.
- Reduced-motion browser behavior, 200% text zoom, 400% reflow, screen reader, contrast and physical Pixel 9 review.
- Hero request matching, below-fold loading, priority, no original-source requests and cold/warm selected-image bytes.
- Final host headers, unknown-route status, cache revalidation, deployment continuity and rollback.

Lossy JPEG re-encoding, additional WebP/AVIF variants, candidate pruning and broader active cascade relocation/consolidation are **deferred**, not silently accepted without parity evidence. All 129 asset-audit candidates are retained with hashes and owner/reference disposition in [document 39](39_ASSET_DISPOSITION.md). No masters or protected assets were removed and no presumed percentage saving was substituted for a measurement.

## Rollback and next action

Review the focused metadata, style, behavior/comment and documentation commits independently. Use normal `git revert` if a group regresses; metadata rollback must include generator, both manifests, runtime helper and matching validators/tests together. No raster restoration or cache transition is needed because image bytes/URLs did not change. Do not reset/force-push or rewrite history.

Next: on a machine with Chromium, run `npm ci && npm run check`, serve the pinned baseline and this branch under identical browser/font/viewport/DPR settings, and complete the manual matrix above. Keep the PR draft until the relevant visual/interaction evidence is attached; merge/deploy remain separately owner-authorized.
