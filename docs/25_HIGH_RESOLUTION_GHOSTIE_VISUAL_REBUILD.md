# High-Resolution Ghostie and Haven Visual Rebuild

**Date:** 2026-08-24  
**Scope:** Owner-authorized private-review artwork on the existing draft branch  
**Public release:** Still blocked pending the existing Nari, model-artist, artwork-rights, and credit approvals.

## Confirmed problem

The previous community Ghostie system stored five characters across each opaque `960 × 192` strip. Every individual Ghostie therefore started at only `192 × 192` before a browser canvas cropped it, enlarged it to `384 × 384`, and attempted to remove the painted paper background. The result was visibly soft, rectangular, and unnecessarily expensive to render.

The former scene pipeline also capped chapter paintings at `1680 × 1000` and encoded them at quality 82, even when a larger original master might be available.

## Approved visual identity

Every replacement Ghostie keeps the owner-approved character system:

- Simplified rounded cream sheet silhouette with a lavender scalloped hem.
- Dark-plum eyes, heart-shaped highlights, soft blush, and a small visible lavender scythe hairpin.
- Fine ink contour, tactile watercolor/gouache texture, warm amber edge light, and Nari's cozy lavender-and-autumn palette.
- Exactly one complete individually generated character per original image; no contact sheets or cutout crops.

Nari's integrated environment paintings use only the owner-supplied real model as their identity reference. Her emerald eyes, asymmetric dog/cat ears, chocolate-to-purple hair and tail, lavender outfit, black corset, and understated sun/moon jewelry remain fixed. This does not settle unresolved public lore or grant public derivative rights.

## Delivered character artwork

Twelve independently generated `1254 × 1254` Ghosties live in `public/media/ghosties/community/`:

`ghostie-sleeping.webp`, `ghostie-chaotic.webp`, `ghostie-protective.webp`, `ghostie-nail-tech.webp`, `ghostie-gaming.webp`, `ghostie-cozy.webp`, `ghostie-study.webp`, `ghostie-peek.webp`, `ghostie-heart.webp`, `ghostie-bonked.webp`, `ghostie-shy.webp`, and `ghostie-sign.webp`.

Every shipped character has a genuine WebP alpha channel. Where the image generator produced actual transparency, its alpha was preserved. Where the generator painted a checkerboard, only neutral background pixels connected to the image boundary were removed during asset preparation; the cream Ghostie body and its interior highlights remained intact. No background processing occurs in the browser.

The existing 19 semantic component variants remain supported. Closely related secondary variants intentionally reuse the nearest complete high-resolution original instead of inventing a crop or storing seven duplicate image files.

## Delivered page environments

Home, Meet Nari, Haven, and Streams each receive a completely independent `1672 × 941` native-resolution environmental composition. The homepage remains one physical room at sunset, midnight, and daybreak. Corresponding `960 × 540` postcards preserve the entire composition, while the mandatory `1200 × 630` social previews retain the full painting over a subtle extended background instead of cropping Nari out of frame.

Nail Studio, Resources, Work, and Stories retain their existing separately authored chapter paintings. The original owner-supplied model, original emotes, and all 27 supplied Prinny designs remain untouched.

## Rendering and verification contract

`src/components/art/GhostieArt.vue` renders each preprocessed original directly as a semantic `<img>` with intrinsic `1254 × 1254` dimensions, appropriate alternative text, lazy loading for non-header art, `object-fit: contain`, and existing theme-aware shadows.

`src/data/artwork.ts` provides typed `communityGhostieArtwork` mappings. `tests/artwork-contract.test.ts` verifies the 12 unique assets exist, each WebP carries its alpha feature flag, every image is exactly `1254 × 1254`, and the component contains no canvas, runtime flood fill, sprite-sheet reference, or cropping operation.

The existing source-preparation pipeline now accepts masters up to `2560 × 1440` without upscaling and uses higher-quality image encoding. Generated masters remain outside the repository, and no deployment, merge, or public-release permission is implied.
