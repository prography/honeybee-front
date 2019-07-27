<template>
  <div class="user_info_change">
    <div class="info_change">
      <div class="notice">
        아이디 변경은 지원하지 않습니다.<br>
        수정 완료 후 Edit 버튼을 누르지 않으면 수정하신 내용이 저장 되지 않습니다.
      </div>
      <div>
        <label for="userEmail">Email</label>
        <input class="edit-input" type="email" id="user_Email" @keyup="emailCheck">
        <div class="warn" id="warnWrongEM">이메일이 올바르지 않은 형식입니다</div>
      </div>
      <!-- <div>
        <label for="UserPassword">변경 PassWord 입력</label>
        <input class="edit-input" type="password" id="user_PWD" @keyup="pwdFormCheck">
        <div class="warn" id="warnPWDLength">8자리 ~ 20자리 이내로 입력해주세요.</div>
        <div class="warn" id="warnPWDBlank">비밀번호는 공백없이 입력해주세요</div>
        <div class="warn" id="warnPWDRule">영문,숫자, 특수문자를 혼합하여 입력해주세요.</div>
      </div>
      <div>
        <label for="userPassword_check">변경 PassWord 확인</label>
        <input class="edit-input" type="password" id="user_PWD_Confirm" @keyup="pwdFormConfirm">
        <div class="warn" id="warnPWDCompl">비밀번호를 먼저 입력해주세요.</div>
        <div class="warn" id="warnPWDSame">비밀번호 일치하지 않습니다.</div>
      </div> -->
      <button class="buttonA" @click="edit">Edit</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name:'info_edit',
  data(){
    return{
      current_Email:"",
      Email_OK:false,
      PWD_OK:false,
      PWD_Check_OK:false
    }
  },
  methods:{
    edit(){
      if(this.Email_OK==false && this.PWD_OK==false){
        window.alert("변경사항이 없습니다.")
      }

      if(this.Email_OK==true && this.PWD_OK==false){
        let Email=document.getElementById("user_Email").value;
        axios.patch('http://localhost:8000/api/auth/user/',{
          email:Email
        },{
          headers:{
            'Authorization':'Token '+localStorage.getItem("token")
          }
        }).then(response=>{
          alert("사용자 정보가 수정되었습니다.")
          this.$router.push({path:'user_page'});
        })
      }

      // if(this.Email_OK==false && this.PWD_OK==true && this.PWD_Check_OK==true){
      //   let PWD=document.getElementById("user_PWD").value;
      //   axios.patch('http://localhost:8000/api/auth/user/',{
      //     password:PWD
      //   },{
      //     headers:{
      //       'Authorization':'Token '+localStorage.getItem("token")
      //     }
      //   }).then(response=>{
      //     alert("사용자 정보가 수정되었습니다.")
      //     this.$router.push({path:'user_page'});
      //   })
      // }

      // if(this.Email_OK==true && this.PWD_OK==true && this.PWD_Check_OK==true){
      //   let Email=document.getElementById("user_PWD").value;
      //   let PWD=document.getElementById("user_Email").value;
      //   axios.patch('http://localhost:8000/api/auth/user/',{
      //     email:Email,
      //     password:PWD
      //   },{
      //     headers:{
      //       'Authorization':'Token '+localStorage.getItem("token")
      //     }
      //   }).then(response=>{
      //     console.log (response);
      //   })
      // }

    },
    emailCheck(){
      let Email=document.getElementById("user_Email").value;
      console.log(Email);
      if(Email.length===0){
        this.Email_OK=false;
        document.getElementById('user_Email').style.borderColor="#e9e9e9";
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
    pwdFormCheck(){
      let PW=document.getElementById("user_PWD").value;
      let pwdLength=false;
      let pwdBlank=false;
      let pwdRule=false;

      if(PW.length===0){
        this.PWD_OK=false;
        document.getElementById('user_PWD').style.borderColor="#e9e9e9";
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
    pwdFormConfirm(){
      let PWD=document.getElementById("user_PWD").value;
      let PWD_Check=document.getElementById("user_PWD_Confirm").value;

      if(PWD_Check.length===0){
        this.PWD_Check_OK=false;
        document.getElementById('user_PWD_Confirm').style.borderColor="#e9e9e9";
        document.getElementById('warnPWDCompl').style.display="none";
        document.getElementById('warnPWDSame').style.display="none";
      }else if(this.PWD_OK===false){
        this.PWD_Check_OK=false;
        document.getElementById('user_PWD_Confirm').style.borderColor="orangered";
        document.getElementById('warnPWDCompl').style.display="block";
        document.getElementById('warnPWDSame').style.display="none";
      }else if(this.PWD_OK===true){
        if(PWD===PWD_Check){
          this.PWD_Check_OK=true;
          document.getElementById('user_PWD_Confirm').style.borderColor="LimeGreen";
          document.getElementById('warnPWDCompl').style.display="none";
          document.getElementById('warnPWDSame').style.display="none";
        }else{
          this.PWD_Check_OK=false;
          document.getElementById('user_PWD_Confirm').style.borderColor="orangered";
          document.getElementById('warnPWDCompl').style.display="none";
          document.getElementById('warnPWDSame').style.display="block";
        }
      }
 
    },
  },
  mounted(){
    axios.get('http://localhost:8000/api/auth/user/',{
      headers:{
        'Authorization':'Token '+localStorage.getItem("token")
      }
    }).then(response=>{
      document.getElementById("user_Email").placeholder=response.data.email;
    })
  }
}
</script>

<style scoped>

.edit-input{
  box-sizing: border-box;
  height: 40px;
  font-size: 14px;
  color: #1e1e1e;
  border-radius: 4px;
  border: 1px solid #e9e9e9;
  box-shadow: none;
  background-color: #ffffff;
  padding: 7px 12px;
  outline: none;
}

.info_change{
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

.filebox label {
  display: inline-block;
  padding: .5em .75em;
  color: black;
  font-size: inherit;
  line-height: normal;
  vertical-align: middle;
  background-color: #fdfdfd;
  cursor: pointer;
  border: 1px solid black;
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

.buttonA {
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

.notice{
  margin-top:10px;
  margin-bottom:10px;
  color:orangered;
}

.warn{
  display: none;
  text-align:left;
  margin-bottom:10px;
  /* box-shadow: 0 0 3px #eee; */
  color:orangered;
}


</style>
