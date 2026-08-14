# Nari Nuna's Haven — Documentation Hub

This directory is the product specification, engineering manual, content contract, and release record for Nari Nuna's Haven. It is not background reading. A change that contradicts this suite without an approved decision record is not ready to merge.

**Repository:** `SomberKrow/NariNuna`  
**Implementation branch:** `agent/build-nari-haven`  
**Documentation baseline:** 2026-08-13  
**Implementation snapshot described:** `b65e1c5a6da5a35f4f4f5969465c13f32f277912`

## Start here

Choose the path that matches the work. Do not read every file blindly and hope the important constraint sticks.

### Product or creative direction

1. [`00_PROJECT_SOURCE_OF_TRUTH.md`](00_PROJECT_SOURCE_OF_TRUTH.md)
2. [`17_CURRENT_STATE_AUDIT.md`](17_CURRENT_STATE_AUDIT.md)
3. [`01_BRAND_WORLD_AND_ART_DIRECTION.md`](01_BRAND_WORLD_AND_ART_DIRECTION.md)
4. [`02_INFORMATION_ARCHITECTURE_AND_USER_JOURNEYS.md`](02_INFORMATION_ARCHITECTURE_AND_USER_JOURNEYS.md)
5. [`03_PAGE_BY_PAGE_EXPERIENCE_SPEC.md`](03_PAGE_BY_PAGE_EXPERIENCE_SPEC.md)
6. [`05_CONTENT_STRATEGY_AND_COPY_GUIDE.md`](05_CONTENT_STRATEGY_AND_COPY_GUIDE.md)
7. [`20_CONTENT_INVENTORY.md`](20_CONTENT_INVENTORY.md)

### UI, component, or motion work

1. [`00_PROJECT_SOURCE_OF_TRUTH.md`](00_PROJECT_SOURCE_OF_TRUTH.md)
2. [`04_DESIGN_SYSTEM_AND_COMPONENT_LANGUAGE.md`](04_DESIGN_SYSTEM_AND_COMPONENT_LANGUAGE.md)
3. [`09_INTERACTION_AND_MOTION_SPEC.md`](09_INTERACTION_AND_MOTION_SPEC.md)
4. [`10_ACCESSIBILITY_PERFORMANCE_PRIVACY_SECURITY.md`](10_ACCESSIBILITY_PERFORMANCE_PRIVACY_SECURITY.md)
5. [`19_DESIGN_REVIEW_RUBRIC.md`](19_DESIGN_REVIEW_RUBRIC.md)
6. The affected page contract in [`03_PAGE_BY_PAGE_EXPERIENCE_SPEC.md`](03_PAGE_BY_PAGE_EXPERIENCE_SPEC.md)

### Asset, illustration, photography, or emote work

1. [`00_PROJECT_SOURCE_OF_TRUTH.md`](00_PROJECT_SOURCE_OF_TRUTH.md)
2. [`06_ASSET_MANIFEST_AND_ART_PIPELINE.md`](06_ASSET_MANIFEST_AND_ART_PIPELINE.md)
3. [`01_BRAND_WORLD_AND_ART_DIRECTION.md`](01_BRAND_WORLD_AND_ART_DIRECTION.md)
4. [`templates/ASSET_INTAKE_RECORD.md`](templates/ASSET_INTAKE_RECORD.md)
5. The destination page contract in [`03_PAGE_BY_PAGE_EXPERIENCE_SPEC.md`](03_PAGE_BY_PAGE_EXPERIENCE_SPEC.md)

### Architecture, routing, or data work

1. [`00_PROJECT_SOURCE_OF_TRUTH.md`](00_PROJECT_SOURCE_OF_TRUTH.md)
2. [`17_CURRENT_STATE_AUDIT.md`](17_CURRENT_STATE_AUDIT.md)
3. [`07_TECHNICAL_ARCHITECTURE.md`](07_TECHNICAL_ARCHITECTURE.md)
4. [`18_CODE_STANDARDS.md`](18_CODE_STANDARDS.md)
5. [`08_CONTENT_DATA_SCHEMAS.md`](08_CONTENT_DATA_SCHEMAS.md)
6. [`14_REPOSITORY_OPERATIONS.md`](14_REPOSITORY_OPERATIONS.md)
7. [`12_QA_ACCEPTANCE_CRITERIA.md`](12_QA_ACCEPTANCE_CRITERIA.md)

### Release or deployment work

1. [`13_HANDOFF_TO_SOL_HIGH.md`](13_HANDOFF_TO_SOL_HIGH.md)
2. [`12_QA_ACCEPTANCE_CRITERIA.md`](12_QA_ACCEPTANCE_CRITERIA.md)
3. [`15_DEPLOYMENT_AND_RELEASE_RUNBOOK.md`](15_DEPLOYMENT_AND_RELEASE_RUNBOOK.md)
4. [`10_ACCESSIBILITY_PERFORMANCE_PRIVACY_SECURITY.md`](10_ACCESSIBILITY_PERFORMANCE_PRIVACY_SECURITY.md)
5. [`templates/RELEASE_EVIDENCE_RECORD.md`](templates/RELEASE_EVIDENCE_RECORD.md)

### New AI implementation session

1. Root [`AGENTS.md`](../AGENTS.md)
2. [`21_AI_ASSISTED_WORKFLOW.md`](21_AI_ASSISTED_WORKFLOW.md)
3. [`00_PROJECT_SOURCE_OF_TRUTH.md`](00_PROJECT_SOURCE_OF_TRUTH.md)
4. [`17_CURRENT_STATE_AUDIT.md`](17_CURRENT_STATE_AUDIT.md)
5. [`13_HANDOFF_TO_SOL_HIGH.md`](13_HANDOFF_TO_SOL_HIGH.md)
6. The specialist path for the requested work

