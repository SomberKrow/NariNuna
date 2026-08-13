<script setup lang="ts">
import { ArrowUpRight, Heart } from "@lucide/vue";
import { footerNavigation } from "@/data/navigation";
import { socialLinks } from "@/data/socials";

const featuredSocials = socialLinks.filter((link) => ["Twitch", "YouTube", "X", "Instagram"].includes(link.label));
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__inner page-width">
      <div class="site-footer__statement">
        <img src="/media/generated/ghostie-256.webp" width="112" height="112" alt="" loading="lazy" />
        <div>
          <p class="eyebrow">Stay strange. Stay kind.</p>
          <h2>There is room for you here.</h2>
          <p>Pull up a pillow, keep your boundaries intact, and leave the room warmer than you found it.</p>
        </div>
      </div>

      <div class="site-footer__links">
        <nav aria-label="Footer navigation">
          <a v-for="item in footerNavigation" :key="item.href" :href="item.href">{{ item.label }}</a>
        </nav>
        <div class="site-footer__socials" aria-label="Nari's social profiles">
          <a
            v-for="link in featuredSocials"
            :key="link.url"
            :href="link.url"
            target="_blank"
            rel="noreferrer noopener"
          >
            {{ link.label }}
            <ArrowUpRight :size="14" aria-hidden="true" />
            <span class="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>

      <div class="site-footer__base">
        <p>Made with <Heart :size="14" aria-hidden="true" /> for Nari's Ghosties.</p>
        <p>Generated environment and mascot art are temporary project assets pending Nari's canonical art pack.</p>
      </div>
    </div>
  </footer>
</template>
