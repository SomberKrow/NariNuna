<script setup lang="ts">
// Dormant reusable heading retained for maintenance; current room pages own distinct headers. Adding it back is a composition decision.
defineProps<{
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}>();
</script>

<template>
  <!-- Optional eyebrow and description surround a semantic h2; callers supply any following actions through the slot. -->
  <header class="section-heading" :class="`section-heading--${align ?? 'left'}`">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p v-if="text" class="section-heading__text">{{ text }}</p>
    <slot />
  </header>
</template>
