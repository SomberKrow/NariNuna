# Owner-Directed Storybook Art Direction and Complete Prompts

**Date:** 2026-08-23

**Authority:** Explicit repository-owner direction recorded as ADR-008; private-review implementation only

**Public status:** `BLOCKED` pending Nari approval, original model-artist derivative terms, public website rights, credits, and release review
**Source reference:** Owner-supplied `Nari/Model_File.png` (SHA-256 `abbea0e43bb9d99f9cf8d9d2d7b4cc2153a730308b466e7c71f86c55ab5675a9`) and, where listed, supplied `Nari/Assets/comfy.png`; never public profiles or scraped artwork.

## Creative thesis

Nari's website should feel like an intimate, illustrated autumn visual novel inhabited by one unmistakable person—not a model cutout pasted over generic streamer UI. Its visual vocabulary is confident ink contour, softly layered gouache and watercolor, handmade paper grain, curved timber, plum velvet, candlelit libraries, dried botanicals, tiny moon/sun jewelry, mischievous original Ghosties, and the quietly protective warmth of a creative big sister.

The palette uses cocoa, deep aubergine, dusty lavender, dried persimmon, antique gold, and exceptionally restrained emerald. Nari, Dark, and Light remain one physical Home room at sunset, midnight, and daybreak; they are color-graded from the same master, not disconnected themes.

## Character invariants

Every illustration depicting Nari must preserve the actual supplied model's warm tan adult complexion, vivid emerald eyes, long chocolate-brown hair and blunt bangs with purple-gradient tips, asymmetric floppy dark dog ear and pointed cat ear with white tuft, fluffy chocolate-to-purple tail, off-shoulder lavender top with sheer balloon sleeves, tightly laced black corset, layered lavender/black skirt, distressed black thigh-highs, chunky black boots, subtle shoulder tattoo, delicate gold sun/moon jewelry, and expressive caring-adult demeanor. Never guess a replacement face, change ear symmetry, replace the tail, sexualize the subject, invent lore, introduce grimdark imagery, or use public reference images.

## Delivered visual families

| Family | Local destination | Visual job |
|---|---|---|
| Owner-authorized Nari reillustration | `public/media/storybook/characters/` | Transparent full-body landing composition, cropped editorial portrait, and square header portrait |
| Eight original painted chapter environments | `public/media/storybook/scenes/` | Integrated Home atelier and Meet Nari introduction, Haven gathering, stream studio, nail practice, resource library, collaboration correspondence, and lantern-lit stories |
| Three coherent Home hours | `haven-sunset.webp`, `haven-midnight.webp`, `haven-daybreak.webp` | One physical room with controlled atmosphere-only grading |
| Eight illustrated navigation postcards | `public/media/storybook/postcards/` | Rich, legible chapter-door compositions without cookie-cutter cards |
| Five original storybook Ghosties | `public/media/storybook/ghosties/` | Shy, chaos, cozy, nails, and heart companions; not claimed as official Nari emotes |
| Eight social-sharing compositions | `public/media/storybook/share/` | Route-specific 1200×630 Open Graph/Twitter JPEGs with WebP derivatives, including a distinct Meet Nari introduction |
| Four regenerated install icons | `public/{favicon,apple-touch-icon,icon-192,icon-512}.png` | Same model-anchored Nari portrait instead of a generic app mark |
| Preserved owner-supplied originals | `public/media/nari/`, `public/media/emotes/`, `public/media/prinny-cult/roster/` | Actual source-derived model/cozy artwork, official emotes, and all 27 unchanged Prinny designs |

The Home, Meet Nari, and five other chapter paintings integrate an identity-faithful Nari directly into each scene, referenced against her supplied actual model; neither Home nor Meet Nari layers an independent rendered character over a room. The resource-library painting intentionally focuses on original Ghostie librarians rather than a human. Nail Studio depicts an illustrated creative worktable and tools, never documentary photos, invented client results, or a claimed authentic portfolio.

## Reproducible local derivative pipeline

Preserve the non-served generated master paintings outside the git repository. Name each master after its prompt identifier below, then run:

```bash
bash scripts/prepare-storybook-assets.sh /path/to/approved-storybook-masters public/media
npm run check
```

The script removes only exterior-connected opaque checkerboard from transparent-subject generator output, preserves character and Ghostie light detail, strips metadata, creates appropriately sized WebP/JPEG derivatives, checks every encoded image for non-empty valid image data, derives all three Home atmospheres from the exact same physical room, refreshes install icons, and never edits the owner-supplied originals or Prinny roster.

## Complete image-generation prompt set

The following prompts are the actual inputs sent to the built-in image-generation/editing tool. Input-reference labels intentionally identify the approved owner-supplied source without exposing a private filesystem path.

### nari-storybook-fullbody

**Reference input:** owner-supplied actual `Nari/Model_File.png`; owner-supplied `Nari/Assets/comfy.png`

