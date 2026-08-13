# NariNuna — Sol High Implementation Handoff

## 1. Mission

Finish and release Nari Nuna's Haven: a true Vue/Vite multi-page world for streams, self-taught nail-art learning, found-family community, stories, resources, collaborations, and zero-pressure support. The strong implementation foundation already exists; the next pass must replace holds with rights-cleared, Nari-approved truth without flattening the Haven into a generic creator site.

## 2. Repository baseline

- Canonical repo: private `SomberKrow/NariNuna`.
- Working branch: `agent/build-nari-haven`.
- npm/Node.js 22.13+; lockfile committed.
- Vue 3.5.41, TypeScript 5.9.3, Vite 8.2.1, Vue Router 5.2.0, SCSS, Motion for Vue 2.3.0.
- Eleven real HTML entries, shared Vue shell, persistent Nari/Dark/Light theme boot, lazy route modules, responsive local art derivatives, tests, CI, security headers, and docs are implemented.
- `npm run check` passed on 2026-08-13: lint, typecheck, 4 tests, build, and 11 HTML output validations.
- No known source/build failure. Production launch remains blocked by content/art rights, canonical identity wording, host/domain, contact, and final manual QA.

## 3. Read these docs first

1. `00_PROJECT_SOURCE_OF_TRUTH.md` — conflict authority and blockers.
2. `06_ASSET_MANIFEST_AND_ART_PIPELINE.md` — do not touch art before this.
3. `03_PAGE_BY_PAGE_EXPERIENCE_SPEC.md` — page contracts.
4. `07_TECHNICAL_ARCHITECTURE.md` — preserve the MPA/Router reconciliation.
5. `10_ACCESSIBILITY_PERFORMANCE_PRIVACY_SECURITY.md` — release constraints.
6. `12_QA_ACCEPTANCE_CRITERIA.md` — evidence and unfinished gates.
7. Remaining numbered docs for brand, IA, system, copy, schemas, motion, and phases.

## 4. Locked product decisions

- One Haven; one Nari identity; multiple rooms.
- True Vite MPA with normal top-level document navigation.
- Vue + TypeScript + SCSS + Vue Router + Motion for Vue; no Tailwind/UI framework.
- Nari/Dark/Light are warm, persistent atmospheres.
- Emerald is sparse and meaningful; heritage symbolism is personal and never invented.
- Nail learning is flagship, but no services/credentials/medical claims are inferred.
- Discord is progressively discovered after community values.
- Professional path is clear without fake metrics/contact/form.
- Support is optional and never purchases access, ownership, or obligation.
- No autoplay sound/embed, hidden required actions, or unlicensed franchise art.

## 5. Current asset truth

No Nari-supplied production art was attached. The repo uses three original generated placeholders: a Haven environment, a lavender Ghostie, and a Nail Studio environment with no finished nails. Optimized derivatives are local. No public Nari model, commissioned banner, emote, panel, logo, or nail image is copied/hotlinked. Three verified YouTube Shorts use remote thumbnails without player code.

Canonical Nari render, logo, Ghostie/emote set, nail gallery, sun/moon art, professional imagery, and their rights/credits are missing. Follow `06_ASSET_MANIFEST_AND_ART_PIPELINE.md`; never infer a license from public visibility.

## 6. Architecture decision

Each route has an actual HTML document in Vite's MPA input. All load `/src/main.ts`, mount the shared Vue app, and let Vue Router resolve the current location and lazy page module. Header links are `<a>`, not RouterLink, so top-level navigation is a real document transition. `SiteShell` owns header/footer/skip/Ghostie; secret route bypasses it. `public/theme-boot.js` sets the persisted theme before Vue. Content is typed local data; source art stays untouched and only optimized derivatives are public. The client has no trusted secret boundary.

## 7. Actual implementation order from here

