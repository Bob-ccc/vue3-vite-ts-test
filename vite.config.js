import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import WindiCSS from 'vite-plugin-windicss'
export default defineConfig({
   base: './',
   resolve: {
      alias: {
         '@': path.resolve(__dirname, 'src'),
      },
   },
   // build: {
   //    outDir: 'dist'
   // },
   plugins: [
      vue(),
      WindiCSS()
   ],
   server: {
      https: false, // 是否开启https
      open: false,  // 是否自动在浏览器打开
      port: 3000,   // 端口号
      host: '0.0.0.0'
   },
})