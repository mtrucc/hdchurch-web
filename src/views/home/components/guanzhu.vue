<template>
  <div class="baogao">
    <div class="item">
      <div class="title">关注公众号</div>
      <img :src="QrImg" alt="" class="image" />
      <div class="title2">扫码看详情</div>
    </div>
    <div class="item">
      <div class="title">关注公众号</div>
      <img :src="QrImg" alt="" class="image" />
      <div class="title2">扫码看详情</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import QrImg from '@/assets/images/qrcode.png';
</script>

<style scoped lang="less">
  .baogao {
    width: 100%;
    height: 100%;
    background: var(--color-neutral-1);
    // background: #fff;
    padding: 10px;
    // border: 1px solid var(--color-border-2);
    // border-radius: 4px;
    // border-right: 1px solid var(--color-border-2);
    // padding-right: 10px;
    // margin-right: 10px;
    // background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(3px);
    display: flex;
    // flex-direction: column;
    align-items: center;

    flex-shrink: 0;

    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
    .image {
      width: 200px;
    }
    .title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .title2 {
      font-size: 16px;
      font-weight: bold;
      margin-top: 10px;
    }
  }
</style>
