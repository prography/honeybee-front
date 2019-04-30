<template>
  <div id="app">
    <div class="navbar_section">
      <navbarSignin v-if="signIN"/>
      <navbar v-else/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import navbar from './components/Navbar.vue';
import navbarSignin from './components/NavbarSignIn.vue';
export default {
  name:'app',
  components:{
    navbar,
    navbarSignin,
  },
  data(){
    return{
      signIN:false
    }
  },
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
</style>
