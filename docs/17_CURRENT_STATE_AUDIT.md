# Current-State Audit

**Repository:** `SomberKrow/NariNuna`  
**Branch audited:** `agent/build-nari-haven`  
**Implementation snapshot:** `b65e1c5a6da5a35f4f4f5969465c13f32f277912`  
**Audit date:** 2026-08-13  
**Evidence type:** Repository/code inspection plus historical validation records; final production/manual evidence remains pending

This audit separates confirmed implementation, historical evidence, product blockers, and recommendations. It is the starting point for engineering work; it does not outrank `00_PROJECT_SOURCE_OF_TRUTH.md`.

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

Navigation, socials, media, resource categories, community values, and identity pillars are centralized. Much page copy and fit/gateway data is still page-local. The implemented `MediaMoment` type lacks explicit publish state/provenance objects documented in the target schemas.

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
