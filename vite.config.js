import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 2. Define el alias
      '@': path.resolve(__dirname, './src'),
    },
  },
})
