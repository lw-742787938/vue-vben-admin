/*
 * @Author: lw
 * @Date: 2025-03-11 11:25:52
 * @LastEditors: lw
 * @LastEditTime: 2025-04-18 11:38:31
 * @Mailbox: 742787938@qq.com
 * @FilePath: \Cashier-Terminal-SAAS\apps\web-naive\src\preferences.ts
 * @Descripttion:
 */
import { defineOverridesPreferences } from '@vben/preferences';

/**
 * @description 项目配置文件
 */
export const overridesPreferences = defineOverridesPreferences({
  // overrides
  app: {
    name: import.meta.env.VITE_APP_TITLE,
    enablePreferences: false,
    // accessMode: 'backend',
  },
  breadcrumb: {
    enable: false,
  },
  theme: {
    // builtinType: 'pink',
    // colorPrimary: 'hsl(221 83% 54%)',
    mode: 'light',
    radius: '0.25',
  },
  widget: {
    globalSearch: false,
    languageToggle: false,
    themeToggle: false,
    notification: false,
    lockScreen: false,
  },
  shortcutKeys: {
    enable: false,
    globalLockScreen: false,
  },
});
