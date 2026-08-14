# NariNuna — Implementation Handoff

**Audience:** Sol High or any future builder taking the next implementation pass  
**Repository:** Private `SomberKrow/NariNuna`  
**Active branch:** `agent/build-nari-haven`  
**Implementation snapshot described:** `b65e1c5a6da5a35f4f4f5969465c13f32f277912`  
**Release state:** Strong implemented foundation; public production release blocked

## Mission

Finish Nari Nuna's Haven as a distinctive, rights-cleared, factual, privacy-safe public home for streams, self-taught nail-art learning, found-family community, stories, resources, collaborations, and zero-pressure support.

The next pass is not a rebuild. The foundation already reconciles a true Vite MPA with Vue Router, shared Vue composition, three persistent atmospheres, responsive local imagery, content contracts, interaction states, tests, CI, security headers, and this documentation system.

Your job is to replace honest holds with approved truth and final art without flattening the Haven into a generic creator template.

## Read order

1. [`README.md`](README.md) in this directory for the work-specific route.
2. [`00_PROJECT_SOURCE_OF_TRUTH.md`](00_PROJECT_SOURCE_OF_TRUTH.md).
3. [`17_CURRENT_STATE_AUDIT.md`](17_CURRENT_STATE_AUDIT.md).
4. [`06_ASSET_MANIFEST_AND_ART_PIPELINE.md`](06_ASSET_MANIFEST_AND_ART_PIPELINE.md) before touching media.
5. [`03_PAGE_BY_PAGE_EXPERIENCE_SPEC.md`](03_PAGE_BY_PAGE_EXPERIENCE_SPEC.md).
6. [`07_TECHNICAL_ARCHITECTURE.md`](07_TECHNICAL_ARCHITECTURE.md).
7. [`10_ACCESSIBILITY_PERFORMANCE_PRIVACY_SECURITY.md`](10_ACCESSIBILITY_PERFORMANCE_PRIVACY_SECURITY.md).
8. [`12_QA_ACCEPTANCE_CRITERIA.md`](12_QA_ACCEPTANCE_CRITERIA.md).
9. [`21_AI_ASSISTED_WORKFLOW.md`](21_AI_ASSISTED_WORKFLOW.md) and specialist docs for the task.

If the requested change has no authorizing contract, stop and record the decision instead of inventing product direction in code.

## Current implementation

- Node.js 22.13+ and npm lockfile.
- Vue 3.5.x, TypeScript 5.9.x, Vite 8.2.x, Vue Router 5.2.x.
- SCSS design layers, semantic theme tokens, Motion for Vue, Lucide icons.
- Eleven real HTML documents.
- Shared Vue entry and lazy page modules.
- Ordinary anchor navigation between top-level documents.
- Pre-paint Nari/Dark/Light theme selection with local persistence.
- Responsive Haven, Ghostie, and Nail Studio placeholder derivatives.
- Home, Meet Nari, Streams, Nail Studio, Haven, Resources, Work, Support, Stories, secret, and 404 views.
- Vitest content invariants, output validator, ESLint/typecheck/build scripts, GitHub Actions.
- Static host headers baseline and no backend/analytics/forms/embeds.

The previous implementation record states that `npm run check` passed on 2026-08-13 with four tests and eleven built documents. Re-run it; do not repeat that historical result as current evidence.

## Locked architecture

Each route has a real HTML entry in Vite's MPA input. Every entry loads `/src/main.ts`; Vue Router matches the current location and lazy-loads its page module. Header links are normal anchors, not global `RouterLink` navigation. `SiteShell` owns shared landmarks; the secret route bypasses it through route metadata. `theme-boot.js` runs before Vue. Content is reviewed local data. The client contains no trusted secret boundary.

Do not:

- collapse the project into an SPA fallback;
- add a second scaffold, React/Next, Tailwind, or a UI framework;
- replace npm/lockfile casually;
- duplicate shell markup per document;
- add a CMS/backend/form/analytics/embed without an approved architecture and privacy design;
- put secrets in `VITE_*` or client code.

## Locked product direction

- One Haven, one Nari identity, multiple rooms.
- Public-safe line: “Nari, your chaotic big-sister VTuber.”
- Late-fall sleepover refuge: plum, lavender, cocoa, cream, ember, sparse emerald.
- Nari/Dark/Light are the same Haven at different hours.
- Streams, Nail Studio, and Haven are equal primary pillars.
- Discord appears after values.
- Support is optional and grants no access/ownership/obligation.
- Professional content is clear without invented numbers or corporate cosplay.
- No autoplay, feed scrape, surprise adult content, or unlicensed franchise art.
- Mobile begins at 320px; reduced motion, keyboard parity, visible focus, and WCAG 2.2 AA target are mandatory.

## Critical blockers

