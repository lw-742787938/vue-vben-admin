/*
 * @Author: lw
 * @Date: 2025-03-11 11:25:52
 * @LastEditors: lw
 * @LastEditTime: 2025-03-21 10:44:52
 * @Mailbox: 742787938@qq.com
 * @FilePath: \FeiFanHuiWu\apps\web-naive\src\bootstrap.ts
 * @Descripttion:
 */
import { createApp, watchEffect } from 'vue';

import { registerAccessDirective } from '@vben/access';
import { initTippy, registerLoadingDirective } from '@vben/common-ui';
import { MotionPlugin } from '@vben/plugins/motion';
import { preferences } from '@vben/preferences';
import { initStores } from '@vben/stores';
import '@vben/styles';
import '@vben/styles/naive';

import { useTitle } from '@vueuse/core';

import { $t, setupI18n } from '#/locales';

import { initComponentAdapter } from './adapter/component';
import App from './app.vue';
import customNavTitle from './components/custom-nav-title/index.vue';
import { router } from './router';

import './styles/index.scss';
import './theme/index.scss';

async function bootstrap(namespace: string) {
  // 初始化组件适配器
  initComponentAdapter();

  // // 设置弹窗的默认配置
  // setDefaultModalProps({
  //   fullscreenButton: false,
  // });
  // // 设置抽屉的默认配置
  // setDefaultDrawerProps({
  //   // zIndex: 2000,
  // });

  const app = createApp(App);

  // 注册v-loading指令
  registerLoadingDirective(app, {
    loading: 'loading', // 在这里可以自定义指令名称,也可以明确提供false表示不注册这个指令
    spinning: 'spinning',
  });

  // 国际化 i18n 配置
  await setupI18n(app);

  // 配置 pinia-tore
  await initStores(app, { namespace });

  // 安装权限指令
  registerAccessDirective(app);

  // 初始化 tippy
  initTippy(app);

  // 配置路由及路由守卫
  app.use(router);

  // 配置Motion插件
  app.use(MotionPlugin);

  // 组件注册
  app.component('custom-nav-title', customNavTitle);

  // 动态更新标题
  watchEffect(() => {
    if (preferences.app.dynamicTitle) {
      const routeTitle = router.currentRoute.value.meta?.title;
      const pageTitle =
        (routeTitle ? `${$t(routeTitle)} - ` : '') + preferences.app.name;
      useTitle(pageTitle);
    }
  });

  app.mount('#app');
}

export { bootstrap };
