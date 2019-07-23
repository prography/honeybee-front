<template>
  <div class="user_info_change">
    <div class="info_change">
      <!-- <div>
        <label for="userID">ID</label>
        <input class="edit-input" type="text" id="user_ID" @keyup="idCheck">
      </div> -->
      <div class="notice">
        아이디 변경은 지원하지 않습니다.<br>
        수정 완료 후 Edit 버튼을 누르지 않으면 수정하신 내용이 저장 되지 않습니다.
      </div>
      <div>
        <label for="userEmail">Email</label>
        <input class="edit-input" type="email" id="user_Email" @keyup="emailCheck">
      </div>
      <!-- <div>
        <label for="currentUserPassword">현재 PassWord 입력</label>
        <input class="edit-input" type="password" id="current_user_PWD" @keyup="currentPwdCheck">
      </div> -->
      <div>
        <label for="UserPassword">변경 PassWord 입력</label>
        <input class="edit-input" type="password" id="user_PWD" @keyup="pwdFormCheck">
      </div>
      <div>
        <label for="userPassword_check">변경 PassWord 확인</label>
        <input class="edit-input" type="password" id="user_PWD_Confirm" @keyup="pwdFormConfirm">
      </div>
      <div class="warningMesage"></div>
      <button class="buttonA">Edit</button>
      <!-- <button class="buttonA" @click='cancel'>Cancel</button> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name:'info_edit',
  methods:{
    cancel(){
      if(window.confirm("입력중인 변경사항이 모두 취소됩니다. 변경을 취소하시겠습니까?")){
        sessionStorage.removeItem('edit');
        location.href="/user_page";
      }
    },
    idCheck(){
      let ID=document.getElementById("user_ID");
      console.log(ID.value);
    },
    emailCheck(){
      let EMAIL=document.getElementById("user_Email");
      console.log(EMAIL.value);
    },
    currentPwdCheck(){
      let currentPWD=document.getElementById("current_user_PWD");
      console.log(currentPWD.value);
    },
    pwdFormCheck(){
      let PWD=document.getElementById("user_PWD");
      console.log(PWD.value)
    },
    pwdFormConfirm(){
      let PWD_Confirm=document.getElementById("user_PWD_Confirm");
      console.log(PWD_Confirm.value);
    },
  },
  created(){
    console.log(sessionStorage.getItem('edit'));
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
</style>