## Document map

| File | Owns | Update when |
|---|---|---|
| `00_PROJECT_SOURCE_OF_TRUTH` | Product thesis, locked decisions, canon, blockers, authority | A product decision or launch blocker changes |
| `01_BRAND_WORLD_AND_ART_DIRECTION` | Emotional world, visual grammar, themes, art briefs | Visual direction or canonical art changes |
| `02_INFORMATION_ARCHITECTURE_AND_USER_JOURNEYS` | Navigation, journeys, CTA hierarchy, route ownership | A route, audience, or navigation priority changes |
| `03_PAGE_BY_PAGE_EXPERIENCE_SPEC` | Per-route composition, dependencies, mobile and acceptance | A page's content order or responsibility changes |
| `04_DESIGN_SYSTEM_AND_COMPONENT_LANGUAGE` | Tokens, color values, typography, layout, components | Shared visual primitives or tokens change |
| `05_CONTENT_STRATEGY_AND_COPY_GUIDE` | Voice, claims, approvals, volatile content | Public wording or editorial rules change |
| `06_ASSET_MANIFEST_AND_ART_PIPELINE` | Asset inventory, provenance, rights, transforms, replacement | Any asset enters, changes, or leaves the project |
| `07_TECHNICAL_ARCHITECTURE` | Runtime, MPA/router design, modules, invariants, extension recipes | Architecture, dependencies, or build behavior changes |
| `08_CONTENT_DATA_SCHEMAS` | Implemented and target content contracts | A data shape or publication workflow changes |
| `09_INTERACTION_AND_MOTION_SPEC` | State machines, timing, input parity, reduced motion | Interactive behavior changes |
| `10_ACCESSIBILITY_PERFORMANCE_PRIVACY_SECURITY` | Nonfunctional budgets and threat boundaries | A budget, integration, host, or risk changes |
| `11_IMPLEMENTATION_PHASES` | Roadmap, gates, ownership, current status | Work moves between blocked, active, and complete |
| `12_QA_ACCEPTANCE_CRITERIA` | Automated/manual test matrix and release gates | Evidence changes or a new behavior ships |
| `13_HANDOFF_TO_SOL_HIGH` | Fast, exact handoff for the next implementation pass | The handoff baseline or immediate priority changes |
| `14_REPOSITORY_OPERATIONS` | Branching, reviews, dependency and docs discipline | Team workflow changes |
| `15_DEPLOYMENT_AND_RELEASE_RUNBOOK` | Host contract, deployment, verification, rollback | Provider/domain/release procedure changes |
| `16_GOVERNANCE_AND_DECISION_LOG` | Approval authority, ADRs, content expiry, change control | A durable decision or approval is recorded |
| `17_CURRENT_STATE_AUDIT` | Confirmed implementation, strengths, gaps, debt, keep/replace/decide map | A material implementation or evidence baseline changes |
| `18_CODE_STANDARDS` | TypeScript, Vue, SCSS, content, dependency, error and review conventions | Coding/tooling conventions change |
| `19_DESIGN_REVIEW_RUBRIC` | Hard failures, weighted visual/product quality threshold | Design direction or approval threshold changes |
| `20_CONTENT_INVENTORY` | Current public content locations, state, source, volatility, gaps | Public content enters, moves, changes, or retires |
| `21_AI_ASSISTED_WORKFLOW` | Agent context, evidence labels, protocol, stop and handoff rules | AI/repository workflow changes |
| `22_GLOSSARY` | Canonical project/design/engineering/status language | A durable term changes or becomes ambiguous |

## Authority and conflict resolution

When two sources disagree, use this order:

1. Nari's explicit, current, recorded approval.
2. `00_PROJECT_SOURCE_OF_TRUTH.md`.
3. A rights-cleared canonical asset/content record.
4. An accepted decision in `16_GOVERNANCE_AND_DECISION_LOG.md`.
5. The relevant specialist document in this suite.
6. Existing implementation behavior.
7. Assumptions, mockups, public references, and generated placeholders.

Implementation is evidence, not automatic product authority. Documentation is intent, not proof that code behaves that way. Both must stay synchronized.

## Status vocabulary

Use these words consistently:

| State | Meaning |
|---|---|
| `LOCKED` | Approved direction; changing it requires a recorded decision |
| `IMPLEMENTED` | Present in code at the documented snapshot |
| `VERIFIED` | Observed through a named check with dated evidence |
| `PENDING` | Known work with no external dependency |
| `BLOCKED` | Cannot truthfully finish without approval, rights, data, or infrastructure |
| `PLACEHOLDER` | Deliberately temporary and visibly noncanonical |
| `RETIRED` | No longer used; retained only when history or rollback requires it |

Never use “done,” “production-ready,” or “approved” without naming the evidence and authority.

## Change discipline

Every material pull request must answer five questions:

1. Which product or page contract authorizes this change?
2. Which files own the behavior?
3. What content, asset, privacy, or rights records changed?
4. What automated and manual evidence was observed?
5. Which documentation now describes the new truth?

Use the records under [`templates/`](templates/) instead of inventing approval formats in issue comments.

## Current release posture

The codebase is an implemented, testable foundation. It is **not cleared for public production release**. The critical blockers are canonical identity wording, Nari-supplied or explicitly adopted artwork, real nail-work content, final Discord and professional contact decisions, host/domain configuration, licensing, and final manual accessibility/mobile/rights review.

Unknown is a valid state. Fabricated certainty is not.
