import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/event-booking-app-frontend/', // 👈 VERY IMPORTANT
  plugins: [react()],
})
