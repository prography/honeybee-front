<template>
  <div class="signIn">
    <div class="signIn_title">SIGN IN</div>
    <form>
      <label for="userID">ID</label>
      <input id="user_ID" type="text">
    </form>
    <form>
      <label for="userPWD">PassWord</label>
      <input id="user_PWD" type="password">
    </form>
    <button class="buttonA" @click="signIn()">Sign In</button>
    <router-link to='/sign_up' tag="button" class="buttonA">회원가입</router-link>
    <button class="buttonA">아이디 비밀번호 찾기</button>
    <button class="buttonA">
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
        this.$store.commit('signIn', ID); // 로그인 성공시 로그인 상태로 바뀜
        this.$router.push('/user_page');
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
  margin-left:25%;
  margin-right:25%;
  margin-top:100px;
  margin-bottom:100px;
  padding: 50px;
  border: 1px solid #eee;
  box-shadow: 0 0 3px #eee;
  color: #555;
}

.signIn_title{
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


button.buttonA {
  margin-top: 20px;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 0px;
  background-color: yellow;
  box-shadow: 0 0 3px yellow;
  font-weight: bold;
  color: #555;
  font-size: 18px;
}



</style>

