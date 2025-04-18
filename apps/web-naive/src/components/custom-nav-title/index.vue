<!--
 * @Author: lw
 * @Date: 2025-03-12 10:14:57
 * @LastEditors: lw
 * @LastEditTime: 2025-03-12 11:58:31
 * @Mailbox: 742787938@qq.com
 * @FilePath: \FeiFanHuiWu\apps\web-naive\src\components\custom-nav-title\index.vue
 * @Descripttion: 
-->
<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: '标题',
  },
});
</script>
<template>
  <div class="custom-nav-title">
    <div class="title">
      {{ props.title }}
    </div>
    <n-divider class="dividerItem" />
  </div>
</template>
<style lang="scss" scoped>
.custom-nav-title {
  display: grid;
  grid-template-columns: min-content 1fr;
  column-gap: 15px;
  align-items: center;
  height: 25px;

  .title {
    width: max-content;
    height: 25px;
    font-size: 16px;
    font-weight: 600;
    color: #000;
    border-bottom: 3px solid #ff9800;
  }

  .dividerItem {
    margin-top: 0;
    margin-bottom: 0;
  }
}
</style>
