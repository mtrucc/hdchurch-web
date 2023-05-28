<template>
  <div class="qrcode-wrap">
    <div v-show="show" class="qrcode">
      <div class="qrcode-img">
        <img :src="Qr" alt="" />
      </div>
      <div class="qrcode-text">扫码关注公众号</div>
    </div>
    <div v-show="show" class="qrcode">
      <div class="qrcode-img">
        <img :src="Qr" alt="" />
      </div>
      <div class="qrcode-text">扫码关注公众号</div>
    </div>
    <div v-show="show" class="qrcode-hide" @click="toggle">隐藏二维码>></div>
    <div v-show="!show" class="qrcode-show" @click="toggle"
      ><icon-qrcode class="qrcode-icon" />显示二维码</div
    >
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import Qr from '@/assets/images/qr.png';

  const show = ref(true);

  const toggle = () => {
    show.value = !show.value;
  };
</script>

<style scoped lang="less">
  // 悬浮在右侧的二维码
  .qrcode-wrap {
    position: fixed;
    right: 0;
    top: 40%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 999;
    padding: 6px;
    background-color: var(--color-bg-2);
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05);
    margin-right: 20px;
    border: 1px solid var(--color-border);

    .qrcode {
      &-hide {
        font-size: 12px;
        color: var(--color-text-2);
        cursor: pointer;
        margin-bottom: 6px;
      }

      &-show {
        font-size: 12px;
        color: var(--color-text-2);
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      &-icon {
        font-size: 40px;
        color: var(--color-text-2);
        cursor: pointer;
        margin-bottom: 6px;
      }

      .qrcode-img {
        width: 100px;
        height: 100px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .qrcode-text {
        font-size: 12px;
        color: var(--color-text-2);
        text-align: center;
        margin: 6px 0;
        font-weight: bold;
        // color: #fff;
      }
    }
  }
</style>
