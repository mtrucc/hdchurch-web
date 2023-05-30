<template>
  <div class="menu-wrap">
    <a-menu
      :style="{ width: '200px', height: '100%' }"
      :default-open-keys="['0']"
      :default-selected-keys="['0_0']"
      @collapse="onCollapse"
    >
      <a-menu-item key="0_0">主日证道</a-menu-item>
      <a-menu-item key="0_1">主日献诗</a-menu-item>
    </a-menu>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { Message } from '@arco-design/web-vue';

  const onCollapse = (val, type) => {
    const content = type === 'responsive' ? '触发响应式收缩' : '点击触发收缩';
    Message.info({
      content,
      duration: 2000,
    });
  };
</script>

<style scoped lang="less">
  .menu-wrap {
    box-sizing: border-box;
    width: 100%;
    // padding: 20px;
  }
</style>
