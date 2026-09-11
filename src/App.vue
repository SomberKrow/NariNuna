<script setup lang="ts">
// Own the shell decision and body route marker used by composition CSS. Secret routes render their own main landmark.
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
  <!-- The secret view supplies its own shell; ordinary pages must not duplicate global landmarks. -->
  <RouterView v-if="isSecret" />
  <SiteShell v-else>
    <RouterView />
  </SiteShell>
</template>
