<template>
  <a-carousel
    :style="{
      // width: '600px',
      width: '100%',
      height: '360px',
      overflow: 'hidden',
      borderRadius: '4px',
    }"
    indicator-type="dot"
    show-arrow="hover"
  >
    <a-carousel-item v-for="image in images" :key="image">
      <div class="carousel">
        <img class="img" :src="image" />
      </div>
    </a-carousel-item>
  </a-carousel>
</template>

<script lang="ts" setup>
  import { over } from 'lodash';
  import hdback from '@/assets/images/hdback.jpg';

  const images = [
    hdback,
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
  .carousel {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
</style>
