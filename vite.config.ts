/*
 * @Author: Dzy
 * @Date: 2023-01-16 15:20:50
 * @LastEditors: Dzy
 * @LastEditTime: 2023-01-17 13:17:23
 * @Description: vite配置
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})
