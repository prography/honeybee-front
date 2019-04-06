<template>
<div class="navbar">
  <div class="navbar-logo">
    <img src="../assets/navbar-logo.png">
  </div>
  <div class="navbar-buttons">
    <navbarButton v-for="item in items" :key="item.id" :buttonText="item.name"/>
  </div>
  <div @click="open()" class="mobile-navbar">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </div>
</div>
</template>


<script>
import navbarButton from './navbarButton.vue'

export default{
  name :'navbar',
  components:{
    navbarButton
  },
  methods:{
    open(){
      document.querySelector(".navbar-buttons").classList.toggle('open');
      document.querySelector(".mobile-navbar").classList.toggle('open');
    }
  },
  data(){
    const items=[
      {name:'CONTACT US'},
      {name:'ABOUT'},
      {name:'SIGN UP'},
      {name:'SIGN IN'},
    ];
    return{
      items
    }
  }
}
</script>

<style scoped>
  .navbar{
    display:flex;
    justify-content: space-between;
    width:100%;
    height:80px;
    background-color: #f9f9f8;
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
    width:160px;
    height:50px;
    margin:10px;
  }

  .mobile-navbar{
    display:none;
  }

  @media(max-width:480px){

    .navbar{
      position:fixed;
    }

    .navbar-buttons{
      flex-direction: column;
      position:fixed;
      top:80px;
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
  }
</style>