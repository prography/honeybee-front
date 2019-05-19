<template>
  <div class="user_info">
    <user/>
    <total/>
    <router-link to="/user_info_change" tag="button">Edit Info</router-link>
  </div>
</template>


<script>
import user from "./UserInfoID.vue"
import total from "./UserInfoTotal.vue"

export default {
  name:'user_info',
  components:{
    user,
    total,
  },
  
}
</script>

<style scoped>

.user_info{
  text-align:center;
  height:770px;
  background:linear-gradient( to right, white, Gainsboro );
  /* border:1px solid blue; */
}

button{
  height:50px;
  padding:5px 40px;
  border:none;
  border-radius:30px;
  background-color:#333;
  font-size:25px;
  color:white;
}

</style>