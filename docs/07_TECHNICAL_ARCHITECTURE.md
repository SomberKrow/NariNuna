# Technical Architecture

## Verified baseline

| Concern | Implementation |
|---|---|
| Runtime/package manager | Node.js 22.13+; npm lockfile |
| UI | Vue 3.5.41, TypeScript 5.9.3 |
| Build | Vite 8.2.1 + `@vitejs/plugin-vue` 6.0.8 |
| Navigation | Vue Router 5.2.0 |
| Styles | Sass 1.102.0; layered SCSS; CSS custom properties |
| Motion | Motion for Vue 2.3.0 and native CSS transitions |
| Icons | `@lucide/vue` 1.31.0 |
| Quality | ESLint 9, `vue-tsc` 3.3.9, Vitest 4.1.10 |

Use versions resolved in `package-lock.json`; this table is evidence, not a request to hand-edit the lockfile.

## MPA + Router decision

Nari requested a true MPA and Jake also requested Vue Router. The implementation preserves both:

1. Every public route has an actual HTML entry document.
2. Vite builds all entries using `build.rolldownOptions.input`.
3. Global top-level links are ordinary anchors, causing real document navigation.
4. Every document mounts the same shared Vue entry and Router.
5. Router resolves the initial `window.location` and lazy-loads only that page component.
6. Router remains available for route metadata, scroll reset, 404 matching, and future within-document subroutes; it does not replace top-level documents.

This is not an SPA fallback. Direct refreshes work only if the host serves built directory indexes and the 404 file correctly.

## Entry documents

`vite.config.ts` declares Home, Meet Nari, Streams, Nail Studio, Haven, Resources, Work With Nari, Support, Stories, Prinny Cult, and 404. Each HTML file contains route-specific title/description/robots metadata, theme-color, favicon/manifest, the external theme preflight, and `/src/main.ts`.

When adding a route, update the HTML file, `pageEntries`, router records, validator list, navigation/data where appropriate, tests, docs, and host routing.

## Shared application

```text
src/
├── components/
│   ├── haven/          # Progressive community and secret threshold
│   ├── layout/         # SiteShell, SiteHeader, SiteFooter
│   └── ui/             # Theme, media, headings, Ghostie
├── composables/        # Theme and reduced-motion state
├── data/               # Reviewed content records, never scraped feeds
├── pages/              # One lazy Vue module per document route
├── router/             # Initial route resolution and metadata
├── styles/             # Tokens, base, components, pages, responsive
├── types/              # Content contracts
└── assets/source/      # High-resolution local placeholder sources
```

`App.vue` renders ordinary routes inside `SiteShell` and the hidden route without global shell. `main.ts` waits for Router readiness, then mounts. A Vite preload error triggers one browser reload to recover stale chunks after a deployment.

## Theme boot

`public/theme-boot.js` is an external blocking script loaded before the module entry. It accepts only `nari`, `dark`, or `light`, reads `localStorage` defensively, sets `data-theme`, and updates `theme-color`. The interactive composable writes the same versioned key. No cookie/account or analytics event is involved.

Do not inline the script while the CSP forbids inline script. If the storage key or theme list changes, update boot and composable together.

## Content data

Current reviewed modules are `navigation.ts`, `socials.ts`, `media.ts`, and `content.ts`. Recurring content stays typed and data-driven. No runtime scraping or social API is required. Future editorial scale can justify a CMS only after owner workflow, auth, preview, schema, privacy, cost, and deployment are chosen.

## Media and embeds

- Local originals live outside `public`; optimized WebP derivatives live under `public/media/generated`.
- Hero images use responsive `srcset`, explicit dimensions, and high priority only when above fold.
- Other local images lazy-load.
- YouTube cards use remote thumbnails and outbound links; CSP permits only `i.ytimg.com` in addition to self/data images.
- `frame-src 'none'` and `media-src 'none'` deliberately prevent embeds/autoplay. A future click-to-load player requires a documented privacy/CSP change and consent UX.

## SCSS

Theme semantic tokens are CSS variables, allowing pre-Vue paint. SCSS compiles the structural layers. Breakpoints are content-driven, not device-named. Avoid component-scoped duplication for shared primitives and avoid a utility-class framework.

## Security headers

`public/_headers` provides CSP, no-sniff, referrer policy, permissions policy, HSTS, frame protection, and caching guidance for compatible static hosts. Hosts that ignore `_headers` must reproduce these values in their configuration. Do not add `unsafe-eval`; review and remove `style-src 'unsafe-inline'` if a nonce/hash or fully external style path becomes feasible.

External `target="_blank"` links use `rel="noreferrer noopener"`. There are no client secrets, credentials, raw webhooks, contact submissions, or authenticated areas.

## Scripts and evidence

| Script | Contract |
|---|---|
| `npm run dev` | Vite development server |
| `npm run lint` | ESLint over source/config/public scripts |
| `npm run typecheck` | `vue-tsc --noEmit` |
| `npm run test` | Vitest content-contract tests |
| `npm run build` | Typecheck, Vite MPA build, 11-document validator |
| `npm run check` | Lint → typecheck → test → build |
| `npm run preview` | Vite production preview |

Observed on 2026-08-13: `npm run check` passed, 1 test file/4 tests passed, 11 HTML documents validated, and the largest shared JS chunk was about 173 KB raw/59 KB gzip. Re-run after every material change; do not preserve these numbers as future claims.

## Deployment

GitHub source remains host-portable. A deployment provider, production domain, canonical URL, redirects, 404 routing, cache policy enforcement, and public access mode are not locked. Do not commit a provider adapter to the canonical architecture until chosen. Deployment-specific mirrors may wrap this output, but source changes flow from this repository—not back from a generated mirror.

Before release, verify directory-index behavior, direct loads, 404 fallback, `_headers` support or equivalent, HTTPS, asset caching, robots, and no accidental preview indexing.
