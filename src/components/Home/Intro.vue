<template>
  <div class="intro-background">
    <div class="intro">
      <div class="intro_txt">
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
      <picture-input @forTransfer="data"/>
    </div>
  </div>
</template>

<script>
import pictureInput from './PictureInput.vue'

export default {
  name: 'Intro',
  components:{
    pictureInput,
  },
  methods:{
    data(files){
      this.$emit("forUse", files);
    }

  }
}
</script>

<style scoped>
  .intro-background{
    background-image:url('../../assets/img9.jpg');
    background-repeat: no-repeat;
    background-size: 100% 650px; /*630=550(height)+100(padding-top)*/
  }

  .intro{
    padding-top:100px;
    height:550px;
    background-color:rgba(47, 45, 22, 0.9);
  }

  .intro_txt{
    padding-top:4%;
    text-align: center;
  }

  .main_txt{
    font-size:50px;
    font-weight:100;
    color:white;
  }

  .sub_txt{
    margin-top:30px;
    font-size:24px;
    color: white;
  }

  .sub_txt .highLight{
    color:yellow;
  }

</style>