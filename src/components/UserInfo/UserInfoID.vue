<template>
  <div class="user">
    <img v-if="user_img" class="profile_img" src="../../assets/img5.jpg">
    <default_img v-else/> <!--컴포넌트입니다-->
    <div class="profile">
      <div class="profile_info profile_id">{{ID}}</div>
      <div class="profile_info profile_intro">{{Introduce}}</div>
    </div>
  </div>
</template>


<script>
import default_img from "./UserDefaultImg.vue"

export default {
  name:"user-info-id",
  components:{
    default_img,
  },
  data(){
    return{
      ID:"OWEN",
      Introduce:"Hello, I'm Owen. Nice to meet you. I like honeybees. I work for prography blur blur....",
      user_img:false
    }
  }
  
}
</script>

<style lang="scss" scoped>
.user{
  margin-top:150px;
  text-align:center;
}

.profile_img{
  width:200PX;
  height:200PX;
  border:none;
  border-radius: 50%;
}

.profile{
  margin-bottom:20px;
  font-size:25px;
  font-weight:10%;
}

.profile_id{
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 55px;
}

</style>