```text
Use case: identity-preserve
Asset type: premium transparent website hero character key art
Input images: Image 1 is the exact canonical full-body identity and clothing reference; Image 2 clarifies her friendly welcoming personality and exact asymmetric ears.
Primary request: Reillustrate this exact Nari character as breathtaking finished hand-painted anime-storybook key art, standing in an expressive natural three-quarter welcoming pose, one hand gently reaching toward the viewer and a small delighted smile. Entire body, both boots, both ears and complete tail must remain visible, isolated with generous breathing room.
Preserve EXACT identity from reference: warm tan adult woman with vivid emerald-green eyes; long chocolate-brown hair with blunt bangs and flowing distinctly purple-gradient tips; asymmetrical animal ears, one floppy dark-brown doglike ear on her left and one pointed catlike ear on her right with a white fluffy tuft; a very large fluffy chocolate tail fading to rich purple at its end; off-shoulder soft-lavender top with sheer balloon sleeves, tightly laced black corset, layered lavender and black skirt, distressed black thigh-high stockings, heavy black lace-up boots, delicate gold moon-and-sun waist charms and small gold necklace. Preserve facial identity, gentle affectionate big-sister personality, proportions, outfit details and silhouette; tasteful, confident, warm, never sexualized, no new fantasy horns, wings, weapon, crowns or invented lore.
Style/medium: Museum-quality hand-painted autumn storybook illustration fused with sophisticated 1990s anime visual-novel key art; confident ink contour, softly layered gouache and watercolor, tactile handmade paper grain, luminous indirect candlelight, purposeful asymmetrical composition, exceptional environmental storytelling. Cohesive palette of cocoa brown, deep aubergine, dusty lavender, dried persimmon, antique gold, and tiny emerald accents. Cozy, joyful, intimate, expressive, lived-in; never gothic, never corporate, never flat generic vector, never neon cyberpunk, never stock-photo, never template, never photoreal. No text, letters, logos, watermark, interface or fake screenshots.
Composition/framing: tall portrait, elegant flowing hair and tail silhouette, a real complete full-body character illustration fit for a high-end visual-novel cover.
Lighting: warm autumn-window rim light with subtle lavender bounce and tiny emerald eye glow.
Constraints: truly transparent alpha background, isolated single character only, NO background scene, NO floor, NO text. Maintain canonical character identity exactly.
```

### haven-sunset-master

**Reference input:** owner-supplied actual `Nari/Model_File.png`

```text
Use case: stylized-concept
Asset type: extremely premium wide-format desktop website landing-page environmental master
Input images: Image 1 provides Nari's actual outfit colors, warm cocoa/lavender personality, and expressive autumn mood; do not draw her in this scene.
Primary request: Create Nari's singular cozy autumn attic atelier at breathtaking feature-film background quality: dramatically tall curved timber window overlooking amber maple woods at late afternoon, softly glowing plum velvet window seat piled with mismatched handmade pillows, amber lanterns, trailing lavender bundles, crescent-and-sun jewelry trinkets, art and nail polish jars, tea cups, yarn, old storybooks, miniature friendly translucent Ghostie companions subtly tucked into the environment, delicate falling leaves, warm layered blankets and lived-in creative details.
Style/medium: Museum-quality hand-painted autumn storybook illustration fused with sophisticated 1990s anime visual-novel key art; confident ink contour, softly layered gouache and watercolor, tactile handmade paper grain, luminous indirect candlelight, purposeful asymmetrical composition, exceptional environmental storytelling. Cohesive palette of cocoa brown, deep aubergine, dusty lavender, dried persimmon, antique gold, and tiny emerald accents. Cozy, joyful, intimate, expressive, lived-in; never gothic, never corporate, never flat generic vector, never neon cyberpunk, never stock-photo, never template, never photoreal. No text, letters, logos, watermark, interface or fake screenshots.
Composition: ultra-wide cinematic 16:9 desktop hero; right two-thirds holds spectacular window/environment depth and the future character standing area; left third remains darker quieter naturally readable negative space for real coded headlines, but still feels like richly painted physical space; foreground depth framing, no empty fake gradients.
Lighting: cinematic golden-hour amber sun rays through leaves, plum shadows, lavender glow, atmosphere particles extremely subtle.
Constraints: no Nari/person, no text/signs, no letters, no logo, no flat vector shapes, no character collage, no phone interface.
```

### haven-common-room-master

**Reference input:** owner-supplied actual `Nari/Model_File.png`; owner-supplied `Nari/Assets/comfy.png`

