# Accessibility, Performance, Privacy, and Security

**Status:** Automated foundation `IMPLEMENTED`; final manual/host evidence `PENDING`  
**Owns:** WCAG target, performance budgets, privacy boundary, threat model, headers, release evidence  
**Update trigger:** New component, asset, integration, data collection, host, dependency, or risk

These are product requirements, not cleanup work after the visual design is finished.

## Accessibility target

Target WCAG 2.2 AA for public launch through automation **and** manual keyboard, screen-reader, zoom, contrast, reduced-motion, and multi-viewport review. A clean build or automated scan is not an accessibility audit.

## Structure and landmarks

- One primary `<main>` and one meaningful `h1` per route view.
- “Skip to content” is the first focusable ordinary-shell control and becomes visible on focus.
- Header, navigation, theme group, footer, and page sections use semantic elements.
- Secret route has its own `<main>` because it intentionally bypasses `SiteShell`.
- Heading levels describe hierarchy; visual size is controlled by CSS, not skipped levels.
- Repeated card collections use appropriate list/section/article semantics when their relationship benefits from it.

## Keyboard and focus

- Native buttons and anchors own all current actions.
- Visible focus is a 3px semantic outline with 4px offset.
- No required content/action depends on hover, pointer precision, animation, color, or a secret shortcut.
- Mobile navigation exposes `aria-expanded`/`aria-controls`, closes on Escape, and locks background scroll.
- Before release, manually determine whether the full-width mobile panel requires focus containment and explicit focus return; these are not currently documented as implemented.
- External new-tab links name the destination and include a visible or screen-reader new-tab cue.
- Fixed Ghostie UI never obscures the focused control.

## Contrast, reflow, and zoom

Review every text/control state in Nari, Dark, and Light themes.

Targets:

- 4.5:1 for ordinary text;
- 3:1 for large text, focus indicators, and meaningful UI graphics;
- no meaning conveyed by color alone.

Hero veils are part of the contrast solution and must be retested whenever art/crop changes.

At 200% text zoom and 400% page zoom:

- no horizontal page scroll caused by content at a 320 CSS px equivalent viewport;
- nav, headings, controls, status text, and honest holds reflow;
- no clipped focus ring or hidden action;
- card columns collapse before readable type becomes tiny;
- fixed UI can be dismissed or does not block content.

## Images and media

- Decorative environment images use empty alt when adjacent HTML carries meaning.
- Informative Nari, nail, mascot-state, and community art uses concise subject/function alt.
- Credits, provenance, dates, and technique belong in captions/visible copy rather than alt stuffing.
- Nail alt describes visible color, motif, shape, and finish, not inferred quality or medical condition.
- Explicit dimensions reserve layout space.
- Remote thumbnail failure preserves a readable destination.
- No critical text exists only inside raster art.
- No autoplay audio/video, flashing, parallax dependency, or surprise adult media.

## Motion and cognitive load

- Honor `prefers-reduced-motion` before and after hydration.
- Essential state changes remain visible; decorative transforms stop.
- Avoid infinite motion, repeated interruptions, strobing, or more than one focal event.
- Use plain-language holds for unavailable content.
- Keep room metaphors paired with conventional route/action wording.
- Money, privacy, safety, consent, and external navigation are not hidden inside jokes.

See `09_INTERACTION_AND_MOTION_SPEC.md` for state-specific behavior.

## Screen-reader smoke matrix

At minimum test with one desktop and one mobile-capable screen-reader/browser combination available to the team. Record actual combination/version in release evidence.

| Area | Required observation |
|---|---|
| Shell | Skip link reaches main; landmarks/headings are understandable |
| Header | Current page, menu state, and theme pressed state are announced |
| Media card | Destination/title is not redundantly or ambiguously announced |
| Ghostie | Open/close is understandable; status does not spam |
| Haven door | Each state heading/action is clear; final Discord link appears in sequence |
| Floorboard | Progress text and revealed link are announced once |
| Secret | Return path, oath, counter, and capped state are operable |
| Holds | Pending state and safe alternative are clear |

## Performance budgets

Release budgets are gates, not averages:

| Budget | Target |
|---|---:|
| Shared entry JS + CSS, gzip, excluding images | ≤120 KB |
| Initial route-specific JS, gzip | ≤35 KB |
| Home above-fold wide image | ≤160 KB; smaller responsive mobile candidate |
| Other single web image | ≤150 KB unless approved detail exception |
| First-viewport local image total | ≤250 KB |
| Third-party JS/iframes on initial load | 0 |
| Cumulative Layout Shift | <0.1 target |
| Largest Contentful Paint | <2.5s p75 target after real-host measurement |

The 2026-08-13 implementation record reported shared main JS near 59 KB gzip, icon helper near 24 KB gzip, CSS near 7.6 KB gzip, and the largest hero derivative at 125 KB. Those are historical local measurements, not field data or proof for later commits.

## Performance practices

