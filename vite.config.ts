/*
 * @Author: Dzy
 * @Date: 2023-01-16 15:20:50
 * @LastEditors: Dzy
 * @LastEditTime: 2023-01-17 16:34:34
 * @Description: vite配置
 */
import { defineConfig } from 'vite'
import { getPluginsList } from './build/plugins'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: getPluginsList(),
})