```text
Use case: illustration-story
Asset type: immersive panoramic community page hero illustration
Input images: Image 1 anchors Nari's exact full-size face, ears, clothes and tail; Image 2 anchors her genuinely generous cozy host energy.
Primary request: Create an unforgettable emotionally resonant community scene: the same exact Nari sits sideways in a giant lavender pillow nest beneath an immense autumn window, offering a warm mug toward a cluster of charming little original pearl-white Ghostie companions; one Ghostie wrapped in a knitted blanket, one clutching a tiny heart, one shyly peeking from a book, one protectively holding the blanket edge. A soft refuge full of warmth, safety, laughter, mismatched pillows, trailing lavender, candlelight, autumn leaves, handwritten-feeling but completely illegible books, and handmade care.
Preserve EXACT identity from reference: warm tan adult woman with vivid emerald-green eyes; long chocolate-brown hair with blunt bangs and flowing distinctly purple-gradient tips; asymmetrical animal ears, one floppy dark-brown doglike ear on her left and one pointed catlike ear on her right with a white fluffy tuft; a very large fluffy chocolate tail fading to rich purple at its end; off-shoulder soft-lavender top with sheer balloon sleeves, tightly laced black corset, layered lavender and black skirt, distressed black thigh-high stockings, heavy black lace-up boots, delicate gold moon-and-sun waist charms and small gold necklace. Preserve facial identity, gentle affectionate big-sister personality, proportions, outfit details and silhouette; tasteful, confident, warm, never sexualized, no new fantasy horns, wings, weapon, crowns or invented lore.
Style: Museum-quality hand-painted autumn storybook illustration fused with sophisticated 1990s anime visual-novel key art; confident ink contour, softly layered gouache and watercolor, tactile handmade paper grain, luminous indirect candlelight, purposeful asymmetrical composition, exceptional environmental storytelling. Cohesive palette of cocoa brown, deep aubergine, dusty lavender, dried persimmon, antique gold, and tiny emerald accents. Cozy, joyful, intimate, expressive, lived-in; never gothic, never corporate, never flat generic vector, never neon cyberpunk, never stock-photo, never template, never photoreal. No text, letters, logos, watermark, interface or fake screenshots.
Composition: panoramic 16:9, strong intimate environmental depth, emotional centerpiece toward the right, naturally dark calm room at left for coded page title, expressive eye contact, no grid or collage.
Constraints: exact recognizably same Nari, original Ghostie species, no generated Prinny designs, no text, no logos.
```

### streams-atelier-master

**Reference input:** owner-supplied actual `Nari/Model_File.png`

```text
Use case: illustration-story
Asset type: premium cinematic Streams page illustrated hero
Input images: Image 1 is the exact canonical Nari identity reference.
Primary request: Paint the exact same Nari in her unmistakable cozy autumn streaming atelier, laughing mid-conversation at a beautifully organized cocoa-wood gaming desk, comfortable lavender gaming headphones, warm non-neon monitor light showing abstract generic game scenery without words or trademarks, a tiny Ghostie wearing miniature headphones beside a microphone, a controller hanging from a pegboard, handmade notes without readable text, dried leaves, fairy lights, tea, evening rain at a large timber window, and the charming slightly messy evidence of a passionate creator.
Preserve EXACT identity from reference: warm tan adult woman with vivid emerald-green eyes; long chocolate-brown hair with blunt bangs and flowing distinctly purple-gradient tips; asymmetrical animal ears, one floppy dark-brown doglike ear on her left and one pointed catlike ear on her right with a white fluffy tuft; a very large fluffy chocolate tail fading to rich purple at its end; off-shoulder soft-lavender top with sheer balloon sleeves, tightly laced black corset, layered lavender and black skirt, distressed black thigh-high stockings, heavy black lace-up boots, delicate gold moon-and-sun waist charms and small gold necklace. Preserve facial identity, gentle affectionate big-sister personality, proportions, outfit details and silhouette; tasteful, confident, warm, never sexualized, no new fantasy horns, wings, weapon, crowns or invented lore.
Style: Museum-quality hand-painted autumn storybook illustration fused with sophisticated 1990s anime visual-novel key art; confident ink contour, softly layered gouache and watercolor, tactile handmade paper grain, luminous indirect candlelight, purposeful asymmetrical composition, exceptional environmental storytelling. Cohesive palette of cocoa brown, deep aubergine, dusty lavender, dried persimmon, antique gold, and tiny emerald accents. Cozy, joyful, intimate, expressive, lived-in; never gothic, never corporate, never flat generic vector, never neon cyberpunk, never stock-photo, never template, never photoreal. No text, letters, logos, watermark, interface or fake screenshots.
Composition: premium panoramic 16:9 illustrated establishing shot, Nari on the right engaged with chat and Ghostie, open darker atmospheric left for actual coded page heading; film-level lighting and material depth.
Constraints: no logos/platform marks, no readable text, no screenshots, no cyberpunk lighting, no generic streamer RGB room, no generated Prinny.
```

### nails-atelier-master

**Reference input:** owner-supplied actual `Nari/Model_File.png`

