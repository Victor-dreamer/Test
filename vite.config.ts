import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  server: {
    port: 4980,
    // open: true
  },

  // build: {
  //   lib: {
  //     // entry: 'examples/main.js'
  //     entry: path.resolve(__dirname, 'lib/main.js'),
  //     name: 'MyLib',
  //     fileName: (format) => `my-lib.${format}.js`
  //   },
  //   rollupOptions: {
  //     output: {
  //       dir: '/lib/',
  //       format: 'umd',
  //     }
  //   }
  // },

  // pages: {
  //   index: {
  //     entry: 'examples/main.js',
  //     template: 'public/index.html',
  //     filename: 'index.html'
  //   }
  // },
  // 扩展 webpack 配置，使 packages 加入编译
  // chainWebpack: config => {
  //   config.module
  //     .rule('js')
  //     .include
  //       .add('/packages')
  //       .end()
  //     .use('babel')
  //       .loader('babel-loader')
  // }
})
