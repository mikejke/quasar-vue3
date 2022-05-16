import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import eslint from 'vite-plugin-eslint';
// import stylelint from '@frsource/vite-plugin-stylelint';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: 'src/assets/sass/variables.sass',
    }),
    eslint(),
    // stylelint(),
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
});
