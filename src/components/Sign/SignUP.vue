<template>
  <div class="signUp">
    <div class="signUp_title">SIGN UP</div>
    <div>
      <label for="userID">ID</label>
      <input type="text" id="user_ID" @keyup='idCheck'>
      <div class="warn" id="warnLengthID">5자리 ~ 10자리 이내로 입력해주세요.</div>
      <div class="warn" id="warnDuplicateID">이미 사용되고 있는 아이디입니다.</div>
    </div>
    <div>
      <label for="userEmail">Email</label>
      <input type="email" id="user_Email" @keyup='emailCheck'>
      <div class="warn" id="warnWrongEM">이메일이 올바르지 않은 형식입니다</div>
    </div>
    <div>
      <label for="userPassword">PassWord</label>
      <input type="password" id="user_PWD" @keyup='passwordFormCheck'>
      <div class="warn" id="warnPWDLength">8자리 ~ 20자리 이내로 입력해주세요.</div>
      <div class="warn" id="warnPWDBlank">비밀번호는 공백없이 입력해주세요</div>
      <div class="warn" id="warnPWDRule">영문,숫자, 특수문자를 혼합하여 입력해주세요.</div>
    </div>
    <div>
      <label for="userPassword_check">PassWord 확인</label>
      <input type="password" id="user_PWD_Check" @keyup="passwordCheck">
      <div class="warn" id="warnPWDCompl">비밀번호를 먼저 입력해주세요.</div>
      <div class="warn" id="warnPWDSame">비밀번호 일치하지 않습니다.</div>
    </div>
    <div class="warningMesage"></div>
    <button class="signup" @click="signUp()">Sign Up</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name:"sign_up",
  data(){
    return{
      ID_OK:false,
      Email_OK:false,
      PWD_OK:false,
      PWD_Check_OK:false
    }
  },
  methods:{
    idCheck(){
      //현재 ID의 길이는 최소 5글자 최대 10글자로 한다.
      let ID=document.getElementById("user_ID").value;
      if(ID.length<5 || ID.length>10){
        if(ID.length===0){
          this.ID_OK=false;
          document.getElementById('user_ID').style.borderColor="initial";
          document.getElementById('warnLengthID').style.display="none";
          document.getElementById('warnDuplicateID').style.display="none";
        }else{
          this.ID_OK=false;
          document.getElementById('user_ID').style.borderColor="OrangeRed";
          document.getElementById('warnLengthID').style.display="block";
          document.getElementById('warnDuplicateID').style.display="none";
        }
      }else{
        this.ID_OK = true;
        document.getElementById('warnLengthID').style.display="none";
        document.getElementById('user_ID').style.borderColor="LimeGreen";
        //서버에서 ID 중복 확인 필요
      }
    },
    emailCheck(){
      let Email=document.getElementById("user_Email").value;
      if(Email.length===0){
        this.Email_OK=false;
        document.getElementById('user_Email').style.borderColor="initial";
        document.getElementById('warnWrongEM').style.display="none";
      }else{
        let re = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if(Email.match(re)!==null){
          this.Email_OK=true;
          document.getElementById('user_Email').style.borderColor="LimeGreen";
          document.getElementById('warnWrongEM').style.display="none";
        }else{
          this.Email_OK=false;
          document.getElementById('user_Email').style.borderColor="OrangeRed";
          document.getElementById('warnWrongEM').style.display="block";
        }
      }
      
    },
    passwordFormCheck(){
      //영문,숫자,특수문자 혼합하여 8자리~20자리 이내.(비밀번호 표준)
      let PW = document.getElementById("user_PWD").value;
      let pwdLength=false;
      let pwdBlank=false;
      let pwdRule=false;

      if(PW.length===0){
        this.PWD_OK=false;
        document.getElementById('user_PWD').style.borderColor="initial";
        document.getElementById('warnPWDLength').style.display="none";
        document.getElementById('warnPWDBlank').style.display="none";
        document.getElementById('warnPWDRule').style.display="none";
      }else{
        let num = PW.search(/[0-9]/g);
        let eng = PW.search(/[a-z]/ig);
        let spe = PW.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

        if(PW.length < 8 || PW.length > 20){
          pwdLength=true;
        }else{
          pwdLength=false;
        } 

        for(let i=0; i<PW.length; i++){
          if(PW[i]===' '){
            pwdBlank=true;
          }
        }
        
        if(num < 0 || eng < 0 || spe < 0 ){
          pwdRule=true;
        }else{
          pwdRule=false;
        }

        if(pwdLength===true || pwdBlank===true || pwdRule===true){
          document.getElementById('user_PWD').style.borderColor="OrangeRed";

          if(pwdLength===true){
            document.getElementById('warnPWDLength').style.display="block";
          }else{
            document.getElementById('warnPWDLength').style.display="none";
          }

          if(pwdBlank===true){
            document.getElementById('warnPWDBlank').style.display="block";
          }else{
            document.getElementById('warnPWDBlank').style.display="none";
          }

          if(pwdRule===true){
            document.getElementById('warnPWDRule').style.display="block";
          }else{
            document.getElementById('warnPWDRule').style.display="none";
          }

          this.PWD_OK=false;
        }else if(pwdLength===false || pwdBlank===false || pwdRule===false){
          //모든 조건 충족하여 password를 사용할 수 있다.
          this.PWD_OK=true;
          document.getElementById('user_PWD').style.borderColor="LimeGreen";
          document.getElementById('warnPWDLength').style.display="none";
          document.getElementById('warnPWDBlank').style.display="none";
          document.getElementById('warnPWDRule').style.display="none";
        }
      }
    },
    passwordCheck(){
      let PWD=document.getElementById("user_PWD").value;
      let PWD_Check=document.getElementById("user_PWD_Check").value;

      if(PWD_Check.length===0){
        this.PWD_Check_OK=false;
        document.getElementById('user_PWD_Check').style.borderColor="initial";
        document.getElementById('warnPWDCompl').style.display="none";
        document.getElementById('warnPWDSame').style.display="none";
      }else if(this.PWD_OK===false){
        this.PWD_Check_OK=false;
        document.getElementById('user_PWD_Check').style.borderColor="orangered";
        document.getElementById('warnPWDCompl').style.display="block";
        document.getElementById('warnPWDSame').style.display="none";
      }else if(this.PWD_OK===true){
        if(PWD===PWD_Check){
          this.PWD_Check_OK=true;
          document.getElementById('user_PWD_Check').style.borderColor="LimeGreen";
          document.getElementById('warnPWDCompl').style.display="none";
          document.getElementById('warnPWDSame').style.display="none";
        }else{
          this.PWD_Check_OK=false;
          document.getElementById('user_PWD_Check').style.borderColor="orangered";
          document.getElementById('warnPWDCompl').style.display="none";
          document.getElementById('warnPWDSame').style.display="block";
        }
      }
    },
    signUp(){

      let ID=document.getElementById("user_ID").value;
      let Email=document.getElementById("user_Email").value;
      let PWD=document.getElementById("user_PWD").value;
      let PWD_Check=document.getElementById("user_PWD_Check").value;
      
      if(this.ID_OK===true && this.Email_OK===true && this.PWD_OK===true && this.PWD_Check_OK===true){
        //회원 가입 실행

        axios.post('http://127.0.0.1:8000/api/auth/register/',
          {
            username:ID,
            email:Email,
            password:PWD,
          }
        ).then(response=>{
          if(response.status===200){
            window.alert('회원가입 성공');
            this.$router.push('/sign_in');
          }
        })

      }else{
        window.alert("입력을 완료해주세요.");
      }

    }
  }
}
</script>

<style scoped>

.warn{
  display: none;
  text-align:left;
  box-shadow: 0 0 3px #eee;
  color:orangered;
}

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
  font-size: 18px;
}

</style>

