<template>
  <div class="filter_section">
    <div class="result_section">
      <div class="result">
        <img id="before">
      </div>
      <div class="arrow">
        <img src="@/assets/right-arrow.png" alt="화살표">
      </div>
      <div class="result">
        <img id="after">
      </div>
    </div>
    <div class="filter_button">
      <button class="filter">물방울 필터</button>
      <button class="filter">고흐 필터</button>
      <button class="filter">구름 필터</button>
      <button class="filter">파스텔 필터</button>
      <button class="filter">모네 필터</button>
    </div>
    <div class="buttons">
      <button class="btn">DOWNLOAD</button>
      <button class="btn" @click="close">CLOSE</button>
    </div>
  </div>
</template>

<script>
import {eventbus} from '@/eventbus';

export default {
  name:'filter-section',
  data(){
    return{
      receivedFile:'',
    }
  },
  methods:{
    close(){
      this.$emit("forClose");
    }
  },
  created:function(){
    eventbus.$on("transfer-file", (data)=>{
      document.getElementById('before').src=data;
    });
  }
}
</script>

<style scoped>
.filter_section {
  /*width:100%;*/
  /*height:700px;*/
  padding: 50px;
  background-color: #333333;
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

#before {
  /*width: 350px; !*이미지의 사이즈가 너무 작은거 같아 제가 임의로 수정했습니다.*!*/
  height: 200px;
  max-height: 200px;
  object-fit: contain;
  background-color: white;
  /* border:3px solid blue; */
}

#after {
  /*display: flex;*/
  /*justify-content: flex-end;*/
  width: 300px;
  height: 200px;
  background-color: #fff;
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
  outline: none;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  background-color: white;
}
.filter:nth-child(1){
  background-color: #123123;
}
.filter:nth-child(2){
  background-color: #234234;
}
.filter:nth-child(3){
  background-color: #345345;
}
.filter:nth-child(4){
  background-color: #456456;
}
.filter:nth-child(5){
  background-color: #567567;
}
.filter:nth-child(6){
  background-color: #678678;
}

.buttons{
  margin-top:50px;
  margin-bottom:50px;
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

</style>
