import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? 'https://www.nanofighters.club' : 'http://localhost:4321',
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), sitemap(), partytown()],
  output: "server",
  adapter: vercel()
});