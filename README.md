# Nari Nuna's Haven

A warm, true multi-page home for Nari Nuna's streams, self-taught nail-art learning, community, stories, resources, collaborations, and zero-pressure support.

The current implementation centers Nari's actual supplied character model, supplied cozy character art, her official static emotes, and the complete set of 27 supplied Prinny illustrations. Purpose-built Ghosties, illustrated rooms, page-specific artwork, and three time-of-day environments surround that authentic identity without generating or substituting a Nari likeness.

## Product direction

Nari's Haven is one lived-in late-fall refuge with several rooms—not a Linktree clone or generic VTuber template. The experience connects Nari's big-sister warmth, playful stream chaos, nail-art curiosity, community values, professional fit, and clear boundaries.

The private project-owner-requested review implementation is not public-release approval. Production release remains blocked by Nari's final identity/copy approval, recorded artwork ownership and website-use rights, real nail-work content, final Discord/contact/hosting decisions, and release-grade manual QA. Unknowns remain honest holds rather than fabricated content.

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

`npm run check` runs lint, TypeScript, unit tests, the production build, the eleven-document output validator, and the live production-preview route/artwork verifier. Manual viewport, theme, keyboard, screen-reader, rights, privacy, and host checks still follow.

For a built local site, `npm run verify:preview` starts and stops its own production preview automatically. It checks all eleven direct-loading documents, public social metadata, required genuine character/room artwork, hidden-page indexing boundaries, and every one of the 27 supplied Prinny images. Set `NARI_PREVIEW_URL` to check an already-running compatible preview instead.

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
- [Authentic artwork implementation and review boundaries](docs/23_AUTHENTIC_ARTWORK_IMPLEMENTATION.md)
- [Technical architecture](docs/07_TECHNICAL_ARCHITECTURE.md)
- [Current-state audit](docs/17_CURRENT_STATE_AUDIT.md)
- [Code standards](docs/18_CODE_STANDARDS.md)
- [Design review rubric](docs/19_DESIGN_REVIEW_RUBRIC.md)
- [QA and acceptance criteria](docs/12_QA_ACCEPTANCE_CRITERIA.md)
- [Implementation handoff](docs/13_HANDOFF_TO_SOL_HIGH.md)
- [Deployment and release runbook](docs/15_DEPLOYMENT_AND_RELEASE_RUNBOOK.md)

The documentation is part of the product contract. Changes to routes, tokens, assets, schemas, interactions, public claims, or release behavior update their owning documents in the same pull request.

## Asset and content posture

Publicly visible artwork is not automatically licensed for republication. The character model, cozy character illustration, official static emotes, and 27 original Prinny designs in this private review implementation were recovered from the owner-supplied Nari project archive, not copied, scraped, or hotlinked from public platforms. Generated support artwork is limited to environments, decorative systems, Ghosties, metadata, and UI; it is never represented as a generated Nari model, Nari nail portfolio, or replacement Prinny design.

Owner-directed inclusion in a private review branch does **not** resolve the commissioned artists, copyright holders, public website display, required credits, cropping/background treatment, or franchise-related rights. Record those decisions before any public deployment. The actual source archive remains outside served assets; web derivatives are stripped and locally hosted.

Regenerate review assets from the preserved owner-supplied archive material with ImageMagick:

```bash
bash scripts/prepare-client-assets.sh /path/to/recovered-source-material public/media
```

Before public launch, Nari and the relevant rights holders must approve or provide:

- canonical identity wording, final character-render selection, and permitted character-render usage;
- official emote/logo source attribution, adopted Ghostie artwork, and exact website usage terms;
- real nail-work images, labels, and education scope;
- artist/owner credit and display/local-host/crop/derivative permissions, including the original Prinny collection;
- canonical Discord and professional contact route;
- any metrics, schedule, resources, support methods, affiliate relationships, or sponsor claims.

The repository contains no trusted backend, secrets, analytics, contact form, fake metrics, or fabricated schedule.

## Contribution

Read [AGENTS.md](AGENTS.md), [CONTRIBUTING.md](CONTRIBUTING.md), and [repository operations](docs/14_REPOSITORY_OPERATIONS.md). Work from an approved contract, keep changes focused, preserve the true MPA, run the full gate, and record actual evidence.

## License

No open-source or artwork license has been granted. Project code, copy, and original/generative assets remain reserved pending an explicit owner licensing decision. Third-party platform names and linked media remain the property of their respective owners.
