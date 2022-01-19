import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import baseConfig from './base.config'

export default defineConfig({
  ...baseConfig,
  build: {
    outDir: 'lib',
    lib: {
      entry: path.resolve(__dirname, '../packages/index.ts'),
      name: 'componentlib',
      fileName: (format) => `componentlib.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // format: 'umd',
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    ...baseConfig.plugins,
    dts(),
    resolve(),
    babel({ babelHelpers: 'bundled' }),
  ],
})
