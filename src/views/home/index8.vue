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
      <!-- <div class="bannner-right">
        <Banner />
      </div> -->
    </div>
    <div class="markdown1">
      <div class="markdown1-left">
        <Yugao />
      </div>
      <div class="markdown1-right">
        <List />
      </div>
    </div>
    <div class="markdown2">
      <Baogao />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import MyTeam from './components/my-team3h8.vue';
  import Yugao from './components/yugao6h7.vue';
  import Baogao from './components/baogao6h7.vue';
  import Guanzhu from './components/guanzhu.vue';
  import List from './components/listh7h8.vue';
  // import Carousel from './components/carousel2.vue';
  import Banner from './components/swiper5h7.vue';
  import './github.css';
</script>

<script lang="ts">
  export default {
    name: '404',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    // justify-content: space-between;

    // height: 1000px;
    // background-image: url(/src/assets/images/2.jpg);
    // background-color: var(--color-fill-1);
    // background-position: center center;
    // background-repeat: no-repeat;
    // background-size: cover;
  }

  .markdown1 {
    max-width: 1152px;
    margin: 0 auto;
    display: flex;
    margin-top: 12px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    @media (min-width: 768px) {
      height: 450px;
      width: 100%;
    }
    &-left {
      width: 100%;
      @media (min-width: 768px) {
        width: 330px;
        flex-shrink: 0;
        // border-right: 1px solid var(--color-border-2);
      }
      margin-right: 12px;
    }
    &-right {
      // @media (max-width: 768px) {
      //   flex-direction: column;
      // }

      @media (min-width: 768px) {
        flex: 1;
        overflow: hidden;
      }
    }
  }

  .markdown2 {
    display: flex;
    height: 500px;
    max-width: 1152px;
    margin: 0 auto;
    margin-top: 12px;
  }

  .amap {
    height: 500px;
  }
  .bannner {
    max-width: 1152px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    @media (min-width: 768px) {
      height: 400px;
    }
    @media (max-width: 768px) {
      flex-direction: column;
    }
    &-left {
      width: 330px;
      flex-shrink: 0;
      // border-right: 1px solid var(--color-border-2);
      margin-right: 12px;
      // margin-left: 16px;
      @media (max-width: 768px) {
        flex-direction: column;
        margin-left: 0;
        margin-top: 6px;
        width: 100%;
        margin-bottom: 10px;
      }
    }
    &-right {
      overflow: hidden;
      @media (min-width: 768px) {
        flex: 1;
      }
      @media (max-width: 768px) {
        height: 400px;
      }
    }
  }

  // .markdown {
  //   width: 100%;
  //   // margin: 20px 0 0;
  //   display: flex;
  //   &-left {
  //     flex: 1;
  //   }
  //   &-right {
  //     flex: 1;
  //   }
  // }

  .mushi {
    margin-top: 20px;
  }
</style>
