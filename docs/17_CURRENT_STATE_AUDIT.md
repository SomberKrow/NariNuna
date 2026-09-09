# Current-State Audit

> 2026-09-09 shared-journey polish: `kiva/journey-polish-desktop` refines the passage on all nine ordinary routes and extends it to desktop/tablet. The mobile directory also gains viewport/safe-area polish and desktop-resize state cleanup. The automated gate passes; fresh rendered QA is blocked by browser access. See the latest evidence in [document 35](35_MOBILE_FIRST_OVERHAUL.md).

> 2026-09-07 implementation delta: [integrated visual refinement](34_DISTINCTIVE_UI_REFINEMENT.md) records current layouts, style ownership, content disclosures, and observed QA. Earlier implementation descriptions below are historical where superseded; product and release requirements remain in force.

> 2026-09-08 refinement delta: the current stacked review branch strengthens the physical and editorial hierarchy of all ordinary content rooms, fixes the PR #12 keyed-action focus risk, pairs Resources shelf presentation with stable IDs, uses the existing demo layout field, and extends build accounting with route CSS and combined graph reporting. Automated evidence and current limitations are recorded in document 34.

> 2026-09-09 mobile delta: the client-review phone experience now gives each of the nine ordinary routes a different first-screen silhouette, reveals text labels for the Home social directory, uses a plain eight-room mobile menu, preserves route-specific interiors, and continues directly into the Resources shelves. Desktop remains unchanged. Validation and limitations are recorded in [document 35](35_MOBILE_FIRST_OVERHAUL.md).

> 2026-09-09 mobile refinement delta: the follow-up branch preserves those compositions while increasing important Home/Haven control text, enforcing 44–48px targets, containing Tab focus inside the expanded mobile menu, and keeping Escape focus return. Evidence remains in [document 35](35_MOBILE_FIRST_OVERHAUL.md).

> 2026-09-09 connected-journey delta: PR #17 now joins the nine ordinary mobile rooms with a chapter-ordered previous/next passage, makes the expanded menu read as a room directory with existing notes, and progressively enhances real document changes with reduced-motion-safe transitions. The 404 and hidden room remain outside the journey. Evidence is recorded in [document 35](35_MOBILE_FIRST_OVERHAUL.md).

**Repository:** `SomberKrow/NariNuna`  
**Historical branch audited:** `agent/build-nari-haven`
**Implementation snapshot:** `b65e1c5a6da5a35f4f4f5969465c13f32f277912`  
**Audit date:** 2026-08-13  
**Evidence type:** Repository/code inspection plus historical validation records; final production/manual evidence remains pending

This audit separates confirmed implementation, historical evidence, product blockers, and recommendations. It is the starting point for engineering work; it does not outrank `00_PROJECT_SOURCE_OF_TRUTH.md`.

Current GitHub state observed on 2026-09-09: PRs #16 and #17 are merged into `main`. `kiva/journey-polish-desktop` carries the shared journey follow-up. The repository remains public. Historical branch/status statements below are dated evidence rather than current operating instructions.

## 2026-09-02 environmental-continuity delta

The Phase B client-feedback branch now extends the Haven's physical language below each chapter opening without adding imagery, dependencies, content, or routes. Eight ordinary content routes share one restrained inset-material primitive while selecting a room-specific journal, broadcast-desk, workbench, rug, shelving, correspondence, album, or gratitude-wall rhythm. Haven's material darkens toward the existing doorway; Home is intentionally unchanged because it already remains inside one illustrated environment. All material layers are decorative CSS and preserve semantic reading order, focus behavior, and reduced-motion equivalence.

## 2026-09-01 composition and navigation delta

The active client-feedback branch now prioritizes Meet Nari, Streams, Haven, and Work in the visible header; the Nari brand remains the Home link, while Resources, Nails, Story Time, and Support appear in the native More disclosure. Public URLs and the true MPA route registry are unchanged. Home, Meet Nari, and Streams retain their approved content and artwork while using more page-specific visual rhythm: destination imagery returns to the compact Home room rail where width permits, Meet Nari uses an asymmetrical identity spread, Twitch leads the Streams platform hierarchy, and the existing media cards form a varied editorial shelf. The final face-safe layer remains authoritative for hero crops.

