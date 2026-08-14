# Contributing to Nari Nuna's Haven

This project treats code, design, content truth, asset rights, privacy, accessibility, and documentation as one review surface.

## Before changing anything

1. Read [`AGENTS.md`](AGENTS.md) and the work-specific path in [`docs/README.md`](docs/README.md).
2. Read [`docs/00_PROJECT_SOURCE_OF_TRUTH.md`](docs/00_PROJECT_SOURCE_OF_TRUTH.md).
3. Read [`docs/17_CURRENT_STATE_AUDIT.md`](docs/17_CURRENT_STATE_AUDIT.md) and the relevant specialist docs.
4. Inspect the current branch, worktree, implementation owner, and relevant tests.
5. Identify Nari/Jake approval, rights, privacy, and volatile-content dependencies.
6. Keep unrelated user changes intact.

The full workflow lives in [`docs/14_REPOSITORY_OPERATIONS.md`](docs/14_REPOSITORY_OPERATIONS.md); coding conventions live in [`docs/18_CODE_STANDARDS.md`](docs/18_CODE_STANDARDS.md).

## Ground rules

- Preserve the true Vite MPA: real HTML entries and document navigation between top-level routes.
- Preserve Vue 3, TypeScript, Vite, Vue Router, SCSS, Motion for Vue, and npm unless an accepted decision changes them.
- Do not add Tailwind, a general UI framework, second scaffold, backend, CMS, form, analytics, runtime feed, or embed without an approved architecture/privacy decision.
- Do not add unlicensed character art, emotes, nail work, game imagery, sponsor marks, platform art, or public-CDN hotlinks.
- Do not publish private identity, location, contact, family, messages, community data, or raw metadata.
- Do not invent lore, credentials, metrics, schedules, testimonials, partnerships, affiliate relationships, services, or response promises.
- Keep recurring content typed, sourced, approved, and removable.
- Update owning docs, tests, approval/asset records, and evidence in the same change.

## Focused branches and commits

Use focused `agent/<description>` branches when starting new work from the default branch. Do not merge or mark the current draft implementation PR ready without Jake's approval.

Stage explicit paths when the worktree contains unrelated changes. Commits should be reviewable and reversible; avoid broad formatting/dependency churn inside content or asset work.

## Adding a page

- Approve its responsibility in docs `00`, `02`, and `03`.
- Add the route HTML document and metadata.
- Add the Vite MPA entry.
- Add a lazy Router record.
- Add navigation only at the approved IA level.
- Add the document to the output validator and route tests.
- Update host/404/canonical implications and relevant docs.
- Run `npm run check` and direct-load the built route.

See the exact recipe in [`docs/07_TECHNICAL_ARCHITECTURE.md`](docs/07_TECHNICAL_ARCHITECTURE.md).

## Adding media

- Complete [`docs/templates/ASSET_INTAKE_RECORD.md`](docs/templates/ASSET_INTAKE_RECORD.md).
- Preserve the supplied master; never destructively optimize it.
- Record owner, creator, exact permission, credit, crop, local-host, derivative, animation, and AI restrictions.
- Inspect privacy, reflections/backgrounds, filenames, and metadata.
- Strip EXIF/IPTC/GPS from public derivatives and verify removal.
- Do not upscale; export intentional responsive derivatives.
- Implement dimensions, `srcset`, `sizes`, loading, alt, caption, credit, and failure behavior.
- Update the asset manifest and test all themes/target widths.

## Adding public content

- Complete [`docs/templates/CONTENT_APPROVAL_RECORD.md`](docs/templates/CONTENT_APPROVAL_RECORD.md).
- Classify every claim and record source, approval, verification, and expiry.
- Apply privacy, rating, commercial-disclosure, and safety boundaries.
- Use current implemented types or deliberately migrate one target schema with tests.
- Render only approved records and preserve honest empty/error states.

## Required validation

```bash
npm ci
npm run check
```

Then select the relevant manual matrix from [`docs/12_QA_ACCEPTANCE_CRITERIA.md`](docs/12_QA_ACCEPTANCE_CRITERIA.md), including affected routes, Nari/Dark/Light, reduced motion, keyboard/focus, 320/390/768/wide layouts, zoom/reflow, external links, network, privacy, and asset rights.

Record what was actually observed. A previous commit's pass is not current evidence.

## Pull requests

Use the repository template and include:

- product/technical reason;
- exact scope and affected contracts;
- approval/asset/decision record IDs;
- automated and manual evidence;
- content/rights/privacy impact;
- remaining blockers;
- rollback path.

Screenshots and logs must not expose private or uncleared material.
