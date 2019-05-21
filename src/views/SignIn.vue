<template>
  <div class="sign_in">
    <div class="forNav"></div>
    <!--네브바 색상을 설정하기 위한 꼼수. 현재 네부바는 backgroud-color가 transparent로 설정 되어있습니다. 따라서 기존 네브바 설정을 유지하면서 네브바의 색상의 변경할 수 있도록 새로운 div를 만들어 사용하였습니다.-->
    <signIN/>
  </div>
</template>

<script>
import signIN from '@/components/Sign/SignIN.vue'

export default {
  name:'sign_in',
  components:{
    signIN,
  }
}
</script>

<style scoped>
.forNav{
  height:100px;
  background-color:#514C1E; /*47, 45, 22*/
}
</style>