```text
Use case: illustration-story
Asset type: distinctive editorial Nail Studio page hero illustration, clearly fictional supporting artwork rather than portfolio photography
Input images: Image 1 anchors Nari's real face, exact animal ears, purple-tipped hair, outfit and tail.
Primary request: Paint the same exact Nari happily concentrating at her own intimate autumn nail-art desk, selecting a dusty-lavender polish bottle, tools arranged as a beautifully personal artist's still life, glass glitter jars, dried lavender sprigs, copper scissors, warm desk lamp, ceramic tea cup, tiny pearl-white Ghostie carrying one oversized nail-polish brush, a rain-speckled autumn window, subtle star-shaped glitter reflections. This is a clearly illustrated creative-room scene, not a photograph and not presented as an actual finished nail portfolio; avoid detailed close-up manicures entirely.
Preserve EXACT identity from reference: warm tan adult woman with vivid emerald-green eyes; long chocolate-brown hair with blunt bangs and flowing distinctly purple-gradient tips; asymmetrical animal ears, one floppy dark-brown doglike ear on her left and one pointed catlike ear on her right with a white fluffy tuft; a very large fluffy chocolate tail fading to rich purple at its end; off-shoulder soft-lavender top with sheer balloon sleeves, tightly laced black corset, layered lavender and black skirt, distressed black thigh-high stockings, heavy black lace-up boots, delicate gold moon-and-sun waist charms and small gold necklace. Preserve facial identity, gentle affectionate big-sister personality, proportions, outfit details and silhouette; tasteful, confident, warm, never sexualized, no new fantasy horns, wings, weapon, crowns or invented lore.
Style: Museum-quality hand-painted autumn storybook illustration fused with sophisticated 1990s anime visual-novel key art; confident ink contour, softly layered gouache and watercolor, tactile handmade paper grain, luminous indirect candlelight, purposeful asymmetrical composition, exceptional environmental storytelling. Cohesive palette of cocoa brown, deep aubergine, dusty lavender, dried persimmon, antique gold, and tiny emerald accents. Cozy, joyful, intimate, expressive, lived-in; never gothic, never corporate, never flat generic vector, never neon cyberpunk, never stock-photo, never template, never photoreal. No text, letters, logos, watermark, interface or fake screenshots.
Composition: premium panoramic 16:9 painterly scene, left side naturally deep and legible for title, character and enchanting artist desk offset right, rich tactile detail.
Constraints: no nail clients, no salon signage, no realistic nail portfolio, no readable text, no logos, no manicured-hands closeup.
```

### resources-library-master

**Reference input:** none — original environment/Ghostie only

```text
Use case: stylized-concept
Asset type: premium Resources page environmental illustration
Primary request: A spectacular intimate autumn creator's library inside Nari's same cocoa-and-lavender attic: floor-to-ceiling curved wooden shelves, old notebooks, little corkboard index cards with no legible text, carefully labeled-by-color glass polish bottles, steaming lavender tea, cascading ivy and dried botanicals, tiny original white translucent Ghosties acting as charming librarians, one atop a stack of books, one shyly carrying a small lantern, warm golden window with amber maple leaves, meticulously layered paper scraps and well-loved creative tools.
Style: Museum-quality hand-painted autumn storybook illustration fused with sophisticated 1990s anime visual-novel key art; confident ink contour, softly layered gouache and watercolor, tactile handmade paper grain, luminous indirect candlelight, purposeful asymmetrical composition, exceptional environmental storytelling. Cohesive palette of cocoa brown, deep aubergine, dusty lavender, dried persimmon, antique gold, and tiny emerald accents. Cozy, joyful, intimate, expressive, lived-in; never gothic, never corporate, never flat generic vector, never neon cyberpunk, never stock-photo, never template, never photoreal. No text, letters, logos, watermark, interface or fake screenshots.
Composition: wide 16:9 editorial environment, calm dark copy-safe left, intricate warmly lit bookshelves and Ghostie storytelling on the right, no card-grid/template feel.
Constraints: no readable text, no invented product brands, no human/Nari substitute, no franchise creatures or Prinny.
```

### work-correspondence-master

**Reference input:** owner-supplied actual `Nari/Model_File.png`

