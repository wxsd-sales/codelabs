import { defineConfig } from 'vite';

export default defineConfig({
  base: '/codelabs/video-kiosk/',
  envPrefix: 'PUBLIC_',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/styles/variables.scss" as *;'
      }
    }
  }
});
