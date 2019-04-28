<template>
  <div class="home">
    <Intro @forUse="openSection"/>
    <FilterSection v-if="open" @forClose="closeSection" :img_file="file"/>
    <Gallery/>
  </div>
</template>

<script>
// @ is an alias to /src
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
    },
    closeSection(){
      this.open=false;
    }
  }
}
</script>
