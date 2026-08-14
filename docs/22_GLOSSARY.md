# Glossary

**Status:** `ACTIVE`  
**Owns:** Canonical project, content, design, engineering, and status vocabulary  
**Update trigger:** A durable term is added, renamed, rejected, or becomes ambiguous

## Identity and community

### Nari Nuna

Public creator identity at the center of the site. Current safe wording is “Nari, your chaotic big-sister VTuber.” Do not expand private biography or unresolved canon by inference.

### Nari's Haven / the Haven

The website world and community space. It is a behavioral promise and found-family refuge, not only a Discord server name.

### Ghosties

Public community/mascot term. Ghosties are never a donor tier or proof of intimate access. The current lavender Ghostie imagery is an original project placeholder until official/adopted assets are approved.

### CatDog

Current first-party public profile language describing a half-cat/half-dog Nari identity. It is evidence of current public presentation, not permission to redraw or merge lore.

### Grim Reaper

Concept in the approved planning packet describing a warm, joy-spreading reaper direction. Its relationship to CatDog is intentionally unresolved and a launch blocker.

### Big-sister energy

Warm, playful, direct, protective, and boundary-aware public tone. It does not mean infantilization, control, ownership, or private familial claims.

### Found family

Community warmth, loyalty, mutual support, and room for strangeness, paired with dignity and boundaries. It is an emotional model, not a license to copy a franchise guild.

## Product rooms

### Home

Arrival and world orientation. It is not the full biography, gallery, or all-links directory.

### Meet Nari

Privacy-safe public identity, roles, symbols, boundaries, and canon status.

### Streams

The feeling and selected public evidence of Nari's live/video work, without autoplay or feed scraping.

### Nail Studio

Flagship creative and educational room for Nari's self-taught practice. It is not a salon/services claim.

### The Haven

Community-values room and progressive Discord entrance.

### Resources

Reviewed recommendations with context, provenance, and material-relationship disclosure; not an affiliate storefront.

### Work With Nari

Professional fit, process, boundaries, and approved contact route; not a corporate rebrand.

### Story Time

Selected, privacy-reviewed stories and media; not an automated feed or permanent index of private anecdotes.

### The Prinny Cult

Original optional joke-room name. The route contains no Prinny/Disgaea assets, lore, or private information. The name does not grant permission to use franchise material.

## Visual language

### Nari theme

Default Haven atmosphere at fall sunset/early evening, with warm plum/cocoa and amber light.

### Dark theme

The same Haven later at night, using warm near-black/plum, moonlight, and restrained spectral contrast.

### Light theme

The same Haven in autumn afternoon, using cream/linen, pale wood, dusty rose, and clear ink.

### Emerald signal

Sparse meaningful accent connected to Nari's character eyes. It marks focus, insight, safety, selection, confirmation, or discovery—not bulk decoration.

### Ember action

Warm primary-action color role. It is not an error/danger token.

### Copy-safe zone

A deliberately low-detail region of artwork/composition where HTML text and focus remain legible at target crops.

### Honest hold

A designed state that names missing approval/content, why it matters, and the safe current path. It is not a skeleton pretending content is about to load.

### Canonical asset

Current approved asset whose exact source, version, owner, creator, rights, credit, uses, and restrictions are recorded.

### Project placeholder

Original temporary asset/content state created for layout/world development and visibly labelled noncanonical. It does not become official through repeated use.

### Source master

Unchanged highest-authority supplied/original file preserved according to owner policy and never destructively optimized.

### Web derivative

Permitted resized/cropped/compressed/metadata-clean output used by the public site.

## Architecture

### True MPA

Vite build with a real HTML document for each route. Top-level navigation performs document navigation rather than relying on a universal SPA fallback.

### Shared Vue runtime

The common `/src/main.ts`, Router, shell, components, styles, and data used by all entry documents.

### Document navigation

Ordinary anchor navigation between top-level HTML documents. It preserves the MPA contract.

### Route registry

The synchronized set of Vite entries, Router records, navigation data, output validator, tests, metadata, and docs that define a route.

### Semantic token

CSS custom property describing purpose, such as background, surface, text, ember action, emerald signal, or focus—not merely a raw color.

### Pre-paint theme boot

External blocking script that applies the allowed stored/default theme before Vue mounts, preventing a wrong-theme flash under the current CSP.

### Trusted boundary

A server/system capable of holding secrets and enforcing authorization. The current browser-only static client is not one.

### Target schema

Planned production content contract not yet implemented. It must not be described as current behavior until code/tests enforce it.

### Content contract

Typed/tested invariant protecting data shape and cross-record rules. It does not prove truth, permission, current availability, or accessibility on its own.

## Status and evidence

### Locked

Approved active direction. Changing it requires appropriate authority and a recorded decision.

### Implemented

Present in code at the named snapshot. It may still lack content approval or manual/production verification.

### Verified / Pass

Observed through a named check with date, commit, environment, and result.

### Recorded

Historical evidence exists but was not rerun in the current task.

### Pending

Known required work with no external dependency preventing action.

### Blocked

Cannot truthfully complete without input, rights, approval, or infrastructure.

### Unknown

Intentionally unresolved. Unknown is not filled with confident filler.

### Proposed

Recommendation/direction not yet accepted.

### Retired

No longer public/active. Retained only where source history, rights evidence, or rollback requires it.

### Volatile content

A link, invite, schedule, metric, price, partnership, resource, or status that can become stale and therefore needs verification/expiry ownership.

### Release evidence

Commit-specific automated, manual, rights, privacy, host, performance, and rollback observations. A build pass alone is not full release evidence.
