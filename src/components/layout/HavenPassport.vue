<script setup lang="ts">
// Optional local progress belongs beside the journey but never gates navigation, Discord, or hidden content.
import { Check, Circle, RotateCcw, Stamp } from "@lucide/vue";
import { toRef } from "vue";
import { useHavenPassport } from "@/composables/useHavenPassport";

const props = defineProps<{ currentPath: string }>();
const { rooms, visitedSet, visitedCount, complete, reset } = useHavenPassport(toRef(props, "currentPath"));
</script>

<template>
  <details class="haven-passport">
    <summary>
      <span class="haven-passport__seal"><Stamp :size="17" aria-hidden="true" /> Haven Passport</span>
      <span>{{ visitedCount }} / {{ rooms.length }} rooms visited</span>
    </summary>
    <div class="haven-passport__body">
      <div
        class="haven-passport__progress"
        role="progressbar"
        aria-label="Rooms recorded in your Haven Passport"
        aria-valuemin="0"
        :aria-valuemax="rooms.length"
        :aria-valuenow="visitedCount"
      >
        <span :style="{ width: `${(visitedCount / rooms.length) * 100}%` }"></span>
      </div>
      <ul>
        <li v-for="room in rooms" :key="room.href" :class="{ 'is-visited': visitedSet.has(room.href) }">
          <Check v-if="visitedSet.has(room.href)" :size="15" aria-hidden="true" />
          <Circle v-else :size="13" aria-hidden="true" />
          <span>{{ room.label }}</span>
        </li>
      </ul>
      <p v-if="complete" class="haven-passport__complete">Every ordinary room has a stamp. The Haven remembers.</p>
      <button type="button" :disabled="visitedCount === 0" @click="reset">
        <RotateCcw :size="14" aria-hidden="true" /> Reset passport
      </button>
    </div>
  </details>
</template>

<style scoped>
.haven-passport { min-width: 0; color: var(--story-copy); border-block: 1px solid var(--story-line); }
.haven-passport summary { display: flex; min-height: 3rem; align-items: center; justify-content: space-between; gap: 0.75rem; padding-block: 0.65rem; color: var(--story-muted); cursor: pointer; font-size: 0.8125rem; }
.haven-passport summary::marker { color: var(--storybook-gold); }
.haven-passport summary:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
.haven-passport__seal { display: inline-flex; align-items: center; gap: 0.4rem; color: var(--story-copy); font-family: var(--font-detail); font-weight: 800; letter-spacing: 0.035em; }
.haven-passport__seal svg { color: var(--storybook-gold); }
.haven-passport__body { display: grid; gap: 0.85rem; padding-block: 0.35rem 0.9rem; }
.haven-passport__progress { height: 0.3rem; overflow: hidden; background: color-mix(in srgb, var(--story-muted) 22%, transparent); border-radius: 999px; }
.haven-passport__progress > span { display: block; height: 100%; background: var(--storybook-gold); border-radius: inherit; transition: width var(--duration-base) ease; }
.haven-passport ul { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.45rem 0.75rem; padding: 0; margin: 0; list-style: none; }
.haven-passport li { display: flex; min-width: 0; align-items: center; gap: 0.4rem; color: var(--story-muted); font-size: 0.8125rem; }
.haven-passport li svg { flex: 0 0 auto; }
.haven-passport li.is-visited { color: var(--story-copy); }
.haven-passport li.is-visited svg { color: var(--storybook-gold); }
.haven-passport__complete { margin: 0; color: var(--storybook-gold); font-family: var(--font-display); font-style: italic; }
.haven-passport button { display: inline-flex; width: fit-content; min-height: 2.75rem; align-items: center; gap: 0.35rem; padding: 0.4rem 0.55rem; color: var(--story-muted); background: transparent; border: 1px solid transparent; border-radius: 0.35rem; font: inherit; font-size: 0.8125rem; cursor: pointer; }
.haven-passport button:hover:not(:disabled) { color: var(--story-copy); border-color: var(--story-line); }
.haven-passport button:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
.haven-passport button:disabled { cursor: default; opacity: 0.55; }
@media (min-width: 48rem) { .haven-passport ul { grid-template-columns: repeat(5, minmax(0, 1fr)); } }
@media (prefers-reduced-motion: reduce) { .haven-passport__progress > span { transition: none; } }
</style>
