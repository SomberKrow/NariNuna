# Page Signature Devices

**Status:** `IMPLEMENTED` Phase C client-review refinement  
**Scope:** One recognizable, nonessential presentation device per ordinary route  
**Decision posture:** Supports the proposed Nari-only atmosphere; it is not evidence of Nari/Panda approval

## Shared rule

Every ordinary chapter keeps the shared Haven typography, tokens, spacing, navigation, Ghostie family, and Phase B room materials. A route gets one visual signature only. The device is CSS-led, decorative, and absent from the reading order so content remains understandable when decoration or motion is disabled.

| Route | Signature device | Implementation |
|---|---|---|
| Home | Haven room gateways | Preserved without redesign |
| Meet Nari | Journal fragments | Offset papers with restrained clip marks |
| Streams | Broadcast strip | One rail linking platforms and saved moments |
| Nail Studio | Workbench | Ruler ticks and three polish swatches |
| Haven | Doorway progression | A low floor path leading toward the stable door composition |
| Resources | Shelves | Shared uprights and shelf ledges beneath collections |
| Work With Nari | Correspondence ledger | Ruled, numbered public-link index |
| Story Time | Archive album | Album spine and numbered contact-sheet moments |
| Support | Quiet gratitude wall | Sparse pinned notes and increased breathing room |

## Boundaries

- No content, claim, route, interaction, dependency, or artwork asset was added.
- No fake live state, recommendation, nail work, story metadata, business contact, or support entitlement was introduced.
- Home, the Haven doorway, and face-safe chapter compositions remain structurally unchanged.
- Ghosties remain existing inhabitants; no constant animation or motion-dependent meaning was added.

## Validation contract

`tests/environmental-signatures.test.ts` protects the eight route-owned selectors and rejects animation declarations in the shared feedback layer. The full repository gate remains `npm ci` followed by `npm run check`; visual approval remains a separate client-review activity.
