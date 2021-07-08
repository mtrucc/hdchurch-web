<template>
  <v-col cols="12" :md="6" class="d-flex overflow-hidden" width="100%" >
    <v-card class="mx-auto d-flex flex-column" width="100%">
      <v-card-title class="primary white--text">
        <span class="text-h6">报告事项</span>
        <v-spacer></v-spacer>
        <v-btn
          outlined
          :color="'white'"
          dark
          depressed
          @click="interval == null ? start() : stop()"
        >
          查看历史事项
        </v-btn>
      </v-card-title>
      <v-card-text class="py-0 overflow-auto">
        <v-timeline dense>
          <v-timeline-item small>
            <v-row class="pt-1">
              <v-col>
                <v-card class="pa-3">
                  <strong>2021年07月08日</strong>
                  <v-card-text class="pa-0 pt-2">
                    通知：本堂原定于每周三晚19:30-20:30的线上祷告会因故取消！请弟兄姊妹们互相转告。
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-timeline-item>
          <v-timeline-item small>
            <v-row class="pt-1">
              <v-col>
                <v-card class="pa-3">
                  <strong>2021年07月08日</strong>
                  <v-card-text class="pa-0 pt-2">
                    通知：本堂原定于每周三晚19:30-20:30的线上祷告会因故取消！请弟兄姊妹们互相转告。
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-timeline-item>
          <v-timeline-item small>
            <v-row class="pt-1">
              <v-col>
                <v-card class="pa-3">
                  <strong>2021年07月08日</strong>
                  <v-card-text class="pa-0 pt-2">
                    通知：本堂原定于每周三晚19:30-20:30的线上祷告会因故取消！请弟兄姊妹们互相转告。
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-timeline-item>
          <v-timeline-item small>
            <v-row class="pt-1">
              <v-col>
                <v-card class="pa-3">
                  <strong>2021年07月08日</strong>
                  <v-card-text class="pa-0 pt-2">
                    通知：本堂原定于每周三晚19:30-20:30的线上祷告会因故取消！请弟兄姊妹们互相转告。
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
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
