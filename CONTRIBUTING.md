# Contributing

## Ground rules

1. Read `docs/13_HANDOFF_TO_SOL_HIGH.md` and `docs/00_PROJECT_SOURCE_OF_TRUTH.md` before changing product behavior.
2. Work on a focused branch. Do not mix content clearance, design changes, and dependency upgrades without a reason.
3. Preserve the true Vite MPA: real HTML entries and document navigation between top-level routes.
4. Do not add unlicensed character art, emotes, nail work, game imagery, sponsor marks, or public-CDN hotlinks.
5. Do not publish private identity, location, family, contact, or message data.
6. Do not invent lore, credentials, metrics, schedules, testimonials, partnerships, affiliate relationships, or services.

## Adding a page

- Add the HTML document and metadata.
- Add it to `pageEntries` in `vite.config.ts`.
- Add its lazy route in `src/router/index.ts`.
- Add navigation only if the information architecture calls for it.
- Add the document to `scripts/validate-build.mjs`.
- Update relevant docs and tests.

## Adding media

- Keep supplied originals untouched under `src/assets/source/` or the future canonical source bucket.
- Record owner, artist, permission, required credit, crop/derivative terms, and approval date.
- Strip EXIF/location metadata from web derivatives.
- Export responsive WebP/AVIF variants without upscaling.
- Set explicit dimensions and meaningful alt text; use empty alt for decorative images.

## Required validation

```bash
npm run check
```

Also inspect direct route loads, keyboard use, the three themes, reduced motion, 320/390/768px layouts, and outbound links before requesting review.
