<script setup lang="ts">
import { ChevronDown, Menu, X } from "@lucide/vue";
import { computed, onBeforeUnmount, ref, watch } from "vue";
import NariHavenMark from "@/components/art/NariHavenMark.vue";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher.vue";
import { footerNavigation, primaryNavigation } from "@/data/navigation";
import { twitchUrl } from "@/data/socials";

const menuOpen = ref(false);
const currentPath = computed(() => window.location.pathname.replace(/index\.html$/, ""));
const principalLinks = primaryNavigation.filter((item) =>
  ["/meet-nari/", "/streams/", "/nail-studio/", "/haven/"].includes(item.href)
);
const moreLinks = [
  ...primaryNavigation.filter((item) => ["/resources/", "/work-with-nari/"].includes(item.href)),
  ...footerNavigation
];

function isCurrent(href: string): boolean {
  return currentPath.value === href || (href === "/" && currentPath.value === "");
}

function closeMenu(): void {
  menuOpen.value = false;
}

function handleEscape(event: KeyboardEvent): void {
  if (event.key === "Escape") closeMenu();
}

watch(menuOpen, (open) => {
  document.body.classList.toggle("nav-is-open", open);
});

window.addEventListener("keydown", handleEscape);
onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleEscape);
  document.body.classList.remove("nav-is-open");
});
</script>

<template>
  <header class="site-header">
    <div class="site-header__inner page-width">
      <a class="brand-mark" href="/" aria-label="Nari Nuna's Haven, home">
        <span class="brand-mark__emblem"><NariHavenMark /></span>
        <span>
          <strong>Nari <i>Nuna</i></strong>
          <small>The little world next door</small>
        </span>
      </a>

      <button
        class="nav-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="primary-navigation"
        :aria-label="menuOpen ? 'Close navigation' : 'Open navigation'"
        @click="menuOpen = !menuOpen"
      >
        <X v-if="menuOpen" :size="22" aria-hidden="true" />
        <Menu v-else :size="22" aria-hidden="true" />
      </button>

      <div id="primary-navigation" class="site-header__panel" :class="{ 'is-open': menuOpen }">
        <nav class="site-header__main-nav" aria-label="Primary navigation">
          <a
            v-for="item in principalLinks"
            :key="item.href"
            :href="item.href"
            :aria-current="isCurrent(item.href) ? 'page' : undefined"
            @click="closeMenu"
          >
            {{ item.shortLabel ?? item.label }}
          </a>
        </nav>

        <details class="site-header__more">
          <summary>More <ChevronDown :size="15" aria-hidden="true" /></summary>
          <nav aria-label="Additional Haven rooms">
            <a
              v-for="item in moreLinks"
              :key="item.href"
              :href="item.href"
              :aria-current="isCurrent(item.href) ? 'page' : undefined"
              @click="closeMenu"
            >
              <span>{{ item.shortLabel ?? item.label }}</span>
              <small>{{ item.href === "/resources/" ? "Useful things" : item.href === "/work-with-nari/" ? "Collaborations" : item.href === "/stories/" ? "Saved moments" : "Support Nari" }}</small>
            </a>
          </nav>
        </details>

        <ThemeSwitcher />
        <a class="site-header__live-link" :href="twitchUrl" target="_blank" rel="noreferrer noopener">
          <span aria-hidden="true"></span>
          On Twitch
          <span class="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.brand-mark__emblem { display: block; width: 2.9rem; height: 2.9rem; flex: 0 0 auto; }
.brand-mark__emblem :deep(.nari-haven-mark) { filter: drop-shadow(0 0.45rem 0.8rem rgb(35 17 27 / 22%)); }
.site-header__more { position: relative; }
.site-header__more > summary {
  display: flex;
  min-height: 2.7rem;
  align-items: center;
  justify-content: space-between;
  gap: 0.55rem;
  padding: 0.65rem 0.75rem;
  color: var(--text-muted);
  border: 1px solid var(--story-line);
  border-radius: 0.45rem;
  font-size: 0.76rem;
  font-weight: 760;
  list-style: none;
  cursor: pointer;
}
.site-header__more > summary::-webkit-details-marker { display: none; }
.site-header__more > summary svg { transition: transform 180ms ease; }
.site-header__more[open] > summary { color: var(--text); background: color-mix(in srgb, var(--story-surface) 75%, transparent); }
.site-header__more[open] > summary svg { transform: rotate(180deg); }
.site-header__more > nav {
  display: grid;
  gap: 0.45rem;
  padding: 0.55rem;
  margin-block-start: 0.5rem;
  background: var(--story-surface-deep);
  border: 1px solid var(--story-line);
  border-radius: 0.6rem;
  box-shadow: 0 1rem 2.5rem rgb(12 7 11 / 22%);
}
.site-header__more > nav > a {
  display: grid;
  gap: 0.1rem;
  padding: 0.75rem 0.8rem;
  color: var(--story-copy);
  background: color-mix(in srgb, var(--story-surface) 78%, transparent);
  border: 1px solid transparent;
  border-radius: 0.45rem;
  text-decoration: none;
}
.site-header__more > nav > a:hover,
.site-header__more > nav > a[aria-current="page"] { border-color: var(--story-line); background: var(--story-surface-soft); }
.site-header__more > nav > a small { color: var(--story-muted); font-size: 0.58rem; font-weight: 650; letter-spacing: 0.04em; }
@media (min-width: 56rem) {
  .site-header__more > summary { min-height: auto; padding: 0.65rem 0.7rem; border-color: transparent; border-radius: var(--radius-sm); }
  .site-header__more > nav {
    position: absolute;
    z-index: 30;
    top: calc(100% + 0.65rem);
    right: 0;
    width: 22rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.55rem;
    padding: 0.7rem;
    margin: 0;
  }
  .site-header__more > nav > a { min-height: 4.5rem; align-content: center; padding: 0.85rem 0.9rem; }
}
</style>
