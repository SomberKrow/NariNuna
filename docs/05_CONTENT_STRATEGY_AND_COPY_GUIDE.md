# Content Strategy and Copy Guide

**Status:** `LOCKED` voice and truth rules; final copy approval `BLOCKED`  
**Owns:** Voice, message hierarchy, claim safety, provenance, editorial workflow, expiry  
**Implementation files:** `src/data/*.ts`, `src/pages/*.vue`, HTML metadata  
**Update trigger:** Public copy, content source, approval state, claim boundary, or volatile fact changes

## Content thesis

Nari's voice should make the site feel inhabited without turning every label into a bit. The reader should encounter a warm host with a spine: playful when stakes are low, direct when boundaries or truth matter, patient when teaching, and concise when professional visitors need clarity.

Specificity creates personality. Pajamas, pillow forts, nail polish, yapping, fall light, game panic, and Ghosties are useful. Generic “creator journey,” “engaging content,” and “authentic community” are not.

## One voice, five modes

| Mode | Character | Use | Avoid |
|---|---|---|---|
| Haven | Warm, playful, lightly chaotic | Arrival, navigation, community | Forced whimsy in every sentence |
| Big sister | Protective, teasing, direct, encouraging | Boundaries, reassurance, safety | Infantilizing readers or performative toughness |
| Education | Patient, specific, curious | Nails, process, resources | Credential inflation or medical authority |
| Professional | Concise, competent, personable | Fit, process, media kit, contact | Corporate jargon or a sanitized fake persona |
| Support | Grateful, unmistakably optional | Sharing, Throne, financial boundaries | Guilt, urgency, donor hierarchy, access promises |

Swearing may be part of Nari's personality when deliberate and audience-aware. It is not default metadata, navigation, safety text, or sponsor copy.

## Voice principles

1. **Invite; do not funnel.** “Come in” beats “Convert now.”
2. **State the real condition.** “The gallery is waiting for approved work” beats fake examples.
3. **Be warm with a spine.** Kindness includes boundaries and room for valid concern.
4. **Name the destination.** “Watch the moment” beats repeated “Learn more.”
5. **Keep the contract outside the joke.** Humor may decorate consent, money, privacy, safety, or navigation—but never obscure it.
6. **Respect the public identity boundary.** Intimacy of voice is not permission to publish private life.
7. **Let short copy be short.** A strong interface label does not need a paragraph of lore.

## Message architecture

| Priority | Message | Where it should be clearest |
|---:|---|---|
| 1 | Nari's Haven is warm, playful, and protective | Home, Haven, footer |
| 2 | Nari is a chaotic big-sister VTuber, gamer, and self-taught nail artist | Home, Meet Nari |
| 3 | Streams, nails, and community are equal rooms in one identity | Home gateways |
| 4 | Belonging and support never create ownership | Haven, Support |
| 5 | Nail content is authentic practice and learning, not salon/medical authority | Nail Studio, Resources |
| 6 | Professional work is possible when fit, scope, rights, and boundaries are clear | Work With Nari |
| 7 | Stories, recommendations, schedules, and metrics publish only with provenance | Relevant secondary pages |

Do not repeat all seven messages on every page. Each route owns a subset defined in `03_PAGE_BY_PAGE_EXPERIENCE_SPEC.md`.

## Identity boundary

### Safe at the current snapshot

- “Nari, your chaotic big-sister VTuber.”
- VTuber, gamer, Haven keeper, self-taught nail artist/content creator.
- Warm, protective, playful, curious, expressive, and a prolific yapper.
- Nari's Haven, Ghosties, stream chaos, nail learning, community values.

### Blocked until explicit approval

- Any explanation merging or replacing CatDog and Grim Reaper identities.
- Legal/private identity, precise location, age/birthday, private family/relationship detail, offline employment.
- Licensed, certified, professional nail technician, salon, clients, bookings, services.
- Medical, infection, allergy, sanitation, or chemical guarantees.
- Audience metrics, demographics, performance rates, partnerships, testimonials, schedule, or response time without sources.

Metadata, alt text, filenames, captions, and structured data follow the same boundary as visible paragraphs.

## Claim classes

Every public claim belongs to a class with an approval standard.

| Class | Example | Minimum evidence | Expiry |
|---|---|---|---|
| Stable identity | “Big-sister VTuber” | Nari approval/current first-party profile | Review when branding changes |
| Personal meaning | Emerald eyes; sun/moon meaning | Nari's own approved wording | No automatic expiry; review with art |
| Platform destination | Twitch/YouTube handle | First-party destination check | Reverify before release and periodically |
| Schedule/live status | Stream date/time | Owner-maintained source with timezone | Expires after event/change |
| Metric | Follower/engagement number | First-party dated snapshot + definition | Explicit measurement window |
| Partnership | Sponsor/collaborator claim | Contract/public proof + publication approval | Review at campaign end |
| Product opinion | Why Nari uses a tool | Nari approval + relationship status | Review date required |
| Safety/technical | Chemical or health-related statement | Appropriate authoritative source + scope | Review when source/guidance changes |
| Community story | Memory, quote, screenshot | Participant permission/privacy review | Removal path required |

If evidence cannot be named, downgrade the claim or keep the honest hold.

## CTA language

Use verbs that describe reality:

