<template>
  <div class="menu-wrap">
    <a-menu
      :style="{ width: '200px', height: '100%' }"
      :default-open-keys="['0']"
      :default-selected-keys="['0_2']"
      @collapse="onCollapse"
    >
      <a-menu-item key="0_0">教堂简介</a-menu-item>
      <a-menu-item key="0_1">教牧团队</a-menu-item>
      <a-menu-item key="0_2">全职同工</a-menu-item>
      <a-menu-item key="0_3">联系我们</a-menu-item>
    </a-menu>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { Message } from '@arco-design/web-vue';

  const onCollapse = (val: any, type: any) => {
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
