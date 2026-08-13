# Brand World and Art Direction

Read with `00_PROJECT_SOURCE_OF_TRUTH.md` and `06_ASSET_MANIFEST_AND_ART_PIPELINE.md`.

## World thesis

The interface is one physical-feeling Haven at different hours: an oversized late-fall sleepover room with cocoa wood, lavender textiles, pillows, blankets, warm window light, lamps, movies, creative clutter, and spectral visitors. It should feel cared for and lived in, not staged or coated in decoration.

Core words: warm, cozy, chaotic, cute, protective, autumnal, intimate, handcrafted, spectral, expressive, legible.

Emotional sequence: threshold → warm light → rooms → found family → hidden corners.

## Identity language

- Nari's public voice is affectionate, direct, playful, and protective.
- Cute spectral/reaper cues may be atmospheric, but no scythes, skulls, tombstones, or grimdark claims are canonical until the lore conflict is resolved.
- Current mixed cat/dog public traits are evidence, not permission to redraw Nari. Do not generate a Nari likeness.
- Ghosties can peek, hover, and remind people to hydrate. The current lavender Ghostie is an original placeholder, not an official emote recreation.
- Emerald marks insight, focus, safety, a selected state, or a meaningful reveal. It is never the page's bulk color.
- Sun/moon content uses Nari's words and approved personal art only. Generic “Aztec,” “Mayan,” or invented Indigenous motifs are banned.

## Current token palette

Tokens in `src/styles/_tokens.scss` are implementation decisions, not immutable brand standards.

| Role | Nari | Dark | Light |
|---|---|---|---|
| Background | `#2a1820` | `#130d13` | `#efe1cd` |
| Raised background | `#3b222e` | `#211522` | `#f8eddd` |
| Surface | `#f2dfcf` | `#e4d5dd` | `#fff8eb` |
| Text | `#f9ede2` | `#f4eaf1` | `#321f27` |
| Plum | `#8f607d` | `#71516f` | `#8b5e7b` |
| Lavender | `#c6a6d4` | `#aa8fc3` | `#9b79ad` |
| Ember | `#df8a55` | `#bd754c` | `#b95f35` |
| Emerald | `#4fc59e` | `#58c7a5` | `#167b62` |

Dark stays warm and material; Light is linen and wood, never stark white. Theme backgrounds use different light sources and ambient glows, while shared surfaces preserve spatial continuity.

## Typography

No licensed font files were supplied. The launch-safe implementation uses:

- Display: Iowan Old Style → Baskerville → Times New Roman → serif.
- Body: Inter if installed → system UI stack.
- Detail/eyebrow: system monospace stack.

Use display type for a few high-value headings, not entire paragraphs. Body copy targets comfortable 60–70-character lines. Do not add a webfont until its license, privacy implications, weights, and performance cost are documented.

## Composition

- Hero copy occupies a deliberate low-detail crop-safe zone; artwork carries narrative on the other side.
- Cards feel like warm objects or rooms, not glass dashboards.
- Alternate dense environmental sections with quiet reading sections.
- Decorations support hierarchy and should disappear before content does on mobile.
- Use rounded corners selectively (`0.55rem`, `1rem`, `1.75rem`, pills); avoid turning every element into a floating capsule.
- Shadows are warm/soft, not neon. Borders keep low-contrast surfaces distinct.

## Motifs

Allowed: window light, lamps, pillows, blanket folds, shelves, mugs, lavender sprigs, original spectral wisps, nail-desk materials, paper studies, framed moments, tiny emerald signals.

Restricted: sun/moon mark, canonical Nari likeness, official Ghostie/emotes, commissioned banners, finished nail art, sponsor marks. Use only after per-asset clearance.

Banned: Fairy Tail guild mark or visual imitation; Prinny/Disgaea imagery; copied anime/game reaction media; generic salon glamour; faux-heritage patterns; blood/gore; autoplaying video/audio; glassmorphism grids; streamer-neon overload.

## Theme direction beyond color

| Theme | Light source | Environmental cue | Interaction character |
|---|---|---|---|
| Nari | Sunset and amber lamps | Plum/cocoa textiles, fall window | Warm ember primary action, emerald discoveries |
| Dark | Moonlight and candles | Deeper plum, near-black brown, quieter glow | Softer motion, more spectral contrast |
| Light | Autumn afternoon | Cream/linen, pale wood, dusty rose | Crisp shadows, high-legibility ink |

Future theme-specific art should show the same room and composition where possible. Avoid swapping to unrelated wallpapers.

## Nail presentation

Nari's approved nail work should be treated as authored artwork:

- preserve original color and detail;
- show set title, date if approved, techniques/materials if factual, image credit, and optional tutorial/resource relationship;
- avoid beauty-ad retouching that changes the work;
- never use generated nails as portfolio items;
- never infer services, pricing, credentials, sanitation claims, or client work;
- use content warnings or practical safety notes where education involves allergy, chemical, or health topics; never provide medical diagnosis.

The current Nail Studio environment has no hands or finished nail set. It communicates learning atmosphere only.

## Placeholder replacement rules

1. Obtain the original file, owner, artist, credit line, website-display permission, local-hosting permission, crop/compression/derivative terms, AI-related restrictions, and current/retired status.
2. Add an unchanged source copy to the canonical source bucket.
3. Record it in the asset manifest.
4. Produce responsive derivatives without upscaling; strip EXIF.
5. Replace semantic alt/caption text with approved truth.
6. Test all themes and crops before removing the placeholder label.

Public platform CDNs are audit references, not a production DAM.
