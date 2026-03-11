// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tinaDirective from './astro-tina-directive/register.js';

export default defineConfig({
  site: 'https://soulfullalgarve.com',
  adapter: cloudflare({
    imageService: 'compile',
  }),
  integrations: [react(), sitemap(), tinaDirective()],
});
