import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://LlakaScript.com',
  integrations: [react(), sitemap()],
  output: 'static',
  adapter: netlify()

});