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
      <picture-input/>
    </div>
  </div>
</template>

<script>
import pictureInput from './pictureInput.vue'

export default {
  name: 'Intro',
  components:{
    pictureInput,
  },
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

</style>