# Release Evidence Record — `[release/version]`

**Release ID:** `[RELEASE-YYYY-NNN]`  
**Commit:** `[full SHA]`  
**Branch/tag:** `[reference]`  
**Deployment ID/URL:** `[provider identifier and public-safe URL]`  
**Date/time/timezone:** `[timestamp]`  
**Operator/reviewer:** `[roles]`  
**Previous known-good deployment:** `[identifier]`

## Scope

- Changes included: `[summary]`
- Changes explicitly excluded: `[summary]`
- Product/canon approvals: `[record IDs]`
- Asset approvals: `[record IDs]`
- Remaining noncritical limitations: `[list]`

## Clean automated gate

```text
Node version: [value]
npm version: [value]
npm ci: [pass/fail + observed summary]
npm run check: [pass/fail + observed summary]
Build document count: [value]
Tests: [value]
```

Attach or link safe logs; do not fabricate or paste secrets.

## Artifact and budgets

| Measurement | Result | Budget | Pass? |
|---|---:|---:|---:|
| Shared JS + CSS gzip | `[value]` | ≤120 KB | `[ ]` |
| Largest initial route chunk gzip | `[value]` | ≤35 KB | `[ ]` |
| Home wide hero | `[value]` | ≤160 KB | `[ ]` |
| First viewport local images | `[value]` | ≤250 KB | `[ ]` |
| CLS | `[value/environment]` | <0.1 target | `[ ]` |
| LCP | `[value/environment]` | <2.5s p75 target | `[ ]` |
| Initial third-party JS/iframes | `[value]` | 0 | `[ ]` |

## Route/host matrix

| Route | Direct load | Refresh | Metadata | Header/cache | Notes |
|---|---:|---:|---:|---:|---|
| `/` | `[ ]` | `[ ]` | `[ ]` | `[ ]` | |
| `/meet-nari/` | `[ ]` | `[ ]` | `[ ]` | `[ ]` | |
| `/streams/` | `[ ]` | `[ ]` | `[ ]` | `[ ]` | |
| `/nail-studio/` | `[ ]` | `[ ]` | `[ ]` | `[ ]` | |
| `/haven/` | `[ ]` | `[ ]` | `[ ]` | `[ ]` | |
| `/resources/` | `[ ]` | `[ ]` | `[ ]` | `[ ]` | |
| `/work-with-nari/` | `[ ]` | `[ ]` | `[ ]` | `[ ]` | |
| `/support/` | `[ ]` | `[ ]` | `[ ]` | `[ ]` | |
| `/stories/` | `[ ]` | `[ ]` | `[ ]` | `[ ]` | |
| `/the-prinny-cult/` | `[ ]` | `[ ]` | `[ ]` | `[ ]` | |
| unknown path / 404 | `[ ]` | `[ ]` | `[ ]` | `[ ]` | `[status behavior]` |

## Visual and responsive matrix

Record browser/OS/device or emulation details.

| Width/preference | Nari | Dark | Light | Notes |
|---|---:|---:|---:|---|
| 320px | `[ ]` | `[ ]` | `[ ]` | |
| 390px | `[ ]` | `[ ]` | `[ ]` | |
| 768px | `[ ]` | `[ ]` | `[ ]` | |
| Wide desktop | `[ ]` | `[ ]` | `[ ]` | |
| 200% text | `[ ]` | `[ ]` | `[ ]` | |
| 400% page zoom | `[ ]` | `[ ]` | `[ ]` | |
| Reduced motion | `[ ]` | `[ ]` | `[ ]` | |

## Accessibility evidence

- Automated scanner/tool/version/result: `[details]`
- Keyboard-only route and interaction result: `[details]`
- Screen reader/browser/OS/result: `[details]`
- Focus/menu/theme/Ghostie/Haven/floorboard/secret result: `[details]`
- Contrast measurement/tool/result: `[details]`
- Known noncritical issues and owner: `[details]`

## Content, rights, and privacy

- [ ] Canonical identity wording approved.
- [ ] Every final asset has intake/rights/credit record.
- [ ] Nail/community photo privacy and EXIF/GPS checks pass.
- [ ] Volatile links, Discord, media selection/rating, contact, resources, support, schedule, and metrics reverified.
- [ ] No private identity/location/contact/message/family detail.
- [ ] No fake claims, placeholders presented as final, or unlicensed franchise/creator art.
- [ ] Removal/correction owners exist.

## Security and network

- HTTPS/certificate: `[result]`
- CSP/referrer/permissions/no-sniff/frame/HSTS: `[observed result]`
- Cache behavior: `[observed result]`
- Secret scan/review: `[method/result]`
- Dependency/license review: `[method/result]`
- Initial/follow-up network origins: `[list/result]`
- Preview indexing/access: `[result]`

## Interaction and failure states

- [ ] Mobile nav including Escape/focus decision.
- [ ] Theme pre-paint/persistence across documents.
- [ ] Ghostie open/close/reduced motion.
- [ ] Haven door through invite and reset.
- [ ] Expired/disabled invite behavior.
- [ ] Floorboard/secret buttons, optional shortcut, exit, cap.
- [ ] Remote thumbnail/image failure fallback.
- [ ] 404 and external-link failure review.

## Rollback

- Mechanism: `[procedure]`
- Operator/access confirmed: `[result]`
- Rehearsal or safe verification: `[result]`
- Cache/asset considerations: `[details]`
- Recovery objective/observed time: `[details]`

## Release decision

- Critical blockers remaining: `[none or list]`
- Decision: `[APPROVE | HOLD | ROLLBACK]`
- Approved by/date: `[authorities]`
- Post-release checks completed at: `[timestamp]`
- Follow-up owners/items: `[list]`
