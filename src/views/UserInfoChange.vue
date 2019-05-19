<template>
  <div class="user_info_change">
    <div class="forNav"></div>
    <!--네브바 색상을 설정하기 위한 꼼수. 현재 네부바는 backgroud-color가 transparent로 설정 되어있습니다. 따라서 기존 네브바 설정을 유지하면서 네브바의 색상의 변경할 수 있도록 새로운 div를 만들어 사용하였습니다.-->
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
      <button>Edit</button>
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
  background-color:rgba(51, 51, 51); /*47, 45, 22*/
}

.info_change{
  text-align:center;
  margin-left:35%;
  margin-right:35%;
  padding-top:100px;
  padding-bottom:100px;
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
