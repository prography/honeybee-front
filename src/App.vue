<template>
  <div id="app">
    <div class="navbar_section">
      <navbar/>
    </div>
    <router-view/>
  </div>
</template>

<script>

import navbar from './components/navbar.vue';

export default {
  name:'app',
  components:{
    navbar,
  }
}
</script>


<style lang="scss">

body{
  margin:0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.navbar_section{
  position:absolute;
  width:100%;
  z-index:1;
}
</style>
