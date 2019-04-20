<template>
  <div class="signUp">
    <div class="signUp_title">SIGN UP</div>
    <form>
      <label for="userName">Name</label>
      <br>
      <input type="text" id="user_Name">
    </form>
    <form>
      <label for="userID">ID</label>
      <br>
      <input type="text" id="user_ID">
    </form>
    <form>
      <label for="userEmail">Email</label>
      <br>
      <input type="email" id="user_Email"> 
    </form>
    <form>
      <label for="userPassword">PassWord</label>
      <br>
      <input type="password" id="user_PWD">
    </form>
    <form>
      <label for="userPassword_check">PassWord 확인</label>
      <br>
      <input type="password" id="user_PWD_Check">
    </form>
    <div class="warningMesage"></div>
    <button @click="signUp()">Sign Up</button>
  </div>
</template>

<script>
export default {
  name:"sign_up",
  methods:{
    signUp(){
      let Name=document.getElementById("user_Name").value;
      let ID=document.getElementById("user_ID").value;
      let Email=document.getElementById("user_Email").value;
      let PWD=document.getElementById("user_PWD").value;
      let PWD_Check=document.getElementById("user_PWD_Check").value;


      if(PWD!=PWD_Check){
        console.log("비밀번호 다름");
      }else{
        console.log("O");
      }
    }
  }
}
</script>

<style scoped>
.signUp{
  text-align:center;
  margin-left:35%;
  margin-right:35%;
  padding-top:200px;
}

.signUp_title{
  text-align:center;
  margin:5%;
  font-size:55px;
}

form{
  text-align:center;
  margin-top:2%;
  margin-bottom:2%;
}

label{
  display:flex;
  justify-content:flex-start;
}

input{
  width:100%;
  height:30px;
}

button{
  margin-top:5%;
  width:100%;
  height:30px;
}

</style>

