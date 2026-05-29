import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Two build targets:
//   - default (preview):  base = /tgshop-chat-landing/  →  GitHub Pages
//   - DEPLOY_TARGET=prod: base = /chat/                 →  uz.tgshop.io/chat/
// In source code asset paths use `${import.meta.env.BASE_URL}assets/...`
// so the bundler resolves the correct prefix at build time.
const isProd = process.env.DEPLOY_TARGET === 'prod'

export default defineConfig({
  plugins: [react()],
  base: isProd ? '/chat/' : '/tgshop-chat-landing/',
  build: {
    outDir: isProd ? 'dist-prod' : 'dist',
  },
})
