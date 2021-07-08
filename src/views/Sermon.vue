<template>
  <div id="home">
    <contents />
    <banner />
    <about />

    <subscribe />

    <!-- <social /> -->
  </div>
</template>

<script>
  export default {
    name: 'Home',

    components: {
      About: () => import('@/components/home/About'),
      Contents: () => import('@/components/home/Content'),
      Banner: () => import('@/components/home/Banner'),
      // Social: () => import('@/components/home/Social'),
      Subscribe: () => import('@/components/home/Subscribe'),
    },
  }
</script>
