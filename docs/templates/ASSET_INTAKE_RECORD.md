# Asset Intake Record — `[asset family or batch]`

**Record ID:** `[ASSET-YYYY-NNN]`  
**Status:** `[PROPOSED | APPROVED | BLOCKED | RETIRED]`  
**Received:** `[YYYY-MM-DD]`  
**Reviewed:** `[YYYY-MM-DD]`  
**Reviewer:** `[public-safe name/role]`  
**Approval evidence reference:** `[owner-controlled reference; no private transcript]`

## Purpose

- Intended page(s): `[routes]`
- Intended slot(s): `[hero, portrait, gallery, icon, emote, etc.]`
- Product purpose: `[why this asset is needed]`
- Canonical/placeholder status: `[canonical | adopted project asset | temporary placeholder]`
- Current/legacy version: `[status and version identifier]`

## Ownership and creation

- Asset owner: `[name/role]`
- Artist/photographer/creator: `[credit name]`
- Commissioner/client if relevant: `[public-safe identifier]`
- Original platform/source: `[safe URL or archive ID]`
- Required credit line: `[exact approved wording]`
- Credit placement: `[page caption, credits page, footer, etc.]`

## Permission matrix

| Use | Allowed? | Conditions/evidence |
|---|---:|---|
| Public website display | `[yes/no]` | `[terms]` |
| Local hosting | `[yes/no]` | `[terms]` |
| Responsive resize/compression | `[yes/no]` | `[terms]` |
| Crop/reframing | `[yes/no]` | `[terms/safe zones]` |
| Color/theme treatment | `[yes/no]` | `[terms]` |
| Animation | `[yes/no]` | `[terms]` |
| Social preview/metadata | `[yes/no]` | `[terms]` |
| Sponsor/professional context | `[yes/no]` | `[terms]` |
| AI-adjacent tooling/use | `[yes/no]` | `[restrictions]` |
| Time/territory limitation | `[yes/no]` | `[window/territory]` |

## Source files

| Original filename | Archive/source ID | Type | Dimensions | Bytes | Alpha/profile | SHA-256 |
|---|---|---|---:|---:|---|---|
| `[file]` | `[id]` | `[type]` | `[w×h]` | `[bytes]` | `[value]` | `[hash]` |

- Duplicate/variant notes: `[notes]`
- Master preservation location: `[safe archive ID or repo source path]`
- Master modified? `[must normally be no; explain any exception]`

## Visual and privacy inspection

- Visible subject: `[description]`
- Correct character/model/version: `[yes/no/evidence]`
- Logos/brands/text: `[details]`
- People/community identifiers: `[details/redaction]`
- Location clues, reflections, screens, labels, windows, mail: `[result]`
- EXIF/IPTC/GPS present in source: `[result]`
- Public derivative metadata removed and verified: `[method/result]`
- Adult/sensitive content rating: `[general | adult-opt-in | other approved label]`
- Other privacy or moderation notes: `[notes]`

## Derivative plan

| Output path | Format | Dimensions | Target slot | Crop/quality | Expected max bytes |
|---|---|---:|---|---|---:|
| `[path]` | `[format]` | `[w×h]` | `[slot]` | `[notes]` | `[bytes]` |

- Upscaling performed: `[no | approved exception]`
- Color/profile handling: `[notes]`
- Alpha handling: `[notes]`
- `srcset`/`sizes`: `[values]`
- Loading priority: `[high/eager/lazy]`
- Cache/versioning strategy: `[filename/purge details]`

## Semantics and credits

- Alt text by slot: `[text or empty-alt reason]`
- Caption/context: `[text]`
- Visible credit: `[text/location]`
- Failure fallback: `[behavior]`

## Visual QA

| Check | Result | Evidence/reference |
|---|---|---|
| 320px | `[pass/fail]` | `[reference]` |
| 390px | `[pass/fail]` | `[reference]` |
| 768px | `[pass/fail]` | `[reference]` |
| Wide desktop | `[pass/fail]` | `[reference]` |
| Nari/Dark/Light | `[pass/fail]` | `[reference]` |
| Contrast/copy-safe crop | `[pass/fail]` | `[reference]` |
| Zoom/reflow | `[pass/fail]` | `[reference]` |
| Performance budget | `[pass/fail]` | `[reference]` |

## Approval and retirement

- Approved by: `[authority]`
- Approved at: `[YYYY-MM-DD]`
- Approved exact uses: `[list]`
- Review/expiry: `[date or trigger]`
- Removal/correction owner: `[role]`
- Retirement date/reason: `[if applicable]`
- Placeholder files/text replaced or retained: `[details]`

## Implementation checklist

- [ ] Source preserved and hashed.
- [ ] Permission matrix complete.
- [ ] Privacy/metadata inspection complete.
- [ ] Derivatives are non-upscaled and visually reviewed.
- [ ] Dimensions, responsive sources, loading, alt, caption, credit, and fallback implemented.
- [ ] Manifest, page spec, content record, QA, and governance updated.
- [ ] Automated gate and relevant manual checks recorded.
