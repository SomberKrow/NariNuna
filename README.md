# Nari Nuna's Haven

A warm, true multi-page website for Nari Nuna's streams, nail-art learning, community, stories, resources, collaborations, and zero-pressure support.

> **Current implementation snapshot:** 9 September 2026, `main` at `fa83954f09938a864fd53f6a26739e50e2277970` (merged PR #18, including Nari-centered crop refinement). Nine ordinary rooms have a guided passage on mobile, tablet, and desktop. See the [current audit and issue register](docs/17_CURRENT_STATE_AUDIT.md).
> **Security snapshot:** dependency audit reports **4 affected development packages (2 high, 2 moderate)** and **0 production dependency advisories**. Published fixes are available; this documentation update does not apply them. No zero-day or active exploitation is confirmed. See [advisories, exposure, and next steps](docs/36_MAIN_SECURITY_AND_KNOWN_ISSUES.md).
> **Current visual direction:** one Nari atmosphere. The former public Nari/Dark/Light selector and persisted theme preference were removed during the client-feedback pass.  
> **Release status:** client-review implementation, **not production clearance**. Final public release remains blocked by client approval, rights/credit records, final content inputs, hosting/domain decisions, and release-grade manual QA.

This README is intentionally operational. It is meant to give another engineer enough context to clone the repository, understand the architecture, change the site without accidentally breaking the MPA or performance work, run the same quality gates, and identify what is verified versus what is still pending.

---

## Table of contents

- [Project direction](#project-direction)
- [Current implementation](#current-implementation)
- [Technology stack](#technology-stack)
- [Architecture](#architecture)
- [Routes and navigation](#routes-and-navigation)
- [Repository layout](#repository-layout)
- [Local development](#local-development)
- [Common editing map](#common-editing-map)
- [Quality gate and CI](#quality-gate-and-ci)
- [Performance contract](#performance-contract)
- [Accessibility targets](#accessibility-targets)
- [Responsive artwork pipeline](#responsive-artwork-pipeline)
- [Caching and resilience](#caching-and-resilience)
- [Security and privacy posture](#security-and-privacy-posture)
- [Content and asset truth](#content-and-asset-truth)
- [How to add or change a route](#how-to-add-or-change-a-route)
- [Deployment and release](#deployment-and-release)
- [Documentation map](#documentation-map)
- [Engineering guardrails](#engineering-guardrails)
- [Known follow-up work](#known-follow-up-work)
- [License](#license)

---

## Project direction

Nari's Haven is intended to feel like **one lived-in late-fall refuge with several rooms**, not a Linktree clone, generic VTuber template, dashboard, or card farm.

The current experience connects:

- Nari's chaotic big-sister warmth;
- streaming and gaming;
- self-taught nail-art learning;
- community values and boundaries;
- selected stories and resources;
- professional collaboration fit;
- optional support without pressure.

The product rule is simple: atmosphere should make the site more specific to Nari without making navigation, accessibility, performance, privacy, or maintenance worse.

### Current visual direction

PR #9 replaced the public three-theme experience with a **Nari-only client-review direction**. The implementation now uses one consistent Nari atmosphere and keeps accessibility focused on that presentation.

The same refinement pass also introduced:

1. **Environmental continuity** — each page continues the Haven through route-specific materials and scenery rather than falling back to generic colored sections.
2. **One signature visual device per page** — journal clips, broadcast rail, ruler/swatches, floor path, shelves, correspondence ledger, album treatment, gratitude notes, and related route-specific devices.
3. **De-cardification** — noninteractive content is allowed to breathe instead of placing every section in repeated bordered cards.
4. **Route-specific rhythm** — Streams/Resources are tighter, Nails/Work more measured, Stories more editorial, Haven progressively quieter, and Meet Nari/Support more spacious.
5. **Responsive artwork delivery** — the artwork remains visually intact while appropriately sized, hashed WebP derivatives are served to the browser.

The Nari-only direction is still a **proposal under client review**, not approved product history. Older documents that describe Nari/Dark/Light as three currently active user-selectable themes should be read as historical context unless they have been reconciled with the post-PR #9 implementation. The latest implementation supplements are `docs/28` through `docs/36`.

---

## Current implementation

The current merged implementation includes the PR #9 foundation and the maintenance, room, mobile, journey, and crop refinements through PR #18:

- a Vue/Vite **true multi-page application** with eleven real HTML documents;
- normal document navigation between top-level pages;
- Vue Router only for resolving/lazy-loading the Vue page module associated with each document;
- a Nari-only visual atmosphere;
- the current navigation hierarchy;
- bespoke route-specific environmental treatments;
- reduced repeated card chrome and more varied page rhythm;
- Nari/identity artwork, Ghosties, chapter paintings, postcards, and the retained original Prinny collection;
- the Haven three-knock doorway interaction;
- responsive content-addressed artwork candidates;
- route-specific hero preloading;
- deferred Haven interior loading;
- immutable caching for hashed artwork/assets;
- guarded stale-chunk recovery;
- automated JS/CSS and image byte budgets;
- automated route, asset, metadata, artwork, and behavior checks.

### Recent merged changes

| Change | Added or improved |
|---|---|
| [PR #9](https://github.com/SomberKrow/NariNuna/pull/9) | Client-feedback navigation, Nari-only review atmosphere, face-safe compositions, responsive delivery, hero preloads, deferred interior, caching, recovery and budgets. |
| [PR #10](https://github.com/SomberKrow/NariNuna/pull/10) | Shared `ResponsiveArtwork`, local `useHavenDoor` state, canonical `projectPages.json`, non-destructive asset auditing, preserved source/retired artwork outside the served tree and superseded-CSS removal. Recorded deployment-size reduction: 53.17%, a historical build comparison rather than loading-time evidence. |
| [PR #11](https://github.com/SomberKrow/NariNuna/pull/11) | Scoped room styles, shared reading primitives, broadcast/album media variants, labelled Resources demos, header Escape focus restoration, narrow-width corrections and rendered-content checks. |
| [PR #12](https://github.com/SomberKrow/NariNuna/pull/12) | Each knock changes lantern/threshold light, room glimpse, brass ripple and story; Arrive/Belong/Promise progress and visible prompts clarify the interaction. Reduced motion preserves immediate state and access. |
| [PR #13](https://github.com/SomberKrow/NariNuna/pull/13) | Stronger page materials and hierarchy, stable Haven story-button focus between knocks, final/reset focus transfer, paired Resources shelf IDs/art/category records, demo-density handling, route-CSS budgets and combined graph reporting. |

| [PR #14](https://github.com/SomberKrow/NariNuna/pull/14) | Operational README refresh for the earlier merged room and delivery baseline. |
| [PR #15](https://github.com/SomberKrow/NariNuna/pull/15) | Page quality pass, retired Home numbering, Work fold correction, and repaired section navigation. |
| [PR #16](https://github.com/SomberKrow/NariNuna/pull/16) | Nine distinct phone openings, labelled social links, direct Resources shelves, and enlarged-text layout refinements. |
| [PR #17](https://github.com/SomberKrow/NariNuna/pull/17) | Mobile focus containment, readable controls, described room directory, previous/next journey, and progressive document transitions. |
| [PR #18](https://github.com/SomberKrow/NariNuna/pull/18) | Guided passage on tablet/desktop, mobile safe-area and resize cleanup, and Nari-centered image framing. Fresh rendered crop/journey confirmation remains pending. |

These changes are merged into `main`. References in older documents to open PR #12 or stacked PR #13 are historical workflow snapshots, not current branch instructions. Merge status does not confer client approval or production clearance.

### Current page experiences

| Page | Implemented composition |
|---|---|
| Home | Clean illustrated arrival with verified social dock, Haven CTA, and Meet Nari path; the numbered gateway rail is retired. |
| Meet Nari | Ruled journal sheet, binding margin, bookmark, varied entry emphasis and restrained Ghostie overlap. |
| Streams | Broadcast desk with one lead clip, two supporting clips, platform links and a path to Story Time. |
| Haven | Four-point community charter on a textile/rug surface, followed by the three-knock doorway. |
| Resources | Direct illustrated shelves, stable shelf records and a closed, explicitly labelled client-demo disclosure. |
| Nails | Illustration and process notes form a workbench; real portfolio material remains on an honest hold. |
| Work | Collaboration letter with masthead, paper edges/fold, brief guidance and public-directory continuation. |
| Story Time | Bound paper album with one lead memory and two supporting entries using existing curated clips. |
| Support | Free-support messages on a ruled surface, central paper note and subordinate wishlist link. |
| Prinny / 404 | Small optional hidden room retained; restrained 404 recovery composition. Retaining 27 supplied designs does not mean an expanded cult experience is implemented. |

The repository does **not** currently contain or depend on:

- a backend;
- database;
- CMS;
- account/authentication system;
- analytics/tracking stack;
- contact form;
- runtime social-feed scraping;
- autoplay video/audio;
- embedded Twitch/YouTube player on initial load;
- fabricated metrics, schedules, testimonials, partnerships, or live state.

---

## Technology stack

| Concern | Current implementation |
|---|---|
| UI | Vue 3 |
| Language | TypeScript |
| Build | Vite 8 true MPA |
| Routing | Vue Router 5 for current-document route resolution/lazy page modules |
| Styling | SCSS + semantic CSS custom properties |
| Motion | Motion for Vue for isolated interaction animation; CSS for small states |
| Icons | Lucide Vue |
| Tests | Vitest |
| Lint | ESLint |
| Type validation | `vue-tsc` |
| Package manager | npm with committed lockfile |
| Runtime floor | Node.js `>=22.13.0` |
| CI | GitHub Actions `Quality gate` |
| Build output | static `dist/` directory |

See `package.json` and `package-lock.json` for the authoritative dependency declarations and exact resolved versions.

### Deliberate non-stack choices

Do not casually introduce Tailwind, a general component framework, a second build scaffold, a backend, CMS, analytics platform, or another router model. Any of those would materially change the maintenance and privacy contract of the project and should be an explicit architecture decision.

---

## Architecture

### True MPA, not SPA fallback

The site is intentionally a **real Vite multi-page application**.

- `pages/` is Vite's document root.
- Every public/system route has a real HTML document.
- `vite.config.ts` declares every document entry.
- Top-level navigation uses ordinary anchors and normal browser document navigation.
- Each HTML document boots the shared Vue application.
- Vue Router resolves the route and lazy-loads the matching page component.
- Production output is written to repository-level `dist/`.

This matters. Do not “simplify” the site into one `index.html` plus SPA history fallback unless the architecture is deliberately changed and the hosting, metadata, direct-load, caching, accessibility, and performance consequences are reviewed.

### Why the MPA is retained

The current structure gives the project:

- independent direct-loading documents;
- straightforward static hosting;
- route-specific metadata;
- predictable normal-document navigation;
- route-specific hero preload injection;
- a clean separation between document shell and lazily loaded page code;
- no requirement for a trusted server.

### Build target

Vite currently targets `baseline-widely-available`.

### Route-specific preloads

Nine ordinary content documents receive three mutually exclusive responsive hero preload bands. The hidden Prinny room and `404.html` intentionally receive no speculative chapter preload.

The preload source map and artwork delivery candidates must remain synchronized. `src/data/artworkDelivery.ts` and the Vite HTML transform are part of the same delivery contract.

---

## Routes and navigation

### Current header hierarchy

The visible header intentionally stays compact:

**Home** is the brand/banner link, followed by:

- Meet Nari
- Streams
- Haven
- Work
- More

The **More** disclosure contains:

- Resources
- Nails
- Story Time
- Support

The disclosure and mobile navigation both close through the shared header behavior, including Escape-key handling.

### Route contract

| Route | Vue page | Navigation responsibility |
|---|---|---|
| `/` | `src/pages/HomePage.vue` | Haven arrival, identity, social dock, Haven CTA, and Meet Nari path |
| `/meet-nari/` | `src/pages/MeetNariPage.vue` | Privacy-safe identity, values, symbols, boundaries, unresolved canon hold |
| `/streams/` | `src/pages/StreamsPage.vue` | Curated stream experience and verified platform doors |
| `/haven/` | `src/pages/HavenPage.vue` | Community values and progressive Discord discovery |
| `/work-with-nari/` | `src/pages/WorkWithNariPage.vue` | Collaboration fit, boundaries, process, approved next step |
| `/resources/` | `src/pages/ResourcesPage.vue` | Curated recommendations and disclosure structure |
| `/nail-studio/` | `src/pages/NailStudioPage.vue` | Nail-art learning and approved-gallery foundation |
| `/stories/` | `src/pages/StoriesPage.vue` | Privacy-reviewed Story Time foundation |
| `/support/` | `src/pages/SupportPage.vue` | Optional support with explicit boundaries |
| `/the-prinny-cult/` | `src/pages/PrinnyCultPage.vue` | Hidden, `noindex`, optional Easter egg |
| `/404.html` | `src/pages/NotFoundPage.vue` | Static-host recovery document |

Navigation data lives in `src/data/navigation.ts`. Header grouping behavior lives in `src/components/layout/SiteHeader.vue`.

---

## Repository layout

```text
.
├── .github/workflows/        # GitHub Actions quality gate
├── docs/                     # Product, design, architecture, QA, asset, release docs
├── pages/                    # Eleven real HTML documents / Vite MPA entries
├── public/                   # Served static assets, headers, media, manifest, icons
│   └── media/responsive/     # Content-addressed responsive WebP candidates
├── scripts/                  # Build validation, preview verification, artwork tooling
├── src/
│   ├── components/
│   │   ├── art/              # Artwork render helpers
│   │   ├── haven/            # Haven-specific interactive pieces
│   │   ├── layout/           # Header, footer, shared shell
│   │   └── ui/               # Reusable interface primitives
│   ├── assets/source/        # Preserved delivery masters and retired artwork
│   ├── composables/          # Door state and reduced-motion helpers
│   ├── data/                 # Typed content/config/artwork/social/navigation data
│   ├── pages/                # Route-level Vue page components
│   ├── router/               # Route resolution/lazy page mapping
│   ├── styles/               # SCSS system and route/environment styling
│   └── types/                # Shared TypeScript contracts
├── tests/                    # Vitest repository behavior/contract tests
├── vite.config.ts            # MPA entries + build/test configuration
├── package.json
└── package-lock.json
```

Two directories that look similar serve different purposes:

- `pages/` = actual HTML documents and metadata.
- `src/pages/` = Vue page components rendered inside those documents.

Do not collapse them together without deliberately replacing the MPA architecture.

---

## Local development

### Requirements

- Node.js 22.13 or newer
- npm
- Python 3 + Pillow with WebP support **only if regenerating responsive artwork**

### First clone

```bash
git clone https://github.com/SomberKrow/NariNuna.git
cd NariNuna
npm ci
npm run dev
```

Vite is configured to bind to `0.0.0.0` for development.

### Production build

```bash
npm run build
```

This runs TypeScript validation, Vite's production build, the HTML/build validator, and the performance validator.

### Production preview

```bash
npm run preview
```

### Full repository gate

Before proposing or merging a meaningful change:

```bash
npm ci
npm run check
```

`npm run check` is the authoritative automated local gate.

---

## Common editing map

Use this ownership map to make focused edits to content, composition, behavior and generated artwork.

| You want to change… | Start here |
|---|---|
| Page structure/copy unique to one route | matching file in `src/pages/*Page.vue` |
| Header order/labels | `src/data/navigation.ts` |
| Header grouping / More menu / mobile behavior | `src/components/layout/SiteHeader.vue` |
| Footer | `src/components/layout/SiteFooter.vue` |
| Shared typed site copy | `src/data/content.ts` |
| Social/platform destinations | `src/data/socials.ts` |
| Resource entries | `src/data/resources.ts` |
| Artwork identity/source mapping | `src/data/artwork.ts` |
| Responsive artwork candidate mapping | `src/data/artworkDelivery.ts` + `src/data/responsive-artwork.json` |
| Stream/media records | `src/data/media.ts` |
| Prinny room content | `src/data/prinnyCult.ts` |
| Easter-egg trigger data | `src/data/easterEgg.ts` |
| Shared visual tokens/layout language | `src/styles/` |
| HTML title/description/social metadata | corresponding document under `pages/` |
| Document paths, titles, social previews and hero assignments | `src/data/projectPages.json` |
| Explicit lazy route components | `src/router/routes.ts` (coverage checked against the document registry) |
| Shared responsive image rendering | `src/components/art/ResponsiveArtwork.vue` |
| Haven doorway state and deferred loading | `src/composables/useHavenDoor.ts`; copy and scoped presentation stay in `HavenDoor.vue` |
| Interior page composition | matching scoped file under `src/styles/rooms/`, imported by its Vue page |
| Shared room reading primitives | `src/styles/_room-language.scss` |
| Broadcast and album presentation | `src/components/ui/MediaCard.vue` |
| Home painted arrival | Shared Home layers plus `src/pages/HomePage.vue` |
| Surviving shared chapter materials/signatures | `src/styles/_chapters.scss` |
| Resources shelf IDs, art pairing and demo layout | `src/pages/ResourcesPage.vue`; records in `src/data/resources.ts` |
| Streams/Work/Home hero focal placement | `src/styles/_face-safe.scss` |
| Final phone chapter composition and density | `src/styles/_mobile-first.scss` |
| Host security/cache headers | `public/_headers` |
| Performance enforcement | `scripts/validate-performance.mjs` + related tests |
| Responsive derivative generation | `scripts/prepare-responsive-artwork.py` |

### Style ownership

`main.scss` loads tokens, base, components, pages, responsive, world, storybook, polish, chapters, artwork delivery, room language, face-safe, then mobile-first. Preserve `_mobile-first.scss` as the final phone-only authority. Eight interior pages import scoped compositions from `src/styles/rooms/`; Home and 404 retain local styles. Door presentation and focus handoff stay in `HavenDoor.vue`; the composable owns knock state and image eligibility.

Some legacy global layers still overlap. Inspect existing selectors before adding overrides; room-style extraction does not mean all cascade debt is resolved.

### Important maintenance rule

Do not hand-edit `src/data/responsive-artwork.json` or content-addressed derivative filenames as if they were ordinary content. They describe generated assets and integrity metadata. Regenerate them through the artwork tooling when the underlying source changes.

---

## Quality gate and CI

### `npm run check`

The current check pipeline runs:

1. ESLint
2. strict Vue/TypeScript validation via `vue-tsc`
3. Vitest
4. production build
5. eleven-document output validation
6. performance/image-budget validation
7. production-preview route/artwork verification

The preview verifier starts and stops its own production preview when used normally. `NARI_PREVIEW_URL` can point it at an already-running compatible preview instead.

### GitHub Actions

`.github/workflows/ci.yml` runs on:

- every pull request;
- pushes to `main`.

CI uses Node 22, installs from the lockfile with `npm ci`, and runs `npm run check`.

### Current validation evidence

On 9 September 2026, a fresh checkout of `main` at `fa83954` passed `npm ci` and `npm run check` on Node **24.19.0**, npm **11.9.0**: lint, strict typecheck, **68 tests in 14 files**, production build/budgets, **11 independently served documents**, **137 essential assets**, and **27 supplied Prinny designs**. CI is configured for Node 22; this local run does not establish a fresh Node 22 CI result.

`npm run check` does **not** gate dependency advisories. The separately run full `npm audit --json` reports four affected development packages; `npm audit --omit=dev --json` reports zero. See [the security register and raw audit evidence](docs/36_MAIN_SECURITY_AND_KNOWN_ISSUES.md).

Earlier browser measurements in documents 34–35 are historical. This documentation pass did not rerun rendered viewport, physical Pixel 9, native zoom, screen-reader, contrast, Lighthouse, or production-host checks. In particular, PR #18's final crops and desktop journey still require visual confirmation.

---

## Performance contract

Performance is treated as a **budgeted engineering requirement**, not an aesthetic afterthought.

### Automated hard budgets

These are currently enforced by repository tooling:

| Budget | Maximum |
|---|---:|
| Shared production JS + CSS, gzip | **120,000 bytes** |
| Additional JS graph for any lazy route page, gzip | **35,000 bytes** |
| Route-only CSS graph, gzip | **12,000 bytes** |
| Normal responsive artwork candidate | **150,000 bytes** |
| `haven-sunset` responsive candidate exception | **160,000 bytes** |
| Conservative capped Home image composition | **250,000 bytes** |
| Ordinary hero documents | exactly **3** mutually exclusive responsive preload bands |

Do not raise a budget simply to make a failing build green. A budget increase should explain what is being purchased, why the additional bytes are justified, and what alternatives were rejected.

### Latest recorded implementation measurements

The 9 September `fa83954` checkout produced these local build measurements:

| Measurement | Gzip size |
|---|---:|
| Shared JS + CSS | 73.04 KB |
| Largest route-only CSS, Haven | 5.36 KB |
| Largest combined route JS + CSS graph, Haven | 84.42 KB |

The validator walks transitive imports, measures route JS and CSS separately, and reports the deduplicated shared-plus-route graph. Combined totals are reported without a separate combined ceiling. KB means 1,000 bytes. These are recorded build measurements, not Lighthouse, network timing or field metrics.

### PR #9 measured baseline

The responsive-delivery pass recorded the following local/build measurements:

| Measurement | PR #9 baseline |
|---|---:|
| Shared JS + CSS, gzip | **71.04 KB** |
| Largest additional route JS graph, Haven | **5.83 KB** |
| Home desktop local image selection at DPR 1 | **184,942 bytes** |
| Same Home image set before responsive delivery | **1,369,582 bytes** |
| Reduction for that Home comparison | **86.5%** |
| Conservative capped Home image composition | **218,148 / 250,000 bytes** |
| Home 1672px painting | **146,078 bytes** |
| Home 768px painting | **78,940 bytes** |

These are **file/build measurements**, not Lighthouse scores and not field Core Web Vitals.

### Release performance targets

For release-quality measurement, use a controlled browser/Lighthouse protocol and keep lab versus field metrics separate.

Project targets:

- **Lighthouse Performance:** median **90+** on representative mobile runs for Home, Streams, and Haven; desktop should also remain 90+.
- **LCP:** **≤ 2.5 s** at the 75th percentile when field data exists.
- **INP:** **≤ 200 ms** at the 75th percentile when field data exists.
- **CLS:** **≤ 0.1** at the 75th percentile when field data exists.
- No horizontal overflow at supported widths.
- No unnecessary eager loading of below-fold illustration families.
- No regression that replaces responsive candidates with full-resolution originals for normal page delivery.

A Lighthouse score of 100 is not a requirement. Consistent green performance with good user-centric timings is more important than gaming a perfect score.

### Recommended benchmark protocol

For meaningful comparisons:

1. Use a clean production build without host-added review UI where possible.
2. Record Chrome/Lighthouse version and throttling preset.
3. Test Home, Streams, and Haven first.
4. Run at least three cold-cache samples per route.
5. Report median **and range**, not only the best run.
6. Record LCP, CLS, TBT, transfer bytes, request count, and the LCP element/subparts.
7. Keep warm/document-repeat navigation results separate.
8. Do not describe lab TBT as field INP.

The last PR #9 validation explicitly **did not claim mobile Lighthouse or field Web Vitals results**. Those remain future evidence.

---

## Accessibility targets

The public-launch target is **WCAG 2.2 AA**.

The current engineering expectation is that meaningful changes preserve:

- keyboard access to every interactive control;
- visible focus state;
- correct link/button semantics;
- usable Escape behavior for the mobile navigation and More disclosure;
- reduced-motion behavior;
- semantic heading/landmark structure;
- non-color-only communication;
- image alternative text appropriate to meaning;
- readable contrast in the single Nari atmosphere;
- direct-load usability without requiring mouse hover;
- layout support beginning at **320 CSS px**;
- reflow and content usability under text/page zoom.

### Manual release matrix still pending

The final client/public-release pass should include at minimum:

- 320, 390, 430, 768, 1024, and 1920 CSS px;
- short-height phones;
- 200% text zoom;
- 400% page zoom/reflow review;
- keyboard-only navigation;
- reduced motion;
- screen-reader smoke testing;
- final contrast sampling;
- external-link and direct-route checks.

Automated tests do not replace this matrix.

---

## Responsive artwork pipeline

The responsive pipeline reads retained sources from `src/assets/source/delivery/media/` and writes the same content-addressed WebP candidates to `public/media/responsive/`. The source and retired artwork inventory records 63 preserved files, former URLs, current paths and SHA-256 hashes. Historical scene/postcard/Ghostie strings in `artwork.ts` are lookup keys, not served source URLs.

`src/assets/source/retired/` preserves superseded placeholder derivatives and social previews. Current HTML uses the eight existing storybook JPEG social crops. Old WebP social alternatives remain outside `public/`. No source master was deleted.

Use `npm run audit:assets` for a JSON inventory of public assets and reference evidence. Its unreferenced results require human review; dynamic URLs and provenance references are explicitly distinguished, and the command never deletes files.

### Generated candidates

The current responsive system covers chapter paintings, Ghosties, postcards, the Home ornament, and the Haven interior.

Candidate filenames contain a content hash. `src/data/responsive-artwork.json` records source/candidate metadata including dimensions, bytes, alpha state, and SHA-256 values.

### Generation command

```bash
npm run artwork:prepare
```

This runs:

```text
scripts/prepare-responsive-artwork.py
```

Requirements for regeneration:

- Python 3;
- Pillow with WebP support.

The generated output is committed, so normal `npm ci`, development, and production builds do **not** need Python/Pillow.

### Generation rules

The current pipeline:

- preserves source aspect ratio;
- uses Lanczos resizing;
- never upscales;
- strips EXIF/XMP/ICC payloads from generated candidates;
- adjusts WebP quality downward only as needed to meet the configured byte ceiling;
- fails generation when a required budget cannot be satisfied;
- records integrity metadata;
- preserves Ghostie transparency where required.

After regenerating art, visually inspect important crops. Byte compliance cannot detect a bad face crop.

### Hero viewport bands

For ordinary chapter paintings:

| CSS viewport | 1x candidate | 2x candidate |
|---|---:|---:|
| `<768px` | 768px | 1280px |
| `768–1279px` | 1280px | 1672px |
| `≥1280px` | 1672px | 1672px source-resolution cap |

The CSS backgrounds, native pictures, and HTML preloads are intended to resolve from the same candidate contract.

### Haven doorway

The Haven interior is deliberately deferred until:

- it approaches the viewport;
- it receives keyboard focus; or
- the user begins the knock interaction.

The same responsive image remains continuous through glimpse, reveal, and reset. The Discord anchor is absent before the third knock. The story action stays mounted for knocks one and two; final activation from the focused story action transfers focus to Discord. Focused reset returns focus to the restored story action. The separate door-scene action does not force that focus transfer. There is no idle loop, sound, timer, extra gate or persisted progress. Loading the image must never gate the three-knock logic or the Discord action.

---

## Caching and resilience

### Cache policy

`public/_headers` currently applies long immutable caching to:

- `/assets/*`
- `/media/generated/*`
- `/media/responsive/*`

The responsive artwork directory is content-addressed, so changed bytes must receive a new URL. Do not overwrite different image bytes beneath an existing hash-style filename.

HTML keeps the host's revalidation behavior rather than being forced into immutable caching.

### Stale-chunk recovery

The application includes guarded stale-chunk recovery for cases where an old HTML document references a no-longer-present compiled chunk after deployment.

The recovery behavior:

- allows one automatic reload attempt per tab/path;
- avoids infinite reload loops;
- tolerates unavailable/denied session storage;
- provides a manual reload state for persistent failure;
- stores only a local public pathname;
- sends no telemetry.

---

## Security and privacy posture

The site is static and intentionally has no trusted client-side secret boundary. The [security and known-issues register](docs/36_MAIN_SECURITY_AND_KNOWN_ISSUES.md) separates dependency findings, intentional public behavior, hardening gaps, and unverified release checks.

The three-knock Discord reveal and hidden Prinny route are presentation features, not authentication. Their destinations/content are inspectable in public source and delivered files. No private information belongs behind either interaction. Published dependency advisories are documented; no zero-day discovery, active compromise, or exhaustive security clearance is claimed.

### Response headers

`public/_headers` currently configures:

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- a restrictive `Permissions-Policy`
- a Content Security Policy limiting scripts/styles/images/connections/frames/forms and blocking framing/object content

Host behavior must still be verified on the final deployment provider.

### Secrets

Never commit secrets, API keys, Discord moderation credentials, webhooks, private email credentials, analytics secrets, or tokens.

Any `VITE_*` environment value is client-visible and must be treated as public.

### Privacy boundary

Do not publish private identity, precise location, phone/email, family/relationship details, private messages, Discord/community data, or raw media carrying sensitive metadata without explicit approval.

---

## Content and asset truth

Public availability is not the same thing as website-use permission.

The current private-review implementation retains and/or uses:

- owner-supplied Nari model material;
- owner-supplied cozy character artwork;
- official static emotes;
- all 27 supplied Prinny illustrations;
- owner-directed identity-preserving Nari reillustrations;
- route-specific storybook/environment art;
- locally hosted responsive derivatives.

Owner direction to include an asset in a client-review implementation does **not** automatically resolve:

- artist copyright;
- public website display rights;
- derivative rights;
- crop/background-treatment rights;
- required credits;
- franchise-related rights.

Those records remain release blockers where unresolved.

### Nail Studio truth boundary

Do not use generated or stock nails as proof of Nari's real work. Real portfolio content must be supplied/approved and accurately labeled before the site presents it as Nari's work.

### Public claims

Do not invent:

- schedules;
- follower/viewership metrics;
- credentials;
- clients;
- partnerships;
- testimonials;
- sponsor relationships;
- affiliate relationships;
- response-time promises;
- live/online state.

Honest empty or “pending approval” states are preferable to plausible fabrication.

---

## How to add or change a route

A route is not one file in this repository.

Adding, removing, renaming, or materially moving a route normally requires coordinated changes across:

1. the real HTML document under `pages/`;
2. route-specific document metadata;
3. `src/data/projectPages.json` (Vite entries, output checks, preview checks and preload coverage derive from it);
4. the explicit lazy import in `src/router/routes.ts`;
5. the matching `src/pages/*Page.vue` component;
6. `src/data/navigation.ts` if navigable;
7. `SiteHeader.vue` if header grouping changes;
8. build/document validation;
9. preview-route verification;
10. relevant tests;
11. the registry hero key if it is an ordinary illustrated route;
12. social metadata/artwork where applicable;
13. 404/host behavior if URLs change;
14. owning documentation.

After a route change, direct-load the built URL. A route that only works after navigating from Home is broken for an MPA.

---

## Deployment and release

The repository produces a portable static artifact in `dist/`.

### Historical preview evidence

PR #9 was deployed to a Netlify deploy preview and inspected there. The preview was used to verify desktop rendering, the Haven deferred doorway artwork/three-knock interaction, and final asset/document cache headers.

That preview is review evidence, not production release approval.

### Production release blockers

Before public release, resolve and record at minimum:

- Nari/Panda approval of the current Nari-only direction;
- final identity/canon wording;
- artwork ownership, display, derivative, crop, and credit permissions;
- real nail-work content and labeling;
- final Resources recommendations/disclosures;
- canonical Discord destination;
- approved professional contact path;
- support methods and any commercial disclosures;
- final hosting provider/domain;
- deployment headers/cache behavior;
- Lighthouse/mobile performance benchmark;
- keyboard, zoom/reflow, screen-reader, and contrast QA;
- rollback/release evidence.

Do not treat “the deploy preview looks good” as equivalent to release clearance.

---

## Documentation map

Start with [`docs/README.md`](docs/README.md) for the full documentation hub.

### Current post-feedback implementation supplements

These are especially important for understanding the current merged implementation:

- [`docs/26_CLIENT_FEEDBACK_IMPLEMENTATION.md`](docs/26_CLIENT_FEEDBACK_IMPLEMENTATION.md) — client-feedback implementation context
- [`docs/27_NARI_FACE_SAFE_COMPOSITION.md`](docs/27_NARI_FACE_SAFE_COMPOSITION.md) — Nari composition constraints
- [`docs/28_NARI_ONLY_ATMOSPHERE_DEMO.md`](docs/28_NARI_ONLY_ATMOSPHERE_DEMO.md) — current one-atmosphere proposal
- [`docs/29_ENVIRONMENTAL_CONTINUITY.md`](docs/29_ENVIRONMENTAL_CONTINUITY.md) — page-to-page environmental continuity
- [`docs/30_PAGE_SIGNATURE_DEVICES.md`](docs/30_PAGE_SIGNATURE_DEVICES.md) — route-specific visual devices
- [`docs/31_DE_CARDIFICATION_AND_RHYTHM.md`](docs/31_DE_CARDIFICATION_AND_RHYTHM.md) — layout/rhythm refinement
- [`docs/32_PHASE_E_VALIDATION.md`](docs/32_PHASE_E_VALIDATION.md) — refinement validation evidence
- [`docs/33_RESPONSIVE_ARTWORK_PERFORMANCE.md`](docs/33_RESPONSIVE_ARTWORK_PERFORMANCE.md) — responsive delivery, performance budgets, cache and recovery behavior

- [`docs/34_DISTINCTIVE_UI_REFINEMENT.md`](docs/34_DISTINCTIVE_UI_REFINEMENT.md) — room compositions and dated evidence
- [`docs/35_MOBILE_FIRST_OVERHAUL.md`](docs/35_MOBILE_FIRST_OVERHAUL.md) — mobile experience, shared journey, crop changes and dated QA
- [`docs/36_MAIN_SECURITY_AND_KNOWN_ISSUES.md`](docs/36_MAIN_SECURITY_AND_KNOWN_ISSUES.md) — current advisories, limitations, hardening priorities and audit evidence

### Core engineering references

- [`docs/07_TECHNICAL_ARCHITECTURE.md`](docs/07_TECHNICAL_ARCHITECTURE.md)
- [`docs/10_ACCESSIBILITY_PERFORMANCE_PRIVACY_SECURITY.md`](docs/10_ACCESSIBILITY_PERFORMANCE_PRIVACY_SECURITY.md)
- [`docs/12_QA_ACCEPTANCE_CRITERIA.md`](docs/12_QA_ACCEPTANCE_CRITERIA.md)
- [`docs/14_REPOSITORY_OPERATIONS.md`](docs/14_REPOSITORY_OPERATIONS.md)
- [`docs/15_DEPLOYMENT_AND_RELEASE_RUNBOOK.md`](docs/15_DEPLOYMENT_AND_RELEASE_RUNBOOK.md)
- [`docs/18_CODE_STANDARDS.md`](docs/18_CODE_STANDARDS.md)
- [`docs/19_DESIGN_REVIEW_RUBRIC.md`](docs/19_DESIGN_REVIEW_RUBRIC.md)

### Product/content/art references

- [`docs/00_PROJECT_SOURCE_OF_TRUTH.md`](docs/00_PROJECT_SOURCE_OF_TRUTH.md)
- [`docs/03_PAGE_BY_PAGE_EXPERIENCE_SPEC.md`](docs/03_PAGE_BY_PAGE_EXPERIENCE_SPEC.md)
- [`docs/05_CONTENT_STRATEGY_AND_COPY_GUIDE.md`](docs/05_CONTENT_STRATEGY_AND_COPY_GUIDE.md)
- [`docs/06_ASSET_MANIFEST_AND_ART_PIPELINE.md`](docs/06_ASSET_MANIFEST_AND_ART_PIPELINE.md)
- [`docs/23_AUTHENTIC_ARTWORK_IMPLEMENTATION.md`](docs/23_AUTHENTIC_ARTWORK_IMPLEMENTATION.md)
- [`docs/24_STORYBOOK_ART_DIRECTION_AND_PROMPTS.md`](docs/24_STORYBOOK_ART_DIRECTION_AND_PROMPTS.md)

### Documentation precedence note

The documentation set spans multiple development phases. Some older documents intentionally preserve previous decisions/snapshots and currently contain pre-PR #9 theme, branch, asset, or validation language.

For **current implementation mechanics**, prefer:

1. current code on `main`;
2. this README's dated implementation snapshot;
3. current audit/security records and post-feedback docs `26–36`;
4. older architectural/product documents for the still-valid underlying contract.

Document 17 now provides the current audit. Dated implementation records remain historical evidence; their former branch instructions and test counts do not override this snapshot.

---

## Engineering guardrails

When modifying the project:

- inspect the current implementation before editing;
- preserve the true MPA unless intentionally redesigning the architecture;
- preserve normal top-level document navigation;
- keep the Nari-only atmosphere until client direction changes;
- preserve semantic HTML, keyboard behavior, focus visibility, and reduced motion;
- keep the hidden room optional, easy to exit, absent from normal navigation, and `noindex`;
- do not turn generated/stock content into false evidence of Nari's work;
- do not add runtime dependencies when CSS/native browser behavior solves the problem cleanly;
- keep performance budgets enforceable;
- preserve hashed responsive-image integrity and cache semantics;
- keep changes focused and reversible;
- update tests/docs when contracts change;
- run `npm run check` before merge;
- record what was actually tested instead of inheriting a previous commit's claims.

### Preferred branch workflow

For normal development work, use a focused branch and pull request rather than stacking unrelated changes directly on `main`.

A useful PR description should state:

- why the change exists;
- affected routes/contracts;
- content/rights/privacy impact;
- automated validation results;
- manual validation performed;
- performance impact where relevant;
- remaining blockers;
- rollback path.

---

## Known follow-up work

The [dated issue register](docs/36_MAIN_SECURITY_AND_KNOWN_ISSUES.md) owns issue status and closure evidence. Priorities:

1. **Remaining CSS and visual QA** — shared delivery/state/document ownership and scoped room styles are merged. Review surviving `_world.scss`, `_storybook.scss` and `_polish.scss` overlap before further consolidation. Complete whole-page comparison and Haven focus/reflow review for the latest changes; do not repeat the completed room-style extraction as new work.
2. **Dependency security remediation** — refresh the affected Vitest/mocker, brace-expansion, and js-yaml lockfile resolutions in a focused implementation PR; review the diff, rerun both audits and the full gate. No dependency fix is included in this docs update.
3. **Release performance benchmark** — run controlled mobile/desktop Lighthouse series and, once production traffic exists, evaluate field Core Web Vitals.
4. **Accessibility release QA** — finish screen-reader, contrast, zoom/reflow, short-height, and full viewport matrix review.
5. **Client approval/content closure** — resolve final identity wording, rights/credits, nail work, Resources, contact, Discord, support, hosting, and domain decisions.
6. **Production release evidence** — verify host headers, direct routes, cache behavior, rollback, and final deployment independently of the review preview.

Do not solve these by inventing content or weakening the existing gates.

---

## Contribution

Before larger changes, read:

- [`AGENTS.md`](AGENTS.md)
- [`CONTRIBUTING.md`](CONTRIBUTING.md)
- [`docs/README.md`](docs/README.md)
- [`docs/14_REPOSITORY_OPERATIONS.md`](docs/14_REPOSITORY_OPERATIONS.md)

For most implementation changes, the minimum engineering loop is:

```bash
npm ci
npm run dev
# make focused changes
npm run check
```

Then perform the relevant manual route/viewport/accessibility review before merging.

---

## License

No open-source or artwork license has been granted.

Project code, copy, and original/generative assets remain reserved pending an explicit owner licensing decision. Third-party platform names, linked media, commissioned/source artwork, and franchise-related material remain the property of their respective rights holders.
