# Authentic Artwork Implementation and Review Boundaries

## Subsequent owner-directed storybook revision — 2026-08-23

The supplied-art-only implementation documented below is retained as the first private-review baseline. The repository owner subsequently rejected that execution as too generic, explicitly authorized faithful Nari reillustration, and then requested that Home and Meet Nari integrate her directly into their paintings instead of layering standalone model cutouts. The current site therefore includes eight bespoke room paintings with seven integrated model-faithful Nari scenes, five painted Ghosties, three character-inclusive Home atmospheres, eight chapter postcards, replacement Nari icons, and eight route-specific painted social compositions. Every Nari illustration is anchored directly to the owner-supplied actual `Model_File.png`; original model derivatives, cozy artwork, official emotes, and all 27 original Prinny designs remain available.

This subsequent direction supersedes earlier statements below prohibiting every private-review Nari reillustration; it does not authorize public-reference-based likeness generation, replacement Prinnies, invented canon, fabricated nail portfolios, or public deployment. ADR-008 records the narrow authority and invariant character traits. [`24_STORYBOOK_ART_DIRECTION_AND_PROMPTS.md`](24_STORYBOOK_ART_DIRECTION_AND_PROMPTS.md) records the complete prompts and pipeline. Original artist rights, model derivative terms, Nari approval, public website permission, credits, and franchise review remain unresolved.

**Implementation date:** 2026-08-23
**Authority:** Repository owner's explicit instruction to use Nari's real model and original supplied Prinnies in this private repository review implementation
**Public-release status:** `BLOCKED` pending Nari approval, artist/owner attribution, exact website-use permissions, and underlying Prinny/franchise review

## What changed

Nari is no longer represented by a project-generated lookalike or a generic placeholder. Home uses her actual supplied full-body model; Meet Nari and the collaboration room use derivatives of that same real model; Haven, Support, and shared shell elements use her supplied cozy character artwork; expression moments use her supplied static emotes. Previously prepared Ghostie, room, nail, resources, work, state, UI, and social-preview artwork supports rather than replaces her identity.

The hidden Prinny Cult displays every one of the 27 supplied collection illustrations. Only resizing, metadata removal, and WebP delivery are applied to those designs. No generated replacement creatures, fabricated approved names, invented ranks, false character biographies, or newly asserted canon are introduced.

## Source authority and boundary

The project-owner-supplied archive identifies these source families:

- `Nari/Model_File.png`: actual 1789×4516 character model; SHA-256 `abbea0e43bb9d99f9cf8d9d2d7b4cc2153a730308b466e7c71f86c55ab5675a9`.
- `Nari/Assets/comfy.png`: supplied 1254×1254 cozy Nari illustration; SHA-256 `e3e40bc86dbaef9e67786548a667df0782d35063013742a8ea14c9a885cabbbf`.
- `Nari/emotes/Static Versions/*.png`: 12 supplied static Nari emote assets.
- `Nari/Assets/PrinnysForThrow/*.png`: exactly 27 supplied original Prinny collection images.
- Prior project artwork packages: individual Ghosties; stream, nail, resource, work, decorative, state, identity, UI, and social-preview support assets.

The archive is preserved outside the served web directory. `scripts/prepare-client-assets.sh` creates stripped local web derivatives. For the supplied opaque model only, it removes connected white backdrop regions and generates one transparent full-body derivative plus a portrait crop. The original files are not edited.

Private implementation authorization is not evidence of public republication, artist, copyright, franchise, model-version, credit, crop, social-preview, professional-use, or derivative approval. Production deployment must not occur until the appropriate owner and rights-holder approvals have been recorded.

## Route-by-route composition

| Route | Actual identity anchor | Supporting room/artwork | Honesty and interaction boundary |
|---|---|---|---|
| `/` | Supplied full-body Nari model | Three theme-specific illustrated Haven rooms, two Ghosties, lavender, verified social dock | One composed desktop viewport; no invented live state; natural mobile scrolling |
| `/meet-nari/` | Actual model portrait, supplied cozy artwork, five official emotes | Individual Ghosties and lavender | Neutral identity; no invented heritage, family, or lore |
| `/streams/` | Official panic emote and verified public media | Original illustrated stream desk, three stream-card scenes, cozy Ghostie | No invented schedule, autoplay, or embedded player |
| `/nail-studio/` | Official comfy emote | Dedicated nail environment, nail Ghostie, nail-tool illustrations, truthful empty-gallery art | No generated nail portfolio, client services, licenses, or health advice |
| `/haven/` | Supplied cozy Nari character artwork | Original illustrated common room and four individual Ghosties | Progressive community entry, consent, boundaries, optional hidden discovery |
| `/resources/` | Nari-specific Ghostie/identity context | Illustrated resource desk, helper Ghostie, category art, protective Ghostie | No fake products, undisclosed relationships, or fabricated endorsements |
| `/work-with-nari/` | Actual supplied model portrait | Illustrated creator desk and inquiry Ghostie | No invented metrics, sponsorships, credentials, email, or response promise |
| `/support/` | Supplied cozy Nari and three official emotes | Heart Ghostie and illustrated identity moments | Presence/free support first; money never grants access or ownership |
| `/stories/` | Two official static Nari emotes and verified real clips | Cozy story-time Ghostie | No scraped private memories, unauthorized community material, or invented events |
| `/the-prinny-cult/` | All 27 actual owner-supplied Prinny designs | Original cult room/seal/reward vectors | `noindex, nofollow`; optional; no invented approved names/ranks/bios; public rights unresolved |
| `/404.html` | Shared genuine cozy-avatar identity in shell | Illustrated lost-Ghostie error state | Clear exit, no indexing, no navigational trap |

## Themes and accessibility

`src/styles/_world.scss` assigns the same Home room three physical atmospheres: Nari's autumn sunset, a purple nighttime interpretation, and a warm daylight interpretation. Semantic CSS tokens, theme-color boot behavior, persisted theme choice, mobile menu, reduced-motion settings, visible focus, and real HTML-document navigation remain in the existing architecture.

Images have explicit dimensions, meaningful subject-specific alternative text or deliberately empty decorative alternatives, local optimized delivery, eager/high-priority character or room art only where appropriate, and lazy loading for secondary material. Broken remote media thumbnails fall back to an existing local illustrated stream card.

## Release gates that remain open

1. Nari approves final model version, first-person voice, identity wording, and final public page copy.
2. The exact model, cozy illustration, emote, logo, Ghostie, and supporting-art artists/owners are identified and credited as required.
3. Written permissions cover independent public website display, local hosting, required model backdrop/crop handling, compression, professional context, and social previews.
4. The 27 supplied Prinny designs receive artist, underlying-character, and any franchise-related public-use review; remove or gate the room if clearance is not granted.
5. Nari supplies approved photographs before any nail-art gallery is populated.
6. Final Discord, professional-contact, hosting/domain, privacy, and accessibility decisions are recorded.
7. Release-grade keyboard, screen-reader, reduced-motion, viewport, contrast, and production-host manual evidence is captured.

The implementation can be reviewed honestly without claiming that any of these external approvals already exists.
