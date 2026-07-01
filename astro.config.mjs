import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://www.beco360.com',
  output: 'static',
  adapter: vercel(),
  integrations: [sitemap(), react()],
  fonts: [
    {
      name: 'Plus Jakarta Sans',
      cssVariable: '--font-jakarta',
      provider: fontProviders.google(),
      weights: [400, 500, 600, 700, 800],
      styles: ['normal'],
    },
    {
      name: 'Space Grotesk',
      cssVariable: '--font-space',
      provider: fontProviders.google(),
      weights: [400, 500, 600, 700],
      styles: ['normal'],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
