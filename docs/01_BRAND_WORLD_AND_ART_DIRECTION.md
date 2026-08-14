# Brand World and Art Direction

**Status:** `LOCKED` direction; canonical art `BLOCKED`  
**Owns:** Emotional world, visual grammar, theme atmosphere, illustration constraints, art briefs  
**Implementation files:** `src/styles/`, `src/pages/`, `src/assets/source/`, `public/media/generated/`  
**Update trigger:** Approved character/brand art, palette change, new motif, or changed visual identity

## World thesis

The interface is one physical-feeling Haven seen at different hours. Imagine an oversized late-fall sleepover room: cocoa wood, plum and lavender textiles, soft blankets, pillows, lamps, a warm window, movies, creative tools, harmless clutter, and spectral visitors with impeccable timing.

It should feel **cared for**, not staged; **warm**, not childish; **chaotic**, not noisy; **premium**, not corporate.

Core words:

> warm · autumnal · intimate · playful · protective · handcrafted · spectral · expressive · legible

Anti-words:

> generic · neon · glassy · sterile · grimdark · salon-glamour · franchise-copy · link-wall · influencer-template

## Emotional composition

Every major page should contain a balance of:

| Layer | Purpose | Typical expression |
|---|---|---|
| Refuge | Creates trust and calm | Warm surfaces, readable copy, generous breathing room |
| Personality | Makes it Nari | Direct copy, playful imbalance, Ghostie moments, emerald signals |
| Craft | Shows care | Intentional crops, detailed nail presentation, visible provenance |
| Spine | Preserves boundaries | Clear disclaimers, honest holds, strong focus states, no pressure |
| Discovery | Rewards curiosity | Rooms, doors, floorboards, selected reveals |

No single layer should swallow the others. A page made entirely of atmosphere becomes unusable; a page made entirely of cards loses the Haven.

## Identity language

- Nari is affectionate, direct, playful, protective, and capable of sharp honesty.
- Spectral/reaper atmosphere may appear as light, wisps, thresholds, or Ghosties, but canonical Grim Reaper claims wait for lore approval.
- Current CatDog traits are public evidence, not permission to redraw or remix Nari.
- The generated Ghostie is an original project placeholder, not an imitation of official emotes.
- Emerald indicates insight, focus, safety, selection, or a meaningful reveal. It is not a bulk background color.
- Sun-and-moon content uses Nari's approved words and art only. Generic “Aztec,” “Mayan,” or invented Indigenous styling is prohibited.

## The three atmospheres

All themes represent the same Haven. Layout, content, and spatial identity remain stable; light and material shift.

| Theme | Time | Light source | Material cue | Emotional use |
|---|---|---|---|---|
| Nari | Fall sunset / early evening | Amber window and lamps | Cocoa wood, plum textile, cream paper | Default welcome, warmth, energy |
| Dark | Late night | Moonlight, candles, restrained spectral glow | Near-black brown, deep plum, muted lavender | Quiet focus, mystery, secrets |
| Light | Autumn afternoon | Diffuse window daylight | Cream linen, pale wood, dusty rose | Clarity, craft detail, reading |

Future theme-specific environment art should preserve the room, camera, and subject position wherever possible. Swapping unrelated wallpapers breaks the world.

## Color philosophy

The implementation values live in `src/styles/_tokens.scss`; the complete token table and usage rules live in `04_DESIGN_SYSTEM_AND_COMPONENT_LANGUAGE.md`.

Proportional guidance for a typical page:

- 55–70% atmosphere/background family;
- 20–30% readable surface and text family;
- 5–12% plum/lavender/rose material accents;
- 2–6% ember actions and warmth;
- under 3% emerald signals.

This is compositional guidance, not a literal pixel audit. Emerald stops feeling meaningful when it becomes wallpaper.

## Typography character

The launch-safe stack is deliberately local/system-based:

- Display: Iowan Old Style → Baskerville → Times New Roman → serif.
- Body: Inter if installed → system UI stack.
- Detail: system monospace stack.

Display type provides warmth and editorial personality. Body type carries all long reading and controls. Monospace is seasoning for thresholds, status, verification, and labels.

Do not add a webfont until its license, hosting, weights, glyph coverage, privacy cost, and transfer budget are recorded. Never turn an entire page into display type or tiny tracked monospace.

## Composition rules

### Heroes

- One dominant sentence, one supporting paragraph, one primary action.
- Copy occupies a deliberately quiet crop-safe zone.
- Artwork carries narrative on the opposite side or behind a tested veil.
- Required meaning remains HTML; raster art is never the only source of text.
- On mobile, recompose the crop and order. Do not merely reduce the desktop hero.
- Final art replacement must be tested against the real `object-position` rules at 320, 390, 768, and wide desktop.

