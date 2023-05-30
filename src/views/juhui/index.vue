<template>
  <div class="container">
    <div class="info">
      <div class="info-left"> <Menu /> </div>
      <div class="info-right"> <List /> </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Menu from './components/menu.vue';
  import List from './components/list.vue';
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

  .info {
    max-width: 1152px;
    margin: 0 auto;
    display: flex;
    margin-top: 12px;
    width: 100%;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    &-left {
      width: 100%;
      flex-direction: column;

      @media (min-width: 768px) {
        width: 200px;
        flex-shrink: 0;
        flex-direction: row;
        // border-right: 1px solid var(--color-border-2);
      }

      margin-right: 12px;
    }

    &-right {

      flex: 1;
      flex-shrink: 0;
      // @media (min-width: 768px) {
      //   overflow: hidden;
      // }
    }
  }
</style>
