# Responsive artwork performance pass — 2026-09-05

Status: implementation on PR #9, `kiva/nari-client-feedback-pass`. Review baseline: `1cc3f56d0db5ef434b2653d016cc22c5290e07ea`. This is a delivery/resilience change inside the existing private client-review scope. The Nari-only proposal and public-release blockers remain unchanged.

## Delivery contract

- Source artwork, Nari identity, Ghostie alpha, paintings, original dimensions, and existing face-safe crop coordinates are preserved. No redraw, new artwork family, recoloring, or route migration.
- `npm run artwork:prepare` runs `scripts/prepare-responsive-artwork.py` with Python/Pillow WebP support. This offline tooling adds no npm/runtime dependency and is not needed to build the committed output. Input is the retained local review artwork. It does not need access to private source archives.
- Resizing uses Lanczos, keeps the source aspect ratio, never upscales, and writes WebP without EXIF/XMP/ICC payloads. Encoding starts at quality 84 and steps down by two to a floor of 50 to satisfy the role's byte ceiling; failures stop generation. Inspect final crops after regenerating.
- `src/data/responsive-artwork.json` records source SHA-256, dimensions, alpha, and each derivative's dimensions, quality, bytes, and SHA-256. Candidate filenames include the first 16 hex characters of the encoded-content SHA-256.
- `public/media/responsive/` is the only newly added immutable cache scope. Existing originals retain their URLs and cache behavior. HTML retains the host’s existing revalidation default. No additional document cache rules are needed; immutable policy is limited to asset paths. Changing any encoded image changes its URL; do not overwrite bytes under an old hash. Remove obsolete generated copies only after confirming they are no longer referenced and considering old deployment retention.

## Slots and loading

| Role | Candidates | Selection |
|---|---|---|
| Ordinary chapter painting | 768, 1280, 1672 px | Shared CSS/picture/preload bands below |
| Home room rail | 128, 256 px | 88px desktop images; veiled narrow mobile/tablet rail is intentionally capped at 256px |
| Other postcards | 128, 256, 480, 768 px | Width srcset with per-layout sizes; lazy below-fold |
| Community Ghosties | 64, 128, 256, 512, 768 px | Explicit slot sizes; only shared header eager |
| Header Ghostie | Same Ghostie family | 48 CSS px (64px at DPR 1, 128px at DPR 2) |
| Home lavender sprig | 128, 256 px | Existing 96–200 CSS px decoration, max 256px |
| Haven interior | 320, 640, 768 px | Deferred until within 300px of viewport, focus, or knock |

All nine ordinary documents receive three **mutually exclusive** preload links; only the matching viewport band is eligible. The hidden room and 404 receive no speculative chapter preload. Source HTML remains authored in `pages/`; the Vite HTML transform injects preloads in both development and production from one route map.

| CSS viewport | 1x | 2x |
|---|---:|---:|
| Below 768px | 768 | 1280 |
| 768–1279px | 1280 | 1672 |
| 1280px and above | 1672 | 1672 (source-resolution cap) |

Hero backgrounds keep the original CSS geometry and use `image-set()`. The three existing image heroes use native `picture`/`source`, with the existing artwork container becoming the picture. Their CSS direct-child image selector no longer depends on `img` being the first child. `artworkDelivery.ts` owns identical media/density candidates for CSS, pictures, and preloads. The mobile width allowance accounts for `cover` in the existing art frames, rather than making a new face crop.

The Haven door keeps one continuous responsive `<img>` behind the door and in the final reveal. Before proximity/focus/interaction, its URL is absent from the DOM. One observer is disconnected after eligibility and on unmount. Browsers without IntersectionObserver load the interior immediately. Re-closing does not discard the already loaded image. Images never gate the three knocks or Discord action.

## Recovery and quality gates

Stale-chunk recovery attempts one automatic reload per tab/path until the document mounts successfully. Denied session storage disables automatic recovery. Persistent failures show a manual reload action instead of trapping the visitor in a loop. The storage value is only a local public pathname; no telemetry is sent.

The quality gate verifies actual encoded candidate byte limits, content hashes, source preservation, no upscaling, Ghostie alpha/dimensions, matching hero candidates, the conservative complete Home image composition budget, recovery behavior, all ordinary HTML preloads, and transitive production JS/CSS budgets. Originals retain their independent identity/transparency tests. Build accounting follows the Vite manifest and sums unique gzip-compressed files, excluding shared dependencies from each route's additional JS.

## Evidence and limitations

The final local gate passed on 2026-09-05: ESLint, strict Vue/TypeScript, 10 Vitest files / 56 tests, build, all 11 documents/routes, 28 required source identity/environment assets, 27 supplied Prinnies, and 121 responsive delivery candidates. Shared JS/CSS is 71.04 KB gzip; the largest route-only JS graph is Haven at 5.83 KB gzip.

The six-image Home desktop selection at DPR 1 is 184,942 bytes versus the review baseline of 1,369,582 bytes (86.5% smaller). This calculation uses the same six source roles, now with the 1672px hero, 64px header Ghostie, 256px sprig, and three 128px postcards. The conservative maximum of the capped Home composition is 218,148 bytes, below the 250,000-byte budget.

The Home painting is 146,078 bytes at 1672px and 78,940 bytes at 768px. The doorway candidates range from 50,174 to 143,944 bytes, versus the 710,702-byte original. The largest Home derivative was visually inspected; the full browser check is recorded separately. Local browser navigation could not connect to the scratch preview server, so no local viewport or Lighthouse result is claimed. File-byte savings are not measured LCP, Lighthouse scores, or network timing. The browser inspection surface does not expose a mobile/Lighthouse performance runner. A responsive iframe harness was prepared outside the repository, but could not be exercised through the local browser connection. No mobile CPU/network simulation or field p75 INP/LCP measurement is claimed. Production header behavior must be verified on the deployment.

## Review protocol and rollback

For a release benchmark, use a clean build without the Netlify review drawer, freeze Chrome/Lighthouse versions and mobile throttling, and run three cold-cache samples per route. Start with Home, Streams, Haven; report median and range for LCP/CLS/TBT and transfer/request counts, plus LCP element/subparts. Keep warm document navigation separate. Do not label lab TBT as field INP.

Rollback by reverting this performance commit as a unit. It preserves originals and does not require restoring art from an external archive. No merge or production release is included.

References: [MDN responsive preloads](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/preload), [MDN CSS image-set](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/image/image-set).

## Deployed verification — 2026-09-05

Implementation commit `ab826931a4393c41249b9bfa68cb8a7446d79697` passed GitHub Quality Gate #45 and Netlify preview deployment. The deployed Home DOM at 1363×936 CSS px/DPR 1 selects the expected 64px header Ghostie, 256px sprig, three 128px cards, and media-matched hero preloads. Home and Streams screenshots preserve the face-safe desktop composition with no horizontal overflow. The Streams picture selects its 1672px hashed candidate.

On Haven, the doorway began at y=1627px with no interior image in the DOM. After approaching/knocking, the 640px candidate loaded. All three steps completed, the Discord link appeared only after the third knock, exactly one loaded interior image filled the doorway, and Close reset the sequence. The final reveal was visually inspected.

HTTP verification caught redundant document cache rules overriding asset freshness on the preview. The follow-up removes those additions, retaining the original host HTML defaults and explicit hashed-asset cache scopes. Final live header evidence is recorded in the PR description. The Netlify review drawer remains host-added and is excluded from performance claims. Mobile viewport, screen-reader, zoom and Lighthouse measurements remain pending; no inference from desktop substitutes for those checks.
