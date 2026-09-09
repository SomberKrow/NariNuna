# Current State Audit

**Reviewed:** 9 September 2026
**Repository:** public `SomberKrow/NariNuna`
**Baseline:** `main` at `fa83954f09938a864fd53f6a26739e50e2277970`
**Scope:** current source, lockfile, workflow, documentation, local automated checks and advisory audit

This replaces the accumulated August baseline/delta summary with a single current-main record. Historical implementation evidence remains in documents 23–35 and Git history. Product authority remains with `00_PROJECT_SOURCE_OF_TRUTH.md`; passing tests and merged code do not confer release approval.

## Current implementation

Main includes PR #18 and crop commit `45501ea`: the room passage now spans mobile, tablet and desktop; Nari-centered framing is present in the final crop layers. PR #18 is no longer an open implementation dependency for this snapshot.

| Area | Current behavior / owner |
|---|---|
| Architecture | Vue 3, strict TypeScript, Vite 8, Vue Router 5, SCSS, Motion for Vue and Lucide; npm lockfile |
| Documents | Eleven HTML entries in `pages/`; shared shell and lazy Vue modules; true document navigation |
| Registry | `src/data/projectPages.json` drives build entries and validation; explicit lazy imports remain in router |
| Atmosphere | One Nari atmosphere; no public theme selector or persisted theme preference; final client decision pending |
| Navigation | Home brand; Meet Nari, Streams, Haven, Work; More contains Resources, Nails, Story Time, Support |
| Guided path | Nine ordinary rooms in `src/data/journey.ts`; `RoomPassage.vue` supports all viewport sizes; 404 and hidden room excluded |
| Mobile menu | Described directory, Tab containment, Escape focus return, safe-area/dynamic viewport sizing, desktop-resize cleanup |
| Page layouts | Distinct journal, broadcast desk, textile charter, shelves, workbench, correspondence, album and support-note treatments |
| Haven door | Three synchronous knocks; deferred continuous interior; stable intermediate story action; final/reset focus transfer |
| Media | Shared responsive artwork component; 121 content-addressed candidates; nine hero preload sets; 27 supplied Prinny designs retained |
| Privacy | No backend, form, account, analytics or embedded player; remote YouTube thumbnails remain a network privacy exception |
| Recovery | One stale-chunk reload attempt per tab/path until successful mount; session-storage failures tolerated |
| Security | Header intent in `public/_headers`; reviewed local templates/URLs; known development dependency advisories remain open |

## Fresh observed validation

Local environment: Node **24.19.0**, npm **11.9.0**. The workflow selects Node 22; no new remote CI result or minimum-version validation is claimed here.

| Check | Observed result |
|---|---|
| `npm ci` | Passed; 247 packages installed |
| `npm run check` | Passed: lint, strict typecheck, 68 tests across 14 files, build and validators |
| `verify:preview` within check | 11 independently served HTML documents, 137 essential assets, all 27 supplied Prinny designs |
| Shared JS + CSS | 73.04 KB gzip / 120 KB ceiling |
| Haven route JS / CSS | 6.02 KB / 35 KB; 5.36 KB / 12 KB |
| Haven combined graph | 84.42 KB gzip; reported, no separate combined ceiling |
| Full dependency audit | 4 affected packages: 2 high, 2 moderate; 0 critical |
| Production dependency audit | 0 reported advisories |
| GitHub open-issue search | No open issues returned; this does not establish absence of defects or security alerts |

KB means 1,000 bytes. These are local build/HTTP checks, not rendered visual or field performance measurements. Raw dependency reports and exact findings are in [document 36](36_MAIN_SECURITY_AND_KNOWN_ISSUES.md).

## Current defects, risks and limitations

The security/issue register owns status and closure criteria. Highest priorities:

1. Resolve affected development dependency versions, then rerun both audits and the full gate. A passing build currently does not reject these advisories.
2. Confirm PR #18's final Nari crops and desktop/mobile journey with rendered viewport and keyboard review. Earlier browser QA predates those final changes.
3. Validate the real host: headers, HTML revalidation, direct routes, 404 status, atomic deployment and rollback.
4. Complete native zoom, screen reader, contrast, reduced motion, physical Pixel 9 and measured mobile performance checks.
5. Close client identity/content/rights/credit/contact/Discord/domain decisions without inventing approvals.

No new reproducible rendering or interaction defect was established during this documentation-only inspection. The JavaScript-dependent content shell, public hidden route/invite, unverified host behavior and CI hardening gaps are recorded limitations, not claims of a newly exploited site. No zero-day or active exploitation was confirmed.

## Maintenance map

| Owner | Responsibility |
|---|---|
| `src/data/` | Typed content, route registry, journey order, asset/delivery maps |
| `src/components/art/ResponsiveArtwork.vue` | Shared native picture delivery |
| `src/composables/useHavenDoor.ts` | Knock state and image eligibility |
| `src/components/haven/HavenDoor.vue` | Door rendering, focus handoff and scoped presentation |
| `src/components/layout/SiteHeader.vue` | Header/mobile menu state, keyboard and resize behavior |
| `src/styles/rooms/` | Scoped interior-room composition |
| `_world.scss`, `_storybook.scss`, `_polish.scss` | Remaining overlapping composition layers; consolidate only with visual evidence |
| `_face-safe.scss`, `_mobile-first.scss` | Final desktop/tablet focus geometry and phone composition authority |
| `scripts/`, `tests/` | Document/asset/budget/behavior checks; not an exhaustive security or accessibility audit |

Page-local copy remains appropriate for one-off content. Richer publish-state/provenance schemas are targets, not an implemented CMS. Unreferenced assets must be reviewed with `npm run audit:assets`; lack of a static reference is not deletion authority.

## Release boundary

The repository is public, including tracked source assets. “Private-review” in historical art records describes the scope of authorization, not present access restriction. Public repository visibility does not resolve the recorded rights blockers.

Nari-only final approval, identity/canon, derivative/display/franchise rights and credits, real nail work, approved resource recommendations, professional contact, canonical Discord destination, hosting/domain and final QA remain open. Reverify volatile external destinations before release. Do not merge/deploy as a side effect of a documentation review.
