# Accessibility, Performance, Privacy, and Security

## Accessibility target

Target WCAG 2.2 AA for public launch, verified with automation plus keyboard, screen-reader, zoom, contrast, reduced-motion, and multi-viewport manual checks. A passing build is not an accessibility audit.

### Structure and keyboard

- One primary `<main>` and one meaningful `h1` per document view.
- “Skip to content” is first focusable shell control and becomes visible on focus.
- Header, theme group, mobile menu, Haven door, floorboard, secret oath, and Ghostie use native buttons/anchors.
- Every external new-tab link has destination text and an “opens in a new tab” cue.
- Visible 3px focus ring with 4px offset; never remove it for mouse aesthetics.
- Mobile menu exposes `aria-expanded` and `aria-controls`, closes on Escape, and locks background scroll. Before release, confirm focus order and add focus containment/return only if testing shows the full-screen panel needs it.
- No required content or action depends only on hover, pointer precision, animation, color, or a secret keyboard shortcut.

### Contrast and zoom

Review every text/control state in Nari, Dark, and Light themes. Minimum target is 4.5:1 for ordinary text and 3:1 for large text, focus, and meaningful UI graphics. Environmental hero veils are part of the contrast solution and must be retested when art changes.

At 200% text zoom and 400% page zoom, navigation, headings, buttons, holds, and interactive cards must reflow without horizontal page scrolling or clipped controls. Monospace detail text may not carry essential instructions by itself.

Semantic text/background token pairs are protected by `tests/theme-contrast.test.ts`. This guards ordinary text at 4.5:1 and focus/meaningful UI at 3:1, but it does not replace manual measurement over gradients, imagery, hover states, or final artwork.

### Images and media

- Decorative environment imagery uses empty alt when adjacent HTML supplies meaning.
- Informative Nari/nail/community art uses concise subject/function alt; captions hold credit/context instead of stuffing alt.
- Nail work alt describes visible design/material/color, not inferred quality or medical condition.
- Explicit dimensions reserve layout space.
- Remote thumbnail failure leaves a readable outbound card.
- No critical text exists only inside raster art.

### Motion

Honor `prefers-reduced-motion`. Essential state changes remain and decorative transforms stop. No flashing, strobing, autoplay sound/video, parallax dependency, or infinite sprite loop. See `09_INTERACTION_AND_MOTION_SPEC.md`.

## Performance budgets

Budgets are release gates, not aspirational averages:

| Budget | Target |
|---|---:|
| Shared entry JS + CSS (gzip, excluding images) | ≤ 120 KB |
| Any initial route-specific JS (gzip) | ≤ 35 KB |
| Home above-fold image | ≤ 160 KB at wide desktop; smaller responsive choice on mobile |
| Other single web image | ≤ 150 KB unless approved detail work justifies more |
| First-viewport local image total | ≤ 250 KB |
| Third-party JS/iframes on initial load | 0 |
| Cumulative layout shift | < 0.1 target |
| Largest contentful paint | < 2.5s p75 target after real-host measurement |

Observed local build on 2026-08-13: shared main JS ~59 KB gzip, icon helper ~24 KB gzip, CSS ~7.6 KB gzip, hero derivative ≤125 KB. These are point-in-time measurements, not production field data.

Use responsive WebP/AVIF where visual comparison supports it, no upscaling, lazy loading below the fold, and `fetchpriority="high"` on only the actual LCP image. Do not preload every route or image. Keep top-level page modules lazy so page-specific content does not load globally.

## Third-party content and privacy

Current strategy is thumbnail + outbound link. No Twitch/YouTube/social embed code, pixels, or autoplay loads. If future click-to-load embeds are approved:

1. Explain that the platform may set cookies/collect data.
2. Do not load the iframe before deliberate activation.
3. Update CSP to the narrowest origins.
4. Reserve dimensions and provide an outbound alternative.
5. Reassess consent/legal requirements by launch jurisdiction.

The site currently collects no form data, account data, analytics, location, or personalization beyond local theme preference. Do not add analytics merely because a provider offers a free tier; define purpose, event taxonomy, retention, access, consent, and owner approval first.

## Personal and community privacy

Never publish precise/home/work location, legal identity, private phone/email, private family details, private messages, location-bearing photos, or data scraped from a platform. The VTuber identity is explicitly a privacy-preserving public bridge.

For nail/community images:

- preserve the private original according to owner policy;
- strip GPS/EXIF/IPTC from public derivatives;
- inspect mirrors/reflections/backgrounds and filenames for accidental location or identity;
- obtain participant/artist permission and record it;
- redact unrelated usernames/chat handles;
- exclude private Discord/DM content;
- offer a documented removal/correction path.

Adult-marked VODs must be labelled and opt-in before preview/navigation. Do not index a personal anecdote until it has explicit story approval and privacy review.

## Client security

- The repository is static client code. There is no trusted server boundary.
- `VITE_*` is public. Never store API keys, tokens, webhook URLs, affiliate secrets, email credentials, private IDs, or moderation credentials in it.
- All external URLs must be HTTPS and reviewed; new-tab links use `noopener noreferrer`.
- CSP defaults to self, allows images only from self/data/`i.ytimg.com`, and blocks frames/media/objects.
- `base-uri`, `form-action`, and `frame-ancestors` are restricted. Permissions policy disables camera, microphone, geolocation, payment, USB, and browsing topics.
- `robots.txt` and `noindex` do not secure private data. Never commit a secret route as a privacy control.
- Lockfile and GitHub Actions run `npm ci`; review dependency updates and generated lockfile diffs.
- Do not inject unsanitized HTML. If Markdown/CMS content arrives, parse with an allowlist sanitizer and test XSS payloads.

## Hosting checklist

Confirm HTTPS/HSTS ownership, directory-index routing, 404 mapping, headers/CSP actually emitted, immutable hashed-asset caching, HTML no-cache/revalidation policy, source-map policy, deployment access, preview indexing, domain/canonical metadata, and rollback procedure. `_headers` is only effective on hosts that support its syntax.

## Release evidence

- `npm run check` passes from a clean install.
- Axe or equivalent has no critical/serious issues, then manual checks still run.
- Keyboard-only and screen-reader smoke tests cover shell and all custom interactions.
- 320, 390, 768, and wide desktop views have no overflow or obscured targets.
- All three themes and reduced motion are reviewed with final assets.
- Network panel confirms zero unapproved third-party script/iframe requests.
- Image metadata scan confirms no EXIF/GPS in public derivatives.
- Secrets scan and content/privacy review pass before deployment.

The 2026-08-13 continuation pass updated two development-only transitive dependencies after current npm advisories: `brace-expansion` 1.1.18 and `js-yaml` 4.3.1. Both the production-only and full `npm audit` graphs then reported zero vulnerabilities.
