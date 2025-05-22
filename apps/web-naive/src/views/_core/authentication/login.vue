<!--
 * @Author: lw
 * @Date: 2025-03-11 11:25:52
 * @LastEditors: lw
 * @LastEditTime: 2025-05-22 10:25:44
 * @Mailbox: 742787938@qq.com
 * @FilePath: \Cashier-Terminal-SAAS\apps\web-naive\src\views\_core\authentication\login.vue
 * @Descripttion: 
-->
<script lang="ts" setup>
import type { VbenFormSchema } from '@vben/common-ui';

import { computed } from 'vue';

import { AuthenticationLogin, z } from '@vben/common-ui';
import { $t } from '@vben/locales';

import { useAuthStore } from '#/store';

defineOptions({ name: 'Login' });
const VITE_APP_TITLE = import.meta.env.VITE_APP_TITLE;
const authStore = useAuthStore();

// const MOCK_USER_OPTIONS: BasicOption[] = [
//   {
//     label: 'Super',
//     value: 'vben',
//   },
//   {
//     label: 'Admin',
//     value: 'admin',
//   },
//   {
//     label: 'User',
//     value: 'jack',
//   },
// ];

const formSchema = computed((): VbenFormSchema[] => {
  return [
    // {
    //   component: 'VbenSelect',
    //   componentProps: {
    //     options: MOCK_USER_OPTIONS,
    //     placeholder: $t('authentication.selectAccount'),
    //   },
    //   fieldName: 'selectAccount',
    //   label: $t('authentication.selectAccount'),
    //   rules: z
    //     .string()
    //     .min(1, { message: $t('authentication.selectAccount') })
    //     .optional()
    //     .default('vben'),
    // },
    {
      component: 'VbenInput',
      componentProps: {
        placeholder: $t('authentication.usernameTip'),
      },
      fieldName: 'loginName',
      label: $t('authentication.username'),
      labelAlign: 'left',
      rules: z.string().min(1, { message: $t('authentication.usernameTip') }),
    },
    {
      component: 'VbenInputPassword',
      componentProps: {
        placeholder: $t('authentication.password'),
      },
      fieldName: 'password',
      label: $t('authentication.password'),
      rules: z.string().min(1, { message: $t('authentication.passwordTip') }),
    },
    // {
    //   component: markRaw(SliderCaptcha),
    //   fieldName: 'captcha',
    //   rules: z.boolean().refine((value) => value, {
    //     message: $t('authentication.verifyRequiredTip'),
    //   }),
    // },
  ];
});
const title = `欢迎使用${VITE_APP_TITLE}`;
</script>

<template>
  <AuthenticationLogin
    :form-schema="formSchema"
    :title="title"
    :loading="authStore.loginLoading"
    @submit="authStore.authLogin"
  />
</template>
