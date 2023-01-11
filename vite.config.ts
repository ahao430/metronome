import { fileURLToPath, URL } from 'node:url'
import postCssPxToRem from "postcss-pxtorem"

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createStyleImportPlugin } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    vueJsx(),
    createStyleImportPlugin({
      resolves: [{
          libraryName: '@nutui/nutui',
          libraryNameChangeCase: 'pascalCase',
          resolveStyle: (name) => {
            return `@nutui/nutui/dist/packages/${name.toLowerCase()}/index.scss`
          },
      }]
    }),
  ],
  server:{
    host:'0.0.0.0'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 配置 nutui 全局 scss 变量
        additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";`
      }
    },
    postcss: {
      plugins: [
        require('postcss-px2rem-exclude')({
          remUnit: 75,  // 参数 1
          exclude: /node_modules/i,  // 参数 2
        }),
      ]
    }
  },
})
