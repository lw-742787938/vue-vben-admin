/*
 * @Author: lw
 * @Date: 2025-03-11 11:25:52
 * @LastEditors: lw
 * @LastEditTime: 2025-04-08 17:17:24
 * @Mailbox: 742787938@qq.com
 * @FilePath: \FeiFanHuiWu\apps\web-naive\src\router\access.ts
 * @Descripttion:
 */
import type {
  ComponentRecordType,
  GenerateMenuAndRoutesOptions,
} from '@vben/types';

import { generateAccessible } from '@vben/access';
import { preferences } from '@vben/preferences';
import { useAccessStore } from '@vben/stores';

import { message } from '#/adapter/naive';
import { BasicLayout, IFrameView } from '#/layouts';
import { $t } from '#/locales';

const forbiddenComponent = () => import('#/views/_core/fallback/forbidden.vue');
async function generateAccess(options: GenerateMenuAndRoutesOptions) {
  const pageMap: ComponentRecordType = import.meta.glob('../views/**/*.vue');
  const accessStore = useAccessStore();
  const layoutMap: ComponentRecordType = {
    BasicLayout,
    IFrameView,
  };
  return await generateAccessible(preferences.app.accessMode, {
    ...options,
    fetchMenuListAsync: async () => {
      message.loading(`${$t('common.loadingMenu')}...`, {
        duration: 1.5,
      });
      const temp = JSON.stringify(accessStore.menuList);
      return JSON.parse(temp);
      // return accessStore.menuList;
    },
    // 可以指定没有权限跳转403页面
    forbiddenComponent,
    // 如果 route.meta.menuVisibleWithForbidden = true
    layoutMap,
    pageMap,
  });
}

export { generateAccess };
