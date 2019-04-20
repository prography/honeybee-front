<template>
<div class="userPage">
  <UserInfo/>
  <UserGallery/>
</div>
</template>


<script>
import UserInfo from '@/components/UserInfo.vue'
import UserGallery from '@/components/UserGallery.vue'

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
