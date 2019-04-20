<template>
  <div class="user">
    <img v-if="basicIMG" class="profile_img" src="../assets/img5.jpg">
    
    <div class="profile">
      <div class="profile_info profile_name">{Name}</div>
      <div class="profile_info profile_id">{ID}</div>
      <div class="profile_info profile_email">{Email@naver.com}</div>
      <div class="profile_info profile_intro">{Introduce}</div>
    </div>
  </div>
</template>


<script>
import user_img from "./UserImg.vue"
import default_imgn from "./UserImg.vue"

export default {
  name:"user-info-id",
  components:{
    user_img,
  },
  data(){
    return{
      basicIMG:true
    }
  }
  
}
</script>

<style lang="scss" scoped>
.user{
  display:flex;
}
.profile_img{
  margin-top:40px;
  margin-right:40px;
  width:200PX;
  height:200PX;
  border:none;
  border-radius: 50%;
}

.profile{
  margin-top:30px;
  margin-left:2%;
  font-size:25px;
  font-weight:10%;
}

.profile_info{
  margin:20px 3px;
}
</style>