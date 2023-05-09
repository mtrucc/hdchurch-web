<template>
  <div class="container">
    <div class="content">
      <a-grid :cols="24" :col-gap="16" :row-gap="16">
        <a-grid-item :span="{ xs: 24, sm: 24, md: 24, lg: 8, xl: 8, xxl: 8 }">
          <MyTeam />
        </a-grid-item>
        <a-grid-item :span="{ xs: 24, sm: 24, md: 24, lg: 16, xl: 16, xxl: 16 }">
          <a-carousel
            :style="{
              // width: '600px',
              width: '100%',
              height: '310px',
            }"
            indicator-type="dot"
            show-arrow="hover"
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
        </a-grid-item>
      </a-grid>
    </div>
    <div class="markdown">
      <a-grid :cols="24" :col-gap="16" :row-gap="16">
        <a-grid-item :span="{ xs: 24, sm: 24, md: 24, lg: 8, xl: 8, xxl: 8 }">
          <Yugao class="yugao" />
        </a-grid-item>
        <a-grid-item :span="{ xs: 24, sm: 24, md: 24, lg: 16, xl: 16, xxl: 16 }">
          <Baogao />
        </a-grid-item>
      </a-grid>
    </div>
    <div class="mushi">
      <Mushi />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import MyTeam from './components/my-team.vue';
  import Yugao from './components/yugao2.vue';
  import Baogao from './components/baogao.vue';
  import Mushi from './components/mushi.vue';
  import './github.css';

  const images = [
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
  ];
</script>

<script lang="ts">
  export default {
    name: '404',
  };
</script>

<style scoped lang="less">
  .container {
    max-width: 1152px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    // justify-content: space-between;

    // height: 1000px;
  }
  .amap {
    height: 500px;
  }
  .content {
    // display: flex;
  }

  .markdown {
    display: flex;
    &-left {
      flex: 1;
    }
    &-right {
      flex: 1;
    }
  }

  .mushi {
    margin-top: 20px;
  }

  .yugao {
    margin-top: 20px;
  }
</style>
