<script setup lang="ts">
import { Moon, Sparkles, Sun } from "@lucide/vue";
import { useTheme } from "@/composables/useTheme";
import type { ThemeName } from "@/types/content";

const { currentTheme, setTheme } = useTheme();

const options: { value: ThemeName; label: string; icon: typeof Sparkles }[] = [
  { value: "nari", label: "Nari", icon: Sparkles },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "light", label: "Light", icon: Sun }
];
</script>

<template>
  <div class="theme-switcher" role="group" aria-label="Choose the Haven atmosphere">
    <button
      v-for="option in options"
      :key="option.value"
      class="theme-switcher__option"
      type="button"
      :aria-pressed="currentTheme === option.value"
      :title="`${option.label} theme`"
      @click="setTheme(option.value)"
    >
      <component :is="option.icon" :size="16" aria-hidden="true" />
      <span>{{ option.label }}</span>
    </button>
  </div>
</template>
