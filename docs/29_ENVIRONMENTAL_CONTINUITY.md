# Environmental Continuity

**Status:** `IMPLEMENTED` Phase B review refinement  
**Authority:** Jake-directed visual refinement within existing page responsibilities  
**Scope:** Post-banner material, light, and section continuity only  
**Implementation:** `src/styles/_feedback.scss`  
**Update trigger:** Any change to post-banner room material, shared inset geometry, or the route map below

## Purpose

The chapter paintings establish distinct rooms, but the sections below them previously returned too quickly to a shared colored-page and card language. Phase B carries the visitor farther into each room with restrained editorial material cues. It adds no new product behavior, copy, artwork, dependency, or route.

## Shared contract

All affected routes use one common environmental primitive:

- semantic colors derived from existing Nari tokens;
- restrained inset geometry and thin architectural borders;
- low-opacity light and depth rather than opaque scenery;
- route-scoped CSS custom properties rather than page markup or new components;
- decorative pseudo-elements with `pointer-events: none`;
- reduced opacity on narrow screens to protect mobile density and readability.

The decoration carries no text, state, or interaction. Content remains complete if CSS backgrounds or pseudo-elements are disabled.

## Route material map

| Route | Material cue | Environmental purpose |
|---|---|---|
| Home | Existing illustrated arrival | Already behaves as one continuous room; intentionally unchanged |
| Meet Nari | Journal rules and warm binding edge | Personal desk, identity notes, intimate introduction |
| Streams | Monitor bays and broadcast-desk rails | Live-room equipment and saved-clip structure |
| Nail Studio | Workbench boards and tiny lacquer glints | Handmade craft surface without invented nail work |
| Haven | Low-contrast rug lattice | Grounds community values and darkens toward the existing doorway |
| Resources | Shelf uprights and horizontal ledges | Organized collections without implying approved recommendations |
| Work With Nari | Correspondence rules and margin edge | Writing desk, clear fit, and public-contact fallback |
| Story Time | Album spine and saved-memory rows | Archive rhythm around real curated moments |
| Support | Soft stitched gratitude wall | The quietest room treatment, preserving free-support-first language |

## Guardrails

- Do not convert these cues into literal scenery, full-page textures, or new cards.
- Do not add parallax, looping animation, video, noise assets, or runtime observers.
- Do not make decoration necessary to identify a section.
- Do not replace the page-specific compositions established in the client-feedback pass.
- Continue using semantic tokens so any approved future atmosphere decision remains feasible.

## Validation contract

Run `npm run check`, then review every ordinary route at 320, 390, 768, and wide desktop widths. Confirm readable copy, visible focus, no horizontal overflow, unchanged content order/actions, coherent transition from the opening painting, and decoration that recedes behind content. Reduced motion requires no alternate implementation because Phase B introduces no motion.