- Keep route modules lazy.
- Do not preload every page or image.
- Use responsive formats and widths with correct `sizes`.
- Do not upscale.
- Reserve dimensions.
- High-priority fetch only for the true LCP image.
- Lazy-load below-fold images.
- Keep runtime social/platform integrations out of initial load.
- Compare final imagery visually; a tiny file with destroyed nail detail is not a win.
- Measure built artifacts and the production host; development server timing is not release evidence.

## Privacy posture

Current site behavior:

- no form data;
- no account or login;
- no analytics or advertising pixel;
- no location request;
- no personalization beyond local theme preference;
- no embedded third-party player/feed;
- no server-side storage;
- outbound links only.

Do not add analytics because it is free or common. Define purpose, exact events, legal/consent basis, retention, access, deletion, processor, and owner approval first.

## Personal and community privacy

Never publish:

- precise/home/work location;
- legal/private identity;
- private phone/email;
- private family/relationship details;
- private messages, DMs, or Discord content;
- location-bearing originals or raw metadata;
- unnecessary usernames/chat handles;
- home/moving/private-person footage simply because it is public elsewhere.

For nail/community imagery:

- preserve the master according to owner policy;
- strip EXIF/IPTC/GPS from public derivatives;
- inspect reflections, mirrors, windows, shipping labels, screens, backgrounds, and filenames;
- record participant/artist permission;
- redact unnecessary identifiers;
- provide a removal/correction path.

Adult-marked content is labelled and opt-in before preview/navigation.

## Threat model

| Threat | Current exposure | Control | Residual risk / gate |
|---|---|---|---|
| Secret leakage | Static client repository | No secrets; treat `VITE_*` as public | Run secret review on release commit |
| XSS | Local Vue templates/data | No `v-html`; no external rich text | Future Markdown/CMS needs sanitizer/tests |
| Malicious external link | Reviewed static URLs | HTTPS tests and manual verification | Destinations can change after release |
| Reverse-tabnabbing/referrer | New-tab outbound links | `noopener noreferrer` | Verify every new link |
| Third-party tracking | Remote thumbnails/outbound links | No scripts/iframes; narrow image CSP; no-referrer thumbnail | Remote image host sees request/network metadata |
| Clickjacking | Static public pages | `frame-ancestors 'none'`; X-Frame-Options equivalent may be host-added | Verify emitted headers |
| Supply chain | npm dependencies/actions | Lockfile, `npm ci`, minimal dependencies, read-only CI permission | Review upgrades and advisories |
| Private content via hidden route | Hidden static path | Explicit policy: no private data | Obscurity/noindex provides no access control |
| Location in media | Supplied photos/art | Intake, metadata stripping, visual privacy review | Human review required |
| Stale Discord/social takeover | Volatile external URLs | Verification dates and release recheck | Ongoing maintenance owner required |
| Fake form/security theater | No backend | No form until full design exists | Future integration review required |

## Client security rules

- Every external URL is HTTPS and reviewed.
- New-tab links use `rel="noopener noreferrer"`.
- No unsanitized HTML injection.
- No token, key, webhook, credential, or private ID in client source/config.
- `robots.txt` and `noindex` are indexing hints, not security.
- Dependency updates include lockfile review and run through the full gate.
- Future API calls use an explicit trusted server boundary where secrets are required.
- A future contact form documents purpose, fields, retention, validation, spam controls, success/error delivery, privacy notice, and incident owner.

## Header contract

`public/_headers` currently defines a compatible-host baseline:

- `X-Content-Type-Options: nosniff`;
- `Referrer-Policy: strict-origin-when-cross-origin`;
- restricted `Permissions-Policy`;
- CSP restricted to self, data images, and `i.ytimg.com` images;
- no frames, media, objects, camera, microphone, geolocation, or payment;
- long immutable cache for hashed assets and generated media.

The CSP currently permits `style-src 'unsafe-inline'`; this is a known compromise for generated/runtime style behavior and should not expand to script. Hosts that ignore `_headers` must reproduce the policy in provider configuration.

HSTS should be enabled only after HTTPS/domain ownership is correct and rollback/subdomain implications are understood. The current file does not itself prove a header is emitted.

## Hosting verification

Observe, do not assume:

- HTTPS and certificate behavior;
- HSTS policy where chosen;
- CSP/referrer/permissions/no-sniff/frame behavior;
- directory-index direct loads and trailing slashes;
- real 404 mapping/status;
- immutable hashed asset caching;
- HTML revalidation/no-cache policy;
- source-map exposure policy;
- preview indexing/access;
- domain/canonical/social metadata;
- atomic deployment and rollback.

## Release evidence

- Clean `npm ci` and `npm run check`.
- Automated accessibility scan with no critical/serious issues, followed by manual review.
- Keyboard-only and screen-reader smoke matrix.
- 200% text/400% zoom and 320/390/768/wide layouts.
- All themes and reduced motion with final assets.
- Network evidence showing zero unapproved third-party scripts/iframes.
- Image metadata/privacy scan.
- Secret/dependency/license/content-rights review.
- Production headers, performance, direct routes, 404, and rollback observed.

Use `templates/RELEASE_EVIDENCE_RECORD.md`. “The build passed” is necessary and insufficient.
