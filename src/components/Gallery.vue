<template>
    <div id="gallery_border">
        <img class="images" v-for="myImage in myImages" :src="myImage.imgSrc">
    </div>
</template>

<script>

    export default {
        name: "Gallery",
        data: function () {
            const myImages = [
                {
                    imgSrc: require('../img/img1.jpg')
                },
                {
                    imgSrc: require('../img/img2.jpg')
                },
                {
                    imgSrc: require('../img/img3.jpg')
                }
            ];
            return {
                myImages
            }
        },
        props: {
            msg: String
        },
        components: {
            Image
        }
    }
</script>

<style scoped>
    #gallery_border {
        border: 1px solid red;
        padding: 5px;
        display: flex;
        flex-wrap: wrap;
    }

    .images {
        border: 1px solid blue;
        height: 200px;
        margin: 5px;
        flex-grow: 1;
    }
</style>