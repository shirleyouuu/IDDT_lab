import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 必須與你的 Repository 名稱完全一致，包含大小寫
  base: '/IDDT_lab/', 
})