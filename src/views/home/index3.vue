<template>
  <div class="container">
    <div class="bannner">
      <Banner />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import MyTeam from './components/my-team.vue';
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
    // display: flex;
    height: 340px;
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
