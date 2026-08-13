<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}>();
</script>

<template>
  <header class="section-heading" :class="`section-heading--${align ?? 'left'}`">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p v-if="text" class="section-heading__text">{{ text }}</p>
    <slot />
  </header>
</template>
