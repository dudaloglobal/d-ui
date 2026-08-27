import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import dts from 'vite-plugin-dts';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = dirname(fileURLToPath(import.meta.url));
const isStorybook = Boolean(process.env.STORYBOOK);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ...(isStorybook
      ? []
      : [
          dts({
            include: ['src'],
            exclude: [
              'src/**/*.test.ts',
              'src/**/*.test.tsx',
              'src/**/*.stories.tsx',
              'src/**/*.mdx',
            ],
          }),
        ]),
  ],
  build: isStorybook
    ? undefined
    : {
        lib: {
          entry: {
            index: resolve(rootDir, 'src/index.ts'),
          },
          formats: ['es'],
          fileName: () => 'index.js',
          cssFileName: 'd-ui',
        },
        rollupOptions: {
          external: ['react', 'react-dom', 'react/jsx-runtime', '@floating-ui/react'],
        },
        sourcemap: true,
        emptyOutDir: true,
      },
});
