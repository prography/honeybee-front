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
        <div id="after"></div>
      </div>
    </div>
    <div class="filter_button">
      <button class="filter" style="background-color: antiquewhite">물방울 필터</button>
      <button class="filter" style="background-color: darkorchid">고흐 필터</button>
      <button class="filter" style="background-color: salmon">구름 필터</button>
      <button class="filter" style="background-color: khaki">파스텔 필터</button>
      <button class="filter" style="background-color: greenyellow">모네 필터</button>
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
      arrow
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
  width:100%;
  height:700px;
  background-color:#333333;
}

.result_section{
  display:flex;
  justify-content:center;
  margin-bottom:50px;
}

.result{
  margin: 100px 50px;
  padding: 0 auto;
  left: 50px;
  flex: 2;
  /*max-width:800px;*/
  /*max-height:700px;*/
}

.arrow {
  margin: 120px 0;
  padding: auto;
  flex: 1;
}

#before {
  width: 350px; /*이미지의 사이즈가 너무 작은거 같아 제가 임의로 수정했습니다.*/
  height: auto;
  max-height: 200px;
  object-fit: contain;
  background-color: white;
  /* border:3px solid blue; */
}

#after {
  display: flex;
  justify-content: flex-end;
  width: 350px;
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
  height: 80px;
  margin: auto;
  background-color: white;
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