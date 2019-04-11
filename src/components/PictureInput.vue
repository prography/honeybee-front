<template>
   <div class="img_upload" @click=on>
      <i class="far fa-image img_upload_icon"></i>
      <div for="tmp" class="img_upload_txt">이미지를 업로드해주세요</div>
    </div>
</template>


<script>
export default {
  name:'picture-input',
  methods:{
    
  }
}
</script>


<style scoped>
   .img_upload{
    text-align: center;
    position: relative;
    top:12%;
    left:26.5%;
    width:47.2937467157%;
    height:240px;
    border-radius: 25px;
    box-shadow: 0px 5px 5px #DCDCDC;
    background-color:#f9f9f8;
    color:#DCDCDC;
  }
  
  .img_upload_icon{
    margin-top:1%;
    font-size:150px;
  }

  .img_upload_txt{
    margin-bottom: 1%;
    font-size:35px;
  } 

</style>