The second composition pass applies the same principle without reusing one universal layout: Nail Studio, Haven, Resources, Work With Nari, Story Time, and Support now own route-specific secondary-content rhythms instead of inheriting equal-card grids. Existing truth and empty-state boundaries remain explicit, including the pending real nail portfolio, demonstration-only Resources content, public-link professional contact fallback, curated Story Time selection, and non-entitlement support language. No new content, route, asset, dependency, integration, or product behavior entered with the pass.

## 2026-08-23 owner-directed implementation delta

Following owner direction, the current private review redesign retains the actual supplied Nari model and portrait alongside eight bespoke room paintings, including seven integrated model-faithful Nari appearances, dedicated character-inclusive Home and Meet Nari compositions without standalone overlays, five painted Ghosties, eight illustrated chapter postcards, three time-of-day Home scenes, regenerated Nari app icons, and eight route-specific social-preview compositions. Supplied cozy character artwork, 12 supplied static emote derivatives, and all 27 supplied original Prinny designs remain intact. Shared artwork is centralized in `src/data/artwork.ts`; supplied Prinnies remain separated from unapproved canon records in `src/data/prinnyCult.ts`; `tests/artwork-contract.test.ts` verifies original and illustrated identity, distinct integrated Home/Meet scenes, local assets, and the 27-design capacity.

The HTML documents include route-specific Open Graph/Twitter painted previews except for deliberately non-indexable system/secret pages. Home is an asymmetrical editorial single desktop viewport; mobile retains natural scrolling. Owner-authorized Nari artwork is documented as a supplied-model-derived reillustration, never misrepresented as untouched original artwork. No fake nail work, schedule, metric, inbox, invented canon, public-reference model substitute, or generated Prinny replacement was introduced. Statements below describing unavailable supplied artwork are the 2026-08-13 historical baseline. Public model-derivative permission, original artist approval/credit, franchise review, Nari approval, contact decisions, and manual QA remain blocked/pending.

## Observed implementation

| Concern | Current state |
|---|---|
| Application | Vue 3.5, Composition API, `<script setup lang="ts">` |
| Language | Strict TypeScript |
| Build | Vite 8 true MPA with eleven HTML inputs |
| Routing | Vue Router 5; ordinary anchors for top-level document navigation |
| Styling | Layered SCSS system with semantic CSS atmosphere tokens |
| Themes | Proposed Phase A client-review demo exposes Nari only; no selector or persisted preference runtime |
| Motion | Motion for Vue for Ghostie; CSS transitions for small states |
| Icons | Tree-shaken Lucide Vue imports |
| Content | Local TypeScript records plus page-local static composition |
| Media | Local responsive WebP project placeholders; three remote YouTube thumbnails |
| Tests | Vitest content invariants + custom eleven-document validator |
| Quality | ESLint, `vue-tsc`, test, build through `npm run check` |
| CI | GitHub Actions on pull request and pushes to main |
| Security | Static header baseline, no backend/secrets/forms/analytics/embeds |
| Hosting | Not selected; output intended for compatible static host |

## Strengths to preserve

- Real MPA/direct-document architecture without duplicating the Vue shell.
- Small, understandable dependency surface.
- Strict TypeScript and focused local data modules.
- Route-level lazy modules.
- Deterministic Nari atmosphere metadata across direct document navigation in the proposed Phase A demo.
- Semantic shell, skip link, visible focus, native controls, and reduced-motion foundation.
- Honest empty states instead of fake schedule, gallery, metrics, contact form, or resources.
- Original local placeholder art with explicit noncanonical labels.
- No copied Nari/platform/franchise art in the project asset path.
- No third-party script, iframe, autoplay, analytics, or client secret.
- Distinctive Haven language and progressive community entry.
- Clear static build and CI gate.

## Confirmed implementation limitations

### Content contracts are uneven

Navigation, socials, media, resource categories, community values, and identity pillars are centralized. Much page copy and collaboration-fit data is still page-local; the unused Home gateway data was removed. The implemented `MediaMoment` type lacks explicit publish state/provenance objects documented in the target schemas.

**Direction:** Migrate only when real approved content arrives. Do not churn static copy into a generic CMS-shaped schema without an editorial need.

### Automated tests cover a narrow slice

Current four tests protect route uniqueness/shape, HTTPS social links, community/support URL protocol, and the three selected Shorts. They do not yet prove:

- equality across Vite/router/validator registries;
- theme boot/composable synchronization;
- new-tab rel behavior;
- all public claims/asset records;
- responsive/accessibility interaction behavior;
- image metadata/budget contracts;
- target publish-state filtering.

