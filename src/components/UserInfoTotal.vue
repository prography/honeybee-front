<template>
  <div class="total_good_dl">
    <div class="total total_good">
      <span>
        <i class="fas fa-thumbs-up"></i>
        {number}
      </span>
    </div>
    <div class="total total_dl">
      <span>
        <i class="fas fa-file-download"></i>
        {number}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.total_good_dl{
  font-size: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end
}

.total{
  margin-left:35px;
  margin-right:35px;
}

.total_good{
  margin-top:35px;
  margin-bottom:94px;
}

i{
  margin-right:10px;
}
</style>
