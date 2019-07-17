<template>
  <div class="user_info">
    <div class="user">
      <img v-if="user_img" class="profile_img" src="../../assets/img5.jpg">
      <default_img v-else/> <!--컴포넌트입니다-->
      <div class="profile">
        <div class="profile_info profile_id">{{ID}}</div>
        <div class="profile_info profile_intro">{{Introduce}}</div>
      </div>
    </div>
    <div class="total_like_dl">
      <span class="total">
        <span class="total_like_num">{{likes}}</span>
        <span class="total_like"> likes</span>
      </span>
      <span class="total">
        <span class="total_dl_num">{{downloads}}</span>
        <span class="total_dl"> downloads</span>
      </span>
    </div>
    <router-link to="/user_info_change" tag="button">Edit Info</router-link>
  </div>
</template>


<script>
import default_img from "./UserDefaultImg.vue"
import store from '@/vuex/store.js'

export default {
  name:'user_info',
  components:{
    default_img,
  },
  data(){
    return{
      user_img:false,
      ID: sessionStorage.getItem("userID"),
      Introduce:"Hello, I'm Owen. Nice to meet you. I like honeybees. I work for prography blur blur....",
      likes:"177",
      downloads:"547"
    }
  },
  
}
</script>

<style scoped>

.user_info{
  text-align:center;
  height:770px;
  background:linear-gradient( to right, white, Gainsboro );
}

.user{
  padding-top:150px;
  text-align:center;
}

.profile_img{
  width: 100px;
  height: 100px;
  border:none;
  border-radius: 50%;
}

.profile{
  margin-bottom:20px;
  font-size:20px;
  font-weight:100;
}

.profile_id{
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 700;
}

.total_like_dl{
  margin-bottom:20px;
  text-align:center;
  font-size:20px;
}

.total{
  margin-left:10px;
  margin-right:10px;
}

.total_like_num{
  font-weight:bold;
}

.total_dl_num{
  font-weight:bold;
}

button{
  height:40px;
  padding:5px 40px;
  border:none;
  border-radius:20px;
  background-color:#333;
  font-size:18px;
  color:white;
}

</style>