<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <slot />
      </v-col>


      <SundaySermon :size="2"/>
      <DailyListening :size="2"/>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HomeAbout',

    components: {
      SundaySermon: () => import('@/components/SundaySermon'),
      DailyListening: () => import('@/components/DailyListening'),
    },
  }
</script>
