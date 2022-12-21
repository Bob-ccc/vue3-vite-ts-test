import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import WindiCSS from 'vite-plugin-windicss'
// import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression'



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
      WindiCSS(),
      // visualizer({
      //    emitFile: false,
      //    file: "stats.html", //分析图生成的文件名
      //    open:true //如果存在本地服务端口，将在打包后自动展示
      // }),
      viteCompression()
      // ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": "css" }] // `style: true` for less
   ],
   server: {
      https: false, // 是否开启https
      open: false,  // 是否自动在浏览器打开
      port: 7000,   // 端口号
      host: '0.0.0.0'
   },
   publicDir: path.resolve(__dirname, './dist')
})