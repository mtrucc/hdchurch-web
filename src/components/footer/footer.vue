<template>
  <div class="footer">
    <div class="footerneirong">
      <a-grid :cols="24" :col-gap="16" :row-gap="16" class="top">
        <a-grid-item :span="{ xs: 24, sm: 12, md: 12, lg: 8, xl: 8, xxl: 8 }">
          <Mapview></Mapview>
        </a-grid-item>
        <a-grid-item :span="{ xs: 24, sm: 12, md: 12, lg: 8, xl: 8, xxl: 8 }">
          <div class="joinLark">
            <img :src="QrImg" alt="" class="larkimg" />
          </div>
        </a-grid-item>
        <a-grid-item :span="{ xs: 24, sm: 12, md: 12, lg: 8, xl: 8, xxl: 8 }">
          网上直播
        </a-grid-item>
      </a-grid>
      <a-divider />
      <div class="bottom">
        ©2018北京市基督教会海淀堂 | 京ICP备15024482号-1 |
        京公网安备11010802036338号 | 教会简介 | 联系我们
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Mapview from '@/components/amap/MapContainer.vue';
  import QrImg from '@/assets/images/qr.png'
</script>

<style lang="less" scoped>
  .footer {
    display: flex;
    // height: 300px;
    color: var(--color-text-2);
    background-color: var(--color-fill-1);
    // box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
    // background-color: #ffffff;
  }
  .footerneirong {
    width: 100%;
    max-width: 1152px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
  .top {
    height: 300px;
  }
  .bottom {
    display: flex;
    justify-content: center;
  }

  .larkimg {
    width: 120px;
  }
</style>
