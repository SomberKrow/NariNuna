<script setup lang="ts">
import { ArrowRight, Eye, Gamepad2, Heart, MoonStar, Paintbrush, Shield } from "@lucide/vue";
import SectionHeading from "@/components/ui/SectionHeading.vue";
import { identityPillars } from "@/data/content";
</script>

<template>
  <section class="page-hero page-hero--portrait page-width section-pad">
    <div class="page-hero__copy">
      <p class="eyebrow">Meet your host</p>
      <h1>Nari is the big sister your group chat warned you about.</h1>
      <p class="page-hero__lede">Warm, protective, wildly chatty, creative to the fingertips, and always one game away from a completely reasonable amount of panic.</p>
      <div class="tag-row" aria-label="Nari's creative roles">
        <span><Gamepad2 :size="16" aria-hidden="true" /> VTuber & gamer</span>
        <span><Paintbrush :size="16" aria-hidden="true" /> Self-taught nail artist</span>
        <span><Heart :size="16" aria-hidden="true" /> Haven keeper</span>
      </div>
    </div>
    <div class="page-hero__portrait">
      <div class="portrait-frame">
        <img src="/media/generated/ghostie-768.webp" width="600" height="600" alt="An original lavender Ghostie holds Nari's future character portrait space" />
      </div>
      <p>Original launch placeholder. Nari's approved character render and artist credit will replace it.</p>
    </div>
  </section>

  <section class="section-pad page-width">
    <SectionHeading eyebrow="One person, many rooms" title="None of these sides are separate brands." />
    <div class="pillar-grid">
      <article v-for="pillar in identityPillars" :key="pillar.title" class="pillar-card">
        <p class="eyebrow">{{ pillar.eyebrow }}</p>
        <h2>{{ pillar.title }}</h2>
        <p>{{ pillar.text }}</p>
      </article>
    </div>
  </section>

  <section class="symbol-section section-pad">
    <div class="symbol-section__inner page-width">
      <article>
        <Eye :size="34" aria-hidden="true" />
        <p class="eyebrow">A signature glimpse</p>
        <h2>Emerald, used with purpose.</h2>
        <p>Nari's emerald character eyes are meant as a glimpse into her personality and soul. The site treats emerald the same way: a small, meaningful signal—not green paint poured over everything.</p>
      </article>
      <article>
        <MoonStar :size="34" aria-hidden="true" />
        <p class="eyebrow">A personal symbol</p>
        <h2>Sun and moon, kept personal.</h2>
        <p>Nari's meshed sun-and-moon tattoo connects to her Mexicana heritage, people, family, and bloodline. Until her own approved artwork and wording arrive, the site honors that meaning without inventing cultural history or decorative imitation.</p>
      </article>
    </div>
  </section>

  <section class="big-sister-section page-width section-pad">
    <div class="big-sister-section__icon"><Shield :size="42" aria-hidden="true" /></div>
    <div>
      <p class="eyebrow">Sweet does not mean soft-spined</p>
      <h2>Protection and boundaries belong in the same sentence.</h2>
      <p>The Haven can be loud, playful, affectionate, and a little feral. It is never an excuse to treat people as props. Nari's warmth comes with a spine: care for the Ghosties, respect the room, and do not mistake support for ownership.</p>
      <a class="text-link" href="/haven/">See what the Haven stands for <ArrowRight :size="16" aria-hidden="true" /></a>
    </div>
  </section>

  <section class="lore-hold section-pad page-width">
    <div>
      <p class="eyebrow">Lore room · deliberately held</p>
      <h2>The next chapter needs Nari's canonical art.</h2>
      <p>The approved website direction includes a warm, joy-spreading Grim Reaper concept, while current public profiles use CatDog language and art. This build refuses to silently mash those identities together. The final lore chapter will open once Nari confirms how they connect.</p>
    </div>
    <img src="/media/generated/ghostie-256.webp" width="190" height="190" alt="A curious lavender Ghostie waits beside the closed lore room" loading="lazy" />
  </section>
</template>
