<template>
  <div id="app">
    <div class="navbar_section">
      <navbarSignin v-if="signInOut"/>
      <navbar v-else/>
    </div>
    <div class="main_contents">
      <router-view/>
    </div>
    <div class="footer_section">
      <foot/>
    </div>
  </div>
</template>

<script>
import navbar from './components/NavBar/Navbar.vue';
import navbarSignin from './components/NavBar/NavbarSignIn.vue';
import foot from './components/Footer/Footer.vue';

export default {
  name:'app',
  components:{
    navbar,
    navbarSignin,
    foot
  },
  computed:{
    signInOut(){
      return this.$store.getters.getSignIn;
    }
  }
}
</script>


<style lang="scss">

body{
  margin:0;
  font-family: 'Noto Sans KR', sans-serif;
}
#app {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}

.navbar_section{
  position:absolute;
  top:0;
  width:100%;
  z-index:1;
}

.main_contents{
  min-height: calc(100vh - 200px);
}

.footer_section{
  height:200px; //Footer.vue에서 설정한 Footer의 height
}
</style>
