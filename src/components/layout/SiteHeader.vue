<script setup lang="ts">
import { ChevronDown, Menu, Radio, X } from "@lucide/vue";
import { computed, onBeforeUnmount, ref, watch } from "vue";
import GhostieArt from "@/components/art/GhostieArt.vue";
import { footerNavigation, primaryNavigation } from "@/data/navigation";
import { twitchUrl } from "@/data/socials";

const menuOpen = ref(false);
const moreMenu = ref<HTMLDetailsElement | null>(null);
const menuToggle = ref<HTMLButtonElement | null>(null);
const moreToggle = ref<HTMLElement | null>(null);
const currentPath = computed(() => window.location.pathname.replace(/index\.html$/, ""));
const principalLinks = primaryNavigation.filter((item) =>
  ["/meet-nari/", "/streams/", "/haven/", "/work-with-nari/"].includes(item.href)
);
const moreLinks = [
  ...primaryNavigation.filter((item) => ["/resources/", "/nail-studio/"].includes(item.href)),
  ...footerNavigation
];
const mobileLinks = [...principalLinks, ...moreLinks];

function isCurrent(href: string): boolean {
  return currentPath.value === href || (href === "/" && currentPath.value === "");
}

function closeMenu(): void {
  menuOpen.value = false;
  if (moreMenu.value) moreMenu.value.open = false;
}

function handleEscape(event: KeyboardEvent): void {
  if (event.key !== "Escape") return;
  const returnTo = menuOpen.value ? menuToggle.value : moreMenu.value?.open ? moreToggle.value : null;
  closeMenu();
  returnTo?.focus();
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
        <span class="brand-mark__emblem"><GhostieArt variant="wave" sizes="48px" loading="eager" /></span>
        <span>
          <strong>Nari <i>Nuna</i></strong>
          <small>The little world next door</small>
        </span>
      </a>

      <button
        ref="menuToggle"
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
        <nav class="site-header__mobile-nav" aria-label="Haven rooms">
          <a
            v-for="item in mobileLinks"
            :key="item.href"
            :href="item.href"
            :aria-current="isCurrent(item.href) ? 'page' : undefined"
            @click="closeMenu"
          >
            <strong>{{ item.shortLabel ?? item.label }}</strong>
          </a>
        </nav>

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

        <details ref="moreMenu" class="site-header__more">
          <summary ref="moreToggle">More <ChevronDown :size="15" aria-hidden="true" /></summary>
          <nav aria-label="Additional Haven rooms">
            <a
              v-for="item in moreLinks"
              :key="item.href"
              :href="item.href"
              :aria-current="isCurrent(item.href) ? 'page' : undefined"
              @click="closeMenu"
            >
              <span>{{ item.shortLabel ?? item.label }}</span>
              <small>{{ item.href === "/resources/" ? "Useful things" : item.href === "/nail-studio/" ? "Color and craft" : item.href === "/stories/" ? "Saved moments" : "Support Nari" }}</small>
            </a>
          </nav>
        </details>

        <a class="site-header__live-link" :href="twitchUrl" target="_blank" rel="noreferrer noopener">
          <Radio :size="16" aria-hidden="true" />
          On Twitch
          <span class="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.brand-mark__emblem {
  display: grid;
  width: 3.15rem;
  height: 3.15rem;
  flex: 0 0 auto;
  place-items: center;
  overflow: visible;
  background: radial-gradient(circle at 50% 55%, color-mix(in srgb, var(--story-accent) 22%, transparent), transparent 70%);
  border: 0;
  border-radius: 50%;
  box-shadow: none;
}
.brand-mark__emblem :deep(.ghostie-art) { --ghostie-size: 3.15rem; }
.site-header__more { position: relative; }
.site-header__mobile-nav { display: none; }
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
@media (max-width: 55.99rem) {
  .site-header__main-nav,
  .site-header__more { display: none; }
  .site-header__mobile-nav {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.55rem;
  }
  .site-header__mobile-nav > a {
    display: flex;
    min-height: 3.75rem;
    align-items: center;
    padding: 0.8rem 0.9rem;
    color: var(--story-copy);
    background: color-mix(in srgb, var(--story-surface) 76%, transparent);
    border: 1px solid var(--story-line);
    border-radius: 0.55rem;
    text-decoration: none;
    white-space: normal;
  }
  .site-header__mobile-nav > a > strong {
    font-family: var(--font-display);
    font-size: 1.05rem;
    font-weight: 600;
    line-height: 1.1;
  }
  .site-header__mobile-nav > a[aria-current="page"] {
    background: color-mix(in srgb, var(--story-surface-soft) 88%, transparent);
    border-color: color-mix(in srgb, var(--storybook-gold) 62%, var(--story-line));
  }
}
@media (max-width: 30rem) {
  .brand-mark { gap: 0.5rem; }
  .brand-mark__emblem {
    width: 2.75rem;
    height: 2.75rem;
  }
  .brand-mark__emblem :deep(.ghostie-art) { --ghostie-size: 2.75rem; }
  .brand-mark strong { display: grid; line-height: 0.9; }
  .brand-mark strong i { padding-inline-start: 0.55rem; }
}
@media (max-width: 24rem) {
  .site-header__mobile-nav { grid-template-columns: 1fr; }
  .site-header__mobile-nav > a { min-height: 3.65rem; }
}
.site-header__main-nav > a,
.site-header__live-link,
.site-header__more > summary,
.site-header__more > nav > a { font-size: 0.875rem; }
.site-header__more > nav > a small { font-size: 0.75rem; }
</style>
