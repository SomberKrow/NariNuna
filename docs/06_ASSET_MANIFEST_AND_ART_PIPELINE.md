# Asset Manifest and Art Pipeline

**Audit date:** 2026-08-13.<br>
**Launch rule:** public visibility does not establish reproduction rights.

## Locally generated high-resolution placeholders

These files are original project placeholders, not canonical Nari artwork. Opaque environmental masters use visually high-quality WebP so the complete private repository remains portable through ordinary Git; the alpha mascot remains PNG. Replace them semantically when approved art arrives. Future supplied canonical originals must remain untouched in the owner-approved source archive even when Git stores only deployment-friendly derivatives.

| File | Dimensions / alpha | Size | Subject / crop | Current use | SHA-256 |
|---|---|---:|---|---|---|
| `src/assets/source/nari-haven-hero-environment-placeholder-v1.webp` | 1672×941 RGB | 124,930 B | Earlier photoreal-leaning late-fall Haven | Retained rollback source; superseded on Home | `651c64f3ffa8e7a0312559c6984e74fe87da482e999dc85e488d257ad57feb3c` |
| `src/assets/source/nari-haven-hero-environment-placeholder-v2.webp` | 1672×941 RGB | 142,972 B | Illustrated cozy-goth Haven; dark left copy zone; Ghosties and nail desk on right | Active Home hero | `8ef6d0bdb32eaadf8ed2ec35a0bcf2cc16946adc23ad39331d52d44d565db621` |
| `src/assets/source/ghostie-mascot-v1.png` | 1254×1254 RGBA | 598,496 B | Full lavender-white original spirit; square and small-scale legible | Placeholder mascot, icon, holds | `00b24ccb3f03fca3d618e4709961450ca6289447fcaabe18c6cfb0815c545105` |
| `src/assets/source/nari-nuna-nail-studio-editorial.webp` | 1568×1003 RGB | 97,886 B | Learning desk; left copy zone; no person, hands, finished nails, brand, or readable label | Nail Studio hero | `5f7b52295dabd9e9864e4c8a8b6bca7197f25a2130427acf23c67ab199e66d77` |

Quality: production-capable placeholders with clean compositions. High-resolution WebP placeholder records may intentionally share their Git blobs with the largest served derivatives; the mascot source is unique. Ownership/licensing: created for this project; final owner license remains to be formalized. They must not be represented as Nari's commissioned model, official Ghostie/emote, real room, or real nail work.

## Optimized derivatives

| Family | Files | Total strategy |
|---|---|---|
| Haven hero v2 | `public/media/generated/nari-haven-hero-v2-{640,1024,1440,1672}.webp` | Active `srcset`/`sizes=100vw`; 29–143 KB; 16:9; stripped metadata |
| Haven hero v1 | `public/media/generated/nari-haven-hero-{640,1024,1440,1672}.webp` | Unreferenced rollback family; retained until visual approval |
| Ghostie | `public/media/generated/ghostie-{128,256,512,768}.webp` | Preserved alpha; 2.9–33 KB; choose nearest non-upscaled display size |
| Nail Studio | `public/media/generated/nari-nail-studio-{640,1024,1568}.webp` | `srcset`; 26–98 KB; source aspect retained |
| Icons | `favicon.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` | Local Ghostie-derived placeholders with alpha |

Explicit width/height is set in markup. Above-fold hero uses `fetchpriority="high"`; noncritical local images use lazy loading. Source PNGs are never served to ordinary visitors.

## Art-request records

### Haven environment

- **Page/viewport:** Home, wide desktop and mobile crop.
- **Brief:** late-fall sunset, richly illustrated cozy-goth sleepover room, cocoa/plum architecture, lavender/rose textiles, pillow-fort clutter, warm window, bows/flowers, small original spectral visitors, and an environmental nail-practice desk.
- **Crop:** low-detail left third for HTML copy; narrative right side; safe 16:9 center crop.
- **Constraints:** no Nari likeness, logo, text, copyrighted character/mark, official emote recreation, scythe/skull/lore claim, cultural motif, or real/private room. Nail objects are environmental fiction and never portfolio work attributed to Nari.

### Nail Studio environment

- **Page/viewport:** Nail Studio flagship hero, approximately 16:10.
- **Brief:** warm learning desk, closed unbranded bottles, clean stored tools, abstract paper swatches/sketchbook, original tiny spectral helper.
- **Crop:** left third/upper-left quiet; detail right/lower-right.
- **Constraints:** no hands, person, finished manicure/press-on set, service claim, brand, unsafe handling, readable label, or medical implication.

