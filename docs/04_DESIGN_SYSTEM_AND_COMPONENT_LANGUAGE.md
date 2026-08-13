# Design System and Component Language

## Foundations

Source files:

- `src/styles/_tokens.scss`: spacing, type stacks, semantic colors, theme atmospheres.
- `src/styles/_base.scss`: reset, typography, focus, global surfaces.
- `src/styles/_components.scss`: shared controls, shell, cards, media.
- `src/styles/_pages.scss`: page compositions.
- `src/styles/_responsive.scss`: breakpoints, reduced motion, increased contrast.

Prefer semantic CSS variables over page-specific raw colors. `Nari`, `Dark`, and `Light` are values of `data-theme` on `<html>`.

## Scale

| System | Values |
|---|---|
| Spacing | `0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4.5, 6.5rem` |
| Radius | `0.55rem`, `1rem`, `1.75rem`, pill |
| Page width | `76rem` plus responsive gutter |
| Header | `4.75rem` |
| Motion | 160ms fast, 280ms base, ease-out `cubic-bezier(.22,1,.36,1)` |
| Breakpoints | 70rem, 56rem, 45rem, 30rem |

Spacing may compress at smaller breakpoints; touch targets do not.

## Typography hierarchy

- `h1`: editorial display, clamp 2.7–6.8rem desktop and a mobile-specific clamp; one per primary content document.
- `h2`: 2–3.8rem; room/section threshold.
- `h3`: 1.35–1.8rem; card/content title.
- Body: 1rem/1.65; lead text 1.05–1.25rem.
- Eyebrow: small uppercase monospace, high tracking, decorative icon optional.
- Detail/status: 0.6–0.8rem only for secondary metadata; never primary instruction.

## Components

### Site shell

`SiteShell` owns skip link, header, `<main id="main-content">`, footer, and Ghostie layer. Secret route deliberately bypasses it. Never duplicate header/footer across page components.

### Header/navigation

Sticky translucent warm surface with text wordmark and local Ghostie icon. Desktop nav uses concise labels; medium layouts use compact labels; mobile uses an explicit menu button and full-width panel. Active state combines contrast, surface, and emerald underline—not color alone.

### Theme switcher

Three native buttons in a labelled group. Icons and labels represent Nari/Dark/Light; `aria-pressed` carries state. Theme boot runs before Vue to prevent flash. Do not replace with a color-only toggle.

### Buttons and links

- Ember: primary warm action.
- Cream: high-contrast action over environmental art.
- Emerald: meaningful entry/confirmation.
- Soft: secondary on surfaces.
- Outline/ghost: lower priority.
- Text link: directional or source relationship, with icon when useful.

Buttons are 3rem high by default, 2.55rem only for compact header utility. Hover lift is optional and removed for reduced motion; focus is always a 3px semantic ring with 4px offset.

### Cards/panels

Gateway cards are spatial doors, not generic equal cards. Media cards contain responsive thumbnail, explicit play affordance, source label, title, description, and outbound notice. Resource/fit/studio cards use opaque reading surfaces. No essential content appears only on hover.

### Disclaimers and holds

Use honest content blocks, not disabled skeletons, for missing schedule, gallery, business contact, lore, or resources. State what is pending, why it matters, and the safe current path. Never disguise fake content as “demo.”

### Haven door

A four-state progressive component: threshold, community behavior, boundary promise, invite. It is narrative context, not security. Each stage uses a real button and visible text. The Discord anchor exists only in the final state.

### Ghostie summoner

Fixed low-priority button opens a compact status card. Animation is opacity/vertical/scale under 280ms; reduced motion uses opacity or immediate state. The interaction never covers required navigation and has a close control.

### Galleries

Future nail galleries need semantic figures/cards, explicit dimensions, responsive sources, captions/credits, and keyboard-operable detail views if introduced. Do not add a carousel unless it has button, keyboard, screen-reader, touch, and reduced-motion behavior.

### Forms

No form exists. Do not add one until backend, purpose, fields, retention, validation, spam protection, privacy notice, and success/error delivery are approved. A form that cannot submit is worse than an honest outbound contact route.

## States

- **Loading:** static MPA HTML shell and reserved media dimensions; avoid branded spinners for normal lazy chunks.
- **Unavailable:** plain-language hold with a safe alternative.
- **Error:** preserve destination text even when remote thumbnail fails.
- **Focus:** visible on every interactive element; never suppressed.
- **Selected:** text/shape and color.
- **Reduced motion:** content state changes remain; transforms stop.
- **Increased contrast:** borders use current color and key microcopy becomes heavier.

## Icon policy

Use tree-shaken Lucide Vue components for functional support. Icons are `aria-hidden` when adjacent text already names the action. No icon-only control lacks an accessible label. Brand logos are not simulated with Lucide icons.

## Visual anti-patterns

No glass dashboard grid, gradient-only hierarchy, tiny low-contrast nav, excessive pill controls, generic purple everywhere, neutral-black Dark theme, stark-white Light theme, hover-only disclosure, text embedded only in raster art, or decorative animation on every object.
