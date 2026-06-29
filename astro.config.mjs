import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import netlify from '@astrojs/netlify';

export default defineConfig({
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    react(),
    keystatic()
  ]
});