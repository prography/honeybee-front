<template>
  <div class="filter">
    <div class="cross">
      <i class="fas fa-times close-icon" @click="close"></i>
    </div>
    <div class="result">
      <img id="result">
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
.filter {
  margin-top:90px;
  margin-bottom:90px;
  width:100%;
  height:900px;
  background-color:green;
}

.cross{
  display: flex;
  justify-content:flex-end;
  font-size:60px;
}

.close-icon{
  margin:20px;
}

.result{
  display: flex;
  justify-content: space-around;
}

#result{
  max-width: 90%;
  max-height:600px;
  background-color:silver;
  border:3px solid blue;
}


</style>