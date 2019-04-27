<template>
    <section>
        <div :key="myImage" v-for="myImage in myImages">
            <img class="images" :src="myImage.src" alt="img" @mouseover="mouseOver(myImage)">
            <div class="info">{{myImage.name}}</div>
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
    import img7 from '@/assets/img7.jpg'
    import img8 from '@/assets/img8.jpg'
    import img9 from '@/assets/img9.jpg'

    export default {
        name: "Gallery",
        data: function () {
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
                }
            ]
            return {
                myImages
            }
        },
        props: {
            msg: String
        },
        components: {
            Image
        },
        methods: {
            mouseOver: function (obj) {
                console.log(obj.parent());
                // 여기서 hover 했을 때 show 값을 true로 바꾸고 회색 박스(.info)
            }
        }
    }
</script>

<style scoped>
    section {
        margin-top: 100px;
        column-count: 3;
        column-gap: 15px;
    }

    .images {
        border: 1px solid red;
        width: 97% !important;
        height: auto !important;
        margin: 5px;
        object-fit: cover;
    }

    .info {
        margin: 0 auto;
        position: relative;
        width: 98%;
        height: 45px;
        background-color: lightgray;
        opacity: 0.3;
    }
</style>