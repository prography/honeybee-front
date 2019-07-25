<template>
  <div class="filter_section">
    <div class="result_section">
      <div class="result">
        <img id="beforeIMG">
      </div>
      <div class="arrow">
        <img src="@/assets/right-arrow.png" alt="화살표">
      </div>
      <div class="result">
        <div id="beforeFilter">
          <beforeFilter/>
        </div> 
        <div id="loading">
          <loading/>
        </div>
        <img id="after">
        <!-- <div id="afterIMG"></div> -->
      </div>
    </div>
    <div class="filter_button">
      <button class="filter" @click="applyFilter('cezanne')">세잔 필터</button>
      <button class="filter" @click="applyFilter('vangogh')">고흐 필터</button>
      <button class="filter" @click="applyFilter('duchamp')">뒤샹 필터</button>
      <button class="filter" @click="applyFilter('kandinsky')">칸딘스키 필터</button>
      <button class="filter" @click="applyFilter('monet')">모네 필터</button>
      <button class="filter" @click="applyFilter('katsushika')">가쓰시카 필터</button>
      <button class="filter" @click="applyFilter('picabia')">피카비아 필터</button>
    </div>
    <div class="buttons">
      <a id="download" class="btn" href="">DOWNLOAD</a>
      <button id="share" class="btn" @click="share">SHARE</button>
      <button id="close" class="btn" @click="close">CLOSE</button>
    </div>
  </div>
</template>

<script>
import {eventbus} from '@/eventbus';
import axios from 'axios'
import beforeFilter from './BeforeFilter.vue'
import loading from './Loading.vue'
import store from '@/vuex/store.js'


export default {
  name:'filter-section',
  data(){
    return{
      files:'',
      result:'',
    }
  },
  components:{
    beforeFilter,
    loading,
  },
  methods:{
    close(){
      this.$emit("forClose");
    },
    applyFilter(filter){
      document.getElementById('beforeFilter').style.display='none';
      document.getElementById('after').style.display='none';
      document.getElementById('loading').style.display='block';
      document.getElementById("download").style.display='none';
      document.getElementById("share").style.display='none';
      document.getElementById("close").style.display='none';



      this.files=store.getters.getOBJ;
      //data()에 vuex에 저장된 배열을 저장.

      let formData=new FormData();
      for( var i = 0; i < this.files.length; i++ ){
        let file = this.files[i];
        formData.append('pic_address', file);
      }
      formData.append('filter_info', filter);

      axios.post('http://127.0.0.1:8000/tmppicture/',
        formData,
        {
           headers: {
               'Content-Type': 'multipart/form-data'
           }
        }).then(
          function(response){

            let result="data:image.png;base64,"+response.data;
            document.getElementById('after').src=result;
            let src="data:image.png;base64,"+response.data;
            document.getElementById('loading').style.display='none';
            document.getElementById('after').style.display='block';
            document.getElementById('share').style.display='inline';
            document.getElementById('close').style.display='inline';

            let dwn=document.getElementById('download');
            dwn.href=result;
            dwn.download="result.png";
            dwn.style.display = "inline";

            store.commit('setResultUrl', result);
          }
        );
      //서버에 필터 이름과 함꼐 이미지를 전송.
    },
    share() {
        
      if(sessionStorage.getItem('signIN')){

        // let data=new FormData();
        // data.append
        window.alert(store.getters.getResultUrl);


        // axios.post('http://localhost:8000/api/auth/mypage/',
        //   {
        //       'pic_address' : , // 유석아 이 부분 부탁한다..
        //       'share' : true
        //   },
        //   {
        //       headers: {
        //           'Authorization' : 'token ' + localStorage.getItem('token')
        //       }
        //   })
      } else {
        // window.alert("로그인X");
        if(window.confirm("로그인이 필요한 기능입니다. 로그인 페이지로 이동하시겠습니까?")){
          location.href="/sign_in";
        }
      }
    }
  },
  created(){
    eventbus.$on('original', function(tmp){
      document.getElementById('beforeIMG').src=tmp;
      document.getElementById('beforeFilter').style.display='block';
      document.getElementById('after').style.display='none';
      document.getElementById('loading').style.display='none';
      document.getElementById("download").style.display='none';
      document.getElementById("share").style.display='none';
      document.getElementById("close").style.display='none';
    })
  }
}
</script>

<style scoped>
.filter_section {
  /*width:100%;*/
  /*height:700px;*/
  padding: 50px;
  background-color: #333333;
  text-align:center;
}

.result_section{
  display:flex;
  justify-content:center;
  margin-bottom:50px;
}

.result{
  /*margin: 100px 50px;*/
  /*padding: 0 auto;*/
  /*left: 50px;*/
  text-align: center;
  flex: 2;
  /*max-width:800px;*/
  /*max-height:700px;*/
}

.arrow {
  /*margin: 120px 0;*/
  /*padding: auto;*/
  flex: none;
  padding: 0 20px;
  display: flex;
  align-content: center;
  align-items: center;

}

#loading{
  box-sizing: border-box;
  display: none;
  height: 200px;
  padding: 68px 0;
}

#after {
  display: none;
  margin: 0 auto;
  /*justify-content: flex-end;*/
  /* width: 300px;
  height: 200px; */
  height: 224px;
  max-height: 224px;
  object-fit: contain;
  /* border:5px dashed white; */
  background-color: #333;
}

.filter_button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}


.filter {
  width: 120px;
  height: 48px;
  margin: 20px;
  border: none;
  /* outline: none; */
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  background-color: white;
}
.filter{
  background-color: #234234;
}
/* .filter:nth-child(2){
  background-color: #234234;
}
.filter:nth-child(3){
  background-color: #234234;
}
.filter:nth-child(4){
  background-color: #234234;
}
.filter:nth-child(5){
  background-color: #234234;
}
.filter:nth-child(6){
  background-color: #234234;
}

.filter:nth-child(7){
  background-color: #234234;
} */



.buttons{
  margin-top:50px;
  margin-bottom:20px;
  text-align:center;
}

.btn{
  margin:10px 20px;
  width:120px;
  height:30px;
  font-size:14px;
  background-color:white;
  border:none;
  border-radius:20px;
}

#download{
  display: none;
  margin:10px 20px;
  padding:7px 20px;
  text-align: center;
  text-decoration: none;
  color:black;
  font-size:14px;
  background-color: white;
  border:none;

  border-radius:20px;
  width: 120px;
  height: 30px;
  font-size: 14px;
  border: none;
  border-radius: 20px;
}

</style>
