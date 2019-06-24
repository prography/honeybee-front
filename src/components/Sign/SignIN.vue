<template>
  <div class="signIn">
    <div class="signIn_title">SIGN IN</div>
    <form>
      <label for="userID">ID</label>
      <br>
      <input id="user_ID" type="text">
    </form>
    <form>
      <label for="userPWD">PassWord</label>
      <br>
      <input id="user_PWD" type="password">
    </form>
    <div class="etc">
      <router-link to='/sign_up' tag="button">회원가입</router-link>
      <button>아이디 비밀번호 찾기</button>
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
      let ID=document.getElementById("user_ID").value;
      let PWD=document.getElementById("user_PWD").value;

      if(ID.length===0 || PWD.length===0){
        if(ID.length===0 && PWD.length===0){
          window.alert("입력을 완료해주세요.");
          document.getElementById("user_ID").style.borderColor="orangered";
          document.getElementById("user_PWD").style.borderColor="orangered";
        }else if(ID.length===0){
          window.alert("아이디를 입력해 주세요.");
          document.getElementById("user_ID").style.borderColor="orangered";
          document.getElementById("user_PWD").style.borderColor="initial";
        }else if(PWD.length===0){
          window.alert("비밀번호를 입력해 주세요.");
          document.getElementById("user_ID").style.borderColor="initial";
          document.getElementById("user_PWD").style.borderColor="orangered";
        }
      }else{
        document.getElementById("user_ID").style.borderColor="initial";
        document.getElementById("user_PWD").style.borderColor="initial";
        document.getElementById("user_ID").value="";
        document.getElementById("user_PWD").value="";
      }
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

.etc{
  display:flex;
  justify-content: space-around;
}

</style>

