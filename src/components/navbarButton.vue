<template>
  <button>{{buttonText}}</button>
</template>

<script>
  export default {
    name:'navbarButton',
    props:['buttonText', 'linkTo'],
    methods:{

    },
  }
</script>

<style scoped>
  button{
    margin:10px;
    padding:15px;
    border:none;
    background-color:transparent;
    font-size:14px;
    font-weight:700;
    color:#444020;
  }

  @media(max-width:900px){
    button{
      margin:0;
      padding:20px;
      width:100%;
      text-align: left;
      border-bottom: 1px solid #9fa5a9;
    }
  }

</style>