```text
Use case: illustration-story
Asset type: elevated professional Work With Nari collaboration page cinematic hero
Input images: Image 1 provides the actual Nari identity, hair, ears, eyes, outfit and tail.
Primary request: Depict the exact same Nari seated thoughtfully at a beautiful cocoa-wood writing desk in her sunset atelier, confident and approachable, holding a fountain pen beside a closed blank-envelope letter, laptop closed, dried lavender, hand-drawn but illegible project notes, brass desk lamp, autumn garden beyond tall windows, a tiny white Ghostie earnestly carrying a small unmarked envelope. She is a genuine artist and collaborator, never a generic executive or corporate model. Environment feels welcoming, personal, organized and premium.
Preserve EXACT identity from reference: warm tan adult woman with vivid emerald-green eyes; long chocolate-brown hair with blunt bangs and flowing distinctly purple-gradient tips; asymmetrical animal ears, one floppy dark-brown doglike ear on her left and one pointed catlike ear on her right with a white fluffy tuft; a very large fluffy chocolate tail fading to rich purple at its end; off-shoulder soft-lavender top with sheer balloon sleeves, tightly laced black corset, layered lavender and black skirt, distressed black thigh-high stockings, heavy black lace-up boots, delicate gold moon-and-sun waist charms and small gold necklace. Preserve facial identity, gentle affectionate big-sister personality, proportions, outfit details and silhouette; tasteful, confident, warm, never sexualized, no new fantasy horns, wings, weapon, crowns or invented lore.
Style: Museum-quality hand-painted autumn storybook illustration fused with sophisticated 1990s anime visual-novel key art; confident ink contour, softly layered gouache and watercolor, tactile handmade paper grain, luminous indirect candlelight, purposeful asymmetrical composition, exceptional environmental storytelling. Cohesive palette of cocoa brown, deep aubergine, dusty lavender, dried persimmon, antique gold, and tiny emerald accents. Cozy, joyful, intimate, expressive, lived-in; never gothic, never corporate, never flat generic vector, never neon cyberpunk, never stock-photo, never template, never photoreal. No text, letters, logos, watermark, interface or fake screenshots.
Composition: wide 16:9 cinematic editorial composition, Nari and desk placed toward right, organically quiet left copy-safe area.
Constraints: no logos, no readable text, no invented brands or credentials, no office tower or corporate photography.
```

### stories-lantern-master

**Reference input:** owner-supplied actual `Nari/Model_File.png`

```text
Use case: illustration-story
Asset type: cinematic Story Time page environment
Input images: Image 1 provides the exact original Nari appearance.
Primary request: The same exact Nari relaxing in a vast lavender blanket fort at early autumn evening, reading an illustrated but textless old book by warm lantern light while three tiny original friendly white Ghosties float nearby in fascination; one curled around a cocoa mug, one wearing a little leaf, one peering at the page. Timber attic window, constellations beyond dusk, amber maple leaves, piles of worn pillows and handmade quilts, intimate magical found-family warmth.
Preserve EXACT identity from reference: warm tan adult woman with vivid emerald-green eyes; long chocolate-brown hair with blunt bangs and flowing distinctly purple-gradient tips; asymmetrical animal ears, one floppy dark-brown doglike ear on her left and one pointed catlike ear on her right with a white fluffy tuft; a very large fluffy chocolate tail fading to rich purple at its end; off-shoulder soft-lavender top with sheer balloon sleeves, tightly laced black corset, layered lavender and black skirt, distressed black thigh-high stockings, heavy black lace-up boots, delicate gold moon-and-sun waist charms and small gold necklace. Preserve facial identity, gentle affectionate big-sister personality, proportions, outfit details and silhouette; tasteful, confident, warm, never sexualized, no new fantasy horns, wings, weapon, crowns or invented lore.
Style: Museum-quality hand-painted autumn storybook illustration fused with sophisticated 1990s anime visual-novel key art; confident ink contour, softly layered gouache and watercolor, tactile handmade paper grain, luminous indirect candlelight, purposeful asymmetrical composition, exceptional environmental storytelling. Cohesive palette of cocoa brown, deep aubergine, dusty lavender, dried persimmon, antique gold, and tiny emerald accents. Cozy, joyful, intimate, expressive, lived-in; never gothic, never corporate, never flat generic vector, never neon cyberpunk, never stock-photo, never template, never photoreal. No text, letters, logos, watermark, interface or fake screenshots.
Composition: wide cinematic 16:9, visual center offset right, shadowed gentle negative space left for coded title; sophisticated depth and quiet narrative.
Constraints: no readable writing, no logos, no Prinny replacements, no random extra humans.
```

### ghostie-shy-storybook

**Reference input:** none — original environment/Ghostie only

```text
Use case: stylized-concept
Asset type: single transparent illustrated mascot character cutout
Primary request: One breathtaking adorable original little pearl-white floating Ghostie spirit, soft translucent rounded fabric-like silhouette, shy expressive tiny dot eyes, holding a small lavender sprig close with tiny floating hands, blushing softly, quietly curling its tail inward. This is the shy companion in Nari's autumn atelier.
Style: Museum-quality hand-painted autumn storybook illustration fused with sophisticated 1990s anime visual-novel key art; confident ink contour, softly layered gouache and watercolor, tactile handmade paper grain, luminous indirect candlelight, purposeful asymmetrical composition, exceptional environmental storytelling. Cohesive palette of cocoa brown, deep aubergine, dusty lavender, dried persimmon, antique gold, and tiny emerald accents. Cozy, joyful, intimate, expressive, lived-in; never gothic, never corporate, never flat generic vector, never neon cyberpunk, never stock-photo, never template, never photoreal. No text, letters, logos, watermark, interface or fake screenshots. Hand-painted watercolor/gouache anime-storybook character with nuanced lavender and amber reflected light, delicate fine ink contour, warm cream body, emotionally specific personality.
Composition: exactly one full isolated character, generous margin, square crop.
Constraints: truly transparent alpha background, NO ground, NO surrounding props except its one lavender sprig, NO text, NO humans, NO franchise characters, NO collage.
```