### Original Ghostie placeholder

- **Use:** responsive interface mascot and empty-state helper, not a replacement for official emotes.
- **Brief:** one full lavender-white spirit, muted plum depth, tiny emerald eye glints, two arms, one curling tail, caring/sly expression, transparent square canvas.
- **Constraints:** no Nari traits, franchise resemblance, sheet-ghost scallops, logo, text, horror, or extra limbs.

## Public artwork audit: reference only

No creator-platform character/banner/panel/emote art is copied into the repo. Rights, artist permission, crop terms, local-hosting terms, and current/retired status remain unknown.

| Surface | Reference | Visible cue | Status |
|---|---|---|---|
| Linktree avatar | `ugc.production.linktr.ee/.../Nari-idle.png` | Chibi, mixed ears, emerald eyes, lavender/charcoal | Do not hotlink; original/rights required |
| Twitch profile/banner | `twitch.tv/nari_nuna` | Portrait and cozy pastel nail-bedroom composition | Commissioned; rights pending |
| X profile/banner | `x.com/Nari_Nuna` | Current CatDog portrait; nail-room crop | Rights pending |
| YouTube profile/banner | `youtube.com/@Nari_Nuna` | Cropped nail-room art | Platform crop, not source master |
| Discord icon/splash | Guild “Nari's Haven” | Chibi/icon and nail-room variant | Rights pending |
| Throne card | `throne.com/narinuna` | Chibi with hearts | Rights pending |
| Twitch emotes | `narinuHug`, `narinuHi`, `narinuRIP`, `narinuBlush`, `narinuRaid` | Pale friendly sheet-ghost family | Subscriber/platform assets; not website source |

Public Twitch credits currently identify model by Kansla (`@Kanslaaaa`), rigging by Toto (`@totochomp`), emotes by Haru (`@Harumiitsa`), banner by Famocii1 (`@famoccii1`), and panels by Mikiqt (`@namankung`). A later X post credits Xylnaeri for another emote pair. These are leads for permission/credit verification, not a license grant.

## Missing production assets

| Bucket | Needed before launch | Required metadata |
|---|---|---|
| Nari | current full render, portrait, optional expressions/lore art | owner, artist, current model version, credit, crops, derivatives, local hosting |
| Ghosties/emotes | canonical mascot sheet and approved interaction variants | artist per batch, platform/site rights, animation/derivative rules |
| Nails | original gallery and optional process/tutorial photos | creator/photographer, labels, date, permission, EXIF status, factual technique notes |
| Branding | logo/wordmark and site icon if one exists | source master, clear space, colors, dark/light rules, artist credit |
| Heritage | Nari-approved sun/moon source and copy if displayed | personal wording, exact asset, crop/derivative boundary |
| Professional | sponsor-safe portrait, media-kit art | usage window, approved brand context, credit |
| Content | approved clips/stories/community images | source URL, participant permission/redaction, rating |
| Secret | original/permitted joke art only | ownership and explicit non-franchise confirmation |

## Ingestion checklist

1. Quarantine incoming files outside the optimized public directory.
2. Record filename, source path, owner, artist, approval date, type, dimensions, bytes, alpha, visual subject, current/legacy status, and usage constraints.
3. Inspect visually; do not trust filenames. Identify duplicates by cryptographic hash and human comparison.
4. Confirm commercial website display, local hosting, responsive crops, compression, derivative/animation, artist credit, and AI-adjacent restrictions.
5. Strip EXIF/IPTC/GPS from web derivatives; preserve original privately according to owner policy.
6. Do not upscale. Export responsive WebP and optionally AVIF after visual comparison; preserve PNG for alpha/source only.
7. Use `subject-purpose-theme-width.ext`; keep canonical originals unchanged.
8. Set dimensions, `srcset`, `sizes`, loading priority, alt/caption, and failure behavior.
9. Test mobile crops and all themes; update this manifest and the relevant content record.

## YouTube thumbnail exception

Three `i.ytimg.com` thumbnails map directly to verified outbound YouTube Shorts in `src/data/media.ts`. They load as images only; no YouTube script, iframe, cookie, or autoplay player loads. Reconfirm media approval and platform requirements before public launch. If a thumbnail is unavailable, retain the text link or replace it with a local rights-cleared card image.

## Canonical invite note

Two public codes currently resolve to the same guild: `f25YtvtnbV` (packet/current implementation) and `7JPH2H7TGC` (YouTube). Either may be revoked despite reporting no expiration. Nari must choose one; the site must not silently rotate between codes.
