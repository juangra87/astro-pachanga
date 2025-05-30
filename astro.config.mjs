// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';

// Obtener el nombre del repositorio desde package.json o usar un valor por defecto
const REPO_NAME = 'pachanga-frontend';

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind()],
  site: `https://perezjuangabriel.github.io`,
  base: `/${REPO_NAME}`,
  build: {
    assets: 'assets'
  }
});