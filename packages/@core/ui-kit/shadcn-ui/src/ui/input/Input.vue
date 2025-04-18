<!--
 * @Author: lw
 * @Date: 2025-03-11 11:25:52
 * @LastEditors: lw
 * @LastEditTime: 2025-03-14 14:27:53
 * @Mailbox: 742787938@qq.com
 * @FilePath: \FeiFanHuiWu\packages\@core\ui-kit\shadcn-ui\src\ui\input\Input.vue
 * @Descripttion: 
-->
<script setup lang="ts">
import { cn } from '@vben-core/shared/utils';

import { useVModel } from '@vueuse/core';

const props = defineProps<{
  class?: any;
  defaultValue?: number | string;
  modelValue?: number | string;
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', payload: number | string): void;
}>();

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue,
  passive: true,
});
</script>

<template>
  <input
    v-model="modelValue"
    :class="
      cn(
        'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    "
  />
</template>
