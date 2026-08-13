<script setup lang="ts">
import { ArrowUpRight, BadgeCheck, BookMarked, ExternalLink, Scale } from "@lucide/vue";
import SectionHeading from "@/components/ui/SectionHeading.vue";
import { resourceCategories } from "@/data/content";
import { socialLinks } from "@/data/socials";
</script>

<template>
  <section class="page-hero page-hero--simple page-width section-pad">
    <div class="page-hero__copy">
      <p class="eyebrow"><BookMarked :size="16" aria-hidden="true" /> Nari's resource cabinet</p>
      <h1>Useful things, with the reason they earned shelf space.</h1>
      <p class="page-hero__lede">This will never be an affiliate-link wall. A recommendation needs Nari's approval, real context, and an honest disclosure before it gets a card.</p>
    </div>
  </section>

  <section class="section-pad page-width">
    <SectionHeading eyebrow="Cabinet map" title="The shelves are built. Nari chooses what belongs." />
    <div class="resource-grid">
      <article v-for="category in resourceCategories" :key="category.title">
        <div class="resource-grid__top"><BadgeCheck :size="26" aria-hidden="true" /><span>{{ category.status }}</span></div>
        <h2>{{ category.title }}</h2>
        <p>{{ category.description }}</p>
        <ul><li v-for="example in category.examples" :key="example">{{ example }}</li></ul>
      </article>
    </div>
  </section>

  <section class="disclosure-principles section-pad">
    <div class="disclosure-principles__inner page-width">
      <Scale :size="42" aria-hidden="true" />
      <div>
        <p class="eyebrow">The shelf rules</p>
        <h2>Recommendation first. Relationship disclosed. No urgency theater.</h2>
        <p>Affiliate links will be labeled where required. Products will not be described as tested, loved, safe, essential, or discounted unless Nari has confirmed the claim and the relationship.</p>
      </div>
    </div>
  </section>

  <section class="social-directory page-width section-pad">
    <SectionHeading eyebrow="Current verified doors" title="Looking for Nari somewhere else?" text="These are the public destinations verified during this build. They open on their own platforms." />
    <div class="social-directory__grid">
      <a v-for="link in socialLinks" :key="link.url" :href="link.url" target="_blank" rel="noreferrer noopener">
        <span><strong>{{ link.label }}</strong><small>{{ link.handle }}</small></span>
        <ExternalLink :size="18" aria-hidden="true" />
        <p>{{ link.purpose }}</p>
        <span class="sr-only"> (opens in a new tab)</span>
      </a>
    </div>
    <p class="verification-note"><ArrowUpRight :size="16" aria-hidden="true" /> Link labels verified 2026-08-13; they are rechecked before launch.</p>
  </section>
</template>
