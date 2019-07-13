<template>
  <div class="user_info_change">
    <div class="info_change">
      <div class="user_img">
        <img id="image" src="@/assets/user.png">
        <div class="filebox">
          <label for="change_img">사진 변경</label>
          <input type="file" id="change_img" @change="onChange">
        </div>
      </div>
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
      <button class="buttonA">Edit</button>
      <router-link to='/user_Page' tag="button" class="buttonA">Cancel</router-link>
    </div>
  </div>
</template>

<script>
//수정 필요 이미지 orientation해야함
export default {
  name:'user_info_change',
  methods:{
    onChange(e){
      let files=e.target.files;
      let fileReader=new FileReader();
      fileReader.readAsDataURL(files[0]);
      fileReader.onload = function(e) {
        let image=document.getElementById('image');
        image.src=e.target.result;
      }
    }
  },
}
</script>

<style scoped>
.forNav{
  height:100px;
  background-color:#514C1E; /*47, 45, 22*/
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

.user_img{
  margin-bottom:10px;
}

img{
  margin-bottom:10px;
  width:200PX;
  height:200PX;
  border:none;
  border-radius: 50%;
  background-color:silver;
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

.filebox input[type="file"] {  /* 파일 필드 숨기기 */
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip:rect(0,0,0,0);
  border: 0;
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
</style>
