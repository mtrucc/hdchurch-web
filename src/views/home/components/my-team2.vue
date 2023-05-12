<template>
  <div class="kuaisudaohang">
    <div class="kuaisudaohang-title">快速导航</div>
    <div class="kuaisudaohang-content">
      <div
        v-for="item in teamList"
        :key="item.id"
        class="kuaisudaohang-content-item"
        :style="{
          backgroundImage: `url(${item.avatar})`,
        }"
      >
        <div class="kuaisudaohang-content-item-title">{{ item.name }}</div>
      </div>
    </div>
    <div class="kuaisudaohang-title2">每日金句</div>
    <!-- <div class="kuaisudaohang-qrCode">
      <img :src="QrImg" alt="" class="kuaisudaohang-qrCode-img" />
      <img :src="QrImg" alt="" class="kuaisudaohang-qrCode-img" />
    </div> -->
  </div>
</template>

<script lang="ts" setup>
  import QrImg from '@/assets/images/MFJhoDoqAtQA.png';

  const teamList = [
    {
      avatar: 'https://swiperjs.com/demos/images/nature-1.jpg',
      id: 1,
      name: '文本文本',
      description: 'Sunday Sermon',
    },
    {
      avatar: 'https://swiperjs.com/demos/images/nature-2.jpg',
      id: 2,
      name: '文本文本',
      description: 'Choral Worship',
    },
    {
      avatar: 'https://swiperjs.com/demos/images/nature-3.jpg',
      id: 3,
      name: '文本文本',
      description: 'Branch of HDChurch',
    },
    {
      avatar: 'https://swiperjs.com/demos/images/nature-4.jpg',
      id: 4,
      name: '文本文本',
      description: 'Contact Us',
    },
  ];
</script>

<style scoped lang="less">
  .kuaisudaohang {
    width: 100%;
    height: 100%;
    background: var(--color-neutral-1);
    padding: 10px;
    // border: 1px solid var(--color-border-2);
    border-radius: 4px;
    // border-right: 1px solid var(--color-border-2);
    // padding-right: 10px;
    // margin-right: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;

    &-qrCode {
      display: flex;
      flex: 1;
      overflow: hidden;
      display: flex;
      justify-content: space-around;
      width: 100%;
      &-img {
        height: 100%;
      }
    }

    &-jieshao {
      font-size: 14px;
      color: var(--color-text-2);
      margin-top: 10px;
      text-align: center;
      display: flex;
    }

    &-title {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 10px;
      font-size: 14px;
      line-height: 20px;
      padding: 2px 8px;
      color: var(--color-text-2);
      background: var(--color-fill-3);
      border-radius: 2px;
    }

    &-title2 {
      font-size: 16px;
      font-weight: 500;
      margin-top: 2px;
      margin-bottom: 10px;
      font-size: 14px;
      line-height: 20px;
      padding: 2px 8px;
      color: var(--color-text-2);
      background: var(--color-fill-3);
      border-radius: 2px;
    }
    &-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      flex-shrink: 0;
      &-item {
        width: 137px;
        height: 85px;
        border-radius: 4px;
        background-color: var(--color-fill-1);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 6px;
        &-title {
          font-size: 16px;
          font-weight: 500;
          color: #fff;
          // margin-top: 10px;
        }
      }
    }
  }
</style>
