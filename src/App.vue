<template>
  <v-app id="inspire">
    <core-app-bar />

    <!-- 左侧收缩的菜单 -->
    <core-drawer />

    <core-view />

    <core-footer />

    <!-- <core-cta /> -->
  </v-app>
</template>

<script>
  export default {
    name: 'App',

    components: {
      // CoreCta: () => import('@/components/core/Cta'),
      CoreDrawer: () => import('@/components/core/Drawer'),
      CoreFooter: () => import('@/components/core/Footer'),
      CoreAppBar: () => import('@/components/core/AppBar'),
      CoreView: () => import('@/components/core/View'),
    },
  }
</script>
