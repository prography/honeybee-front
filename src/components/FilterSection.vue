<template>
  <div class="filter">
    <div class="cross" @click="close">
      <i class="fas fa-times"></i>
    </div>
    <div class="result">
      <div class="before">
        
      </div>
      <div class="after"></div>
    </div>
  </div>
</template>

<script>
export default {
  name:'filter-section',
  props:["img_file"],
  methods:{
    close(){
      this.$emit("forClose");
    },
  },
  
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
  justify-content: flex-end;
  padding:30px;
  font-size:70px;
}


img{
  height:700px;
}


</style>