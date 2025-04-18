<!--
 * @Author: lw
 * @Date: 2025-03-11 11:25:52
 * @LastEditors: lw
 * @LastEditTime: 2025-03-13 09:53:29
 * @Mailbox: 742787938@qq.com
 * @FilePath: \FeiFanHuiWu\apps\web-naive\src\layouts\auth.vue
 * @Descripttion: 
-->
<script lang="ts" setup>
// import { computed } from 'vue';

import { AuthPageLayout } from '@vben/layouts';
// import { preferences } from '@vben/preferences';

import { $t } from '#/locales';

// const appName = computed(() => preferences.app.name);
// const logo = computed(() => preferences.logo.source);
</script>

<template>
  <AuthPageLayout
    :toolbar="false"
    :page-description="$t('authentication.pageDesc')"
    :page-title="$t('authentication.pageTitle')"
  >
    <!-- 自定义工具栏 -->
    <!-- <template #toolbar></template> -->
  </AuthPageLayout>
</template>
