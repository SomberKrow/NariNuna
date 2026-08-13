# QA Acceptance Criteria

## Status legend

- **PASS:** observed on the current foundation.
- **PENDING:** required manual/final-environment evidence.
- **BLOCKED:** needs Nari/owner input or rights-cleared production material.

## Current evidence snapshot — 2026-08-13

- **PASS:** `npm run check` completed: lint, TypeScript, 1 Vitest file/4 tests, production build, and 11-document HTML validator.
- **PASS:** desktop cloud preview at 1363×936 had no horizontal overflow; Home rendered with intentional hero hierarchy.
- **PASS:** theme changed to Light and updated `theme-color`; Ghostie reveal opened.
- **PASS:** document navigation reached `/haven/`; progressive door revealed Discord after deliberate steps; three floorboard activations revealed the secret.
- **PASS:** `/the-prinny-cult/` rendered without global shell and exposed `noindex, nofollow`; oath interaction revealed Rule Eleven.
- **PASS:** no application-origin runtime error remained after cross-document View Transitions were removed. Browser-extension logging is not application evidence.
- **PENDING:** complete 320/390/768px visual matrix, screen-reader pass, automated accessibility scan, all-theme contrast measurements, external-link crawl, and real-host header/404 test.
- **BLOCKED:** production asset/copy acceptance because current character/Ghostie/nail/environment art includes explicit placeholders and canonical lore is unresolved.

Re-run and replace this snapshot after every material change. It is not a permanent certification.

## Product and content

- [ ] Site unmistakably feels like the Haven, not a generic VTuber template or social directory.
- [ ] One public Nari identity is internally coherent and explicitly approved.
- [ ] Nail work/education is first-class and uses only real approved work.
- [ ] Haven values include kindness, respect, care/love, support, cooperation, boundaries, and human dignity.
- [ ] Professional fit and approved next step are clear without fabricated metrics.
- [ ] Support starts with optionality and contains no guilt, urgency, donor hierarchy, access, or ownership implication.
- [ ] All public copy is approved; no lorem ipsum, fake schedule, fake review, fake contact, fake partnership, or invented credentials remain.
- [ ] No generated placeholder is presented as official. Before launch, replace every placeholder or obtain explicit approval to adopt it as final with ownership/credit recorded.

## Themes

- [x] Nari, Dark, and Light exist and persist across document navigation.
- [x] Pre-mount boot prevents an obvious wrong-theme flash.
- [x] Control uses labelled native buttons and `aria-pressed`.
- [ ] Final art/environmental cues make themes more than palette swaps.
- [ ] Text, focus, controls, and meaningful graphics meet contrast in every state/theme.

## MPA and routing

- [x] Eleven built HTML documents exist and include viewport/theme metadata and compiled assets.
- [x] Top-level navigation uses document anchors; shared shell is component-owned.
- [x] Page Vue modules are lazy chunks and direct preview loads work.
- [ ] Production host serves every directory index directly and maps unknown routes to `404.html`.
- [ ] Back/forward, refresh, trailing slash, and deployment-under-final-domain behavior pass.

## Page acceptance

### Home

- [x] Hero states Haven, belonging, stream/nail/community scope, and one primary CTA.
- [x] Copy remains HTML over decorative art with explicit dimensions/responsive source.
- [ ] Final mobile hero crop and final character art pass.

### Meet Nari

- [x] Emerald and sun/moon meaning are personal and non-generalized.
- [x] Privacy-safe roles and boundary language.
- [ ] Nari approves canonical CatDog/Reaper wording and character art.

### Streams

- [x] Three real outbound Shorts; no fake schedule; no embed/autoplay.
- [ ] Nari approves featured selection and content rating; all links reverified.

### Nail Studio

- [x] Generated environment is labelled and contains no fake finished work.
- [ ] Approved real gallery, credits, EXIF scan, labels, and educational review.

### Haven

- [x] Values and progressive discovery work by pointer and native controls.
- [ ] Canonical invite reverified; failure state tested; community media permission if added.

### Resources / Work / Support / Stories

- [x] Honest curating/hold states; no fake metrics, form, schedule, affiliate, or story.
- [ ] Approved production records/disclosures/contact/methods replace holds where desired.

### Secret / 404

- [x] Secret is absent from global navigation, no-index, original, optional, and escapable.
- [x] 404 document builds.
- [ ] Host-level 404 behavior and robots response verified.

## Interaction and accessibility

- [x] Skip link, semantic landmarks/headings, native controls, visible focus, reduced-motion stylesheet.
- [x] Essential actions work without animation; no autoplay sound/video.
- [x] Touch does not depend on hover; secret has visible button equivalents.
- [ ] Keyboard-only route matrix including mobile menu focus/order.
- [ ] NVDA/VoiceOver smoke test of shell, cards, Haven door, floorboard, Ghostie, secret counter.
- [ ] 200% text and 400% zoom; 320px reflow; no target overlap.
- [ ] Automated axe-equivalent scan followed by manual review.

## Performance

- [x] Responsive WebP derivatives, dimensions, lazy noncritical images, lazy page modules, zero third-party JS/iframe.
- [x] Current local build stays within the documented transfer budgets.
- [ ] Lighthouse/WebPageTest or equivalent on final production host and representative mobile network/device.
- [ ] Final art crop/compression review; no oversized original accidentally public.
- [ ] Field monitoring choice, if any, respects privacy and is owner-approved.

## Privacy, rights, and security

- [x] No precise location, private contact, private message, secret, form backend, or analytics in current source.
- [x] No copied/hotlinked Nari model, banner, emote, panel, or nail art; no licensed Prinny/Disgaea art.
- [x] External new-tab links use safe rel attributes; CSP blocks frames/media and limits images.
- [ ] Every final asset has owner/artist/permission/credit/crop/derivative/local-hosting record.
- [ ] EXIF/GPS scan of every public photo derivative.
- [ ] Production headers/CSP/HSTS/cache behavior observed, not assumed from `_headers`.
- [ ] Dependency, secret, license, and content/privacy review passes on the release commit.

## Final release command sequence

```bash
npm ci
npm run check
npm run preview
```

Then direct-load every document, run the manual viewport/theme/keyboard/screen-reader matrix, verify all external links and final content approvals, inspect network requests/headers, and test a real rollback. Release is blocked if any critical criterion or source-of-truth blocker remains.
