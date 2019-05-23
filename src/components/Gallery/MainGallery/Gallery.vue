<template>
  <section>
    <div class="units" v-for="myImage in images">
      <img class="images" :src="myImage.src" alt="img">
      <div class="info">{{myImage.name}}<span><img class="like" :src="download"/><img class="like" :src="like"/></span>
      </div>
    </div>
  </section>
</template>

<script>
  import heart from '@/assets/heart.png'
  import heartFill from '@/assets/heart_fill.png'
  import dload from '@/assets/download.png'

  export default {
    name: "Gallery",
    props: ['images'],
    data: function () {
      const like = heart;
      const likeFill = heartFill;
      const download = dload;
      return {
        like, likeFill, download
      }
    },
    components: {},
    methods: {}
  }
</script>

<style scoped>
  section {
    margin-top: 20px;
    column-count: 3;
    column-gap: 5px;
  }

  .units {
    margin-top: -30px;
  }

  .units:first-child {
    margin-top: -5px;
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
    padding: 10px;
    padding-left: 20px;
    margin: 5px;
    height: 20px;
    width: calc(97% - 30px);
    z-index: -10;
    transition: 0.25s ease-in-out;
    opacity: 0;
  }

  .units:hover .info {
    transform: translateY(-45px);
    opacity: 1;
  }

  .units:hover {
    /*transform: translateY(50px);*/
    /*margin-top: 70px;*/
  }

  .like {
    float: right;
    width: 20px;
    height: 20px;
    margin: 0 5px;
  }
</style>
