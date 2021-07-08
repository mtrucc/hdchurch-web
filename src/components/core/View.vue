<template>
  <v-content id="home">
    <router-view />
    <about />
    <subscribe />
  </v-content>
</template>

<script>
export default {
  name: "CoreView",
  components: {
    About: () => import("@/components/home/About"),
    Subscribe: () => import("@/components/home/Subscribe"),
  },
};
</script>
