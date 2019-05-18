<template>
  <div class="filter_section">
    <div class="result_section">
      <div class="result">
        <img id="result">
      </div>
    </div>
    <div class="filters">
      <button class="filter">1</button>
      <button class="filter">2</button>
      <button class="filter">3</button>
      <button class="filter">4</button>
      <button class="filter">5</button>
    </div>
    <div class="buttons">
      <button class="btn donwnload_btn">DOWNLOAD</button>
      <button class="btn close_btn" @click="close">CLOSE</button>
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
      document.getElementById('result').src=data;
    });
  }
}
</script>

<style scoped>
.filter_section {
  margin-top:90px;
  margin-bottom:90px;
  width:100%;
  height:900px;
  background-color:#333333;
}

.result_section{
  display: flex;
  justify-content: center;
  margin-bottom:50px;
}

.result{
  margin-top:80px;
  margin-bottom:80px;
  max-width:800px;
  max-height:700px;
}

#result{
  width: 700px;
  height: auto;
  max-height: 400px;
  object-fit: contain;
  background-color: white;
  /* border:3px solid blue; */
}

.filters{
  margin-top:20px;
  margin-bottom:20px;
  text-align:center;
}

.filter{
  margin-left:30px;
  margin-right:30px;
  width:150px;
  height:100px;
  background-color:white;
  border:none;
}

.buttons{
  margin-top:50px;
  margin-bottom:50px;
  text-align:center;
}

.btn{
  margin:10px 20px;
  width:200px;
  height:60px;
  font-size:30px;
  background-color:white;
  border:none;
  border-radius:30px;
}

</style>