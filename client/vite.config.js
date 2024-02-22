import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/',
  server:{
    proxy:{
      "/pink/":"https://pinkhicks-b921d828c404.herokuapp.com/" ,
    }, 
  },
  
})
