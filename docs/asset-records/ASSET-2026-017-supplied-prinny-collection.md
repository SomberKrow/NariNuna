# Asset Intake Record — Owner-Supplied 27-Design Prinny Collection

**Record ID:** `ASSET-2026-017`
**Status:** `PRIVATE_REVIEW_IMPLEMENTED`; public website/franchise/artist approval `BLOCKED`
**Received/reviewed:** 2026-08-23
**Authority:** Repository owner's explicit request to use the actual original collection supplied in the Nari project archive

## Source family

`Nari/Assets/PrinnysForThrow/*.png` contains exactly **27** supplied source illustrations. The corresponding `public/media/prinny-cult/roster/*.webp` collection contains exactly 27 locally hosted review derivatives. `scripts/prepare-client-assets.sh` performs constrained resizing, metadata stripping, and WebP conversion only. It does not redraw, generate, crop, recolor, replace, rearrange, or invent the supplied character designs.

`src/data/prinnyCult.ts` exposes neutral file-derived asset identifiers and generic numbered alternative text. The approved `PrinnyRosterRecord[]` remains empty because filenames are not evidence of approved public names, ranks, biographies, affiliations, or canon.

## Intended review context

The complete collection appears only inside `/the-prinny-cult/`, an optional hidden room excluded from ordinary navigation with `noindex, nofollow`, a visible exit, and no required conversion. The owner-supplied collection is not used as public brand identity, Home imagery, generated nail work, sponsor copy, or a substitute for Nari herself.

## Rights and required decision

- Underlying artwork owner, original artists, and exact commission terms: **not verified**.
- Underlying character/franchise rights and any third-party derivative-design permissions: **not verified**.
- Independent public website display, local hosting, resizing, compression, indexing, and credit requirements: **not verified**.
- Public release action: secure documented rights-holder approval for every relevant underlying use, or remove/gate the collection before deployment.

The owner's private-repository instruction establishes the requested review implementation. It does not erase third-party copyright, trademark, commission, or franchise concerns.
