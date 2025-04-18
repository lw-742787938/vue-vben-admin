/*
 * @Author: lw
 * @Date: 2025-03-11 11:25:53
 * @LastEditors: lw
 * @LastEditTime: 2025-03-24 09:40:30
 * @Mailbox: 742787938@qq.com
 * @FilePath: \FeiFanHuiWu\vitest.config.ts
 * @Descripttion:
 */
import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  build: {
    target: 'esnext',
  },
  optimizeDeps: {
    esbuildOptions: { target: 'esnext' },
  },
  plugins: [Vue(), VueJsx()],
  test: {
    environment: 'happy-dom',
    exclude: [...configDefaults.exclude, '**/e2e/**'],
  },
});
