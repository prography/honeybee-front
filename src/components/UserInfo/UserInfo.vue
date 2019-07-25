<template>
  <div class="user_info">
    <div class="user">
      <default_img/> <!--컴포넌트입니다-->
      <div class="profile">
        <div class="profile_info profile_id">{{ID}}</div>
        <div class="profile_info profile_Email">{{Email}}</div>
      </div>
    </div>
    <div class="buttons">
      <button @click='edit'>Edit Info</button>
      <button @click='withdraw'>Withdrawal</button>
    </div>
  </div>
</template>


<script>
import default_img from "./UserDefaultImg.vue"
import store from '@/vuex/store.js'
import axios from 'axios'

export default {
  name:'user_info',
  components:{
    default_img,
  },
  data(){
    return{
      ID: localStorage.getItem("userID"),
      Email: ''
    }
  },
  methods:{
    edit(){
      this.$router.push({path:'user_info_change'});
    },
    withdraw(){
      console.log("ㅠㅠ");
    }
  },
  created(){
    axios.get('http://localhost:8000/api/auth/user/',{
      headers:{
        'Authorization':'Token '+localStorage.getItem("token")
      }
    }).then(response=>{
      this.Email=response.data.email;
    })
  }
  
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

.profile_Email{
  font-size: 30px;
  font-weight: 700;
}

button{
  text-align:center;
  width:170px;
  height:40px;
  margin: 0px 10px;
  padding:5px 40px;
  border:none;
  border-radius:20px;
  background-color:#333;
  font-size:18px;
  color:white;
}

.withdrawal{

}

</style>