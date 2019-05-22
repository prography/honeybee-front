<template>
<div class="navbar">
  <div class="navbar-logo">
    <img src="@/assets/navbar-logo.png">
  </div>
  <div class="navbar-buttons">
    <navbarButton v-for="item in items" :key="item.id" :buttonText="item.name" :page="item.path"/>
    <router-link to='/user_Page' tag="button" class="link-btn">{{user_name}}</router-link>
    <router-link to='/' @click.native="signOut" tag="button" class="link-btn">SIGN OUT</router-link>
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

export default{
  name :'navbarSignIn',
  components:{
    navbarButton
  },
  data(){
    const items=[
      {name:'HOME', path:'/'},
      {name:'ABOUT', path:'/about'},
    ];
    return{
      items,
      user_name:"OWEN" //임시로 정해놓은 사용자 이름
    }
  },
  methods:{
    open(){
      document.querySelector(".navbar-buttons").classList.toggle('open');
      document.querySelector(".mobile-navbar").classList.toggle('open');
    },
    signOut(){
      this.$store.commit('signOut');
    }
  },

}
</script>

<style scoped>
.navbar{
  display:flex;
  justify-content: space-between;
  width:100%;
  height:100px;
  background-color: transparent;
  z-index:-1;
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

img{
  width:320px;
  height:100px;
  margin-left:30px;
}

.mobile-navbar{
  display:none;
}

.link-btn{
  margin-top:20px;
  margin-right:90px;
  padding:15px;
  border:none;
  background-color:transparent;
  font-size:18px;
  font-weight:lighter;
  color:silver;
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
    flex-direction: column;
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

  .link-btn{
    margin:0;
    padding:20px;
    width:100%;
    text-align: left;
    border-bottom: 1px solid #9fa5a9;
  }
}
</style>