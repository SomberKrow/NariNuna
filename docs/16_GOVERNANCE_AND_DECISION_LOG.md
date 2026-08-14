# Governance and Decision Log

**Status:** `ACTIVE`  
**Owns:** Authority, approvals, durable architecture/product decisions, content expiry, conflict and change control  
**Update trigger:** A decision is proposed/accepted/reversed, authority changes, or approval/expiry policy changes

## Authority ladder

When evidence conflicts:

1. Nari's explicit current recorded approval.
2. `00_PROJECT_SOURCE_OF_TRUTH.md`.
3. Rights-cleared canonical asset/content record.
4. Accepted decision in this log.
5. Relevant specialist documentation.
6. Current implementation.
7. Mockups, old packets, public references, generated placeholders, and assumptions.

Jake owns final product/repository direction. Nari owns her public identity, canon, personal meaning, approved public content, and permission decisions that are hers to grant. Artists/rights holders retain authority over the uses they control. Technical maintainers may choose implementation details only inside those approved boundaries.

## Approval matrix

| Decision/content | Required authority | Technical reviewer | Evidence location |
|---|---|---|---|
| Identity/canon/voice | Nari + Jake for product integration | Implementer | Content approval record + this log |
| Character/emote/logo art use | Rights holder/owner + Nari/Jake placement approval | Asset implementer | Asset intake record |
| Heritage wording/art | Nari + relevant rights holder | Content/asset implementer | Approval + asset record |
| Nail work/education | Nari + photographer/rights holder as applicable | Content/privacy reviewer | Content + asset records |
| Community story/media | Nari + participant/rights permissions | Privacy/moderation reviewer | Content/asset records |
| Metrics/partnerships/contact | Nari or delegated business owner | Content reviewer | Source snapshot/approval |
| Architecture/dependencies | Jake/technical owner | Implementer/reviewer | ADR in this log |
| Accessibility/performance budget exception | Jake/product owner | Implementer with evidence | Decision + release record |
| Hosting/domain/release | Jake/account owner | Technical operator | Deployment/release record |
| Legal/license/analytics policy | Owner; counsel where appropriate | Technical operator | Decision/reference, not private contract |

Do not commit private contracts, private messages, credentials, or legal identities as evidence. Record a safe owner-controlled reference.

## Decision states

| State | Meaning |
|---|---|
| `PROPOSED` | Under review; must not be treated as product truth |
| `ACCEPTED` | Active decision and implementation constraint |
| `SUPERSEDED` | Replaced by a named newer decision |
| `REJECTED` | Considered and deliberately not chosen |
| `DEFERRED` | Valid question without current need/input |

Use `templates/DECISION_RECORD.md` for substantial new decisions, then summarize the accepted result here.

## Accepted decisions

### ADR-001 — True Vite MPA with shared Vue Router runtime

**State:** `ACCEPTED`  
**Date:** 2026-08-13  
**Decision:** Build eleven real HTML entries with ordinary document navigation. Each mounts the shared Vue app; Router resolves the initial path and lazy page module.  
**Reason:** Preserves route-specific documents/metadata/direct loading while satisfying the Vue Router requirement and avoiding duplicated application structure.  
**Consequences:** Entry, Router, validator, test, metadata, and docs registries must stay synchronized. Universal SPA rewrites are prohibited.  
**Revisit when:** Hosting cannot serve directory indexes, requirements demand subpath deployment, or a measured navigation problem justifies a reviewed alternative.

### ADR-002 — Three semantic atmospheres with pre-paint persistence

**State:** `ACCEPTED`  
**Date:** 2026-08-13  
**Decision:** Nari, Dark, and Light are one Haven at different hours, implemented through semantic CSS tokens and external pre-Vue theme boot.  
**Reason:** Provides personal choice and atmosphere without fragmenting brand/layout or flashing the wrong theme.  
**Consequences:** Theme allowlist, storage key, colors, controls, and final art need synchronized review.  
**Revisit when:** Canonical art requires a revised theme model or user research shows the control is confusing.

### ADR-003 — Static, privacy-first content delivery

**State:** `ACCEPTED`  
**Date:** 2026-08-13  
**Decision:** Use reviewed local typed content and outbound links; no runtime feeds, embeds, analytics, form, CMS, account, or backend in the foundation.  
**Reason:** Reduces tracking, failure, security, performance, cost, and maintenance while content volume/workflow is still small.  
**Consequences:** Volatile content is manually curated/reverified; new integrations require full privacy/security/ownership design.  
**Revisit when:** A real editorial/operational workflow cannot be maintained with local records.

### ADR-004 — Honest placeholders instead of fabricated production content

