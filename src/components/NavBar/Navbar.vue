<template>
<div class="navbar" :class="[currentPath==='/' ? '' : 'notHome' ]">
  <div class="navbar-logo">
    <img id="logo_round" src="@/assets/logo_shape.png">
    <span id="brand_title">Honeybee</span>
  </div>
  <div class="navbar-buttons">
    <navbarButton v-for="item in items" :key="item.id" :buttonText="item.name" :page="item.path"/>
    <buttonSignIn v-if='signInOut'/>
    <buttonSignOut v-else/>
  </div>
  <div @click="open()" class="mobile-navbar">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </div>
</div>
</template>


<script>
import navbarButton from './NavbarButton.vue'
import buttonSignOut from './ButtonSignOut'
import buttonSignIn from './ButtonSignIn'

export default{
  name :'navbarSignIn',
  components:{
    navbarButton,
    buttonSignOut,
    buttonSignIn
  },
  data(){
    const items=[
      {name:'HOME', path:'/'},
      {name:'ABOUT', path:'/about'},
    ];
    return{
      items,
    }
  },
  computed:{
    signInOut(){
      return this.$store.getters.getSignIn; //현재 로그인 상태 가지고 온다
    },
    currentPath(){
      return this.$route.path;
    }
  },
  methods:{
    open(){
      document.querySelector(".navbar-buttons").classList.toggle('open');
      document.querySelector(".mobile-navbar").classList.toggle('open');
    },
  }

}
</script>

<style scoped>
.navbar{
  display:flex;
  justify-content: space-between;
  width:100%;
  height:70px;
  background-color: rgba(20,20,20,0.4);
  z-index:-1;
}

.navbar.notHome{
  background-color: #111111;
}

.navbar-logo,
.navbar-buttons{
  display:flex;
  align-items:center;
}

.navbar-logo{
  flex:0;
}

.navbar-buttons{
  flex:1;
  justify-content:flex-end;
}

img#logo_round{
  width:70px;
  height:70px;
  margin-left:20px;
}

#brand_title {
    color: yellow;
    font-size: 24px;
}

.mobile-navbar{
  display:none;
}

@media(max-width:480px){

  .navbar{
    position:absolute;
  }

  .navbar-buttons{
    flex-direction: column;
    position:fixed;
    padding-top:100px;
    padding-bottom:100vh;
    width:100%;
    background-color:#f9f9f8;
    transform:translate(100%);
    transition: transform 0.5s;
  }

  .navbar-buttons.open{
    transform:translate(0);
  }

  .mobile-navbar{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    margin-top:15px;
    padding:10px;
    width:30px;
    height:30px;
    transition: all 0.5s;
  }

  .mobile-navbar.open{
    transform:rotate(45deg);
  }

  .mobile-navbar.open .bar:nth-child(1){
    transform:rotate(90deg) translateX(40%);
  }

  .mobile-navbar.open .bar:nth-child(3){
    opacity:0;
  }

  .bar{
    width:100%;
    height:2px;
    background-color:#444020;
    transition:all 0.5s;
  }
}
</style>
