# Page-by-Page Experience Specification

All pages use the shared skip link, header, theme control, footer, focus system, and Ghostie summoner unless explicitly noted. All external media is thumbnail + outbound link; no autoplay or player SDK.

## Home — `/`

- **Objective / audience:** Establish Nari's Haven for every arrival and route viewers, nail learners, and community visitors without a link-wall feeling.
- **Emotional goal:** “I can come in as I am, and there is more here.”
- **Order:** cinematic Haven hero → three unequal world gateways → host/identity note → three verified moments → Haven invitation → professional strip.
- **CTA:** Twitch is primary; Meet Nari is secondary. Support and Discord are not hero actions.
- **Assets:** responsive local Haven environment; original Ghostie portrait placeholder; approved YouTube thumbnails.
- **Empty/error:** if a thumbnail fails, text/card link remains; if character art is pending, label the placeholder.
- **Mobile:** left-weighted copy remains readable over a darker veil, one clear action first, gateway cards collapse, decorative density drops.
- **Motion/a11y:** short hover lift, optional Ghostie reveal; hero meaning remains in HTML, art is decorative.
- **Hazards:** largest-contentful image, contrast over art, public-art hotlinking, making all destinations equal.

## Meet Nari — `/meet-nari/`

- **Objective / audience:** Give fans and professional visitors a warm, privacy-safe identity overview.
- **Emotional goal:** Personal and specific without exposing the private person.
- **Order:** identity hero → three pillars → emerald/sun-moon meaning → protective boundaries → explicit lore hold.
- **CTA:** Haven values; no forced social conversion.
- **Dependencies:** approved character render/credit and canonical CatDog ↔ Grim Reaper explanation.
- **Empty/error:** keep the original Ghostie placeholder and lore hold until both arrive.
- **Mobile:** portrait/placeholder precedes copy; symbols stack; secondary decorative lore image can hide.
- **A11y/privacy:** personal meaning is text, not encoded only by color/art. No real name, location, family detail, or invented heritage claim.
- **Hazards:** silently merging lore, implying credentials, treating heritage as decoration.

## Streams — `/streams/`

- **Objective / audience:** Show what a Nari stream feels like and provide verified next steps.
- **Emotional goal:** Chaotic, conversational, welcoming—not a dead embed page.
- **Order:** stream-feel hero + signal panel → three verified moments → channel map → honest schedule hold.
- **CTA:** Twitch primary; YouTube/VOD secondary.
- **Dependencies:** approved featured clips, games, schedule, chat/community screenshots if ever added.
- **Empty/error:** “No fixed schedule published here” is valid. Never display stale schedule data as current.
- **Mobile:** signal panel stacks below copy; media cards become one column; outbound actions stay 44px+.
- **Motion/a11y:** no autoplay; play icon is decorative to an explicit link name; adult-marked VODs require opt-in framing.
- **Hazards:** cookies, iframe weight, surprise adult content, chat-handle privacy.

## Nail Studio — `/nail-studio/`

- **Objective / audience:** Treat Nari's self-taught nail practice as flagship creative and educational work.
- **Emotional goal:** Curious, tactile, patient, credible without salon claims.
- **Order:** atmosphere hero → three practice/education pillars → reserved gallery → scope/safety note.
- **CTA:** future approved gallery/tutorial; Resources secondary.
- **Dependencies:** original nail photos, labels, techniques, dates, permissions, Nari-approved educational claims.
- **Empty/error:** gallery hold is explicit; generated environment contains no finished nails and is never attributed as Nari's work.
- **Mobile:** art crop retains right-side desk detail while copy has contrast; gallery placeholders stack.
- **A11y/safety:** descriptive alt for real work; do not diagnose conditions, promise safety, or imply professional medical advice.
- **Hazards:** fabricated portfolio, EXIF/location, overcompression of detail, counterfeit product/affiliate claims.

## The Haven — `/haven/`

