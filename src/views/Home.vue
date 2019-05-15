<template>
  <div class="home" id='top'>
    <Intro @forUse="openSection"/>
    <!-- forUse 이벤트에서 하위 컴포넌트(Intro.vue)에서 받은 파일을 openSection 메서드에 전달 -->
    <div id="filter-hidden">
      <FilterSection id="filter-component" v-if="open" @forClose="closeSection"/>
    </div>
    <Gallery/>
  </div>
</template>

<script>

import Intro from '@/components/Home/Intro.vue'
import FilterSection from '@/components/Home/Filter/FilterSection.vue'
import Gallery from '@/components/Gallery/MainGallery/Gallery.vue'


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
      //files가 전달된 것을 통하여 이미지가 정상적으로 업로드 되었고 필터를 열도록 함. 필터가 열리면서 자동으로 필터가 있는 부분으로 자동 스크롤 됨.
      this.open=true;
      this.file=files[0];
      document.getElementById("filter-hidden").scrollIntoView({behavior:'smooth'});
    },

    closeSection(){
      this.open=false;
      document.getElementById("top").scrollIntoView({behavior:'smooth'});
    }
  },
}
</script>
