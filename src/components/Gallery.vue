<template>
    <section>
        <div id="gallery_border">
            <img class="images" v-for="myImage in myImages" :src="myImage" alt="img">
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
        width: 100%;
    }

    .images {
        max-height: 250px;
        min-height: 200px;
        max-width: 100%;
        margin: 5px;
        flex-grow: 1;
        object-fit: cover;
    }

</style>