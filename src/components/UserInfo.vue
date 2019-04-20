<template>
  <div class="user_info">
    <div class="user">
      <user/>
    </div>
    <div class="profile_change_button">
      <router-link to="/" tag="button">정보수정</router-link>
    </div>
    <div class="total">
      <total/>
    </div>
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
  display:flex;
  padding-top:80px;
  padding-left:30px;
  padding-right:30px;
  height:320px;
  border:1px solid blue;
}

.user{
flex:1;
}

.profile_change_button{
  flex:1;
  display: flex;
  justify-content: flex-end;
  height:246px;
  align-items: flex-end
}

button{
  height:50px;
  padding:5px 60px;
  font-size:25px;
}

.total{
  flex:1;
}

</style>