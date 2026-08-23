<script setup lang="ts">
import { ChevronDown, Menu, X } from "@lucide/vue";
import { computed, onBeforeUnmount, ref, watch } from "vue";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher.vue";
import { nariArtwork } from "@/data/artwork";
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
        <img :src="nariArtwork.avatar" width="52" height="52" alt="" />
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
              {{ item.shortLabel ?? item.label }}
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
