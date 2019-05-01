<template>
  <div class="filter">
    <div class="cross">
      <i class="fas fa-times close-icon" @click="close"></i>
    </div>
    <div class="result">
      <div class="before">
        before
      </div>
      <div class="after">
        after
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'filter-section',

  methods:{
    close(){
      this.$emit("forClose");
    }
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

.before{
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