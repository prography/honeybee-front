<template>
<div class="userPage">
  <UserInfo/>
  <Gallery v-bind:images = "myImages"/>
</div>
</template>


<script>
import UserInfo from '@/components/UserInfo/UserInfo.vue'
import Gallery from '@/components/Gallery/Gallery.vue'

import img1 from '@/assets/img1.jpg'
import img2 from '@/assets/img2.jpg'
import img3 from '@/assets/img3.jpg'
import img4 from '@/assets/img4.jpg'
import img5 from '@/assets/img5.jpg'
import img6 from '@/assets/img6.jpg'

export default {
  name:'user_page',
  data() {
    const myImages = [
      {
        src: img1,
        name: 'John',
        show: false
      },
      {
        src: img2,
        name: 'kevin',
        show: false
      },
      {
        src: img3,
        name: 'abigail',
        show: false
      },
      {
        src: img4,
        name: 'sarah',
        show: false
      },
      {
        src: img5,
        name: 'ruth',
        show: false
      },
      {
        src: img6,
        name: 'peter',
        show: false
      }
    ];
    return {
      myImages
    }
  },
  components:{
    UserInfo,
    Gallery
  }
  
}
</script>

<style scoped>

</style>
