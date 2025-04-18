/*
 * @Author: lw
 * @Date: 2025-03-11 11:25:52
 * @LastEditors: lw
 * @LastEditTime: 2025-04-09 15:15:15
 * @Mailbox: 742787938@qq.com
 * @FilePath: \FeiFanHuiWu\apps\web-naive\vite.config.mts
 * @Descripttion:
 */
import { defineConfig } from '@vben/vite-config';

import AutoImport from 'unplugin-auto-import/vite';
import {
  ElementPlusResolver,
  NaiveUiResolver,
} from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';

export default defineConfig(async () => {
  return {
    application: {},
    build: {
      target: 'esnext',
    },
    optimizeDeps: {
      esbuildOptions: { target: 'esnext' },
    },
    vite: {
      plugins: [
        AutoImport({
          imports: [
            'vue',
            'vue-router',
            {
              'naive-ui': [
                'useDialog',
                'useMessage',
                'useNotification',
                'useLoadingBar',
              ],
            },
          ],
          resolvers: [ElementPlusResolver()],
        }),
        Components({
          resolvers: [ElementPlusResolver(), NaiveUiResolver()],
        }),
      ],
    },
  };
});
