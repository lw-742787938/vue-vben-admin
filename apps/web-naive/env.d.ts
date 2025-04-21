/*
 * @Author: lw
 * @Date: 2025-04-21 17:17:00
 * @LastEditors: lw
 * @LastEditTime: 2025-04-21 17:57:26
 * @Mailbox: 742787938@qq.com
 * @FilePath: \Cashier-Terminal-SAAS\apps\web-naive\env.d.ts
 * @Descripttion:
 */
declare module '*.vue' {
  import { defineComponent } from 'vue';

  const component: ReturnType<typeof defineComponent>;
  export default component;
}
