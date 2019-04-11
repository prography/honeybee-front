<template>
<div class="home">
  <Intro/>
  <Gallery/>
</div>
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/Intro.vue'
import Gallery from '@/components/Gallery.vue'

export default {
  name: 'home',
  components: {
    Intro,
    Gallery
  }
}
</script>
