<template>
    <section>
        <div id="gallery_border" v-for="myImage in myImages">
            <img class="images" :src="myImage" alt="img">
            <div class="info"></div>
        </div>
    </section>
</template>

<script>
    import img1 from '@/img/img1.jpg'
    import img2 from '@/img/img2.jpg'
    import img3 from '@/img/img3.jpg'
    import img4 from '@/img/img4.jpg'
    import img5 from '@/img/img5.jpg'
    import img6 from '@/img/img6.jpg'

    export default {
        name: "Gallery",
        data: function () {
            const myImages = [ img1,img2,img3,img4,img5,img6 ];
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
    section {
        display: flex;
        flex-wrap: wrap;
    }

    #gallery_border {
        border: 1px solid red;
        padding: 5px;
        flex-grow: 1;
        margin: 3px;

    }

    .images {
        max-height: 250px;
        min-height: 200px;
        max-width: 100%;
        flex-grow: 1;
        margin: 5px;
        object-fit: cover;
    }

    .info {
        position: relative;
        width: 100%;
        height: 45px;
        background-color: lightgray;
        bottom: 53px;
        opacity: 0.3;
    }

</style>