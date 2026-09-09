<script setup lang="ts">
import RoomPassage from "./RoomPassage.vue";
import SiteFooter from "./SiteFooter.vue";
import SiteHeader from "./SiteHeader.vue";
</script>

<template>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <SiteHeader />
  <main id="main-content" tabindex="-1">
    <slot />
  </main>
  <RoomPassage />
  <SiteFooter />
</template>
