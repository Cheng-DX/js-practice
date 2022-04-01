import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': './src',
      other: '@/other',
      fetcher: '@/24.xhr&fetch'
    }
  }
})
