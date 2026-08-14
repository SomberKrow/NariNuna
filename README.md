# Nari Nuna's Haven

A warm, true multi-page home for Nari Nuna's streams, self-taught nail-art learning, community, stories, resources, collaborations, and zero-pressure support.

The current implementation is a strong, testable foundation. Public links and selected media have recorded verification dates; original project art deliberately stands in for Nari's canonical character, Ghostie/emote, logo, and nail-art packs until exact rights and approvals are recorded.

## Product direction

Nari's Haven is one lived-in late-fall refuge with several rooms—not a Linktree clone or generic VTuber template. The experience connects Nari's big-sister warmth, playful stream chaos, nail-art curiosity, community values, professional fit, and clear boundaries.

Production release is currently blocked by canonical identity wording, final art rights, real nail-work content, final Discord/contact/hosting decisions, and release-grade manual QA. Unknowns remain honest holds rather than fabricated content.

## Stack

- Vue 3 + TypeScript
- Vite true multi-page application (MPA)
- Vue Router for route resolution and lazy page modules inside each HTML entry
- SCSS design system with Nari, Dark, and Light atmospheres
- Motion for Vue for isolated interaction animation
- Lucide icons
- Vitest + ESLint + `vue-tsc`

Top-level links use normal document navigation. Each route has a real HTML entry and direct-loads independently; this is not an SPA fallback presented as an MPA.

## Local development

Requirements: Node.js 22.13 or newer and npm.

```bash
npm install
npm run dev
```

Required repository gate:

```bash
npm run check
```

`npm run check` runs lint, TypeScript, unit tests, the production build, and the eleven-document output validator. Manual viewport, theme, keyboard, screen-reader, rights, privacy, and host checks still follow.

## Routes

| Route | Purpose |
|---|---|
| `/` | Haven arrival and primary gateways |
| `/meet-nari/` | Identity, values, symbols, boundaries, and canon hold |
| `/streams/` | Curated stream experience and verified platform doors |
| `/nail-studio/` | Nail-art learning and approved-gallery foundation |
| `/haven/` | Community values and progressive Discord discovery |
| `/resources/` | Curated recommendations and disclosure system |
| `/work-with-nari/` | Collaboration fit, process, and approved next step |
| `/support/` | Optional support with explicit boundaries |
| `/stories/` | Privacy-aware Story Time foundation |
| `/the-prinny-cult/` | Hidden, no-index, original joke room |
| `/404.html` | Static-host recovery document |

## Documentation

Start with the [documentation hub](docs/README.md). It provides work-specific reading paths and an authority map.

Critical references:

- [Project source of truth](docs/00_PROJECT_SOURCE_OF_TRUTH.md)
- [Page-by-page experience contracts](docs/03_PAGE_BY_PAGE_EXPERIENCE_SPEC.md)
- [Design system and exact color tokens](docs/04_DESIGN_SYSTEM_AND_COMPONENT_LANGUAGE.md)
- [Asset manifest and rights pipeline](docs/06_ASSET_MANIFEST_AND_ART_PIPELINE.md)
- [Technical architecture](docs/07_TECHNICAL_ARCHITECTURE.md)
- [Current-state audit](docs/17_CURRENT_STATE_AUDIT.md)
- [Code standards](docs/18_CODE_STANDARDS.md)
- [Design review rubric](docs/19_DESIGN_REVIEW_RUBRIC.md)
- [QA and acceptance criteria](docs/12_QA_ACCEPTANCE_CRITERIA.md)
- [Implementation handoff](docs/13_HANDOFF_TO_SOL_HIGH.md)
- [Deployment and release runbook](docs/15_DEPLOYMENT_AND_RELEASE_RUNBOOK.md)

The documentation is part of the product contract. Changes to routes, tokens, assets, schemas, interactions, public claims, or release behavior update their owning documents in the same pull request.

## Asset and content posture

Publicly visible artwork is not automatically licensed for republication. No Nari model, commissioned banner, emote, panel, logo, or nail-art image has been copied or hotlinked into the project art path.

Before public launch, Nari and the relevant rights holders must approve or provide:

- canonical identity wording and current character render;
- official Ghostie/emote/logo assets and usage terms;
- real nail-work images, labels, and education scope;
- artist/owner credit and display/local-host/crop/derivative permissions;
- canonical Discord and professional contact route;
- any metrics, schedule, resources, support methods, affiliate relationships, or sponsor claims.

The repository contains no trusted backend, secrets, analytics, contact form, fake metrics, or fabricated schedule.

## Contribution

Read [AGENTS.md](AGENTS.md), [CONTRIBUTING.md](CONTRIBUTING.md), and [repository operations](docs/14_REPOSITORY_OPERATIONS.md). Work from an approved contract, keep changes focused, preserve the true MPA, run the full gate, and record actual evidence.

## License

No open-source or artwork license has been granted. Project code, copy, and original/generative assets remain reserved pending an explicit owner licensing decision. Third-party platform names and linked media remain the property of their respective owners.
