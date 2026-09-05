# ASSET-2026-021 — Responsive delivery of retained review artwork

Date: 2026-09-05. State: implemented for existing client-review PR #9.

- Authority: Jake's request to apply the supplied 5 September performance review to PR #9. This is a resize/compression delivery operation, not a new artwork or public-release approval.
- Sources/owners/creators/rights: inherit the retained artwork family records ASSET-2026-016, 018, and 019 and the current community Ghostie records. Exact underlying artist, model-derivative, adoption, credit, and public-release restrictions remain unresolved wherever previously unresolved; no new attribution claim is introduced.
- Inputs: existing `public/media/storybook/{scenes,postcards}`, individual `public/media/ghosties/community` files (excluding strips), and `public/media/motifs/lavender-sprig.webp`.
- Output: 121 local WebP files in `public/media/responsive`; source masters and original review derivatives remain unchanged. No crop, recolor, redesign, animation, or upscaling. Alpha is preserved.
- Inventory: `src/data/responsive-artwork.json` contains complete original/derivative SHA-256 values, dimensions, role, alpha, encoded bytes, and encoder quality. Content hashes are part of all new URLs.
- Processing: Pillow 12.3.0, Lanczos, WebP method 6, quality 84 down to 50 as required by explicit role ceilings. Encoding writes no inherited EXIF, XMP, or ICC metadata. Existing public-safe filenames are retained as descriptive bases, with width/hash added.
- Placement: responsive chapter hero backgrounds/pictures, Ghostie slots, room rail/card/fallback art, lavender ornament, and proximity-loaded Haven doorway. Existing alt and credit behavior is preserved. No source images or remote art are ingested.
- Validation: encoded byte/hash/source-preservation and transparency/dimension tests pass; no fabricated visual approval. Full layout/benchmark limitations are recorded in `docs/33_RESPONSIVE_ARTWORK_PERFORMANCE.md`.
- Removal/rollback: revert the performance commit as a unit; original paths remain available. New public production clearance is not granted by this record.
