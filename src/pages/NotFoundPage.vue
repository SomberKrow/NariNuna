<script setup lang="ts">
import { ArrowLeft, MapPinOff } from "@lucide/vue";
import GhostieIllustration from "@/components/art/GhostieIllustration.vue";
</script>

<template>
  <section class="not-found page-width section-pad">
    <GhostieIllustration class="not-found__ghostie" variant="lost" :decorative="false" label="A lost Haven Ghostie carrying a tiny lantern and looking for the missing room" />
    <div><MapPinOff :size="34" aria-hidden="true" /><p class="eyebrow">This room wandered off</p><h1>A Ghostie moved<br /><em>the door again.</em></h1><p>We would blame the pillow fort, but honestly? This one has Prinny energy.</p><a class="button button--ember" href="/"><ArrowLeft :size="18" aria-hidden="true" /> Back to the Haven</a></div>
  </section>
</template>

<style scoped>
.not-found__ghostie { min-height: 18rem; border: 1px solid var(--story-line); border-radius: 0.75rem; }
@media (min-width: 56rem) { .not-found__ghostie { min-height: 24rem; } }
</style>
