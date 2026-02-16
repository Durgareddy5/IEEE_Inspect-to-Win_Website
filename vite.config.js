import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PATH ||'/IEEE_Inspect-to-Win_Website/',
  plugins: [react()],
  build: {
  minify: 'esbuild',
  cssMinify: false, // Preserve CSS comments
  sourcemap:true,
  esbuild: {
    legalComments: 'inline', // Preserve JavaScript comments
  },
}
})

