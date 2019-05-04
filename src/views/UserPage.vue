<template>
<div class="userPage">
  <UserInfo/>
  <UserGallery/>
</div>
</template>


<script>
import UserInfo from '@/components/UserInfo/UserInfo.vue'
import UserGallery from '@/components/UserInfo/UserGallery.vue'

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
