<script setup lang="ts">
import { ArrowLeft, ArrowRight, Sparkles } from "@lucide/vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { havenJourney } from "@/data/journey";

const route = useRoute();
const activeIndex = computed(() => havenJourney.findIndex((room) => room.href === route.path));
const currentRoom = computed(() => havenJourney[activeIndex.value]);
const previousRoom = computed(() => activeIndex.value > 0 ? havenJourney[activeIndex.value - 1] : undefined);
const nextRoom = computed(() => {
  if (activeIndex.value < 0) return undefined;
  return havenJourney[activeIndex.value + 1] ?? havenJourney[0];
});
const isLastRoom = computed(() => activeIndex.value === havenJourney.length - 1);
</script>

<template>
  <aside v-if="currentRoom && nextRoom" class="room-passage" aria-labelledby="room-passage-title">
    <div class="room-passage__inner page-width">
      <header class="room-passage__header">
        <p class="room-passage__eyebrow"><Sparkles :size="14" aria-hidden="true" /> Keep wandering</p>
        <p id="room-passage-title">{{ currentRoom.note }}</p>
      </header>

      <div
        class="room-passage__trail"
        role="progressbar"
        aria-label="Your path through Nari's Haven"
        aria-valuemin="1"
        :aria-valuemax="havenJourney.length"
        :aria-valuenow="activeIndex + 1"
        :aria-valuetext="`${currentRoom.label}, room ${activeIndex + 1} of ${havenJourney.length}`"
      >
        <span
          v-for="(room, index) in havenJourney"
          :key="room.href"
          aria-hidden="true"
          :class="{ 'is-current': index === activeIndex, 'is-past': index < activeIndex }"
        ></span>
      </div>

      <nav class="room-passage__navigation" aria-label="Continue through Nari's Haven">
        <a v-if="previousRoom" class="room-passage__previous" :href="previousRoom.href">
          <ArrowLeft :size="16" aria-hidden="true" />
          <span><small>Previous room</small><strong>{{ previousRoom.label }}</strong></span>
        </a>
        <a class="room-passage__next" :href="nextRoom.href">
          <span><small>{{ isLastRoom ? "Back to the beginning" : "Next room" }}</small><strong>{{ nextRoom.label }}</strong></span>
          <ArrowRight :size="19" aria-hidden="true" />
        </a>
      </nav>
    </div>
  </aside>
</template>

<style scoped>
.room-passage { display: none; }

@media (max-width: 47.99rem) {
  .room-passage {
    --passage-frame: color-mix(in srgb, var(--storybook-gold) 42%, var(--story-line));
    position: relative;
    display: block;
    padding: 1.3rem var(--page-gutter) 0;
    margin-block-start: 0.75rem;
    overflow: hidden;
    isolation: isolate;
  }

  .room-passage::before {
    position: absolute;
    z-index: -1;
    inset: 0;
    background:
      radial-gradient(circle at 50% 22%, color-mix(in srgb, var(--storybook-gold) 14%, transparent), transparent 42%),
      linear-gradient(180deg, transparent, color-mix(in srgb, var(--bg-inset) 72%, transparent));
    content: "";
    pointer-events: none;
  }

  .room-passage__inner {
    position: relative;
    padding: 1.5rem 1rem 1.1rem;
    background:
      linear-gradient(90deg, transparent 0 0%, color-mix(in srgb, var(--storybook-gold) 7%, transparent) 50% 50.4%, transparent 51%),
      linear-gradient(145deg, color-mix(in srgb, var(--story-surface) 92%, var(--plum)), color-mix(in srgb, var(--story-surface-deep) 94%, var(--bg-inset)));
    border: 1px solid var(--passage-frame);
    border-block-start: 0.3rem solid var(--passage-frame);
    border-radius: 3.5rem 3.5rem 0.55rem 0.55rem / 1.8rem 1.8rem 0.55rem 0.55rem;
    box-shadow: inset 0 0 0 0.35rem color-mix(in srgb, var(--story-surface) 42%, transparent), 0 1.1rem 2.5rem rgb(12 7 11 / 20%);
  }

  .room-passage__inner::after {
    position: absolute;
    right: 1.25rem;
    bottom: 0.35rem;
    left: 1.25rem;
    height: 0.2rem;
    background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--storybook-gold) 58%, transparent), transparent);
    content: "";
    pointer-events: none;
  }

  .room-passage__header {
    display: grid;
    gap: 0.25rem;
    margin-inline: auto;
    text-align: center;
  }

  .room-passage__eyebrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.35rem;
    margin: 0;
    color: var(--storybook-gold);
    font-family: var(--font-detail);
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .room-passage__header > p:last-child {
    margin: 0;
    color: var(--story-copy);
    font-family: var(--font-display);
    font-size: clamp(1.2rem, 5.5vw, 1.5rem);
    font-style: italic;
    line-height: 1.2;
    text-wrap: balance;
  }

  .room-passage__trail {
    display: grid;
    grid-template-columns: repeat(9, minmax(0, 1fr));
    align-items: center;
    gap: 0.35rem;
    margin-block: 1rem 1.1rem;
  }

  .room-passage__trail > span {
    height: 0.2rem;
    background: color-mix(in srgb, var(--story-muted) 22%, transparent);
    border-radius: 999px;
  }

  .room-passage__trail > span.is-past {
    background: color-mix(in srgb, var(--storybook-gold) 46%, var(--story-line));
  }

  .room-passage__trail > span.is-current {
    height: 0.38rem;
    background: var(--storybook-gold);
    box-shadow: 0 0 0 0.2rem color-mix(in srgb, var(--storybook-gold) 18%, transparent);
  }

  .room-passage__navigation {
    display: grid;
    gap: 0.55rem;
  }

  .room-passage__navigation > a {
    display: flex;
    min-height: 3.25rem;
    align-items: center;
    gap: 0.55rem;
    color: var(--story-copy);
    text-decoration: none;
  }

  .room-passage__navigation > a span {
    display: grid;
    gap: 0.05rem;
  }

  .room-passage__navigation > a small {
    color: var(--story-muted);
    font-family: var(--font-detail);
    font-size: 0.75rem;
    font-weight: 750;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .room-passage__navigation > a strong {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 600;
  }

  .room-passage__previous {
    width: fit-content;
    padding-inline: 0.25rem;
  }

  .room-passage__next {
    justify-content: space-between;
    padding: 0.8rem 0.9rem 0.8rem 1rem;
    background: linear-gradient(110deg, color-mix(in srgb, var(--story-surface-soft) 88%, transparent), color-mix(in srgb, var(--story-surface) 82%, var(--bg-inset)));
    border: 1px solid var(--passage-frame);
    border-inline-end: 0.3rem solid var(--storybook-gold);
    border-radius: 0.4rem;
    box-shadow: inset 0 0 0 0.2rem color-mix(in srgb, var(--story-surface-deep) 30%, transparent);
    transition: border-color var(--duration-fast) ease, transform var(--duration-fast) var(--ease-out);
  }

  .room-passage__next:hover {
    border-color: var(--storybook-gold);
    transform: translateX(0.15rem);
  }
}

@media (max-width: 24rem) {
  .room-passage__inner { padding-inline: 0.8rem; }
  .room-passage__header > p:last-child { font-size: 1.15rem; }
}

@media (prefers-reduced-motion: reduce) {
  .room-passage__next { transition: none; }
  .room-passage__next:hover { transform: none; }
}
</style>
