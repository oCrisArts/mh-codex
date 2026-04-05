// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Configuração para GitHub Pages
  site: 'https://oCrisArts.github.io',
  base: '/mh-codex',
  output: 'static',
  // Configuração de build
  build: {
    assets: 'assets',
  },
});