1. **Resolve identity and rights.** Get Nari's CatDog ↔ Grim Reaper wording, current model, canonical Ghostie/emotes, artists, usage/crop/derivative/local-hosting terms. **Gate:** written approval records.
2. **Ingest final art.** Preserve originals, strip metadata from derivatives, export responsive variants, update manifest/alt/credits. **Gate:** all art works in three themes/mobile and no placeholder misrepresentation.
3. **Complete flagship content.** Approved Nail Studio gallery/education and Meet Nari lore/render. **Gate:** factual scope and privacy/content approval.
4. **Complete operational content.** Canonical Discord, professional contact/media kit/metrics, resources/affiliates, support methods, stories, and media selection. **Gate:** every claim/link sourced, dated where volatile, and approved.
5. **Mobile/accessibility pass.** 320/390/768/wide, keyboard, screen reader, zoom, contrast, reduced motion. **Gate:** WCAG 2.2 AA target and no critical issue.
6. **Choose host/domain.** Reproduce headers/404/cache behavior, add canonical/social metadata, keep source portable. **Gate:** direct routes, HTTPS, no preview indexing, rollback works.
7. **Final production QA.** Clean install/build, link/rights/privacy/EXIF/secrets/dependencies/performance review. **Gate:** all critical items in `12_QA_ACCEPTANCE_CRITERIA.md` pass.

## 8. Critical UX rules

- Mobile is recomposed, not shrunken.
- One clear primary action per context; Discord/support never dominate arrival.
- Theme control is global, labelled, persistent, and pre-paint.
- Final hero art must retain a copy-safe crop and contrast.
- Honest holds are better than fake content.
- Ghosties delight after user action; they never block reading or loop endlessly.
- The hidden room is optional, no-index, keyboard/touch accessible, and easy to exit.

## 9. Critical privacy rules

No precise/private location, legal identity, private contact, family detail, private message, raw photo metadata, unapproved community identifier, adult content surprise, or client secret. Strip EXIF/GPS; record participant/art permissions; do not turn obscurity/robots into security; treat every `VITE_*` value as public.

## 10. Open items

| Missing decision/input | Blocks | Safe default |
|---|---|---|
| CatDog ↔ Grim Reaper wording | Lore/public identity launch | Neutral big-sister VTuber copy + lore hold |
| Character/Ghostie/emote/logo rights | Canonical visual launch | Local generated assets labelled as placeholders |
| Approved nail photos/education | Nail gallery launch | Environment + honest empty gallery |
| Canonical Discord code | Community conversion | Keep candidate but reverify; hide if invalid |
| Business contact/media kit/metrics | Formal inquiry promise | Link only approved public hub/X; no form/numbers |
| Stories/resources/schedule/affiliates | Those content systems | Curating/no-schedule state |
| Host/domain/legal/license/analytics | Production operations | Portable static output; collect nothing |

## 11. Validation commands

```bash
npm ci
npm run lint
npm run typecheck
npm run test
npm run build
npm run check
npm run preview
```

`npm run check` is the required repository gate. Preview/manual evidence still follows it.

## 12. File map

- HTML entries at repo root and route directories.
- `vite.config.ts`: MPA inputs and alias/test config.
- `src/router/index.ts`: lazy route mapping and secret metadata.
- `src/components/layout`: shared document shell.
- `src/pages`: route experience modules.
- `src/data` + `src/types`: reviewed content contracts.
- `src/styles`: tokens through responsive/reduced-motion layers.
- `src/assets/source`: unchanged local placeholder sources.
- `public/media/generated`: optimized served derivatives.
- `scripts/validate-build.mjs`: built-document contract.
- `tests/content-contract.test.ts`: route/social/media invariants.
- `.github`: CI and review checklist.

## 13. Completion standard

Production-ready means the site is coherent, rights-cleared, factually approved, privacy-safe, host-verified, responsive, keyboard/screen-reader usable, within budgets, and demonstrably passing the full QA matrix with final assets. “Build passed” alone is insufficient.

## 14. Final directive

Inspect before editing. Preserve the true MPA and working behaviors. Use supplied, rights-cleared assets as source truth. Do not invent copy, lore, metrics, credentials, schedules, partnerships, services, or private information. Build the smallest coherent change for each approved input, validate with the repository's real commands, and report only evidence you actually observed.
