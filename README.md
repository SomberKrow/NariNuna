# Nari Nuna's Haven

A warm, multi-page home for Nari Nuna's streams, nail-art learning, community, stories, resources, collaborations, and zero-pressure support.

This repository is the canonical website source. The current build is an integration-ready foundation: its public links and featured YouTube moments are verified, while original generated art intentionally stands in for Nari's licensed character, emote, and nail-art packs.

## Stack

- Vue 3 + TypeScript
- Vite true multi-page application (MPA)
- Vue Router for route resolution and lazy page modules inside each HTML entry
- SCSS design system with Nari, Dark, and Light atmospheres
- Motion for Vue for isolated interaction animation
- Vitest + ESLint + `vue-tsc`

Top-level links are normal document links. Each route has a real HTML entry and works on direct load; this is not a single-page app disguised as an MPA.

## Local development

Requirements: Node.js 22.13 or newer and npm.

```bash
npm install
npm run dev
```

Quality gate:

```bash
npm run check
```

`npm run check` runs lint, TypeScript, unit tests, the production build, and an 11-document build-output validator.

## Routes

| Route | Purpose |
|---|---|
| `/` | Haven arrival and primary gateways |
| `/meet-nari/` | Identity, values, symbols, and lore hold |
| `/streams/` | Lightweight, curated stream experience |
| `/nail-studio/` | Nail-art learning and approved-gallery foundation |
| `/haven/` | Community values and progressive Discord discovery |
| `/resources/` | Curated recommendations with disclosure rules |
| `/work-with-nari/` | Collaboration fit and professional next steps |
| `/support/` | Optional support with explicit boundaries |
| `/stories/` | Data-driven Story Time foundation |
| `/the-prinny-cult/` | Hidden, no-index original joke room |
| `/404.html` | Static-host fallback document |

## Documentation

Start with [the implementation handoff](docs/13_HANDOFF_TO_SOL_HIGH.md), then use [the project source of truth](docs/00_PROJECT_SOURCE_OF_TRUTH.md) to resolve any conflict. The complete 14-file suite lives in [`docs/`](docs/).

## Asset and content status

Publicly visible artwork is not automatically licensed for republication. No Nari model, commissioned banner, emote, or nail-art image has been copied or hotlinked into the production asset path. Source placeholders and their optimized derivatives are documented in [the asset manifest](docs/06_ASSET_MANIFEST_AND_ART_PIPELINE.md).

Before public launch, Nari must approve or provide:

- the canonical character render and its artist-credit/crop terms;
- final Ghostie/emote assets and usage permission;
- real nail-work images and labels;
- the relationship between current CatDog public identity and the packet's Grim Reaper lore;
- a canonical Discord invite and professional contact route;
- any metrics, schedule, support methods, affiliate relationships, or sponsor claims.

The repository contains no secrets, analytics, contact-form backend, fake metrics, or fabricated schedule.

## License

No open-source or artwork license has been granted. All project code, copy, and original/generative assets are reserved pending an explicit owner licensing decision. Third-party platform names and linked media remain the property of their respective owners.
