<script setup lang="ts">
import { ArrowLeft, MapPinOff } from "@lucide/vue";
</script>

<template>
  <section class="not-found page-width section-pad">
    <img src="/media/generated/ghostie-512.webp" width="320" height="320" alt="A Ghostie looks innocent beside a missing doorway" />
    <div>
      <MapPinOff :size="34" aria-hidden="true" />
      <p class="eyebrow">Room not found</p>
      <h1>A Ghostie moved the door.</h1>
      <p>The page you asked for is not part of the Haven—or the furniture has been rearranged again.</p>
      <a class="button button--ember" href="/"><ArrowLeft :size="18" aria-hidden="true" /> Return to the front room</a>
    </div>
  </section>
</template>
