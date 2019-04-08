<template>
  <div class="gallery-board">
    <div class="imgs">
      <img alt="error" src="../../assets/tmp/1.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name:"gallery",
  components:{

  }
}
</script>

<style scoped>

  .imgs{
    display:flex;
    flex-wrap:wrap;
    padding-top:120px;
    padding-left:20px;
    padding-right:20px;
    border:1px solid red;
    background-color:yellow;
  }

  img{
    height:300px;
    padding: 10px 10px;
  }
</style>
