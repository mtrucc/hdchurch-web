<template>
  <v-col cols="12" :md="6" class="d-flex">
    <v-card class="mx-auto" width="100%">
      <v-card-title class="primary white--text">
        <span class="text-h6">主日预告</span>
        <v-spacer></v-spacer>
        <v-btn
          outlined
          :color="'white'"
          dark
          depressed
          @click="interval == null ? start() : stop()"
        >
          查看历史预告
        </v-btn>
      </v-card-title>
      <v-card-text class="pa-3">
        <div class="text-h6 mb-1">2021年07月04日</div>
        <div class="font-weight-bold mb-1">第一、四堂（7:30-8:30；14:00-15:00）</div>
        <div class="text-caption">证道：韩占慧 牧师</div>
        <div class="text-caption">经文：彼前 1:3-12</div>
        <div class="text-caption">题目：这救恩</div>
        <div class="text-caption">宣召：诗67</div>
        <div class="text-caption">启应：诗103</div>
        <div class="text-caption">歌诗：210，392，347</div>
        <v-btn class="primary my-3" small>
          视频回放
          <v-icon right dark> mdi-cloud-upload </v-icon>
        </v-btn>
        <v-btn class="primary ma-3" small>
          音频回放
          <v-icon right dark> mdi-cloud-upload </v-icon>
        </v-btn>
        <v-divider class="my-2 mx-0"></v-divider>
        <div class="font-weight-bold mb-1">第二、三堂（9:30-10:30；11:30-12:30）</div>
        <div class="text-caption">证道：边文爱 牧师</div>
        <div class="text-caption">经文：路 16:1-13</div>
        <div class="text-caption">题目：警示之言</div>
        <div class="text-caption">宣召：诗98</div>
        <div class="text-caption">启应：诗95</div>
        <div class="text-caption">歌诗：229，392，228</div>
        <v-btn class="primary my-3" small>
          视频回放
          <v-icon right dark> mdi-cloud-upload </v-icon>
        </v-btn>
        <v-btn class="primary ma-3" small>
          音频回放
          <v-icon right dark> mdi-cloud-upload </v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
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
