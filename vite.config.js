import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@public': '/public',
      '@': '/src',
      '@components': '/src/components',
      '@views': '/src/views',
      '@state': '/src/state',
      '@assets': '/src/assets',
    },
  }
})
