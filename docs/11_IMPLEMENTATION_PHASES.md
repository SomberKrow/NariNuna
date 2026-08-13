# Implementation Phases

Statuses describe the 2026-08-13 foundation. “Foundation complete” does not mean public-launch content is approved.

| Phase | Goal and likely files | Dependencies | Validation / completion gate | Current state and rollback risk |
|---:|---|---|---|---|
| 0 | Inspect repo, packet, public facts, and art rights; docs `00`, `06` | GitHub access, packet | Baseline and blockers recorded; no private scraping | Complete. Repo was empty. Risk: replacing evidence with assumptions |
| 1 | True MPA, shared shell, theme boot; `vite.config.ts`, HTML entries, `src/main.ts`, `App.vue`, layout/composables | Node/npm | All 11 docs direct-load; themes paint pre-mount | Foundation complete. Risk: regressing to SPA fallback or duplicated shell |
| 2 | Source/derivative asset pipeline; `src/assets/source`, `public/media/generated` | Rights-cleared sources | Dimensions/hash/rights recorded; responsive local output | Placeholder pipeline complete. Canonical art blocked. Risk: deleting sources or hotlinking |
| 3 | Home; `HomePage.vue`, hero/gateway/media styles | Hero, safe identity copy, verified moments | World and three paths clear within first viewport + scroll | Foundation complete. Risk: art contrast/LCP when replaced |
| 4 | Meet Nari; `MeetNariPage.vue` | Canonical identity/lore and character art | Personal, privacy-safe, no identity invention | Structure complete; lore/art blocked. Risk: silent CatDog/Reaper merge |
| 5 | Streams; `StreamsPage.vue`, `media.ts` | Approved clips/channel/schedule | Experience precedes outbound link; no autoplay/fake schedule | Foundation complete with 3 verified Shorts. Risk: embeds/tracking/stale media |
| 6 | Nail Studio; `NailStudioPage.vue` | Approved nail photos/labels/education | Real work is authored, optimized, and factually scoped | Structure complete; gallery blocked. Risk: generated/fake portfolio or medical claim |
| 7 | Haven; `HavenPage.vue`, `HavenDoor.vue` | Canonical Discord invite | Values precede progressive invite; buttons work without motion | Foundation complete; invite revalidation pending. Risk: treating narrative as security |
| 8 | Resources; `ResourcesPage.vue`, future resource records | Nari-approved items/disclosures | No affiliate wall; every relationship labelled | Curating-state complete. Risk: fake reviews or stale commercial data |
| 9 | Work With Nari; `WorkWithNariPage.vue` | Contact/media kit/approved metrics | Fit and next step clear; every number sourced/dated | Structure complete; formal inquiry data blocked. Risk: private email/fake metrics |
| 10 | Support; `SupportPage.vue` | Approved methods/disclaimer | Optionality precedes action; no entitlement/dark pattern | Foundation complete with public Throne route. Risk: guilt or ownership implication |
| 11 | Story system; `StoriesPage.vue`, future `stories.ts` | Approved privacy-reviewed stories | Change/remove content without layout edits | Schema/foundation complete; real stories pending. Risk: permanent private indexing |
| 12 | Interaction layer; Ghostie, theme, nav, cards | Approved mascot/emote rights | Touch/keyboard/reduced-motion parity; no sound/loops | Original placeholder interactions complete. Risk: sprite flood/focus obstruction |
| 13 | Prinny Cult; secret HTML/page and floorboard | Original/permitted joke art | Hidden, no-index, accessible, easy exit, zero licensed assets | Complete foundation. Risk: future franchise asset leakage |
| 14 | Mobile pass; `_responsive.scss`, final art crops | Final content/assets | 320/390/768/wide manual matrix; no overflow/tiny targets | Responsive code complete; full multi-viewport manual evidence pending |
| 15 | Accessibility/performance/security; base styles, headers, tests | Final assets/host | WCAG 2.2 AA review, budgets, EXIF/secrets/CSP check | Automated + desktop smoke pass; screen-reader/field/host checks pending |
| 16 | Production QA/deploy; CI, host config, metadata | All launch blockers, domain/provider | Clean `npm ci`; `npm run check`; all release checks; rollback known | Blocked by content rights, identity, host, contact, and final approvals |

## Phase execution rule

For each unfinished phase:

1. Re-read the source-of-truth and relevant doc.
2. Confirm inputs and rights before editing.
3. Make the smallest coherent change.
4. Run the narrow test during work and `npm run check` before handoff.
5. Direct-load affected documents and inspect all themes/mobile/reduced motion.
6. Record observed evidence; never claim a result from intent.

## Recommended next implementation order

1. Resolve canonical identity/lore and artwork rights.
2. Ingest character/Ghostie/logo/nail assets through Phase 2.
3. Replace Meet Nari and Nail Studio holds with approved content.
4. Confirm professional contact/media kit, support methods, resources, and stories.
5. Reverify public links/Discord/media and finalize copy approval.
6. Run Phase 14 on real devices/emulation with final art.
7. Choose hosting/domain; implement provider-specific headers/404/canonical metadata.
8. Complete accessibility, performance, privacy, security, and production QA.

## Rollback strategy

Keep changes grouped by content system or asset family. Approved replacements should be reversible by restoring the previous typed record and local derivative set—not by force-resetting the repository. Never overwrite or delete supplied originals during optimization. Deployment must retain a known previous good version before production cutover.
