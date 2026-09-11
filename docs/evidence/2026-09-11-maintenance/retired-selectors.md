# Removed retired cult selectors

Baseline `8c7fe67`. Each selector begins with an unmounted `cult-` class; no active template/data class builds these names. Mixed active groups were not removed. Remaining global declaration order is equivalent.

## src/styles/_pages.scss

```css
.cult-page
.cult-page::before
.cult-page__escape
.cult-page__card
.cult-page__card > img
.cult-page__card .eyebrow
.cult-page__card h1
.cult-page__lede
.cult-page__oath
.cult-page__reveal
.cult-page__oath p
.cult-page__reveal p
.cult-page__reveal button
```

## src/styles/_world.scss

```css
.cult-collection
.cult-collection__backdrop
.cult-collection__intro
.cult-collection__intro > img
.cult-collection__intro .eyebrow
.cult-collection__intro h1
.cult-collection__intro > p:last-child
.cult-collection__gallery > article
.cult-collection__gallery > article:hover
.cult-collection__gallery > article > span
.cult-collection__gallery > article > img
.cult-collection__oath
.cult-collection__reward
.cult-collection__oath > svg
.cult-collection__reward > svg
.cult-collection__reward > button:not(.button)
.cult-collection__gallery
.cult-collection__gallery > article
```

## src/styles/_polish.scss

```css
.cult-page--collection
.cult-page__escape
.cult-collection
.cult-collection__header--rebuilt
.cult-mascot-sign
.cult-mascot-sign > img
.cult-signboard
.cult-signboard span
.cult-signboard small
.cult-signboard strong
.cult-collection__intro > p:last-child
.cult-collection__roster > div:first-child > p:last-child
.cult-briefing
.cult-briefing > article
.cult-briefing h2
.cult-briefing p
.cult-collection__roster
.cult-collection__gallery
.cult-collection__gallery > article
.cult-collection__gallery > article > span
.cult-collection__gallery img
.cult-collection__contract
.cult-collection__contract > svg
.cult-collection__contract p
.cult-collection__contract .text-button
.cult-collection__gallery
.cult-briefing
.cult-collection__gallery
.cult-collection__header--rebuilt
.cult-mascot-sign
.cult-collection__gallery
.cult-collection__contract
```

## src/styles/_responsive.scss

```css
.cult-page
.cult-page__card
```
