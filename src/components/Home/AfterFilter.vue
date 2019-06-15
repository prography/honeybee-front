<template>
  <div class="afterFilter">
    <img id='result'>
  </div>
</template>

<script>
export default {
  name:'afterFilter',
  created(){
    document.getElementById('result').src=this.$store.getters.getfilterResult();
  }
}
</script>

<style scoped>
#result{
  height: 200px;
  max-height: 200px;
  object-fit: contain;
}
</style>
