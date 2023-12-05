import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/',
  server:{
    proxy:{
      "/pink/":"http://localhost:3001/",
      // "/pink/":"http://192.168.1.70:3001/"
    }, 
  },
  plugins: [react()],
})
