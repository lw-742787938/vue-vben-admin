/*
 * @Author: lw
 * @Date: 2025-03-11 11:25:52
 * @LastEditors: lw
 * @LastEditTime: 2025-04-07 09:24:46
 * @Mailbox: 742787938@qq.com
 * @FilePath: \FeiFanHuiWu\apps\web-naive\src\router\routes\modules\dashboard.ts
 * @Descripttion:
 */
import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    name: 'workspace',
    path: '/workspace',
    component: () => import('#/views/dashboard/home/index.vue'),
    meta: {
      affixTab: true,
      icon: 'lucide:house',
      title: $t('page.dashboard.workspace'),
      order: -1,
    },
  },
  // {
  //   meta: {
  //     icon: 'lucide:layout-dashboard',
  //     order: -1,
  //     title: $t('page.dashboard.title'),
  //   },
  //   name: 'Dashboard',
  //   path: '/dashboard',
  //   children: [
  //     {
  //       name: 'Analytics',
  //       path: '/analytics',
  //       component: () => import('#/views/dashboard/analytics/index.vue'),
  //       meta: {
  //         affixTab: true,
  //         icon: 'lucide:area-chart',
  //         title: $t('page.dashboard.analytics'),
  //       },
  //     },
  //     {
  //       name: 'Workspace',
  //       path: '/workspace',
  //       component: () => import('#/views/dashboard/workspace/index.vue'),
  //       meta: {
  //         icon: 'carbon:workspace',
  //         title: $t('page.dashboard.workspace'),
  //       },
  //     },
  //   ],
  // },
];

export default routes;
