<template>
  <section>
    <!--<div class="units" v-for="myImage in myImages">-->
    <!--<img class="images" :src="myImage.src" alt="img">-->
    <!--<div class="info">{{myImage.name}}<span><img class="like" :src="download"/><img class="like" :src="like"/></span></div>-->
    <!--</div>-->

    <div class="column-wrap">
      <div class="column">
        <div class="element"
             v-for="(myImage, index) in myImages">
          <div v-if="index%3===0">
            <img class="images" :src="myImage.src" alt="img">
            <div class="info">{{myImage.name}}<span><img class="like" :src="download"/><img class="like"
                                                                                            :src="like"/></span></div>
          </div>
        </div>

      </div>
      <div class="column">
        <div class="element"
             v-for="(myImage, index) in myImages">
          <div v-if="index%3===1">
            <img class="images" :src="myImage.src" alt="img">
            <div class="info">{{myImage.name}}<span><img class="like" :src="download"/><img class="like"
                                                                                            :src="like"/></span></div>
          </div>
        </div>

      </div>
      <div class="column">
        <div class="element"
             v-for="(myImage, index) in myImages">
          <div v-if="index%3===2">
            <img class="images" :src="myImage.src" alt="img">
            <div class="info">{{myImage.name}}<span><img class="like" :src="download"/><img class="like"
                                                                                            :src="like"/></span></div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
  import img1 from '@/assets/img1.jpg'
  import img2 from '@/assets/img2.jpg'
  import img3 from '@/assets/img3.jpg'
  import img4 from '@/assets/img4.jpg'
  import img5 from '@/assets/img5.jpg'
  import img6 from '@/assets/img6.jpg'
  import heart from '@/assets/heart.png'
  import heartFill from '@/assets/heart_fill.png'
  import dload from '@/assets/download.png'

  export default {
    name: "Gallery",
    data: function () {
      const like = heart;
      const likeFill = heartFill;
      const download = dload;
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
          name: 'kate',
          show: false
        },

      ]
      return {
        myImages, like, likeFill, download
      }
    },
    props: {
      msg: String
    },
    components: {},
    methods: {}
  }
</script>

<style scoped>
  /*section {*/
  /*margin-top: 20px;*/
  /*column-count: 3;*/
  /*column-gap: 5px;*/
  /*}*/

  .element {
    margin-top: -10px;
    padding: 0 12px;
  }

  .units:first-child {
    /*margin-top: -10px;*/
  }

  .images {
    display: block;
    width: 97% !important;
    height: auto !important;
    margin: 5px;
    object-fit: cover;
  }

  .info {
    background-image: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.6) 100%);
    color: white;
    font-size: 14px;
    padding: 10px 10px 10px 20px;
    margin: 5px;
    height: 40px;
    box-sizing: border-box;
    width: calc(100% - 10px);
    z-index: -10;
    transition: transform 0.25s ease-in-out, opacity 0.75s;
    opacity: 0;
  }

  .element:hover .info {
    transform: translateY(-45px);
    opacity: 1;
  }

  .like {
    float: right;
    width: 20px;
    height: 20px;
    margin: 0 5px;
  }

  /**********************************/
  section {
    margin: 30px 0;
  }

  .column-wrap {
    padding-top: 20px;
    display: flex;
    margin-bottom: -20px;
  }

  .column {
    flex: 1;
    /*border: 1px solid #e9e9e9;*/
  }


</style>
