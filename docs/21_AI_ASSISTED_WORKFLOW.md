# AI-Assisted Implementation Workflow

**Status:** `ACTIVE`  
**Owns:** Context loading, evidence labels, session protocol, tool/repository behavior, stop conditions, handoff  
**Update trigger:** Agent policy, repository workflow, authority, or delivery process changes

## Working model

Repository documentation is shared memory. Source code, tests, previews, browser behavior, Git/GitHub state, and tool output are evidence. Neither memory nor confident prose is evidence by itself.

An AI builder may challenge an approach, identify risk, and recommend a safer architecture. It may not invent public certainty, approve Nari's identity/content, infer asset rights, claim unrun tests, or silently broaden task scope.

## Authority

1. Nari owns her identity/canon/personal public meaning and approvals she is authorized to grant.
2. Jake owns product/repository/release direction.
3. Rights holders own the uses they control.
4. Source of truth and accepted decisions preserve durable project state.
5. Current implementation proves current behavior but does not overrule approved product truth.
6. The active task limits mutation scope.

## Evidence labels

Use these labels in reasoning, reports, and handoffs:

- **Confirmed:** Directly observed in current repository/tool/browser/output.
- **Recorded:** Historical evidence names date/commit/environment but was not rerun now.
- **Inferred:** Likely from evidence but not directly verified.
- **Unknown:** Requires input, rights, or observation.
- **Proposed:** Recommendation not yet accepted.
- **Blocked:** Cannot truthfully complete within current inputs/authority.

Do not turn `Recorded` into `Confirmed` or `Proposed` into `Accepted` through wording.

## Required context packs

### Core for every substantial task

```text
AGENTS.md
README.md
docs/README.md
docs/00_PROJECT_SOURCE_OF_TRUTH.md
docs/17_CURRENT_STATE_AUDIT.md
docs/16_GOVERNANCE_AND_DECISION_LOG.md
```

### Product/content

Add docs `02`, `03`, `05`, `20`, target schema doc `08`, and relevant approval records.

### Visual/assets

Add docs `01`, `04`, `06`, `09`, `10`, `19`, and asset intake records.

### Engineering

Add docs `07`, `08`, `10`, `12`, `14`, `18`, and inspect package/config/tests.

### Release

Add docs `11`, `12`, `13`, `15`, release template/records, and provider configuration.

## Session start protocol

Before editing, report internally or in a concise user update:

- repository and branch/base;
- requested outcome and mutation authority;
- docs/source inspected;
- current implementation and evidence level;
- known blockers/unknowns;
- affected owner layers;
- planned checks and rollback.

Do not ask Jake to repeat a fact already available in current context or repository. Ask one focused question only when the answer materially changes product truth, rights, privacy, data loss, or architecture.

## Implementation protocol

1. **Inspect.** Read code, config, data, styles, assets, tests, and the relevant docs.
2. **Classify.** Identify confirmed, recorded, unknown, proposed, and blocked information.
3. **Resolve ownership.** Name the page/data/component/style/asset/test/doc that owns the change.
4. **Check authority.** Confirm product approval, rights, privacy, and task mutation scope.
5. **Implement minimally.** Make the smallest coherent integrated change; preserve working behavior.
6. **Check early.** Run the cheapest relevant narrow check before expanding.
7. **Review systemically.** Test every consumer, theme, viewport, input mode, failure state, and content/asset record affected.
8. **Run the gate.** Execute `npm run check` from the actual worktree when dependencies permit.
9. **Inspect the diff.** Search for drift, secrets, private data, retired terms, duplicated truth, and unrelated edits.
10. **Update durable memory.** Synchronize docs, decisions, inventory, approvals, phase, and QA evidence.
11. **Publish only when requested/authorized.** Use focused commits/branches and report exact remote result.

## Design and image protocol

- Establish page slot, narrative job, crop-safe zone, and content hierarchy before generating/selecting art.
- Do not generate a Nari likeness from public references.
- Only explicit ADR-008 owner authorization permits private-review Nari reillustration: reference the supplied real model, retain every documented identity invariant, preserve original artwork/emotes/Prinnies, record prompts/provenance, and leave all public derivative/model-artist rights blocked.
- Use original placeholders only when clearly labelled and permitted.
- Canonical asset work begins from exact source/rights records.
- Review a full route and state matrix, not a hero screenshot.
- Apply `19_DESIGN_REVIEW_RUBRIC.md`; zero hard failures.
- Keep generated image output out of the repository unless it has an approved role, record, and derivative pipeline.

## Content protocol

- Never infer lore, service claims, credentials, metrics, schedule, partnership, testimonial, contact, or product opinion.
- Preserve exact approved wording where it functions as a claim/boundary.
- Use typed records for recurring/volatile content.
- Attach source, approval, verification, rating, rights, privacy, and expiry as required.
- Keep private source evidence outside the public repository; commit a safe record reference.
- Retire stale content instead of rewriting dates to look current.

## Debugging protocol

1. Reproduce or inspect the actual failure.
2. Read the error/log and trace the owning code path/config.
3. Separate application output from browser extension/provider noise.
4. Identify root cause before broad rewrites.
5. Apply a focused fix and add a regression check where practical.
6. Re-run the failing path and relevant full gate.
7. State what is confirmed, inferred, and still unknown.

Never fabricate a reproduction or successful test.

## Parallel work

Delegate or parallelize only when the user, repository instructions, or active skill explicitly permits it and work can be isolated cleanly. Give each worker a bounded output and non-overlapping file ownership. Shared shell, source-of-truth, route registry, token files, and global data are integration hotspots and should have one active owner.

The primary agent remains responsible for reading authority docs, reconciling results, inspecting the final diff, and validating the integrated state.

## Stop conditions

Stop and request owner input before work would decide:

- CatDog/Grim Reaper canon or a new Nari likeness;
- asset rights, credit, derivative, or local-host permission without evidence;
- heritage meaning/art beyond approved wording;
- nail services/credentials/medical claims;
- private identity/location/contact/family/message/community use;
- final Discord/business contact/metrics/partnership claims without approval;
- analytics, form data, CMS, backend, accounts, embeds, or a new paid/vendor-locked service;
- host/domain/legal/license/release authority;
- destructive deletion, force push, merge, or production release not explicitly requested;
- a major architecture departure from the true MPA/stack.

Do not stop for an implementation choice already governed clearly by the docs.

## Tool and mutation discipline

- Read before writing.
- Confirm repository/branch/target before a remote mutation.
- Preserve unrelated changes and use explicit file scope.
- Prefer atomic, reviewable commits.
- Do not expose tokens, credentials, private messages, or attachment URLs in logs/docs.
- Confirm a branch, commit, PR, deployment, or file update from the tool response before claiming it exists.
- If a tool is unavailable, report the limitation and provide an exact safe next step; do not fake completion.

## Handoff contract

A final handoff contains:

- outcome first;
- branch/commit/PR or exact local state;
- key files/systems changed;
- product/architecture consequences;
- automated commands and observed results;
- manual routes/themes/viewports/input modes checked;
- content/asset/rights/privacy records changed;
- limitations and blockers;
- rollback and one executable next step.

The handoff must be self-contained enough that the next builder does not need private conversation history.