| Blocker | Safe current state | Evidence needed to close |
|---|---|---|
| CatDog ↔ Grim Reaper canon | Neutral big-sister copy and visible lore hold | Nari-approved canonical wording |
| Character/model art | Original Ghostie placeholder | Current asset/version and exact rights/credit record |
| Official Ghostie/emotes/logo | Labelled project placeholders | Site/local-host/derivative/animation permission |
| Nail gallery/education | Environment + honest empty gallery | Approved originals, labels, rights, privacy/EXIF and scope review |
| Discord invite | Candidate link; reverify or hide | Release-time intended-guild verification |
| Business contact/media kit/metrics | Public Linktree/X; no form/numbers | Explicit public contact and first-party records |
| Stories/resources/schedule/affiliates | Curating/no-schedule state | Per-record provenance, approval, expiry, disclosure |
| Host/domain/legal/license | Portable static output; collect nothing | Owner/provider decisions and deployment evidence |

## Actual next implementation order

1. **Resolve identity and permissions.** Record Nari's wording and exact art rights.
2. **Ingest canonical visual families.** Preserve masters, hash, strip public metadata, create derivatives, add alt/credit, test all themes/crops.
3. **Finish flagship pages.** Meet Nari canon/render and Nail Studio real gallery/education.
4. **Finish operational content.** Discord, contact/media kit/metrics, approved resources/disclosures, support methods, stories, schedule only if maintainable.
5. **Run final mobile/accessibility/performance pass.** Use final content and art; capture actual evidence.
6. **Choose and configure host/domain.** Direct routes, 404, headers, caches, canonical/social metadata, preview protection, rollback.
7. **Perform production release review.** Rights, privacy, secrets, dependencies, links, performance, screen reader, rollback.

## Asset rules

No Nari-supplied production art existed at the snapshot. Current Haven environment, Ghostie, and Nail Studio environment are original noncanonical project placeholders. No model, commissioned banner, emote, panel, logo, or nail photo was copied/hotlinked. Three YouTube thumbnails support outbound Shorts only.

For every incoming asset:

- complete `templates/ASSET_INTAKE_RECORD.md`;
- inspect the exact file, version, rights, credit, privacy, and metadata;
- preserve the source master;
- create only permitted non-upscaled derivatives;
- update the manifest, page spec, alt/caption, tests/evidence;
- remove placeholder wording only after canonical truth is implemented.

Public visibility and artist credit do not establish website permission.

## Content rules

- Use approval/provenance records; no lore, metrics, schedule, services, contact, testimonials, partnerships, or safety claims by inference.
- Keep recurring content typed and removable.
- Distinguish current implemented interfaces from target editorial schemas.
- Adult media is opt-in and labelled.
- Private identity, location, family detail, messages, community handles, and raw photo metadata stay out.
- Unknown is an honest hold, not an invitation for filler.

## Validation workflow

```bash
npm ci
npm run lint
npm run typecheck
npm run test
npm run build
npm run check
npm run preview
```

`npm run check` is the required automated gate. Then direct-load affected documents and complete the relevant manual matrix:

- Nari, Dark, Light;
- 320, 390, 768, wide desktop;
- keyboard, visible focus, reduced motion;
- 200% text and 400% page zoom;
- screen-reader smoke path;
- image/remote-link/invite failure states;
- network and performance budgets;
- rights/privacy/metadata review.

Record evidence using `templates/RELEASE_EVIDENCE_RECORD.md` or the focused PR checklist. Do not fabricate output.

## File ownership map

| Concern | Primary owner |
|---|---|
| MPA entries | `vite.config.ts`, route HTML documents |
| URL resolution | `src/router/index.ts` |
| Shared shell | `src/components/layout` |
| Page composition | `src/pages` |
| Reviewed records | `src/data` and `src/types` |
| Theme state | `public/theme-boot.js`, `useTheme.ts`, `_tokens.scss` |
| Shared visual language | `src/styles` |
| Media masters/derivatives | `src/assets/source`, `public/media`, doc `06` |
| Output contract | `scripts/validate-build.mjs` |
| Content invariants | `tests/content-contract.test.ts` |
| CI/review gate | `.github` |
| Product/operating truth | `docs` |

## Definition of complete

Production-ready means:

- Nari-approved, internally coherent identity;
- rights-cleared and credited final assets;
- authentic flagship nail content or an owner-approved launch scope;
- factual, privacy-safe, maintainable content;
- host-verified direct routes, headers, caches, metadata, and rollback;
- final mobile/keyboard/screen-reader/zoom/contrast/reduced-motion evidence;
- performance and network budgets met;
- every critical QA item passed on the release commit.

A successful build alone is not completion.

## Final directive

Inspect before editing. Preserve the true MPA and working behaviors. Use approved records as source truth. Make the smallest coherent change. Update code, tests, docs, and evidence together. Report only what you actually observed.
