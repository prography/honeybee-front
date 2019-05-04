<template>
  <div class="home" id='top'>
    <Intro @forUse="openSection"/>
    <div id="filter-hidden">
      <FilterSection id="filter-component" v-if="open" @forClose="closeSection" :img_obj="file"/>
    </div>
    <Gallery/>
  </div>
</template>

<script>
import Intro from '@/components/Intro.vue'
import FilterSection from '@/components/FilterSection.vue'
import Gallery from '@/components/Gallery.vue'


export default {
  name: 'home',
  components: {
    Intro,
    FilterSection,
    Gallery,
  },
  data(){
    return{
      file:'',
      open:false,
    }
  },
  methods:{
    openSection(files){
      this.open=true;
      this.file=files[0];
      document.getElementById("filter-hidden").scrollIntoView({behavior:'smooth'});
    },

    closeSection(){
      this.open=false;
      document.getElementById("top").scrollIntoView({behavior:'smooth'});
    }
  }
}
</script>
