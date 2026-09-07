# Integrated distinctive UI refinement

Date: 2026-09-07. Branch: `kiva/nari-distinctive-ui`.

## Scope and direction

Owner requested one complete implementation pass instead of separate phase handoffs. This branch builds on PR #10 (`agent/codebase-cleanup`, `5db5e27`) and targets main so the maintenance and visual work can be reviewed together. PR #10 is not modified, merged, or marked ready.

Preserve the illustrated late-fall Haven and face-safe hero compositions; give the content beneath each hero its own useful structure. Existing artwork and responsive delivery remain intact. No new dependencies, generated images, backend, embeds, public contact details, or claimed recommendations were added.

| Route | Composition |
|---|---|
| Home | Clearer numbered room navigation, recomposed narrow-screen links |
| Meet Nari | Numbered journal entries and a separate promise note |
| Streams | Real clips lead a broadcast desk, followed by a compact tuning strip |
| Nail Studio | Illustrated workbench with process notes and honest portfolio hold |
| Haven | Illustrated four-point community charter before the existing door |
| Resources | Indexed shelves and closed, explicitly labelled demo disclosure |
| Work | Warm paper collaboration letter, useful brief, compact public directory |
| Stories | Alternating album entries using the existing real clips |
| Support | Personal notes, free support first, modest wishlist invitation |

Prinny and 404 retain their established scope. The tiny optional Prinny route is not expanded into the historical cult concept.

## Haven threshold refinement

The doorway now responds visibly to every deliberate knock instead of relying on copy replacement alone. Each state strengthens the lantern and threshold light, opens a larger glimpse of the existing continuous room illustration, plays one short brass impact ripple, and turns the adjacent story forward. The progress treatment reads as a three-part path—Arrive, Belong, Promise—with answered and current states conveyed by text/shape as well as color. The door itself exposes a changing visible prompt so its direct interaction is easier to discover.

The response is capped to the three existing user actions: there is no idle loop, random particle field, sound, new timer, extra gate, or persistent state. Reduced-motion mode removes the impact and content travel while preserving immediate state, labels, image, and final Discord access. The invite anchor still does not exist before the third knock, and the already-deferred interior image retains its proximity/focus/interaction loading contract.

## Engineering ownership

Each interior page imports its scoped composition from `src/styles/rooms/`. Shared reading primitives live in `_room-language.scss`; MediaCard owns its broadcast and album variants. Retired selector branches were removed from legacy layers while preserving unrelated styles and the final face-safe layer. Header Escape handling restores focus; Twitch uses a radio icon without suggesting a live status. Root minimum widths no longer force horizontal overflow on narrow viewports with scrollbars.

Source-string tests tied to retired CSS were replaced with rendered-content checks for meaningful headings, links, image attributes, anchor targets, content ordering, honest empty states, and demo disclosure behavior.

## Evidence

- Fresh `npm ci` completed.
- `npm run check` passed: lint, strict typecheck, 59 tests across 13 files, production build, asset/performance validation, and served-preview verification.
- Build emits eleven actual HTML documents. Shared JS + CSS measured 66.49 KB gzip against the 120 KB limit before the final small reflow fixes; use current build output for exact bytes.
- Browser iframe viewport checks covered all eleven routes at 320, 390, 768, 1024, and 1920 CSS pixels: one H1 and no document horizontal overflow in all 55 measurements.
- 200% root text sizing at 390px covered all eleven routes. Work and Resources overflow found during review was corrected; Resources and Work then measured without document overflow. This simulates text enlargement, not native browser zoom. Existing Haven door content still needs a release-grade enlarged-text review; document width alone does not establish that every scene element is visible.
- Visual browser review included the Work mobile hero and paper letter, Resources desktop shelves, and visible desktop More focus after Escape. Mobile navigation opened and closed with Escape; the Work hero anchor reached the letter.
- Existing reduced-motion contracts pass; native OS reduced-motion, screen-reader interaction, exhaustive contrast, real-device touch, and external destination availability were not fully exercised. These remain release QA, not claimed approvals.
- After the Haven threshold refinement, a fresh `npm ci` and full `npm run check` passed again: lint, strict typecheck, 59 tests across 13 files, production build, all 11 independently served documents, 137 essential assets, and all 27 retained Prinny designs. Shared JS + CSS is 68.93 KB gzip against the 120 KB limit; Haven's additional page graph is 6.14 KB gzip against 35 KB. This is automated/build evidence, not a claim of manual browser approval.

## Content and release boundaries

Real nail portfolio photos, final recommendations, a business inbox decision, canon/rights/credit records, and Nari's visual approval remain pending. Resource demo entries remain available only in the labelled client-preview disclosure. Existing illustration captions and noncanonical/private-review asset restrictions remain in force. This change does not confer public-release clearance.

Review the integrated PR against main. Do not independently merge overlapping PR #10 without accounting for shared ancestry. Rollback is a normal revert of the visual commit; the maintenance parent remains independently reviewable. The next owner action is to review the PR and decide whether to merge after required checks and client review.
