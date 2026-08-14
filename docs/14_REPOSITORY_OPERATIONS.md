# Repository Operations and Contribution Workflow

**Status:** `ACTIVE` operating standard  
**Owns:** Branching, commit scope, review, dependency changes, docs synchronization, incident/rollback discipline  
**Update trigger:** Team, hosting, CI, release, or contribution process changes

## Operating principles

1. Inspect before editing.
2. Keep changes focused and reversible.
3. Preserve the requested stack and architecture invariants.
4. Treat content, rights, privacy, and accessibility as code-review concerns.
5. Run checks and record evidence; never infer a pass.
6. Update documentation in the same change that changes truth.

## Branch strategy

- Default integration branch: `main`.
- Current implementation branch: `agent/build-nari-haven` with an existing draft pull request.
- New focused work from `main`: `agent/<short-kebab-description>` unless the owner chooses another convention.
- Do not stack unrelated work on the long-lived implementation branch without understanding its open pull request.
- Do not merge or mark a draft ready without Jake's approval.
- Avoid force pushes to shared branches; use ordinary commits/reverts.

## Change categories

| Category | Typical files | Required specialist review |
|---|---|---|
| Product/canon | Docs `00`, `03`, `05`, page copy/data | Nari approval record |
| Visual system | SCSS, components, art direction | All themes/mobile/contrast |
| Asset ingestion | Source/public media, manifest | Rights, credit, privacy, performance |
| Architecture | Vite/Router/bootstrap/types | MPA invariants, direct routes, build |
| Content data | Types/data/tests/pages | Provenance, state, expiry, privacy |
| Interaction | Components/motion/styles | Keyboard, touch, focus, reduced motion |
| Dependency | package files/config | Lockfile diff, advisories, build/runtime review |
| Deployment | Host config/metadata/docs | Production headers/routes/cache/rollback |
| Documentation only | `docs`, README, contributing | Links, code trace, no false implementation claims |

Do not combine categories merely to reduce pull-request count when it makes review or rollback ambiguous.

## Before editing

```bash
git status -sb
git branch --show-current
git log -1 --oneline
npm --version
node --version
```

Then:

- read `docs/README.md` and the relevant path;
- identify existing user changes and keep them intact;
- inspect package scripts, route/data/style ownership;
- name approval/rights/privacy dependencies;
- confirm the intended branch/PR scope.

If the worktree contains unrelated changes, stage explicit paths only and do not reformat surrounding files gratuitously.

## Implementation discipline

- Prefer the smallest coherent solution that closes the contract.
- Do not add a dependency for behavior achievable clearly with the platform/current stack.
- Keep global state minimal.
- Keep recurring editorial content typed and data-driven.
- Preserve source masters; never destructively optimize them.
- Add comments only where intent is not obvious from code/docs.
- Avoid unrelated formatting, renaming, dependency churn, and opportunistic rewrites.
- Do not commit generated `dist/` unless repository policy explicitly changes.

## Documentation synchronization matrix

| Change | Required docs |
|---|---|
| Product thesis/canon/audience | `00`, `01`, `02`, `03`, `05`, `16` as applicable |
| Route/nav | `00`, `02`, `03`, `07`, `12`, `13` |
| Token/component | `01`, `04`, `09`, `10`, affected page spec |
| Asset | `01`, `03`, `06`, `10`, `12`, intake record |
| Data schema/content family | `05`, `08`, `10`, `12`, approval record |
| Interaction | `04`, `09`, `10`, `12`, affected page spec |
| Dependency/build | `07`, `10`, `12`, `13`, decision record if architectural |
| Host/release | `00`, `10`, `12`, `15`, `16`, release record |

Documentation should say what is implemented, target, pending, or blocked. Never paste aspirational code contracts into docs without labelling them target.

## Validation ladder

Run the narrowest useful check while editing, then the full gate.

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run check
```

Manual validation is selected from `12_QA_ACCEPTANCE_CRITERIA.md` based on impact. Asset/copy-only changes still require visual, rights, privacy, and responsive review.

## Commit standard

A commit should be:

- focused on one coherent purpose;
- small enough to review and revert;
- explicit about content/asset migrations;
- free of private evidence, generated caches, secrets, and unrelated files.

Terse examples:

```text
Overhaul project documentation system
Ingest approved Nari character art
Add typed nail gallery records
Verify static-host release contract
```

Avoid vague messages such as `updates`, `fix stuff`, or `final`.

## Pull-request contract

The PR body must explain:

- what changed;
- why the product/technical contract required it;
- user/developer impact;
- approval/rights/privacy implications;
- exact automated and manual evidence;
- remaining blockers/unknowns;
- rollback path.

Use `.github/pull_request_template.md`. Screenshots must not contain private or uncleared material.

## Review order

1. Product/canon truth.
2. Rights/privacy/security.
3. Architecture and data ownership.
4. Accessibility and interaction parity.
5. Responsive visual composition.
6. Performance/network behavior.
7. Tests/docs/evidence and rollback.

A beautiful diff that fails step 1 or 2 does not proceed.

## Dependency updates

Dependency changes are intentional work, not automatic cleanup.

1. Explain the requirement/security reason.
2. Consult current official release/migration material.
3. Update manifest and lockfile through the package manager.
4. Inspect the lockfile diff for unexpected packages/scripts.
5. Run clean install, full gate, build-size comparison, and affected manual checks.
6. Review browser/runtime support and deployment requirements.
7. Record breaking changes, rollback, and decision if architecture shifts.

Do not bundle broad upgrades with content/art delivery.

## New page checklist

- [ ] Product responsibility approved in docs.
- [ ] Real HTML entry with route metadata/theme boot.
- [ ] Vite MPA input.
- [ ] Lazy Router record.
- [ ] Page module and correct shell behavior.
- [ ] IA-approved navigation placement.
- [ ] Output validator and tests.
- [ ] Host direct-load/404/canonical implications.
- [ ] Page, architecture, QA, handoff docs.
- [ ] Full automated and manual evidence.

## New asset checklist

- [ ] Intake/rights record complete.
- [ ] Source preserved and hashed.
- [ ] Privacy/metadata/background review.
- [ ] Permitted derivatives; no upscale.
- [ ] Responsive sources, dimensions, loading, alt, caption, credit.
- [ ] All themes/viewports and performance reviewed.
- [ ] Manifest/page/QA/approval docs synchronized.

## Incident and correction workflow

For a privacy, rights, broken-link, security, or production-routing issue:

1. Name the exact affected route/file/deployment.
2. If public harm is plausible, remove or disable the affected content through the safest focused change/deployment.
3. Preserve only the minimum safe evidence; do not spread private material into issues/logs.
4. Verify the public result and caches.
5. Record root cause, scope, correction, owner, and prevention in a decision/incident record.
6. Add or improve a test/check when technically possible.
7. Re-run relevant release smoke checks.

Do not use destructive history rewriting as the default incident response. If a secret/private file entered Git history, escalate to the owner because rotation and history remediation may both be required.

## Rollback discipline

- Prefer a normal revert of the focused commit.
- Never delete supplied masters as part of rollout.
- Preserve honest holds so incomplete content can be safely removed.
- Know the previous-good deployment before release.
- Test routes/assets after rollback to avoid mixed hashed artifacts.
- Report what was rolled back and whether any external cache/platform action remains.

## Definition of reviewable

A change is reviewable when a new builder can determine from the diff and docs:

- the authorized outcome;
- source of every claim and asset;
- files that own the behavior;
- checks actually run;
- limitations still present;
- how to undo it safely.