- Catch a stream.
- Meet your host.
- Open the studio.
- Find the common room.
- Watch the moment.
- Explore the fit.
- Use the key.
- Return to the floorboard.

External links include visible or screen-reader “opens in a new tab” context when they use a new tab.

Avoid:

- repeated “Learn more”;
- “Join the family” before values/context;
- “Donate now,” “Buy me this,” “Limited time,” “Exclusive access”;
- “Submit” on a form that cannot submit;
- “Watch live now” unless actual live state is reliably sourced;
- invented room names that obscure a normal task.

## Community and Discord

Community copy must name dignity, respect, care, cooperation, boundaries, and room for different energy levels. It can be playful without using “positive vibes only” to erase disagreement, fatigue, or legitimate concern.

Discord is an entrance deeper in the Haven. It is not:

- exclusive proof of intimacy;
- a donor reward;
- a security mechanism;
- a substitute for visible community expectations;
- permission to index private server content.

Reverify the canonical invite immediately before release. If it fails, the copy explains the unavailable door instead of guessing a code.

## Nail and education copy

- Separate firsthand practice from general instruction.
- State what Nari did, observed, or prefers without turning preference into universal fact.
- Credit the source of technical claims.
- For allergy, infection, chemical, or nail-health topics, state scope and direct health decisions to an appropriate qualified professional.
- Product copy explains why Nari uses/likes it, who it may suit, review date, and material relationship.
- Generated studio art is atmosphere only and is never described as Nari's work.
- “Self-taught” does not mean careless; “educational” does not mean credentialed medical/professional advice.

## Professional copy

Lead with:

1. what kinds of collaboration may fit;
2. what makes Nari specifically relevant;
3. what context/scope/rights information a serious inquiry should include;
4. what boundaries protect the work and community;
5. the approved contact route.

Metrics require platform, metric definition, value, measurement dates, first-party source, and public approval. Prior work requires permission and current-status review. Do not use third-party estimators as sponsor evidence.

There is no approved business inbox or working form at the current snapshot. Linktree/X are honest public routing surfaces; the page must not promise a formal intake or response time.

## Support copy

Required meaning, subject to Nari's final wording:

> Your presence in the Haven already matters. Watching, sharing, learning, lurking, or simply being kind counts. Financial support is never required, and it does not create ownership, obligation, special access, or a claim on Nari's time or boundaries.

Do not rank supporters, imply hardship, create countdowns, promise intimacy, or place financial CTAs above the optionality statement.

## Resource and affiliate disclosure

Baseline disclosure pattern:

> If a link is affiliated, it will be labelled. Nari may receive a commission at no extra cost to you. A relationship never replaces her actual opinion.

Jurisdiction-specific legal wording is recorded separately after owner/counsel approval. Never mark a relationship as affiliate/sponsored/gifted without confirmation, and never omit a known material relationship.

Price, discount, stock, and version claims are volatile. Omit them unless an owner and expiry workflow exist.

## Stories and community media

Every story requires:

- explicit publication state;
- source and verification date;
- privacy review;
- participant permission/redaction when applicable;
- content rating/warning;
- removal/correction path;
- asset rights record if media is included.

A stream remark, Discord message, DM, family anecdote, or public clip is not automatically approved for permanent indexing. Adult-marked VOD material is opt-in and labelled before navigation.

## Placeholder language

Allowed placeholders are honest system states or original environment/decorative art clearly labelled as noncanonical.

Forbidden placeholders:

- lorem ipsum;
- fake testimonials, sponsors, stats, schedules, events, products, or reviews;
- guessed contact details;
- generated nail work presented as Nari's;
- generated character art presented as Nari;
- “coming soon” with no owner or dependency.

Before removing “pending,” “curating,” or “placeholder,” attach the approval/asset record to the pull request.

## Editorial workflow

1. **Propose.** Name page, purpose, audience, claim class, source, and owner.
2. **Draft.** Use Nari's mode and the page contract; mark unknowns.
3. **Verify.** Check sources, dates, rights, privacy, links, and content rating.
4. **Approve.** Nari or delegated owner records approval using `templates/CONTENT_APPROVAL_RECORD.md`.
5. **Implement.** Put recurring content in typed data; do not duplicate it across components.
6. **Validate.** Run automated contracts and manual page/metadata/accessibility review.
7. **Publish.** Record release evidence and volatile-content review date.
8. **Maintain.** Reverify or retire expired content; removal must be simple.

## Metadata and search copy

- Titles use `Page · Nari Nuna's Haven`, except Home.
- Descriptions state actual page value in plain language.
- Do not claim a schedule, service, lore chapter, gallery, partnership, or contact path that the page does not contain.
- Add canonical URL only after domain selection.
- Add Open Graph/social art only when permitted and crop-tested.
- Secret/404 documents remain `noindex`.
- Structured data is not a back door for unapproved private or professional claims.

## Copy review checklist

- [ ] The mode matches the context.
- [ ] Every factual claim has a source/approval class.
- [ ] Unknowns are held, not embellished.
- [ ] The CTA names a real destination.
- [ ] Money, consent, privacy, and boundaries are unmistakable.
- [ ] No private identity/location/family detail leaks through copy, metadata, alt, or filenames.
- [ ] Swearing/jokes do not obscure the contract.
- [ ] Copy is concise enough for 320px and 400% zoom.
- [ ] Volatile content has a review/expiry rule.
- [ ] The relevant approval record and docs are updated.