**State:** `ACCEPTED`  
**Date:** 2026-08-13  
**Decision:** Use original, visibly noncanonical environment/Ghostie placeholders and honest holds; never copy public creator assets or generate fake nail work/lore/metrics.  
**Reason:** The site can establish architecture/world without misrepresenting Nari or violating rights.  
**Consequences:** Public launch remains blocked until placeholders are replaced or explicitly adopted with rights/credit approval.  
**Revisit when:** Canonical assets/content arrive.

### ADR-005 — Discord is progressive narrative, not a global conversion

**State:** `ACCEPTED`  
**Date:** 2026-08-13  
**Decision:** Reveal Discord after community values through the Haven door; do not repeat it as a global primary CTA.  
**Reason:** The Haven represents behavior and belonging, not merely a server invite.  
**Consequences:** Invite failure needs a safe state; interaction must retain keyboard/touch/reduced-motion parity.  
**Revisit when:** Nari changes community onboarding or Discord ceases to be the destination.

### ADR-006 — Support never buys access or ownership

**State:** `ACCEPTED`  
**Date:** 2026-08-13  
**Decision:** Free support and presence precede financial methods; financial support grants no access, obligation, ownership, or claim on time/boundaries.  
**Reason:** Protects Nari and community dignity and avoids manipulative monetization.  
**Consequences:** No urgency, ranking, intimacy tier, or dominant donation UI.  
**Revisit when:** Support methods change; core boundary remains unless Nari/Jake explicitly revise it.

### ADR-007 — Hidden room is accessible, original, and non-private

**State:** `ACCEPTED`  
**Date:** 2026-08-13  
**Decision:** Keep an optional hidden joke route found through a visible-button floorboard sequence, with visible exit, noindex, and no franchise assets/private information.  
**Reason:** Rewards curiosity without making a required task inaccessible or creating copyright/privacy risk.  
**Consequences:** Obscurity is not security; `P` shortcut remains optional.  
**Revisit when:** The joke no longer fits Nari or introduces maintenance/rights cost.

## Open decisions

| ID | Question | State | Blocks | Safe default |
|---|---|---|---|---|
| DEC-001 | How do CatDog and Grim Reaper identities connect? | `PROPOSED`/awaiting Nari | Canonical identity launch | Neutral big-sister wording |
| DEC-002 | Which character/Ghostie/logo assets are current and website-cleared? | `DEFERRED` pending assets/rights | Canonical visual launch | Labelled original placeholders |
| DEC-003 | What nail sets/guides launch first? | `DEFERRED` pending content | Flagship Nail Studio | Honest gallery hold |
| DEC-004 | Which Discord code is canonical and maintained? | `DEFERRED` pending release | Community action | Reverify candidate or hide |
| DEC-005 | What is the public business contact/media kit? | `DEFERRED` | Formal inquiry | Linktree/X only; no promise |
| DEC-006 | Which resources, affiliations, support methods, stories, and schedule workflow are approved? | `DEFERRED` | Optional content systems | Curating/no-schedule states |
| DEC-007 | Which host/domain and redirect/header/cache strategy? | `DEFERRED` | Production deployment | Portable artifact only |
| DEC-008 | What license/legal/analytics policy applies? | `DEFERRED` | Production operations | All rights reserved; collect nothing |

## Content review and expiry

| Content | Review trigger |
|---|---|
| Social/platform link | Before every release and on reported failure |
| Discord invite | Immediately before release and after community changes |
| Schedule/event | On every change; expire automatically after event window |
| Metric | New measurement window; never roll forward old value silently |
| Partnership/campaign | At campaign end or term/status change |
| Product/resource/price | On review date, relationship change, or product/version change |
| Character/model art | Model/branding update or rights-term change |
| Community story/media | Participant request, moderation concern, or privacy context change |
| Safety/technical education | Source/guidance change or planned review date |

Retire stale content rather than hiding its age through vague copy.

## Conflict procedure

1. Identify the exact conflicting statements/files.
2. Determine their authority and dates.
3. Preserve the safer public state while resolving the conflict.
4. Ask the correct authority one focused question.
5. Record the approved answer and evidence reference.
6. Update source of truth, specialist docs, code/data, tests, and release status together.
7. Mark the old decision/content superseded or retired; do not silently rewrite history.

## Decision quality test

A durable decision record explains:

- problem and current evidence;
- decision and authority;
- alternatives meaningfully considered;
- product/technical/rights/privacy/accessibility consequences;
- implementation owners/files;
- verification and rollback;
- conditions that would justify revisiting it.

It must not include private credentials, contracts, or irrelevant conversation transcripts.

## Governance completion

The project is governed well when a future builder can answer:

- What is locked, and by whom?
- What is implemented versus merely desired?
- Which assets/claims are permitted and current?
- What is blocked, and what exact evidence closes it?
- Why does the architecture look this way?
- How does a decision change safely?
- Who rechecks volatile content?
- How is a release proven and rolled back?

If those answers exist only in someone's memory, the system is not finished.
