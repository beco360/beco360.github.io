import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import vercel from '@astrojs/vercel'
import react from '@astrojs/react'

export default defineConfig({
  site: 'https://www.beco360.com',
  output: 'static',
  adapter: vercel(),
  integrations: [sitemap(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
})
