import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Three build targets:
//   default (preview):  base = /tgshop-chat-landing/  → GitHub Pages
//   DEPLOY_TARGET=prod: base = /chat/                 → uz.tgshop.io/chat/   (UZ)
//   DEPLOY_TARGET=ru-prod: base = /chats/             → tgshop.io/chats/     (RU)
// REGION (uz/ru) is also exposed to source via import.meta.env.VITE_REGION
// so components can switch sum/rub, names, and integration icons.
const target = process.env.DEPLOY_TARGET || 'preview'
const isProd = target === 'prod'
const isRU = target === 'ru-prod'

const base = isRU ? '/chats/' : (isProd ? '/chat/' : '/tgshop-chat-landing/')
const outDir = isRU ? 'dist-ru-prod' : (isProd ? 'dist-prod' : 'dist')
const region = isRU ? 'ru' : 'uz'

process.env.VITE_REGION = region

export default defineConfig({
  plugins: [react()],
  base,
  build: { outDir },
})
