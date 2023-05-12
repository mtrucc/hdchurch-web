<template>
  <div class="container">
    <!-- <a-alert closable>
      <template #title> Error </template>
      This is an error alert.
    </a-alert>
    <a-alert closable>
      <template #title> Error </template>
      This is an error alert.
    </a-alert> -->
    <div class="bannner">
      <div class="bannner-left">
        <MyTeam />
      </div>
      <div class="bannner-right">
        <Banner />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import MyTeam from './components/my-team2.vue';
  import Yugao from './components/yugao2.vue';
  import Baogao from './components/baogao.vue';
  import Mushi from './components/mushi.vue';
  import Carousel from './components/carousel2.vue';
  import Banner from './components/swiper.vue';
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
  .bannner {
    display: flex;
    height: 380px;
    &-left {
      width: 300px;
      flex-shrink: 0;
      // border-right: 1px solid var(--color-border-2);
      margin-right: 10px;
    }
    &-right {
      flex: 1;
      overflow: hidden;
    }
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
