<template>
  <div class="intro-background">
    <div class="intro">
      <div class="intro_txt">
        <div class="main_txt">
          <div>사진이 아름다운 필터를 입다</div>
        </div>
        <br/>
        <div class="sub_txt">
          <div class="sub_txt_first">
            <span>HoneyBee는</span>
            <span class="highLight"> Deep Learning Computer Vision</span>
            <span>을 이용하여</span>
          </div>
          <div class="sub_txt_second">
            사진을 아름답게 보정해 드립니다.
          </div>
        </div>
      </div>
      <picture-input @forTransfer="data"/>
      <!-- forTransfer 이벤트에서 하위 컴포넌트(PictureInput.vue)에서 받은 파일(인코딩 안함)  data 메서드가 처리 -->
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
      //받은 files를 forUse 이벤트(상위 컴포넌트:Home.vue)에 전달
    }

  }
}
</script>

<style scoped>
  .intro-background{
    background-image:url('../../assets/main_bg.jpg');
    background-size: cover;
  }

  .intro{
    box-sizing: border-box;
    padding-top: 100px;
    height:100vh;
    background-color: rgba(0,0,0,0.5);
  }

  .intro_txt{
    padding-top:4%;
    text-align: center;
  }

  .main_txt{
    font-size:45px;
    font-weight:400;
    color:yellow;
  }

  .sub_txt{
    margin-top:30px;
    font-size:18px;
    color: #f2f2f2;
  }

  .sub_txt .highLight{
    color:yellow;
    font-weight: 400;
  }

</style>
