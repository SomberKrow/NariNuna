# Asset Intake Record — Prinny Cult generated vectors

**Record ID:** `ASSET-2026-014`  
**Status:** `PROPOSED`  
**Received:** `2026-08-22`  
**Reviewed:** `2026-08-22`  
**Reviewer:** `Jake / project owner; Kiva / implementation`  
**Approval evidence reference:** Current project direction for Section 14 asset production.

## Purpose

- Intended page: `/the-prinny-cult/`
- Intended slots: hidden-room environment, props, decorative seal, roster UI framing, entry state, easter-egg reward
- Product purpose: give the optional Prinny Cult room a coherent original ceremonial visual language without generating or tracing canonical character art
- Canonical/placeholder status: project-original support assets; character bindings remain separate
- Current version: `v1`

## Ownership and creation

- Asset owner: project owner licensing decision pending
- Creator: project-generated original vector artwork under Jake's direction
- Commissioner/client: Nari Nuna website project
- Original platform/source: repository-native SVG source
- Required credit line: none currently defined
- Credit placement: not required unless owner policy changes

## Permission posture

These vectors were created specifically for this repository and contain no copied franchise character drawings, platform marks, commissioned Nari art, nail portfolio imagery, or private material. Public-release licensing remains subject to the project's final license decision.

The separate 27-character Prinny library is **not** covered by this record and is not ingested or published by this change. Its website-use rights require its own evidence before public binding.

## Source and outputs

All files are authored directly as SVG and served from `public/media/prinny-cult/`:

| Asset ID | ViewBox | Intended use |
|---|---:|---|
| `prinny-cult-room` | 1600×900 | hidden-room environment master |
| `prinny-altar` | 720×520 | focal prop |
| `prinny-pedestal` | 520×640 | featured-character display support |
| `prinny-cult-banner` | 420×680 | environmental banner |
| `prinny-membership-seal` | 512×512 | reusable membership emblem |
| `prinny-summoning-circle` | 900×900 | floor/interaction decoration |
| `prinny-warning-sign` | 640×520 | comedic caution prop |
| `prinny-offering-box` | 700×560 | offering-box prop |
| `prinny-roster-card-template` | 720×420 | blank dynamic roster frame |
| `prinny-rank-badge-set` | 1100×220 | five unlabeled badge motifs |
| `prinny-titleplate-template` | 900×220 | blank dynamic titleplate |
| `prinny-cult-entry-state` | 1200×620 | secret-room threshold art |
| `prinny-cult-easteregg-reward` | 1200×800 | blank initiation/reward certificate frame |

Cryptographic SHA-256, exact byte counts, browser screenshots, and metadata/sanitization evidence still need to be recorded from a local checkout before this record can move to `APPROVED`.

## Visual and privacy inspection

- Visible subject: original abstract ceremonial room and props using the Haven plum/lavender/ember/cream/emerald language
- Logos/brands/text: no third-party marks; essential copy is intentionally not baked into the vectors
- People/community identifiers: none
- Location clues/reflections/screens/private labels: none
- Adult/sensitive content: general
- External references/scripts/fonts: none; SVGs contain local vector primitives only

## Delivery and semantics

- No raster upscaling is involved.
- SVG `viewBox` provides intrinsic proportions; consuming HTML must still provide explicit display dimensions where appropriate.
- Decorative placements should use empty alt; functional/state placements should receive context-specific text in HTML.
- Dynamic names, ranks, titles, bios, and statuses belong in HTML/typed data, not baked into the SVG templates.
- `src/data/prinnyCult.ts` owns the path map and typed approved-content contract.

## QA state

| Check | Result | Evidence/reference |
|---|---|---|
| XML/browser parse | pending local/CI validation | not yet observed |
| 320px | pending | page integration not part of this asset-only pass |
| 390px | pending | page integration not part of this asset-only pass |
| 768px | pending | page integration not part of this asset-only pass |
| Wide desktop | pending | page integration not part of this asset-only pass |
| Nari/Dark/Light | not applicable to raw vectors | secret-room palette is intentionally isolated |
| Performance budget | pending exact byte scan | SVG source is compact but unmeasured here |

## Approval and retirement

- Approved by: pending owner visual review
- Approved exact uses: pending
- Review trigger: character-library rights decision, page integration, or visual-direction revision
- Removal/correction owner: project owner / implementer

## Implementation checklist

- [x] Original support vectors created without franchise character art.
- [x] Dynamic content is separated from image templates.
- [x] Typed path/content contract created.
- [x] Canonical 27-character library kept outside this record and public binding.
- [ ] SHA-256 and exact byte counts recorded from checkout.
- [ ] SVG sanitizer/browser parse validation recorded.
- [ ] Page integration tested at target widths and keyboard/reduced-motion states.
- [ ] Asset manifest updated when the family is adopted for production.
- [ ] Automated gate and relevant manual checks recorded.
