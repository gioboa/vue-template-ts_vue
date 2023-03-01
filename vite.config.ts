import { fileURLToPath, URL } from 'node:url'
import { federation } from '@module-federation/vite'
import { createEsBuildAdapter } from '@softarc/native-federation-esbuild'
import vueJsx from '@vitejs/plugin-vue-jsx'
import pluginVue from 'esbuild-plugin-vue-next'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(async ({ command }) => ({
  server: {
    fs: {
      allow: ['.'],
    },
    port: 8003,
  },
  preview: {
    port: 8003,
  },
  plugins: [
    await federation({
      options: {
        workspaceRoot: __dirname,
        outputPath: 'dist',
        tsConfig: 'tsconfig.json',
        federationConfig: './module-federation.config.cjs',
        verbose: true,
        dev: command === 'serve',
      },
      adapter: createEsBuildAdapter({ plugins: [pluginVue()] }),
    }),
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@api': fileURLToPath(new URL('./api', import.meta.url)),
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString()
          }
        },
      },
    },
  },
}))