- **Objective / audience:** Make community values tangible and let the Discord entrance feel discovered.
- **Emotional goal:** Found family with boundaries; playful without cruelty.
- **Order:** values hero → four principles → found-family signals → three-stage Haven door → loose floorboard.
- **CTA:** Discord appears only after three value acknowledgements.
- **Dependencies:** one canonical reverified invite; future approved community memories with consent.
- **Empty/error:** if invite is invalid, final stage explains the doorway is being repaired and points to verified Linktree; values remain usable.
- **Mobile:** door art stacks above content; controls remain reachable and do not require hover.
- **Motion/a11y:** state changes are live text; buttons work without motion; floorboard has three text progress states.
- **Hazards:** treating Discord as security-gated, hiding a required task, copying a franchise guild aesthetic.

## Resources — `/resources/`

- **Objective / audience:** Prepare a trustworthy library of tools, products, games, and learning links.
- **Emotional goal:** Nari is sharing what helped, not pushing a storefront.
- **Order:** clear promise → three curating categories → disclosure principles → verified social directory.
- **CTA:** individual resources only after Nari approval; public links remain secondary.
- **Dependencies:** item approval, personal-use note, audience fit, affiliate status, price/date only when maintained.
- **Empty/error:** “curating” cards describe the review standard without fake products.
- **Mobile:** single-column cards and social links; whole-card links retain visible focus.
- **Hazards:** affiliate-wall design, fake review language, stale pricing, undisclosed material connection.

## Work With Nari — `/work-with-nari/`

- **Objective / audience:** Let brands, creators, and collaborators understand fit and the safest current next step quickly.
- **Emotional goal:** Competent and clear while still Nari.
- **Order:** professional hero → possible fit categories → review process → contact hold.
- **CTA:** approved public contact route; no nonfunctional form.
- **Dependencies:** business contact, media kit, approved categories, sourced/date-stamped metrics, partnership history.
- **Empty/error:** explicitly say a formal inquiry route/media kit is pending; use Linktree/X only if approved.
- **Mobile:** single-column fit grid; concise copy; no decorative obstruction.
- **A11y/privacy:** contact content must be approved public/business information; no hidden tracking form.
- **Hazards:** invented numbers, stale sponsor claims, private email propagation, generic corporate tone.

## Support — `/support/`

- **Objective / audience:** Explain optional ways to help without pressure or entitlement.
- **Emotional goal:** “My presence counts even if I spend nothing.”
- **Order:** Ghostie + optionality hero → boundary promise → nonfinancial/financial categories → approved external link.
- **CTA:** Throne is secondary and voluntary; Twitch/sharing are equal or earlier alternatives.
- **Dependencies:** Nari-approved support methods and final disclaimer.
- **Empty/error:** remove a support action if unavailable; never add urgency.
- **Mobile:** statement and actions stack; no sticky donation element.
- **Hazards:** guilt, donor hierarchy, ownership implications, surprise external commerce.

## Story Time — `/stories/`

- **Objective / audience:** Provide a maintainable home for curated moments and later approved stories.
- **Emotional goal:** A shelf of memories, not a feed scrape.
- **Order:** explanation hero → current verified moments → future story-system contract.
- **CTA:** source moment; Streams secondary.
- **Dependencies:** schema-valid story records, privacy approval, optional media/content rating.
- **Empty/error:** featured moments remain; unpublished stories do not produce blank cards.
- **Mobile:** one-column story/media cards.
- **Hazards:** indexing private anecdotes, unmoderated community stories, rights-unclear screenshots.

## Hidden Prinny Cult — `/the-prinny-cult/`

- **Objective / audience:** Reward optional curiosity with an absurd original joke.
- **Emotional goal:** Deliberately overcommitted, safe, quick, and escapable.
- **Order:** visible return link → original Ghostie → oath → Rule Eleven → optional inspection counter.
- **CTA:** return to floorboard; no conversion.
- **Dependencies:** none beyond original/permitted assets; future joke copy needs approval.
- **Metadata:** `noindex, nofollow`; absent from navigation. Obscurity is not authentication.
- **Mobile/a11y:** centered responsive card, real buttons, keyboard “P” parity with button, live counter text.
- **Hazards:** licensed Prinny/Disgaea art, trapping navigation, inaccessible secret gestures.

## 404 — `/404.html`

- **Objective:** Recover a failed route with a clear home action.
- **Order:** original Ghostie → simple explanation → home button.
- **Metadata:** `noindex`; no external calls.
- **Hazards:** host must route unknown documents to this file; confirm per deployment provider.