**Direction:** Add invariants alongside each real content/system migration; do not pretend unit tests replace manual QA.

### Header/mobile focus behavior needs final review

The menu exposes expanded/controls state, closes on Escape/selection, and locks background scroll. Focus containment and explicit return are not implemented/documented as passing.

**Direction:** Test with keyboard and screen reader at final mobile layout, then implement only what the observed interaction requires.

### Placeholder assets are structurally strong but noncanonical

The current Haven, Ghostie, Nail Studio, and icons establish the pipeline and visual world but are not Nari-supplied/official. The largest served environment derivative shares the source blob, and generated media filenames are not content-hashed.

**Direction:** Preserve the pipeline, ingest exact rights records, version canonical replacements, and re-test caching/crops/contrast.

### Remote thumbnails are a deliberate exception

Three `i.ytimg.com` images load without player code and use no-referrer. They still create a request to a third party and can fail/change.

**Direction:** Keep text fallbacks, reapprove the final selection, and use local rights-cleared card art if the remote strategy becomes inappropriate.

### Provider behavior is unverified

`public/_headers` expresses intent but does not prove emitted headers, HSTS, routing, 404 status, cache behavior, or rollback. Root-relative paths assume domain-root deployment.

**Direction:** Choose a provider/domain and complete the deployment runbook rather than adding speculative adapters.

## Product/content blockers

| Blocker | Current implementation response | Required next evidence |
|---|---|---|
| CatDog/Grim Reaper conflict | Neutral identity + lore hold | Nari canonical wording |
| Character/model rights | Original Ghostie portrait hold | Current art/version and usage record |
| Official Ghostie/logo/emotes | Project placeholder set | Rights/credit/animation terms |
| Nail portfolio/education | Empty gallery + environment | Approved originals/labels/scope/privacy |
| Discord code | Candidate constant | Intended-guild release verification |
| Business contact/media kit/metrics | Linktree/X hold; no numbers/form | Approved public route and snapshots |
| Stories/resources/schedule | Honest future/curating states | Approved records and maintenance owner |
| Host/domain/legal/license | Portable static output | Owner/provider decisions and release record |

## Visual risks to review with final art

- Current editorial `h1` scale can become oversized if final art lacks negative space.
- Hero veils and raw overlay colors are tuned to placeholder imagery.
- Mobile hero `object-position` values are asset-specific.
- The fixed Ghostie control needs final safe-area/zoom review.
- Gateway/pillar asymmetry must remain intentional rather than looking broken at intermediate widths.
- Theme differences are currently strong in tokens/light but need final environment-art coherence.
- Nail detail may require image-budget exceptions backed by visual evidence.

## Keep, improve, replace, decide

| System | Direction |
|---|---|
| Vue, TypeScript, Vite, Router, SCSS | Keep |
| True MPA/document navigation | Keep |
| Theme boot and semantic tokens | Keep; synchronize and final-contrast review |
| Motion for Vue | Keep for isolated behavior; do not expand casually |
| Lucide | Keep; no second icon pack |
| Current placeholder pipeline | Keep as fallback/reference; replace visual families when approved |
| Remote thumbnails | Decide per final media/rights/privacy review |
| Local typed content | Keep and expand per real content family |
| Four current Vitest contracts | Keep and strengthen |
| Page-local static copy/data | Keep where genuinely one-off; migrate repeated/volatile content |
| Current Discord constant | Reverify or remove at release |
| Host portability | Keep until provider decision |
| `style-src 'unsafe-inline'` | Review; do not expand to script |
| Focus containment/return | Decide from final manual testing |

## 2026-09-02 Phase C client-review implementation

The ordinary chapters now expose one route-specific presentation device on top of the shared Phase B material system: journal fragments, broadcast desk, measured workbench, doorway path, shelves, correspondence ledger, archive album, and quiet gratitude wall. Home uses its face-safe painted arrival without the retired gateway rail. These devices are CSS-led and decorative; they add no dependencies, routes, or interaction requirements. See `docs/30_PAGE_SIGNATURE_DEVICES.md`. Current validation evidence belongs to the relevant branch and must not be inferred from the historical snapshot below.

## 2026-09-02 Phase D client-review implementation

