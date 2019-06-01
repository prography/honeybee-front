<template>
  <div class='buttons'>
    <router-link to='/user_Page' tag="button" class="link-btn">{{user_name}}</router-link>
    <router-link to='/' @click.native="signOut" tag="button" class="link-btn">SIGN OUT</router-link>
  </div>
</template>

<script>
export default {
  name:'buttonSignIn',
  data(){
    return{
      user_name:"OWEN"//임시로 정해놓은 사용자 이름
    }
  },
  methods:{
    signOut(){
      this.$store.commit('signOut');//현재 로그인 상태 변경 로그인->로그 아웃
    }
  }
}
</script>


<style scoped>
.link-btn{
  margin-right:50px;
  padding:15px;
  border:none;
  background-color:transparent;
  font-size:16px;
  font-weight: 400;
  color:yellow;
}

@media(max-width:480px){
  .link-btn{
    margin:0;
    padding:20px;
    width:100%;
    text-align: left;
    border-bottom: 1px solid #9fa5a9;
  }
}
</style>
