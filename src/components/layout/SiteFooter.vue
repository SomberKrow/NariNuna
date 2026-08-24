<script setup lang="ts">
import { ArrowUpRight, Heart } from "@lucide/vue";
import { nariArtwork } from "@/data/artwork";
import { footerNavigation } from "@/data/navigation";
import { socialLinks } from "@/data/socials";

const featuredSocials = socialLinks.filter((link) => ["Twitch", "YouTube", "TikTok", "Instagram"].includes(link.label));
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__inner page-width">
      <div class="site-footer__statement">
        <div class="site-footer__portrait"><img :src="nariArtwork.avatar" width="132" height="132" alt="" loading="lazy" /></div>
        <div>
          <p class="eyebrow">From Nari, with a little extra glitter</p>
          <h2>There is room for you here.</h2>
          <p>Come as you are. Keep your boundaries. Leave the room a little warmer than you found it.</p>
        </div>
      </div>

      <div class="site-footer__links">
        <nav aria-label="Footer navigation">
          <a href="/meet-nari/">Meet Nari</a>
          <a href="/haven/">The Haven</a>
          <a v-for="item in footerNavigation" :key="item.href" :href="item.href">{{ item.label }}</a>
        </nav>
        <div class="site-footer__socials" aria-label="Nari's social profiles">
          <a v-for="link in featuredSocials" :key="link.url" :href="link.url" target="_blank" rel="noreferrer noopener">
            {{ link.label }}
            <ArrowUpRight :size="14" aria-hidden="true" />
            <span class="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>

      <div class="site-footer__base">
        <p>Made with <Heart :size="14" aria-hidden="true" /> for Nari and her Ghosties.</p>
        <p>Be kind. Stay curious. Hydrate, please.</p>
      </div>
    </div>
  </footer>
</template>
