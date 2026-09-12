# Credits and Copy Humanization

**Date:** 12 September 2026
**Baseline:** `main` at `d1b495cd8aa0be5aaaa8a9255e2bc756d9b5491e`
**Review branch:** `kiva/credits-humanization`
**Release status:** Client review only; public rights, contributor attribution and final Nari copy approval remain open

## What changed

`/credits/` is a twelfth real Vite document with its own metadata, lazy Vue route, secondary/footer navigation, ten-room journey entry and responsive paper-ledger composition. It renders from `src/data/artCredits.json` through the typed `artCredits.ts` projection. The page works without images and currently displays none: every related artwork family remains pending or blocked for public display.

The registry classifies supplied Nari art, model rigging, official emotes, channel graphics, Ghosties, supplied Prinnies, storybook Nari derivatives, storybook environments, future nail photography and website implementation. It records only public-safe information. Contracts, private messages, personal email, legal identity and approval evidence remain outside browser data.

## Validation contract

`npm run validate:credits` runs offline and rejects:

- duplicate or malformed group, family and credit IDs;
- unknown statuses, groups or family references;
- any meaningful family without a credit disposition;
- page-visible blocked records;
- malformed or non-HTTPS public links;
- verified records without a confirmed name and approved link;
- artwork display without an asset, or from a non-approved family;
- missing tracked public assets and asset-record references.

Known `pending` and family-level `blocked` states pass when they are explicit. This prevents unresolved work from masquerading as approval without making honest review states impossible to build.

## Humanization boundary

Copy was classified as established identity, structural copy, Nari-owned wording, volatile fact or honest placeholder. Home, Meet Nari, Nail Studio, Haven, Resources, Work With Nari and Story Time received shorter, more direct wording. Streams and Support were audited and left alone because their current copy already matches the established stream/support modes. No schedule, metric, anecdote, artist, contact detail, nail claim, quote or lore was invented.

## Observed evidence

- Fresh `npm ci`: passed.
- `npm run lint`: passed.
- `npm run typecheck`: passed.
- `npm run test`: passed with 76 tests in 16 files.
- `npm run build`: passed; 12 HTML documents validated and all JS/CSS graphs remained within budget.
- `npm run validate:credits`: passed with nine credit records and ten classified families.
- Full `npm run check`: passed, including 12 direct-served documents, 137 essential asset entries and all 27 retained supplied Prinny designs.

Chromium is not installed in the implementation environment. No screenshot, keyboard walkthrough, 320/390/768/wide visual result, zoom/reflow, screen-reader or contrast result is claimed. Those checks remain required before release.

## Still pending

- Original character/model, rigging, emote, channel-art and Prinny contributor names and approved public links.
- Exact required attribution wording and all underlying website/display/derivative/franchise permissions.
- Nari's final approval of public voice and edited copy.
- Real nail photography and its creator/rights/privacy records.
- Final manual accessibility, visual, link, host and release review.

Rollback is one normal revert of the implementation commit. It removes the Credits route, registry, validator and copy edits without touching retained source artwork.
