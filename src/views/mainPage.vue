<template>
  <div class="mainPage">
    <Intro/>
    <!-- <Gallery/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/mainpage/Intro.vue'
import Gallery from '@/components/mainpage/Gallery.vue'

export default {
  name: 'mainPage',
  components: {
    Intro,
    Gallery,
  }
}
</script>

<style scoped>
</style>
