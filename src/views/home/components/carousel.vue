<template>
  <a-carousel
    :style="{
      // width: '600px',
      width: '100%',
      height: '310px',
      overflow: 'hidden',
      borderRadius: '4px',
    }"
    indicator-type="dot"
    show-arrow="hover"
    class="general-card"
  >
    <a-carousel-item v-for="image in images" :key="image">
      <img
        :src="image"
        :style="{
          'width': '100%',
          'height': '100%',
          'object-fit': 'fill',
        }"
      />
    </a-carousel-item>
  </a-carousel>
</template>

<script lang="ts" setup>
import { over } from 'lodash';

  const images = [
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
  ];
</script>

<style scoped lang="less">
  .general-card {
    border-radius: 4px;
    border: none;
    .arco-list-item {
      // height: 72px;
      // padding-left: 0;
      // padding-bottom: 12px;
      // border-bottom: 1px solid var(--color-neutral-3);
      &:last-child {
        border-bottom: none;
      }
      .arco-list-item-meta {
        padding: 0;
      }
    }
  }
</style>
