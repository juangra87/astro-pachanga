import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://juangra87.github.io',
  base: '/astro-pachanga',
  output: 'static',
  integrations: [tailwind(), vue()]
});
