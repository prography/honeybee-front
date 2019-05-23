<template>
<div class="userPage">
  <UserInfo/>
  <UserGallery/>
</div>
</template>


<script>
import UserInfo from '@/components/UserInfo/UserInfo.vue'
import UserGallery from '@/components/Gallery/MyGallery/Gallery.vue'

export default {
  name:'user_page',
  components:{
    UserInfo,
    UserGallery
  }
  
}
</script>

<style scoped>

</style>
