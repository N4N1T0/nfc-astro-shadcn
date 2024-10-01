import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import partytown from "@astrojs/partytown";
import robotsTxt from "astro-robots-txt";
import compress from "astro-compress";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? 'https://www.nanofighters.club' : 'http://localhost:4321',
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), sitemap(), partytown({
    config: {
      forward: ["dataLayer.push"],
      debug: false
    }
  }), robotsTxt({
    sitemap: 'https://www.nanofighters.club/sitemap-0.xml',
    host: 'nanofighters.club'
  }), compress(), playformCompress()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});