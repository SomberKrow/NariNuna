# Information Architecture and User Journeys

## Navigation model

Primary header order:

1. Home
2. Meet Nari
3. Streams
4. Nail Studio
5. The Haven
6. Resources
7. Work With Nari

Header utility: three-theme switcher and external “Watch live” Twitch action. Secondary footer routes: Story Time and Support. Social destinations live in the footer/resources directory. The Prinny Cult is absent from global navigation, sitemap intent, and normal CTA hierarchy.

Top-level navigation uses plain `<a>` document links. On screens at or below 56rem it becomes a labelled button and two-column panel; at 30rem it becomes one column. The open panel locks body scroll, closes on Escape or selection, and exposes `aria-expanded`/`aria-controls`.

## CTA hierarchy

| Level | Use | Examples |
|---|---|---|
| Primary | One best next action in context | Catch a stream; Enter Discord after values; Explore fit |
| Secondary | Continue within the Haven | Meet your host; Open the studio; Read Story Time |
| Tertiary | Outbound reference or reset | Social directory; close/reset an interaction |
| Never primary | Money, affiliate link, Discord before context | Support stays secondary; Discord is earned |

## Audience journeys

### First-time viewer

Home hero → Streams gateway or verified moment → Twitch/YouTube outbound. Success means the person understands the stream's warmth and chaos before leaving; no embedded tracker is required.

### Returning Ghostie

Home/Haven → community values → progressive door → canonical Discord invite. The journey asks for understanding, not an email or conversion. Footer and Ghostie interaction offer familiarity without blocking content.

### Nail learner

Home → Nail Studio → approved gallery/education/resource relationship → Resources. Until real work exists, the gallery clearly says it is waiting; no generic stock or generated manicure fills the gap.

### Professional visitor

Any page → persistent Work With Nari → fit categories → process → approved public contact route/media kit. Within one page, a brand should understand tone, possible collaboration areas, boundaries, and the next step. No fabricated metrics or submission form.

### Supporter

Footer → Support → “your presence is enough” → nonfinancial options → Throne only if desired. Money never affects community status, access, ownership, or boundaries.

### Story/VOD visitor

Home/Streams → Story Time → a structured, privacy-safe story or curated moment → outbound source. Adult-marked VOD material is opt-in and must never appear as a surprise preview.

### Curious explorer

Haven values → subtle loose floorboard → three deliberate activations → hidden key → no-index secret page → visible return path. The joke is optional and does not make ordinary tasks harder.

## Page responsibilities

| Page | Owns | Does not own |
|---|---|---|
| Home | World arrival, identity summary, three gateways, curated taste | Full bio, full gallery, all links |
| Meet Nari | Privacy-safe identity, roles, symbols, boundaries, lore status | Unapproved lore/history |
| Streams | Experience, verified clips, channel map, schedule state | Autoplay player or fake timetable |
| Nail Studio | Learning, future approved gallery, process/resources framing | Services/pricing/medical advice |
| Haven | Values, found family, Discord discovery, Easter-egg threshold | General social-link wall |
| Resources | Curated tools and transparent disclosure system | Affiliate storefront |
| Work With Nari | Collaboration fit, process, approved contact | Invented case studies or metrics |
| Support | Optionality, boundaries, approved methods | Donor ranking or guilt |
| Story Time | Data-driven stories/moments and source links | Private anecdotes by default |

## Footer

Footer repeats the belonging statement, secondary routes, verified social directory links, support, privacy/no-tracking note, and current placeholder/rights posture where useful. It must not become a dense sitemap or competing hero.

## Empty and unavailable states

- No schedule: say Nari posts schedule changes on verified public channels; do not show empty calendar chrome.
- No nail gallery: reserve the authored gallery and explain that approved work is pending.
- No resources: show categories and review/disclosure standard, labelled “curating.”
- No professional contact: direct to approved public hub/X without claiming a business inbox.
- Expired Discord invite: hide/disable the final external action while preserving values content; never guess a replacement.

## URL and metadata policy

Routes use lowercase kebab-case and trailing slashes, except `/404.html`. Each document owns title, description, viewport, theme color, canonical URL only when a production domain exists, and share art only when rights-cleared. Secret/404 documents use `noindex`; the secret is disallowed in `robots.txt` as defense in depth, not a security boundary.
