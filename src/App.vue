<script setup lang="ts">
import { computed, watchEffect } from "vue";
import { RouterView, useRoute } from "vue-router";
import SiteShell from "@/components/layout/SiteShell.vue";

const route = useRoute();
const isSecret = computed(() => route.meta.secret === true);

watchEffect(() => {
  document.body.dataset.route = String(route.name ?? "unknown");
});
</script>

<template>
  <RouterView v-if="isSecret" />
  <SiteShell v-else>
    <RouterView />
  </SiteShell>
</template>
