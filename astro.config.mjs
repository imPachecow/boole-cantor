// @ts-check
import { defineConfig } from 'astro/config';

// En GitHub Actions, SITE y BASE_PATH se calculan solos a partir del usuario y el nombre del repo.
export default defineConfig({
  site: process.env.SITE ?? 'http://localhost:4321',
  base: process.env.BASE_PATH ?? '/',
});
