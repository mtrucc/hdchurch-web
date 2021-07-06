<template>
  <v-col cols="12" :md="size === 2 ? 6 : size === 3 ? 4 : undefined">
    <!-- 主日证道 -->
    <base-card :height="350" color="grey lighten-1" dark href="#!">
      <v-img
        :src="require(`@/assets/hand-tools-in-the-bible.jpeg`)"
        height="100%"
        gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
      >
        <v-row class="fill-height ma-0 justify-center align-center text-center">
          <v-col cols="12">
            <h3 class="text-h3 mb-2">主日证道</h3>
            <h4 class="title mb-2">证道音视频 | 证道经文 | 报告事项</h4>
            <v-btn color="primary" depressed> 了解更多 </v-btn>
          </v-col>
        </v-row>
      </v-img>
    </base-card>
  </v-col>
</template>

<script>
export default {
  name: "FeedCard",

  props: {
    size: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
.v-image__image {
  transition: 0.3s linear;
}
</style>
