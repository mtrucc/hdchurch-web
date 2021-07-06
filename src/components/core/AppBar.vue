<template>
  <v-app-bar
    app
    color="rgba(203, 170, 92, 1)"
    dark
    shrink-on-scroll
    :src="require('@/assets/hdimage/bgimg.jpg')"
    fade-img-on-scroll
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
      ></v-img>
    </template>

    <v-app-bar-nav-icon
      @click="toggleDrawer"
    />

    <v-app-bar-title>北京市基督教海淀堂</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <!-- <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn> -->

    <template v-slot:extension>
      <v-tabs align-with-title>
        <v-tab>首页</v-tab>
        <v-tab>主日证道</v-tab>
        <v-tab>每日聆听</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
  // Utilities
  import {
    mapGetters,
    mapMutations,
  } from 'vuex'

  export default {
    name: 'CoreAppBar',

    computed: {
      ...mapGetters(['links']),
    },

    methods: {
      ...mapMutations(['toggleDrawer']),
      onClick (e, item) {
        e.stopPropagation()

        if (item.to || !item.href) return

        this.$vuetify.goTo(item.href.endsWith('!') ? 0 : item.href)
      },
    },
  }
</script>
