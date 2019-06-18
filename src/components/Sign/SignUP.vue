<template>
  <div class="signUp">
    <div class="signUp_title">SIGN UP</div>
    <form>
      <label for="userName">Name</label>
      <input type="text" id="user_Name">
    </form>
    <form>
      <label for="userID">ID</label>
      <input type="text" id="user_ID">
    </form>
    <form>
      <label for="userEmail">Email</label>
      <input type="email" id="user_Email">
    </form>
    <form>
      <label for="userPassword">PassWord</label>
      <input type="password" id="user_PWD">
    </form>
    <form>
      <label for="userPassword_check">PassWord 확인</label>
      <input type="password" id="user_PWD_Check">
    </form>
    <div class="warningMesage"></div>
    <button class="signup" @click="signUp()">Sign Up</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name:"sign_up",
  methods:{
    signUp(){
      let Name=document.getElementById("user_Name").value;
      let ID=document.getElementById("user_ID").value;
      let Email=document.getElementById("user_Email").value;
      let PWD=document.getElementById("user_PWD").value;
      let PWD_Check=document.getElementById("user_PWD_Check").value;


      // if(PWD!=PWD_Check){
      //   console.log("비밀번호 다름");
      // }else{
      //   console.log("O");
      // }


    }
  }
}
</script>

<style scoped>

.signUp{
  text-align:center;
  margin-left:25%;
  margin-right:25%;
  margin-top:100px;
  margin-bottom:100px;
  padding: 50px;
  border: 1px solid #eee;
  box-shadow: 0 0 3px #eee;
  color: #555;
}

.signUp_title{
  text-align:center;
  margin:5%;
  font-size:40px;
}

form{
  text-align:center;
  margin-top:2%;
  margin-bottom:2%;
}

label{
  display:flex;
  justify-content:flex-start;
  margin-bottom: 15px;
  font-weight: bold;
}

input{
  width:100%;
  height:30px;
  margin-bottom: 10px;
}

button.signup{
  margin-top: 20px;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 0px;
  background-color: yellow;
  box-shadow: 0 0 3px yellow;
  font-weight: bold;
  color: #555;
}

</style>

