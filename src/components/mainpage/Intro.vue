<template>
  <div class="Intro-background">
    <div class="Intro">
      <div class="Intro_txt">
        <div class="main_txt">
          <div>사진을 보정해 드립니다</div>
          <div>여러분이 원하는 방향으로</div>
        </div>
        <br/>
        <div class="sub_txt">
          <div class="sub_txt_first">
            <span>HoneyBee는</span>
            <span class="highLight"> Deep Learning Computer Vision</span>
            <span>을 이용하여</span>
          </div>
          <div class="sub_txt_second">
            사진을 Stylish하고 Unique하게 보정해 드립니다.
          </div>
        </div>
      </div>
      <div class="img_upload">
        <i class="far fa-image img_upload_icon"></i>
        <div for="tmp" class="img_upload_txt">이미지를 업로드해주세요</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  methods:{

  }
}
</script>

<style scoped>
  .Intro-background{
    background-image:url('../../assets/tmp/5.jpg');
    background-repeat: no-repeat;
    background-size: 100% 630px; /*630=550(height)+80(padding-top)*/
  }

  .Intro{
    padding-top:80px;
    height:550px;
    background-color:rgba(27, 25, 13, 0.95);
  }

  .Intro_txt{
    padding-top:2%;
    text-align: center;
  }

  .main_txt{
    font-size:55px;
    color:white;
  }

  .sub_txt{
    font-size:35px;
    color: white;
  }

  .sub_txt .highLight{
    color:yellow;
  }

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