<template>
  <div id="app">
    <div class="navbar_section" :class="{'not-on-image': overWindow}">
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
  data() {
    let overWindow = false;
    const windowHeight = window.innerHeight;
    return {
      overWindow,
      windowHeight
    }
  },
  mounted(){
    window.addEventListener('scroll', this.checkWhere);
  },
  computed:{
    signInOut(){
      return this.$store.getters.getSignIn;
    }
  },
  methods: {
    checkWhere() {
      this.overWindow = this.windowHeight < window.scrollY
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
  position:fixed;
  top:0;
  width:100%;
  z-index:1;
  transition: .35s ease-in-out;
}

.navbar_section.not-on-image{
  background-color: #2d2d2d;
}


.main_contents{
  min-height: calc(100vh - 200px);
}

.footer_section{
  height:200px; //Footer.vue에서 설정한 Footer의 height
}
</style>
