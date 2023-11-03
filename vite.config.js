import { defineConfig } from 'vite'
import { Buffer } from 'buffer'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "global": {},
  }
})
