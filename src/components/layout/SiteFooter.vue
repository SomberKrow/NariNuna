<script setup lang="ts">
import { ArrowUpRight, Heart } from "@lucide/vue";
import { footerNavigation } from "@/data/navigation";
import { socialLinks } from "@/data/socials";

const featuredSocials = socialLinks.filter((link) => ["Twitch", "YouTube", "TikTok", "Instagram"].includes(link.label));
</script>

<template>
  <footer class="site-footer site-footer--compact">
    <div class="site-footer__inner page-width">
      <div class="site-footer__top">
        <a class="site-footer__brand" href="/">
          <strong>Nari Nuna</strong>
          <span>The little world next door.</span>
        </a>
        <div class="site-footer__socials" aria-label="Nari's social profiles">
          <a v-for="link in featuredSocials" :key="link.url" :href="link.url" target="_blank" rel="noreferrer noopener">
            {{ link.label }}
            <ArrowUpRight :size="13" aria-hidden="true" />
            <span class="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
      <div class="site-footer__bottom">
        <nav aria-label="Footer navigation">
          <a href="/meet-nari/">Meet Nari</a>
          <a href="/haven/">The Haven</a>
          <a v-for="item in footerNavigation" :key="item.href" :href="item.href">{{ item.label }}</a>
        </nav>
        <p>Made with <Heart :size="13" aria-hidden="true" /> for Nari and her Ghosties.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer--compact { padding-block: 0; }
.site-footer--compact .site-footer__inner { display: grid; gap: 0; padding-block: 1.25rem 1rem; }
.site-footer__top,
.site-footer__bottom { display: flex; flex-direction: column; align-items: flex-start; gap: 0.9rem; }
.site-footer__top { padding-block-end: 1rem; border-bottom: 1px solid var(--story-line); }
.site-footer__bottom { padding-block-start: 0.9rem; }
.site-footer__brand { display: grid; gap: 0.08rem; color: var(--text); text-decoration: none; }
.site-footer__brand strong { font-family: var(--font-display); font-size: 1.2rem; font-style: italic; letter-spacing: -0.025em; }
.site-footer__brand span { color: var(--text-muted); font-size: 0.7rem; }
.site-footer__socials { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.site-footer__socials > a {
  display: inline-flex;
  min-height: 2.25rem;
  align-items: center;
  gap: 0.3rem;
  padding: 0.42rem 0.65rem;
  color: var(--story-chip-copy);
  background: var(--story-chip);
  border: 1px solid var(--story-line);
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 750;
  text-decoration: none;
}
.site-footer__bottom nav { display: flex; flex-wrap: wrap; gap: 0.35rem 0.9rem; }
.site-footer__bottom nav a { color: var(--text-muted); font-size: 0.72rem; font-weight: 720; text-decoration: none; }
.site-footer__bottom nav a:hover,
.site-footer__socials > a:hover { color: var(--text); }
.site-footer__bottom > p { display: inline-flex; align-items: center; gap: 0.3rem; margin: 0; color: var(--text-muted); font-size: 0.68rem; }
.site-footer__bottom > p svg { color: var(--story-accent); }
@media (min-width: 48rem) {
  .site-footer--compact .site-footer__inner { padding-block: 1.35rem 1.05rem; }
  .site-footer__top,
  .site-footer__bottom { flex-direction: row; align-items: center; justify-content: space-between; }
  .site-footer__bottom { gap: 2rem; }
}
</style>
