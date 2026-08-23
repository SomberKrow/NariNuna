<script setup lang="ts">
import { ArrowLeft, MapPinOff } from "@lucide/vue";
</script>

<template>
  <section class="not-found page-width section-pad">
    <img src="/media/states/state-404-lost-ghostie.svg" width="400" height="360" alt="A lost little Ghostie searches for a doorway with a tiny lantern" />
    <div><MapPinOff :size="34" aria-hidden="true" /><p class="eyebrow">This room wandered off</p><h1>A Ghostie moved<br /><em>the door again.</em></h1><p>We would blame the pillow fort, but honestly? This one has Prinny energy.</p><a class="button button--ember" href="/"><ArrowLeft :size="18" aria-hidden="true" /> Back to the Haven</a></div>
  </section>
</template>
