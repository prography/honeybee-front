<template>
  <div class="signIn">
    <div class="signIn_title">SIGN IN</div>
    <form>
      <label for="userIDEmail">ID</label>
      <br>
      <input id="user_ID_Email" type="text">
    </form>
    <form>
      <label for="userPWD">PassWord</label>
      <br>
      <input id="user_PWD" type="password">
    </form>
    <div class="warningMessage">
      <!-- modal로 warning을 줄 것인가? 아니면 txt를 띄울 것인가 -->
    </div>
    <button @click="signIn()">Sign In</button>
    <button>
      <!-- <img src="../assets/google_logo.png"> -->
      Google Sign In
    </button>
  </div>
</template>

<script>
export default {
  name:'sign_in',
  methods:{
    signIn(){
      let ID_Email=document.getElementById("user_ID_Email").value;
      let PWD=document.getElementById("user_PWD").value;

      if(ID_Email=="" || PWD==""){
        console.log("!");
      }else{
        console.log(ID_Email);
        console.log(PWD);
      }

      document.getElementById("user_ID_Email").value="";
      document.getElementById("user_PWD").value="";
    }
  }
}
</script>

<style scoped>
.signIn{
  text-align:center;
  margin-left:35%;
  margin-right:35%;
  padding-top:100px;
  padding-bottom:100px;
}

.signIn_title{
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