### ghostie-chaos-storybook

**Reference input:** none — original environment/Ghostie only

```text
Use case: stylized-concept
Asset type: single transparent illustrated mascot character cutout
Primary request: One original tiny pearl-white floating Ghostie caught in a hilariously affectionate moment of chaos, mischievous delighted eyes, little hands in the air, a single copper-orange autumn leaf stuck on its head, body twisting mid-laugh, a few tiny lavender watercolor sparkles.
Style: Museum-quality hand-painted autumn storybook illustration fused with sophisticated 1990s anime visual-novel key art; confident ink contour, softly layered gouache and watercolor, tactile handmade paper grain, luminous indirect candlelight, purposeful asymmetrical composition, exceptional environmental storytelling. Cohesive palette of cocoa brown, deep aubergine, dusty lavender, dried persimmon, antique gold, and tiny emerald accents. Cozy, joyful, intimate, expressive, lived-in; never gothic, never corporate, never flat generic vector, never neon cyberpunk, never stock-photo, never template, never photoreal. No text, letters, logos, watermark, interface or fake screenshots. Rich handcrafted watercolor, fine ink contours, coherent with a sophisticated warm autumn-anime storybook creator site, expressive rather than plastic emoji.
Composition: one isolated whole character with comfortable padding, square framing.
Constraints: genuine transparent alpha background, NO background, NO floor, NO text, NO other characters, NO franchise or Prinny.
```

### ghostie-cozy-storybook

**Reference input:** none — original environment/Ghostie only

```text
Use case: stylized-concept
Asset type: single transparent illustrated mascot character cutout
Primary request: One exquisitely charming original pearl-white Ghostie wrapped in an oversized dusty-lavender knitted scarf, carefully holding a tiny steaming cocoa mug, sleepy content eyes, small floating curved tail, one copper maple leaf tucked into the scarf.
Style: Museum-quality hand-painted autumn storybook illustration fused with sophisticated 1990s anime visual-novel key art; confident ink contour, softly layered gouache and watercolor, tactile handmade paper grain, luminous indirect candlelight, purposeful asymmetrical composition, exceptional environmental storytelling. Cohesive palette of cocoa brown, deep aubergine, dusty lavender, dried persimmon, antique gold, and tiny emerald accents. Cozy, joyful, intimate, expressive, lived-in; never gothic, never corporate, never flat generic vector, never neon cyberpunk, never stock-photo, never template, never photoreal. No text, letters, logos, watermark, interface or fake screenshots. Beautiful watercolor-and-gouache illustrated mascot with delicate visible handmade paper-like paint details and subtle amber window rimlight.
Composition: full single character centered with gentle breathing room, square.
Constraints: true transparent background, no floor, no letters, no logos, no character collage, no franchise.
```

### ghostie-nails-storybook

**Reference input:** none — original environment/Ghostie only

```text
Use case: stylized-concept
Asset type: single transparent illustrated mascot character cutout
Primary request: One delightful original pearl-white Ghostie wearing a tiny lavender artist apron and holding a miniature unbranded polish bottle and paintbrush, very proud excited expression, soft body floating, a subtle emerald heart-shaped sparkle, no human hands and no manicure.
Style: Museum-quality hand-painted autumn storybook illustration fused with sophisticated 1990s anime visual-novel key art; confident ink contour, softly layered gouache and watercolor, tactile handmade paper grain, luminous indirect candlelight, purposeful asymmetrical composition, exceptional environmental storytelling. Cohesive palette of cocoa brown, deep aubergine, dusty lavender, dried persimmon, antique gold, and tiny emerald accents. Cozy, joyful, intimate, expressive, lived-in; never gothic, never corporate, never flat generic vector, never neon cyberpunk, never stock-photo, never template, never photoreal. No text, letters, logos, watermark, interface or fake screenshots. Luxuriously hand-painted watercolor and gouache, graceful ink lines, sophisticated visual-novel charm, emotionally expressive.
Composition: one isolated full mascot, square with generous transparent padding.
Constraints: actual transparent alpha background, no set or floor, no readable label, no text, no franchise.
```

### ghostie-heart-storybook

**Reference input:** none — original environment/Ghostie only

