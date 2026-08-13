# Project Source of Truth

**Authority:** This file outranks the rest of the documentation when product intent conflicts.<br>
**State:** Implemented foundation; production content clearance pending.<br>
**Evidence date:** 2026-08-13.

## Product thesis

Nari Nuna's Haven is a lived-in, late-fall refuge where one public identity—VTuber, gamer, self-taught nail artist, chaotic big sister, and community host—has multiple rooms. The emotional journey is arrival → comfort → curiosity → discovery → belonging. Professional visitors get a shorter path: credibility → fit → inquiry.

It is not a Linktree clone, generic VTuber template, corporate influencer page, pastel SaaS dashboard, grimdark site, salon storefront, or fan site for another franchise.

## Audiences

- Current Ghosties and Haven members.
- Viewers arriving from Twitch, YouTube, clips, or social profiles.
- Nail-art learners and people interested in Nari's process.
- Creators, collaborators, sponsors, and brands.
- Visitors who may choose to support Nari without pressure.

## Locked decisions

- True Vite multi-page architecture with real HTML documents and document navigation.
- Vue 3, TypeScript, Vite, SCSS, Vue Router, and Motion for Vue; no Tailwind or general UI kit.
- Public routes: Home, Meet Nari, Streams, Nail Studio, The Haven, Resources, Work With Nari, Support, and Story Time.
- Nari, Dark, and Light are persistent atmospheres in one Haven, not arbitrary skins.
- Fall sunset/early evening, lavender/plum/cocoa/cream, lived-in sleepover energy.
- Emerald is a sparse signature accent connected to Nari's character eyes.
- Sun/moon meaning stays personal to Nari's Mexicana heritage, family, people, and bloodline. No invented cultural history or decorative imitation.
- Nail learning is first-class. Current public copy supports “self-taught” and work on herself only; do not imply licensing, clients, services, medical authority, or credentials.
- The Haven centers kindness, respect, love, support, cooperation, boundaries, and treating people like people.
- Discord is progressively discovered in the Haven, not repeated as a global conversion button.
- Support is optional and never creates ownership, obligation, access, or a claim on Nari's time.
- No autoplay sound; no autoplay third-party embed; reduced motion and keyboard parity are mandatory.
- The Prinny Cult is hidden, no-index, original, optional, easy to exit, and contains no Disgaea/Prinny assets.

## Identity discrepancy: launch blocker

The approved packet describes Nari as a warm, joy-spreading Grim Reaper. Current first-party public profiles consistently describe and depict a half-cat/half-dog “CatDog” big-sister VTuber. Neither source explains how the identities connect.

Safe current public copy is “Nari, your chaotic big-sister VTuber.” The implemented Meet Nari page holds the lore chapter open and states the discrepancy plainly. Nari must provide canonical wording before either identity is expanded. Do not merge, supersede, or retcon them without approval.

## Terminology

| Term | Meaning and usage |
|---|---|
| Nari's Haven / the Haven | The website world and community room; capitalize as a proper name |
| Ghosties | Confirmed public community/mascot term; friendly collective, never donor tier |
| Nari theme | Fall sunset / early-evening default atmosphere |
| Dark theme | Same Haven at night, warm near-black/plum and moonlit restraint |
| Light theme | Same Haven on a bright autumn afternoon, cream/linen and warm daylight |
| Nail Studio | Creative and educational page; not a salon/services claim |
| Story Time | Data-driven featured stories and approved media moments |
| Work With Nari | Professional collaboration page; not “corporate” or “press” |

## Repository truth

| Item | Confirmed state |
|---|---|
| Canonical repository | `SomberKrow/NariNuna` (private) |
| Working branch | `agent/build-nari-haven` |
| Package manager | npm with committed `package-lock.json` |
| Runtime floor | Node.js 22.13+ |
| Framework | Vue 3.5.41 + TypeScript 5.9.3 |
| Routing | Vue Router 5.2.0 inside a true Vite 8.2.1 MPA |
| Motion | Motion for Vue 2.3.0; CSS for simple states |
| Styling | SCSS 1.102.0; no Tailwind |
| Validation | ESLint, `vue-tsc`, Vitest, Vite build, 11-document output validator |
| Deployment | Not locked in the GitHub source; keep output portable |
| Analytics/forms/CMS | None; do not imply collection or submission works |

