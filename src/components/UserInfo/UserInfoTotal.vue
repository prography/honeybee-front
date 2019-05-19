<template>
  <div class="total_like_dl">
    <span class="total">
      <span class="total_like_num">{{likes}}</span>
      <span class="total_like"> likes</span>
    </span>
    <span class="total">
      <span class="total_dl_num">{{downloads}}</span>
      <span class="total_dl"> downloads</span>
    </span>
  </div>
</template>

<script>
export default {
  name:'total',
  data(){
    return{
      likes:"177",
      downloads:"547"
    }
  }
  
}
</script>

<style scoped>
.total_like_dl{
  margin-bottom:20px;
  text-align:center;
  font-size:25px;
}

.total{
  margin-left:10px;
  margin-right:10px;
}

.total_like_num{
  font-weight:bold;
}

.total_dl_num{
  font-weight:bold;
}

</style>
