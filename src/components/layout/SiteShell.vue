<script setup lang="ts">
// Shared landmarks for ordinary documents; RoomPassage decides its own route eligibility. The secret route bypasses this shell in App.vue.
import RoomPassage from "./RoomPassage.vue";
import SiteFooter from "./SiteFooter.vue";
import SiteHeader from "./SiteHeader.vue";
</script>

<template>
  <!-- One focusable main target serves the skip link; passage and footer remain outside the page content. -->
  <a class="skip-link" href="#main-content">Skip to content</a>
  <SiteHeader />
  <main id="main-content" tabindex="-1">
    <slot />
  </main>
  <RoomPassage />
  <SiteFooter />
</template>