Noninteractive chapter layouts now use open editorial structures instead of repeating full card chrome. Route pacing deliberately ranges from compact Streams/Resources through reflective Meet Nari/Support, while links and controls retain visible boundaries and focus behavior. See `docs/31_DE_CARDIFICATION_AND_RHYTHM.md`. No content, route, asset, dependency, or interaction was added; validation evidence belongs to the Phase D commit.

## 2026-09-02 Phase E validation and stabilization

The clean-install/full repository gate passes after the environmental roadmap, and the shared header now explicitly closes both the mobile panel and native More disclosure through its existing Escape/link-selection path. Automated validation covers all eleven output documents and essential local assets; the deployed human viewport, zoom, screen-reader, and contrast matrix remains pending and is not represented as passed. See `docs/32_PHASE_E_VALIDATION.md`.

## Recorded commands

The repository defines:

```bash
npm ci
npm run lint
npm run typecheck
npm run test
npm run build
npm run check
npm run preview
```

Historical records state `npm run check` passed at the audited implementation snapshot. This documentation overhaul does not substitute for rerunning the repository gate after integration.

## Recommended first implementation action

Do not refactor architecture first. Resolve the canonical identity and asset-rights packet, then integrate one complete vertical slice—current Nari portrait plus Meet Nari/Home placement—through source preservation, responsive derivatives, alt/credit, themes/mobile, tests, and documentation. That proves the production pipeline with real material before scaling to the nail gallery and remaining asset families.

## 2026-09-05 responsive artwork delta

PR #9 now implements the delivery slice from the 5 September performance review: 121 responsive WebP copies, nine route hero preloads, content-addressed cache headers, deferred Haven interior, a stale-chunk reload guard, and enforced asset/bundle budgets. The six-role desktop Home image selection is 184.94 KB versus 1,369.58 KB in the prior review. Local full gate: 10 test files / 56 tests, 11 documents/routes. This is file-byte/build evidence; no new Lighthouse or field metric is claimed. See [full evidence and limitations](33_RESPONSIVE_ARTWORK_PERFORMANCE.md).

## 2026-09-06 maintenance baseline and implementation

Reviewed `main` at `21b6fbab22cd660ffcfcde969b3ffe10fed2d390`; clean installation and baseline gate passed (56 tests, 11 direct HTTP documents). Before editing, media totals were: scenes 6,141,346 B; responsive derivatives 6,038,214 B; storybook social pairs 3,727,575 B; community Ghosties 3,572,614 B; postcards 1,385,714 B; legacy social PNGs 894,164 B; legacy generated derivatives 554,176 B. Image delivery markup was repeated across page images, Ghosties, media fallback and doorway. Document lists were separately maintained in Vite, build/performance validators, preloads and preview verification. Haven's actual current behavior had three synchronous steps and one observer, with no timers to extract.

The branch now provides `ResponsiveArtwork`, `useHavenDoor`, canonical `projectPages.json`, a reference-aware non-destructive `audit:assets` command, and source preservation tests. All 121 responsive images regenerate unchanged. See docs 33 for comparable before/after measurements, observed checks, and the remaining browser block.

### Current CSS editing map

| Owner | Responsibility |
|---|---|
| `_tokens.scss`, `_base.scss` | Semantic tokens and document defaults |
| `_components.scss` | Shared primitives |
| `_pages.scss`, `_responsive.scss` | Earlier page structures and responsive defaults |
| `_world.scss`, `_storybook.scss`, `_polish.scss` | Remaining overlapping illustrated layout/composition; consolidation still pending browser evidence |
| `_chapters.scss` | Home rail, Work directory, Resources demonstration layouts, room materials, editorial rhythm and route signatures |
| `_artwork-delivery.scss` | Matching CSS hero media bands |
| `_face-safe.scss` | Desktop/tablet hero focus/copy-lane geometry |
| `_mobile-first.scss` | Final phone-only chapter composition and narrow-width density authority |
| `HavenDoor.vue` scoped style | Door presentation, transitions and reduced-motion treatment |

The change removes 172 superseded declarations while retaining surviving order and matching 3,088 final selector/context/property values. It does not claim all historical cascade debt is resolved. Full browser visual QA and the remaining three historical composition layers are the concrete unfinished handoff work. Asset audit still identifies 124 unreferenced-review files (775,146 B); dynamic/provenance uncertainty is left visible instead of used as deletion proof. The original 27-design Prinny collection and identity assets remain retained.
