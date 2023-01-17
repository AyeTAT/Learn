/*
 * @Author: Dzy
 * @Date: 2023-01-17 16:33:39
 * @LastEditors: Dzy
 * @LastEditTime: 2023-01-17 17:02:02
 * @Description: vite 插件统一配置
 */
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export function getPluginsList() {
  return [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar',
          ],
        },
      ],
    }),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
  ]
}
