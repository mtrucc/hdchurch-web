<template>
  <div class="container">
    <div class="content">
      <a-grid :cols="24" :col-gap="16" :row-gap="16">
        <a-grid-item :span="{ xs: 24, sm: 24, md: 24, lg: 8, xl: 8, xxl: 8 }">
          <MyTeam />
        </a-grid-item>
        <a-grid-item
          :span="{ xs: 24, sm: 24, md: 24, lg: 16, xl: 16, xxl: 16 }"
        >
          <Carousel />
        </a-grid-item>
      </a-grid>
    </div>
    <a-divider />
    <div class="markdown">
      <a-grid :cols="24" :col-gap="16" :row-gap="16">
        <a-grid-item :span="{ xs: 24, sm: 24, md: 24, lg: 8, xl: 8, xxl: 8 }">
          <Yugao class="yugao" />
        </a-grid-item>
        <a-grid-item
          :span="{ xs: 24, sm: 24, md: 24, lg: 16, xl: 16, xxl: 16 }"
        >
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
  import Carousel from './components/carousel.vue';
  import './github.css';
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
    width: 100%;
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
    width: 100%;
    // margin: 20px 0 0;
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
</style>
