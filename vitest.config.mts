// vitest.config.ts
import { defineVitestConfig } from '@nuxt/test-utils/config';
import AutoImport from 'unplugin-auto-import/vite';

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'lcov', 'json']
    }
  },
  // This is to resolve auto import composables from the composables folder
  plugins: [AutoImport({ imports: ['vue'], dirs: ['./composables/'] })],
});
