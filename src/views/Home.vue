<template>
  <div id="home">
    <contents />
  </div>
</template>

<script>
  export default {
    name: 'Home',

    components: {
      Contents: () => import('@/components/home/Content'),
    },
  }
</script>