```text
Use case: stylized-concept
Asset type: single transparent illustrated mascot character cutout
Primary request: One original friendly pearl-white Ghostie hugging a small handmade soft-copper heart pillow, reassuring warm eyes, gently waving with one little hand, delicate lavender reflected edge light, a tiny dried autumn leaf tucked beside the heart, radiating safety, care and welcome.
Style: Museum-quality hand-painted autumn storybook illustration fused with sophisticated 1990s anime visual-novel key art; confident ink contour, softly layered gouache and watercolor, tactile handmade paper grain, luminous indirect candlelight, purposeful asymmetrical composition, exceptional environmental storytelling. Cohesive palette of cocoa brown, deep aubergine, dusty lavender, dried persimmon, antique gold, and tiny emerald accents. Cozy, joyful, intimate, expressive, lived-in; never gothic, never corporate, never flat generic vector, never neon cyberpunk, never stock-photo, never template, never photoreal. No text, letters, logos, watermark, interface or fake screenshots. Sophisticated gouache/watercolor storybook character rendering, expressive rounded silhouette, subtle fine ink edge.
Composition: exactly one complete isolated character with ample breathing room, square.
Constraints: genuinely transparent alpha background, no scenery, no floor, no words, no other characters, no franchise.
```

## Owner-requested integrated Home and Meet Nari revision

The owner explicitly preferred the existing chapter paintings where Nari is painted directly into the environment over a separate full-body or portrait character overlay. Home now uses a new integrated autumn-window painting, with midnight and daybreak graded from that identical character-inclusive composition. Meet Nari uses a distinct integrated art-table introduction painting. Both layouts contain no independent Nari model image or floating character cutout; the actual source-derived model and original emotes remain available elsewhere. Meet Nari also receives its own dedicated postcard and Open Graph/Twitter sharing artwork.

### home-integrated-nari-master

**Reference inputs:** Owner-supplied actual `Nari/Model_File.png`; previously approved project-owned storybook environment compositions for style and architecture only.

```text
Use case: illustration-story
Asset type: flagship homepage full-bleed 16:9 website environmental key art with Nari physically integrated into the painting
Input images: Image 1 is Nari's actual supplied model and the inviolable identity reference; Image 2 is the existing autumn attic/home architecture to evolve into the new composition; Image 3 is the approved painted style and an example of Nari convincingly integrated into her room. Use only Image 1 for her true identity and outfit.
Primary request: Paint an unforgettable welcoming establishing scene for Nari Nuna's Haven. Nari naturally sits curled on the deep plum window-seat in the RIGHT 55% of her intimate autumn attic, turned three-quarters toward the visitor with a warm mischievous caring-big-sister smile, one hand holding a steaming cocoa mug and the other gently greeting a tiny original white rounded Ghostie; her fluffy purple-tipped tail wraps beautifully across the cushions. She is visibly present from head through most of her legs at a natural environmental scale, not an oversized headshot. Warm late-afternoon orange maple trees shine beyond a tall curved timber window; add layered handmade quilts, cozy pillows, quiet dangling sun/moon ornaments, trailing lavender, small art supplies, richly crafted wooden shelves, and two or three tiny friendly original Ghosties organically in the room.
Subject invariants: Nari is the EXACT same adult woman as Image 1: warm tan complexion, vivid bright emerald-green eyes, long chocolate-brown hair with blunt bangs and unmistakable purple-gradient tips, strictly asymmetric ears (floppy dark-brown dog ear on her left; pointed cat ear with white fluffy tuft on her right), fluffy chocolate-brown tail fading rich purple, off-shoulder lavender top with translucent balloon sleeves, tightly laced black corset, layered lavender-and-black skirt, distressed sheer black thigh-high stockings, chunky black lace-up boots, delicate gold sun-and-moon waist charms and necklace, subtle shoulder tattoo. Preserve all identifying features and correct adult proportions. She must appear as one naturally hand-painted part of the scene, never a pasted overlay, sticker, floating model, pasted chibi, split-panel, or transparent-cutout.
Style: Museum-quality hand-painted autumn storybook fused with sophisticated 1990s anime visual-novel key art: confident fine ink contour, softly layered gouache and watercolor, tactile handmade-paper grain, believable integrated perspective and contact shadows, glowing amber lanterns, cocoa brown, deep aubergine, dusty lavender, dried persimmon, antique gold, very restrained emerald accents. Cozy, intimate, expressive, inhabited, warm and protective; never gothic, corporate, stock-photo, flat vector, neon, hyperreal, sexualized, or generic.
Composition: premium ultra-wide cinematic 16:9 website hero. Keep LEFT 40% intentionally dark, softly textured and calm with subtle cocoa shelving/wall, preserving a genuinely clean low-detail copy-safe vertical zone for large coded name, short copy, six social buttons and CTA; do not place Nari, bright windows, bright Ghosties, faces, high contrast objects or important illustration detail in this LEFT 40%. Place Nari centered around 70-76% horizontal and 43-58% vertical, with her face and asymmetric ears fully visible and clearly away from the right edge; window provides luminous autumn depth around her but never washes out her face. Keep lower 15% relatively quiet for three navigation tiles. Environment and subject share exact coherent light direction, proportions, brushwork and grounded contact shadows.
Lighting/mood: amber sunset from the right/rear, gentle lavender bounce, safe and comforting, expressive alive.
Constraints: no text, letters, logos, signature, watermark, UI mockup, person other than Nari, franchise creatures, Prinnies, real nail-photo claims, composited character cutout, or duplicated arms/tails.
```

