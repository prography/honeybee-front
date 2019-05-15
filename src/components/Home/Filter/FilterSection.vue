<template>
  <div class="filter">
    <div class="cross">
      <i class="fas fa-times close-icon" @click="close"></i>
    </div>
    <div class="result_section">
      <div class="result">
        <img id="result">
      </div>
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

.result_section{
  display: flex;
  justify-content: center;
}

.result{
  max-width:800px;
  max-height:700px;
}

#result{
  width: 600px;
  height: auto;
  max-height: 400px;
  object-fit: contain;
  background-color: white;
  border:3px solid blue;
}


</style>