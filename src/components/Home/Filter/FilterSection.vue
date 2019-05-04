<template>
  <div class="filter">
    <div class="cross">
      <i class="fas fa-times close-icon" @click="close"></i>
    </div>
    <div class="result">
      <img id="before">
      <img class="after">
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
    eventbus.$once("transfer-file", (data)=>{
      document.getElementById('before').src=data;
    });
  }
}
</script>

<style scoped>
.filter {
  margin-top:90px;
  margin-bottom:90px;
  width:100%;
  height:800px;
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

#before{
  height:500px;
  width:42%;
  background-color:silver;
  border:3px solid blue;
}

.after{
  height:500px;
  width:42%;
  background-color:silver;
  border:3px solid red;
}

</style>