### meet-nari-integrated-master

**Reference inputs:** Owner-supplied actual `Nari/Model_File.png`; previously approved project-owned storybook environment compositions for style and architecture only.

```text
Use case: illustration-story
Asset type: dedicated Meet Nari page full-bleed 16:9 personal-introduction painting with Nari naturally painted inside her own intimate creative room
Input images: Image 1 is the actual supplied Nari model and strict face/body/outfit/identity source; Image 2 demonstrates the accepted fully integrated Nari-in-room storybook style; Image 3 provides the cohesive Haven architecture and autumn atmosphere. Do not invent a different person or character.
Primary request: Create a distinct, intimate visual-novel introduction portrait that feels like catching Nari in a candid joyful moment inside her lived-in creative attic. In the RIGHT 55% of the canvas Nari sits at a cozy round wooden art table beside a softly glowing autumn window, leaning warmly toward the visitor with one hand resting around a tea mug and the other hand lightly beckoning; include her expressive emerald eyes, asymmetric ears, softly blushing delighted smile, purple-tipped hair, unmistakable lavender/corset outfit, and fluffy purple-tipped tail curling around the chair. Surround her naturally with dried lavender, a small sketchbook without legible text, scattered paintbrushes, a delicate hanging sun/moon charm, layered knitted blanket, candle lantern, and one original gentle white Ghostie perched nearby. Treat it as a believable painted conversation, not a product shot, bridal glamour, beauty ad, or stage performance. Frame from upper legs/waist upward with the whole head, ears, both hands, and clear tail presence visible.
Subject invariants: Nari is the EXACT same adult woman as Image 1: warm tan complexion, vivid bright emerald-green eyes, long chocolate-brown hair with blunt bangs and unmistakable purple-gradient tips, strictly asymmetric ears (floppy dark-brown dog ear on her left; pointed cat ear with white fluffy tuft on her right), fluffy chocolate-brown tail fading rich purple, off-shoulder lavender top with translucent balloon sleeves, tightly laced black corset, layered lavender-and-black skirt, distressed sheer black thigh-high stockings, chunky black lace-up boots, delicate gold sun-and-moon waist charms and necklace, subtle shoulder tattoo. Preserve all identifying features and correct adult proportions. She must appear as one naturally hand-painted part of the scene, never a pasted overlay, sticker, floating model, pasted chibi, split-panel, or transparent-cutout.
Style: Museum-quality hand-painted autumn storybook fused with sophisticated 1990s anime visual-novel key art: confident fine ink contour, softly layered gouache and watercolor, tactile handmade-paper grain, believable integrated perspective and contact shadows, glowing amber lanterns, cocoa brown, deep aubergine, dusty lavender, dried persimmon, antique gold, very restrained emerald accents. Cozy, intimate, expressive, inhabited, warm and protective; never gothic, corporate, stock-photo, flat vector, neon, hyperreal, sexualized, or generic.
Composition: premium landscape 16:9 cinematic page-header painting. Reserve LEFT 42% as genuinely subdued darker uncluttered copy-safe cocoa shelving and soft plum shadow with very low local contrast, so real coded white introduction heading, paragraph, role chips and button remain readable; no face/window/bright Ghostie/significant subject in that left zone. Place Nari's face approximately 68% across and 43% down the image, unmistakably integrated at medium scale rather than full-bleed giant closeup. Keep important face and ears inside central 55%-85% horizontal safe zone to remain visible in responsive crops. Window and autumn amber illuminate her from the right, matching every shadow, color edge, brushstroke and perspective. This must be a different room composition and pose than the Home and existing Haven scenes, but clearly the same world.
Lighting/mood: quiet golden hour, thoughtful, joyful, deeply personal and creatively expressive, protective older-sister warmth.
Constraints: no written text, signs, letters, signature, watermarks, logos, interface, photo realism, invented lore, false nail portfolio, official emote copying, franchise creature, generic unknown anime character, floating rendered model, separate cutout, duplicated fingers, or other human.
```

## Truth, ownership, and launch gates

The resulting Nari imagery is a new owner-authorized model-derived illustration, not the original artist's untouched model. Original artist ownership, model license, AI/derivative restrictions, independent public display/local hosting, required credits, commercial/professional contexts, Nari's portrayal approval, and all Prinny/franchise rights remain unresolved. No generated nail portfolio, schedule, metric, testimonial, sponsor, private detail, canonical lore, or counterfeit official emote is introduced. Keep the repository pull request in draft and do not deploy, merge, or represent this private-review direction as a cleared public release.
