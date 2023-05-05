<template>
  <div id="container"></div>
</template>

<script lang="ts" setup>
  import { ref, onMounted, shallowRef } from 'vue';
  import AMapLoader from '@amap/amap-jsapi-loader';

  const map = shallowRef(null);
  const initMap = () => {
    // 6438d7bc3edcd16624c56d2da6cc73bc
    // eslint-disable-next-line no-underscore-dangle
    window._AMapSecurityConfig = {
      securityJsCode: '6438d7bc3edcd16624c56d2da6cc73bc',
    };
    AMapLoader.load({
      key: 'd6528ac26701f6dc0af830f823d73c2f', // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
      .then((AMap) => {
        map.value = new AMap.Map('container', {
          viewMode: '3D',
          zoom: 5,
          center: [105.602725, 37.076636],
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  onMounted(() => {
    initMap();
  });
</script>

<style scoped lang="less">
  #container {
    width: 100%;
    height: 100%;
  }
</style>
