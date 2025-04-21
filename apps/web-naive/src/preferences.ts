/*
 * @Author: lw
 * @Date: 2025-03-11 11:25:52
 * @LastEditors: lw
 * @LastEditTime: 2025-04-21 18:04:01
 * @Mailbox: 742787938@qq.com
 * @FilePath: \Cashier-Terminal-SAAS\apps\web-naive\src\preferences.ts
 * @Descripttion:
 */
import { defineOverridesPreferences } from '@vben/preferences';

export const overridesPreferences = defineOverridesPreferences({
  // overrides
  app: {
    name: import.meta.env.VITE_APP_TITLE,
    enablePreferences: false,
    accessMode: 'frontend',
    // accessMode: 'backend',
  },
  breadcrumb: {
    enable: false,
  },
  theme: {
    builtinType: 'custom1',
    colorPrimary: 'hsl(245 82% 67%)',
    mode: 'light',
    radius: '0.25',
  },
  tabbar: {
    enable: false,
  },
  widget: {
    globalSearch: false,
    languageToggle: false,
    themeToggle: false,
    notification: true,
    lockScreen: false,
    fullscreen: false,
  },
  shortcutKeys: {
    enable: false,
    globalLockScreen: false,
  },
});
