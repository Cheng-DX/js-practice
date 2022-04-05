import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': './src',
      other: '@/other',
      fetcher: '@/24.xhr&fetch'
    }
  }
})
