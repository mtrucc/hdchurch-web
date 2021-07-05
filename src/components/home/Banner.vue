<template>
  <base-card dark>
    <v-img
      :src="require('@/assets/hdimage/bgimg.jpg')"
      class="grey lighten-2"
      height="400"
      width="100%"
    >
      <v-row
        class="fill-height pa-3"
        align="end"
        justify="end"
      >
        <v-col
          cols="12"
          md="7"
          offset-md="5"
        >
          <h2 class="display-3 font-weight-light">
            北京市基督教海淀堂
          </h2>

          <div class="subheading text-uppercase pl-2 mb-4">
            Beijing Haidian Christian Church
          </div>

          <v-btn
            color="primary"
            depressed
          >
            Subscribe
          </v-btn>
        </v-col>
      </v-row>
    </v-img>
  </base-card>
</template>

<script>
  export default {
    name: 'HomeBanner',
  }
</script>