### Sections

- Alternate environmental/dense sections with quieter reading sections.
- Use asymmetry intentionally: unequal gateway cards, offset pillar, unexpected but stable room transitions.
- A section must have a job beyond “more cards.”
- Decorative density disappears before content, labels, or controls disappear.

### Surfaces

- Cards should feel like objects, doors, notes, shelves, or rooms.
- Opaque reading surfaces beat fragile glass effects.
- Warm shadows, low-contrast borders, and selective radii establish material depth.
- Pills are for compact controls/status, not every container.

## Motif library

### Approved atmosphere

- window and lamp light;
- cocoa wood, linen, blanket folds, pillows, shelves, mugs;
- lavender sprigs and fall texture;
- original spectral wisps and Ghosties;
- nail desk, paper studies, swatches, clean stored tools;
- framed moments, small keys, doors, floorboards;
- tiny emerald glints.

### Restricted until asset approval

- canonical Nari likeness or model details;
- official Ghosties/emotes;
- sun-and-moon mark;
- commissioned banners, panels, logos, or tattoo art;
- finished nail work;
- sponsor, product, or collaborator marks.

### Prohibited

- copied *Fairy Tail* guild marks, characters, or composition;
- Prinny/Disgaea imagery, silhouettes, typography, or sprites;
- copied anime/game reactions or meme assets;
- faux-Mesoamerican patterns or decorative heritage shorthand;
- gore, skull-wall grimdark, or horror ambushes;
- generic salon glamour and generated manicures presented as work;
- streamer-neon gradients, RGB battlestations, glass dashboards;
- autoplaying background video/audio;
- text embedded only in an image.

## Character and mascot policy

Do not generate a Nari likeness from public references. A canonical character render requires:

- current model/version confirmation;
- owner and artist identification;
- explicit website display and local-hosting permission;
- crop, compression, derivative, animation, and theme-treatment terms;
- required credit placement;
- retired/current status;
- AI-related use restrictions.

Ghosties can peek, hover, celebrate completion, or remind a visitor to hydrate. They do not nag, loop continuously, cover reading, replace a control label, or become a donor-status indicator.

## Nail-art direction

Approved nail work is authored artwork, not beauty-ad inventory.

Each set should preserve:

- accurate color and fine detail;
- title and creation date when approved;
- factual techniques/materials;
- creator/photographer credit;
- optional relationship to a guide/resource;
- original aspect and a detail-safe responsive crop;
- descriptive alt text based on visible design.

Never beauty-retouch the work into a different result. Never use generated nails as portfolio entries. Never infer services, clients, sanitation guarantees, or medical authority.

## Art briefs for missing canonical work

### Haven hero environment

**Purpose:** Home arrival and world establishment.  
**Composition:** Wide environment, quiet left third for HTML copy, narrative right side, 16:9-safe center crop.  
**Content:** Late-fall sunset, cocoa wood, plum/lavender textiles, pillow-fort/movie clutter, warm window, subtle original spectral life.  
**Avoid:** Nari likeness, readable text, logos, franchise motifs, private-room realism, visual clutter behind copy.

### Nail Studio environment

**Purpose:** Flagship creative-room hero.  
**Composition:** Approximately 16:10, quiet upper-left/left third, desk detail right/lower-right.  
**Content:** Clean learning desk, unbranded closed containers, stored tools, abstract paper swatches, sketchbook, original tiny spectral helper.  
**Avoid:** Hands, person, finished manicure, service setup, unsafe chemical handling, labels, brands, medical implications.

### Canonical Ghostie set

**Purpose:** Brand mascot, empty states, small completion delight.  
**Deliverables:** Master vector or high-resolution alpha raster, neutral pose, welcome, curious, celebratory, tired/hydrate, and approved interaction variants.  
**Requirements:** Legible at 32–48px, expression clear without color alone, no franchise resemblance, documented animation rights.

### Nari character pack

**Purpose:** Meet Nari, Home host note, professional-safe portrait, optional share art.  
**Deliverables:** Full render, waist/portrait crop, transparent master, theme-safe edge treatment, expression variants only if approved.  
**Requirements:** Current model, artist credit, crop zones, no essential details lost at mobile size.

## Review questions

Before accepting a visual change:

1. Does it make the site more recognizably Nari or more generically “VTuber”?
2. Is the asset canonical, permitted, credited, and current?
3. Is the subject still legible in all three themes and at mobile scale?
4. Does copy remain readable without baking text into art?
5. Is emerald still a signal rather than a flood?
6. Can the decoration be removed without losing the page's meaning?
7. Does the image reveal private location, identity, reflections, metadata, or handles?

If the answer is uncertain, keep the current honest hold and record the needed decision.