The repository began empty. The current build has 11 HTML entries, a shared Vue shell, lazy page modules, three-theme preflight, responsive local imagery, security headers, a manifest, unit tests, CI, and this documentation suite.

## Route truth

| Document | Navigation status |
|---|---|
| `/` | Primary |
| `/meet-nari/` | Primary |
| `/streams/` | Primary |
| `/nail-studio/` | Primary |
| `/haven/` | Primary |
| `/resources/` | Primary |
| `/work-with-nari/` | Primary |
| `/stories/` | Footer/secondary |
| `/support/` | Footer/secondary |
| `/the-prinny-cult/` | Hidden; robots `noindex, nofollow` |
| `/404.html` | Hosting fallback |

## Asset truth

No Nari-supplied production artwork arrived with the packet. Existing creator-platform artwork was audited for visual cues and artist credits, but public visibility does not establish website reproduction rights. The build does not copy or hotlink Nari's model, commissioned banners, emotes, panels, logos, or nail work.

The repo contains three locally generated, visibly noncanonical placeholders: Haven environment, Ghostie mascot, and Nail Studio environment. They are locally hosted, documented, optimized, and replaceable. YouTube thumbnails are used only for three verified outbound Shorts; no player or tracking script loads.

See `06_ASSET_MANIFEST_AND_ART_PIPELINE.md` for exact files, hashes, sizes, rights status, and replacement procedure.

## Verified public destinations

- Linktree: <https://linktr.ee/NariNuna>
- Twitch: <https://www.twitch.tv/nari_nuna>
- YouTube: <https://www.youtube.com/@Nari_Nuna>
- VOD archive: <https://www.youtube.com/@NariNunaVod>
- X: <https://x.com/Nari_Nuna>
- TikTok: <https://www.tiktok.com/@narinuna>
- Instagram: <https://www.instagram.com/narinunagotu>
- Throne: <https://throne.com/narinuna>
- Discord candidate: <https://discord.com/invite/f25YtvtnbV>

Links were checked on 2026-08-13. Platform availability, handles, invite codes, and content can change; reverify at release.

## Non-goals and privacy boundary

Do not ship precise location, private/legal identity, private phone/email, family details, home or moving footage, private messages, raw EXIF, secrets, affiliate secrets, unapproved metrics, fake schedule, fake contact form, fabricated testimonials, medical claims, service pricing, or user-generated content without moderation and permission.

`VITE_*` values are public and may never contain credentials. There is no backend in this repository.

## Open items and safest defaults

| Open item | Blocks public launch? | Safest default |
|---|---:|---|
| CatDog ↔ Grim Reaper canonical lore | Yes | Keep neutral big-sister VTuber copy and the lore hold |
| Character/model art rights and current version | Yes | Keep original Ghostie placeholder; do not hotlink |
| Ghostie/emote ownership, variants, credits | Yes for canonical mascot claim | Keep generated character labeled as original placeholder |
| Real nail gallery + labels + permissions | Yes for flagship gallery | Keep empty-state/gallery hold; never fabricate work |
| Final Discord invite | Yes for community CTA | Reverify candidate at release and choose one canonical code |
| Business contact/media kit/metrics | Yes for active inquiry claims | Link to approved public hub/X; show no form or numbers |
| Fonts/logo/wordmark | No | Continue licensed system stacks and text wordmark |
| Schedule, stories, resources, affiliates | No | Show honest curating/no-schedule states |
| Hosting, analytics, legal copy, license | Yes for production operations | Keep static output portable; collect nothing |

## Conflict resolution

1. Nari's explicit current approval.
2. This source of truth.
3. Rights-cleared canonical source assets and current first-party facts.
4. Other documents in this suite.
5. Existing implementation details.

Unknown is acceptable. Fabricated certainty is not.
