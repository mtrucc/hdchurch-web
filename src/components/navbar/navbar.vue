<template>
  <div class="header">
    <div class="header-wrap">
      <div class="header-left">
        <img class="header-logo" :src="logo" />
      </div>
      <div class="header-center">
        <a-menu
          :default-open-keys="['0']"
          :default-selected-keys="['1']"
          mode="horizontal"
          class="header-menu"
        >
          <a-menu-item key="1">首页</a-menu-item>
          <a-menu-item key="2">教会信息</a-menu-item>
          <a-menu-item key="3">主日聚会</a-menu-item>
          <a-menu-item key="4">资源分享</a-menu-item>
          <a-menu-item key="5">线上奉献</a-menu-item>
        </a-menu>
      </div>
      <div class="header-right">
        <a-input-search :placeholder="$t('cardList.searchInput.placeholder')" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import {
    // IconMenuFold,
    // IconMenuUnfold,
    IconApps,
    IconBug,
    IconBulb,
  } from '@arco-design/web-vue/es/icon';
  import logo from '@/assets/images/logo.png';

  const collapsed = ref(false);
</script>

<style lang="less" scoped>
  .header {
    padding-block: 0;
    padding-inline: 0;
    position: fixed;
    inset-block-start: 0;
    width: 100%;
    z-index: 100;
    inset-inline-end: 0;
    display: flex;
    justify-content: space-between;
    height: 70px;
    // background-color: var(--color-bg-2);
    background-color: rgb(255 255 255 / 85%);
    border-bottom: 1px solid var(--color-border);
    backdrop-filter: blur(3px);

    &-wrap {
      width: 100%;
      max-width: 1152px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      height: 100%;
    }

    &-center {
      flex: 1;
      height: 100%;
      display: flex;
    }

    &-right {
      flex-shrink: 0;
      height: 100%;
      display: flex;
      align-items: center;
      margin: 0 0 0 20px;
    }

    &-logo {
      height: 70px;
    }

    &-menu {
      flex: 1;
      margin-left: 20px;
      // :deep(.arco-menu-overflow-wrap) {
      //   display: flex;
      //   justify-content: flex-end;
      // }
      :deep(.header-menu-sub) {
        background-color: unset;
      }

      :deep(.arco-menu-overflow-sub-menu) {
        background-color: unset;
      }

      background-color: unset;
      // backdrop-filter: blur(3px);
      // &-sub {
      //   background-color: unset;
      // }
    }
  }
</style>
