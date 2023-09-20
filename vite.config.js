import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/finalFront3/",
  test: {
    globals: true,
    environment: 'jsdom',
  }
})
