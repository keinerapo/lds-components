import { defineConfig } from 'vitest/config';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'LdsComponents',
      fileName: (format) => `lds-components.${format}.js`,
      formats: ['es']
    },
    rollupOptions: {
      external: [],
    },
    sourcemap: true
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['src/**/*.test.ts'],
    coverage: {
      reporter: ['text', 'json', 'html']
    }
  }
});