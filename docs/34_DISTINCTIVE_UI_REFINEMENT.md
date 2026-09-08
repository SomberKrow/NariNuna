# Integrated distinctive UI refinement

## 2026-09-08 final quality pass

Owner review requested a focused cohesion and navigation pass before completion. The implementation removes Home's numbered gateway rail, keeps its two intentional actions, and recomposes the mobile painting without the rail's reserved empty space. Meet Nari's protective Ghostie now sits in a framed lavender pool instead of an ungrounded strip. Haven replaces the charter-wide diamond lattice with a cushioned, tufted welcome backrest and gives the doorway a stronger nested frame.

Streams now keeps its lead preview at a restrained editorial size and pairs the two supporting moments beneath it, reducing the visible upscaling of the remote 480×360 thumbnails. Story Time removes the repeated `Lead memory`, `Moment 02/03`, and `Nari's Haven` folio chrome. Work reserves the paper-fold corner so the full masthead remains legible, replaces the repeated hero postcard with the already tracked correspondence vignette, and renames the hero action to match its actual collaboration-note destination. A business email remains intentionally absent until an approved public address is supplied.

Hash navigation now preserves browser history positions, lands named fragments on their sections, and otherwise starts a new route at the top. This repairs the Work public-directory jump, the Resources shelf index, `/haven/#haven-door`, and the new Nail Studio → `/resources/#nail-desk` path without adding client-side routing abstractions.

On the final quality-pass working tree, `npm run check` passed: lint, strict typecheck, 64 tests across 14 files, production build, all 11 independently served documents, 137 essential assets, and all 27 retained Prinny designs. Shared JS+CSS measured 68.60 KB gzip against the 120 KB ceiling; the largest route CSS was Haven at 5.15 KB gzip against 12 KB; the largest combined route graph was Haven at 80.07 KB. The available cloud browser could not connect to the local-only preview, so these results do not claim fresh visual viewport, native zoom, assistive-technology, or deployed-link approval.

## 2026-09-08 composed-room follow-up

The current follow-up branch, `kiva/nari-experience-refinement`, is stacked on open PR #12 at `5e0ec49`. It develops the already-approved implementation direction instead of repeating the earlier de-cardification pass:

| Route | Current refinement |
|---|---|
| Home | Historical on the earlier branch: the three gateway postcards shared one physical threshold lip. The final quality pass removes that rail per owner review. |
| Meet Nari | Identity entries now sit on one readable ruled journal sheet with a binding margin, restrained bookmark, varied emphasis, and smaller purposeful Ghostie overlap. |
| Streams | One existing clip leads; two supporting clips form a compact desk column, with an explicit path to the quieter Story Time album. |
| Haven | The charter receives a restrained textile/rug surface; the story action no longer lives inside the keyed transition subtree. |
| Resources | Stable shelf IDs, art, and category records are paired; shelf lips/uprights and readable jump tabs clarify the library; sample layout metadata now controls disclosed demo density. |
| Nails | The illustration and notes form one workbench composition; the paper notes and compact honest portfolio hold remain distinct from real work. |
| Work | Paper edges, masthead, fold, illustration contact shadow, and directory continuation strengthen the correspondence metaphor without inventing contact. |
| Stories | A bound paper album with one lead memory and two supporting entries is visually distinct from the broadcast desk while reusing only approved clips. |
| Support | The three free-support messages share one calm ruled surface; the central paper note leads and the wishlist remains subordinate. |
| Prinny / 404 | Prinny scope is unchanged; 404 receives only a restrained recovery composition. |

The Haven keyboard fix keeps the text action in a stable DOM region for knocks one and two. On the final keyboard-triggered replacement, focus moves to the Discord link; focused reset returns focus to the restored knock action. The door-scene button remains an independent activation path and does not trigger unsolicited focus movement.

`scripts/validate-performance.mjs` now measures route-only CSS separately, enforces a new 12 KB gzip route-CSS ceiling, and reports each deduplicated combined JS+CSS graph while retaining the existing 120 KB shared and 35 KB route-JS limits. On the implementation checkout, `npm run check` passes with 59 tests and 11 served documents. Shared JS+CSS is 68.94 KB gzip; the largest route CSS is Haven at 4.95 KB; the largest combined route graph is Haven at 80.19 KB. These are build measurements, not field performance or Lighthouse results.

Browser review remains required on the deployed stacked preview for focus continuity, mobile/reflow, reduced motion, failed media, and final whole-page visual evidence. No client approval or public-release clearance is inferred from the implementation.

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
