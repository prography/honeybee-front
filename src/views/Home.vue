<template>
  <div class="home" id='top'>
    <Intro @forUse="openSection"/>
    <!-- forUse 이벤트에서 하위 컴포넌트(Intro.vue)에서 받은 파일을 openSection 메서드에 전달 -->
    <div id="filter-hidden">
      <FilterSection id="filter-component" v-if="open" @forClose="closeSection"/>
    </div>
    <Gallery v-bind:images = "myImages"/>
  </div>
</template>

<script>

import Intro from '@/components/Home/Intro.vue'
import FilterSection from '@/components/Home/FilterSection.vue'
import Gallery from '@/components/Gallery/Gallery.vue'

import img1 from '@/assets/img1.jpg'
import img2 from '@/assets/img2.jpg'
import img3 from '@/assets/img3.jpg'
import img4 from '@/assets/img4.jpg'
import img5 from '@/assets/img5.jpg'
import img6 from '@/assets/img6.jpg'
import img7 from '@/assets/img7.jpg'
import img8 from '@/assets/img8.jpg'
import img9 from '@/assets/img9.jpg'
import img10 from '@/assets/img10.jpg'


export default {
  name: 'home',
  data() {
    const myImages = [
      {
        src: img1,
        name: 'John',
        show: false
      },
      {
        src: img2,
        name: 'kevin',
        show: false
      },
      {
        src: img3,
        name: 'abigail',
        show: false
      },
      {
        src: img4,
        name: 'sarah',
        show: false
      },
      {
        src: img5,
        name: 'ruth',
        show: false
      },
      {
        src: img6,
        name: 'peter',
        show: false
      },
      {
        src: img7,
        name: 'micheal',
        show: false
      },
      {
        src: img8,
        name: 'owen',
        show: false
      },
      {
        src: img9,
        name: 'james',
        show: false
      },
      {
        src: img10,
        name: 'maria',
        show: false
      },
    ];
    return {
      myImages,
      file:'',
      open:false,
    }
  },
  components: {
    Intro,
    FilterSection,
    Gallery,
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
  }
}
</script>


<style scoped></style>
