/*
 * @Author: lw
 * @Date: 2025-04-18 11:29:11
 * @LastEditors: lw
 * @LastEditTime: 2025-04-21 17:42:38
 * @Mailbox: 742787938@qq.com
 * @FilePath: \Cashier-Terminal-SAAS\apps\web-naive\vite.config.mts
 * @Descripttion:
 */
import { fileURLToPath, URL } from 'node:url';

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
      resolve: {
        alias: {
          '#': fileURLToPath(new URL('src', import.meta.url)),
        },
      },
    },
  };
});
