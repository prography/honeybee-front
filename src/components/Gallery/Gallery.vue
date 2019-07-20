<template>
    <section>
        <!--<div class="units" v-for="myImage in myImages">-->
        <!--<img class="images" :src="myImage.src" alt="img">-->
        <!--<div class="info">{{myImage.name}}<span><img class="like" :src="download"/><img class="like" :src="like"/></span></div>-->
        <!--</div>-->

        <div class="column-wrap">

            <div class="column">
                <div class="element"
                     v-for="(myImage, index) in images">
                    <div v-if="index%4===0">
                        <img class="images" :src="myImage.src" alt="img" @click="clickImg(myImage)">
                        <div class="info">{{myImage.name}}<span><img class="like" :src="download"/><img class="like" :src="like"/></span></div>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="element"
                     v-for="(myImage, index) in images">
                    <div v-if="index%4===1">
                        <img class="images" :src="myImage.src" alt="img" @click="clickImg(myImage)">
                        <div class="info">{{myImage.name}}<span><img class="like" :src="download"/><img class="like" :src="like"/></span></div>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="element"
                     v-for="(myImage, index) in images">
                    <div v-if="index%4===2">
                        <img class="images" :src="myImage.src" alt="img" @click="clickImg(myImage)">
                        <div class="info">{{myImage.name}}<span><img class="like" :src="download"/><img class="like" :src="like"/></span></div>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="element"
                     v-for="(myImage, index) in images">
                    <div v-if="index%4===3">
                        <img class="images" :src="myImage.src" alt="img" @click="clickImg(myImage)">
                        <div class="info">{{myImage.name}}<span><img class="like" :src="download"/><img class="like" :src="like"/></span></div>
                    </div>
                </div>
            </div>

        </div>

        <div id="ImgModal" class="modal">
            <div id="modal-content">
                <span @click="closeImg" class="close">&times;</span>
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
        methods: {
            clickImg(myImage) {
                document.getElementById('ImgModal').style.display = "block";
                let img = document.createElement("img");
                let name = document.createElement("div");
                img.src = myImage.src;
                name.innerHTML = '<br>'+myImage.name+'<br>Like : '+myImage.like+'<br>Download : '+myImage.download;
                document.getElementById('modal-content').appendChild(img);
                img.style.width = "100%";
                document.getElementById('modal-content').appendChild(name);
            },
            closeImg() {
                document.getElementById('ImgModal').style.display = "none";
                let div = document.getElementById('modal-content');
                div.getElementsByTagName('img')[0].remove();
                div.getElementsByTagName('div')[0].remove();
            }
        }
    }

</script>

<style scoped>
    /*section {*/
    /*margin-top: 20px;*/
    /*column-count: 3;*/
    /*column-gap: 5px;*/
    /*}*/

    .element {
        margin-top: -28px;
        padding: 0 6px;
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
        width: calc(100% - 8px);
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
        margin: 30px auto;
        width: 972px;
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

    .modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }

    #modal-content {
        background-color: #fefefe;
        margin: 15% auto; /* 15% from the top and centered */
        padding: 20px;
        border: 1px solid #888;
        width: 400px; /* Could be more or less, depending on screen size */
    }

    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }
    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }


</style>
