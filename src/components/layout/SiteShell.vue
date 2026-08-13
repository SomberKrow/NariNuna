<script setup lang="ts">
import SiteFooter from "./SiteFooter.vue";
import SiteHeader from "./SiteHeader.vue";
import GhostieSummoner from "@/components/ui/GhostieSummoner.vue";
</script>

<template>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <SiteHeader />
  <main id="main-content" tabindex="-1">
    <slot />
  </main>
  <SiteFooter />
  <GhostieSummoner />
</template>
