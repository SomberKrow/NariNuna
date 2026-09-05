<script setup lang="ts">
import { ArrowLeft, MapPinOff } from "@lucide/vue";
import GhostieArt from "@/components/art/GhostieArt.vue";
</script>

<template>
  <section class="not-found page-width section-pad">
    <GhostieArt class="not-found__ghostie" sizes="(min-width: 48rem) 320px, 80vw" variant="panicked" :decorative="false" label="A panicked Nari Nuna Ghostie who cannot find the missing room" />
    <div><MapPinOff :size="34" aria-hidden="true" /><p class="eyebrow">This room wandered off</p><h1>A Ghostie moved<br /><em>the door again.</em></h1><p>We would blame the pillow fort, but honestly? This one has Prinny energy.</p><a class="button button--ember" href="/"><ArrowLeft :size="18" aria-hidden="true" /> Back to the Haven</a></div>
  </section>
</template>

<style scoped>
.not-found__ghostie { --ghostie-size: 18rem; min-height: 18rem; border: 1px solid var(--story-line); border-radius: 0.75rem; }
@media (min-width: 56rem) { .not-found__ghostie { --ghostie-size: 22rem; min-height: 24rem; } }
</style>
