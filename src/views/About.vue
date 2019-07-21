<template>
  <div class="about">
    <div class="explain section">
      <div class="title">About Service</div>
      <div class="explain-main">
        당신의 사진을 유명 예술가의 그림처럼 바꿔드립니다. 딥러닝 Computer Vision을 통해 유명 화가 7명의 스타일로 필터를 적용하여
        당신의 추억을 아름답게 그려드립니다. 또한 이러한 사진을 Honeybee 갤러리를 통해서 여러 사람들과 공유하세요.
      </div>
      <div class="imgSection">
        <img class="example" src="../assets/set.png"/>
      </div>
    </div>
    <div class="howTo section">
      <div class="title">How to Use</div>
      <div clas="howtoImgs">
        <div class="howto">
          <div>
            <div>1. 필터를 적용하고 싶은 사진을 클릭하거나 드래그앤 드랍을 </div>
            <div>이용하여 이미지를 업로드합니다.</div>
          </div>
          <img class="howtoImg" src="../assets/howto1.png">
        </div>
        <div class="howto">
          <div>
            2. 이미지에 적용하고 싶은 필터를 선택합니다.
          </div>
          <img class="howtoImg" src="../assets/howto2.png">
        </div>
        <div class="howto">
          <div>
            3. 이미지 결과가 나오면 해당 결과를 버튼을 통하여 공유하거나 다운로드 합니다. 공유는 로그인을 해야만사용할 수 있습니다.
          </div>
          <img class="howtoImg" src="../assets/howto3.png">
        </div>   
      </div>
    </div>
    <div class="members serction">
      <div class="title">Members</div>
      <div class="parts">
        <div class="front part">
          <div class="members-part">Web Frontend</div>
          <div class="member">
            <img class="vue" src="../assets/vue.png">
            <div class="members-front">오원종 홍유석 신성환</div>
          </div> 
        </div>
        <div class="back part">
          <div class="members-part">Server</div>
          <div class="member">
            <img class="django" src="../assets/django.png">
            <div class="members-back">박예원 김성일</div>
          </div>
        </div>
        <div class="deep part">
          <div class="members-part">Deep Learning</div>
          <div class="member">
            <img class="dl" src="../assets/deeplearning.png">
            <div class="members-deep">장원범</div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="github section">
      <div class="title">GitHub</div>
      <div class="front-github">

      </div>
      <div class="back-github">

      </div>
      <div class="deep-github">

      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name:'about'
}
</script>

<style scoped>
.about{
  margin-top:80px;
  margin-bottom: 50px;
  margin-left:22%;
  margin-right:22%;
  font-size:19px;
  font-weight: bold;
}

.section{
  margin-top: 30px;
  margin-bottom:30px;
}

.title{
  height:60px;
  font-size:50px;
  font-weight: bold
}

.imgSection{
  text-align: center;
  margin-top:10px;
  margin-bottom:10px;
}

.explain-main{
  margin-top:10px;
  margin-bottom:10px;
}

.example{
  width:800px;
  height:400px;
}


.howto{
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom:30px;
}

.howtoImg{
  display: block;
  width: 500px;
  height:250px;
}

.parts{
  display: flex;
  justify-content: space-between;
}

.part{
  margin-top: 20px;
  margin-bottom:20px;
  padding:10px;
  width:250px;
  border:1px solid silver;
  border-radius: 10px;
}

.members-part{
  font-size:30px;
}

.member{
  display: flex;
}

.vue{
  width:40px;
  height: 40px;
  margin-right:10px;
}
.django{
  width:80px;
  height: 40px;
  margin-right:10px;
}
.dl{
  height:40px;
  margin-right:10px;
}

</style>

