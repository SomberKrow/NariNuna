<script setup lang="ts">
import { Menu, X } from "@lucide/vue";
import { computed, onBeforeUnmount, ref, watch } from "vue";
import { primaryNavigation } from "@/data/navigation";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher.vue";

const menuOpen = ref(false);
const currentPath = computed(() => window.location.pathname.replace(/index\.html$/, ""));

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
        <img src="/media/generated/ghostie-128.webp" width="42" height="42" alt="" />
        <span>
          <strong>Nari Nuna</strong>
          <small>The Haven</small>
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
        <nav aria-label="Primary navigation">
          <a
            v-for="item in primaryNavigation"
            :key="item.href"
            :href="item.href"
            :aria-current="isCurrent(item.href) ? 'page' : undefined"
            @click="closeMenu"
          >
            <span class="nav-label--wide">{{ item.label }}</span>
            <span class="nav-label--compact">{{ item.shortLabel ?? item.label }}</span>
          </a>
        </nav>
        <ThemeSwitcher />
        <a class="button button--small button--ember" href="https://www.twitch.tv/nari_nuna" target="_blank" rel="noreferrer noopener">
          Watch live
          <span class="sr-only"> on Twitch (opens in a new tab)</span>
        </a>
      </div>
    </div>
  </header>
</template>
