<script setup lang="ts">
import { KeyRound } from "@lucide/vue";
import { computed, ref } from "vue";

const taps = ref(0);
const revealed = computed(() => taps.value >= 3);

function investigate(): void {
  taps.value = Math.min(taps.value + 1, 3);
}
</script>

<template>
  <aside class="loose-floorboard" aria-live="polite">
    <button v-if="!revealed" type="button" @click="investigate">
      <span aria-hidden="true">▰</span>
      <span>{{ taps === 0 ? "An oddly loose floorboard" : taps === 1 ? "It moved." : "There is definitely something under there." }}</span>
    </button>
    <div v-else class="loose-floorboard__reveal">
      <KeyRound :size="18" aria-hidden="true" />
      <span>A tiny key. A terrible idea.</span>
      <a href="/the-prinny-cult/">Use the key</a>
    </div>
  </aside>
</template>
