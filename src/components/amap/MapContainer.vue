<template>
  <div id="container"></div>
</template>

<script lang="ts" setup>
  import { ref, onMounted, shallowRef } from 'vue';
  import AMapLoader from '@amap/amap-jsapi-loader';

  const map = shallowRef(null);
  const initMap = () => {
    // 6438d7bc3edcd16624c56d2da6cc73bc
    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    window._AMapSecurityConfig = {
      securityJsCode: '6438d7bc3edcd16624c56d2da6cc73bc',
    };
    AMapLoader.load({
      key: 'd6528ac26701f6dc0af830f823d73c2f',
      version: '2.0',
      plugins: ['AMap.ToolBar', 'AMap.Driving'],
      AMapUI: {
        version: '1.1',
        plugins: [],
      },
      Loca: {
        version: '2.0.0',
      },
    })
      .then((AMap) => {
        map.value = new AMap.Map('container', {
          viewMode: '3D',
          zoom: 5,
          zooms: [2, 22],
          center: [105.602725, 37.076636],
        });
        const positionArr = [
          [113.357224, 34.977186],
          [114.555528, 37.727903],
          [112.106257, 36.962733],
          [109.830097, 31.859027],
          [116.449181, 39.98614],
        ];

        const infoWindow = new AMap.InfoWindow({
          offset: new AMap.Pixel(0, -30),
        });
        function markerClick(e: any) {
          infoWindow.setContent(e.target.content);
          infoWindow.open(map.value, e.target.getPosition());
        }
        // eslint-disable-next-line no-restricted-syntax
        for (const item of positionArr) {
          const marker = new AMap.Marker({
            position: [item[0], item[1]],
          });
          marker.content = `坐标为[${item[0]}, ${item[1]}]，电话123456789`;
          marker.on('click', markerClick);
          marker.emit('click', { target: marker });
          // @ts-ignore
          map.value.add(marker);
        }
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
