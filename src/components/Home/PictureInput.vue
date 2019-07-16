<template>
  <div class="img_upload">
    <div
      id="drop-zone"
      v-bind:class="[isDragging?'drag-over':'']"
      v-on:dragover="isDragging=true"
      v-on:dragenter="isDragging=true"
      v-on:dragleave="isDragging=false"
      >
      <div class="text-wrap">
        <i class="far fa-image img_upload_icon"></i>
        <div for="tmp" class="img_upload_txt">이미지를 업로드해주세요</div>
      </div>
      <input type="file" id="files" ref="files" @change="onChange">
    </div>
  </div>
</template>

<script>
import {eventbus} from '@/eventbus'
import axios from 'axios'
import store from '@/vuex/store.js'

export default {
  name:'picture-input',
  data: function() {
  	return {
      isDragging : false,
      imgObjs:'',
      orientation:'',
    };
  },

  methods: {
  	onChange: function(e) {
      this.isDragging = false;
      this.imgObjs=e.target.files;

      if(this.imgObjs.length == 0) {
	      return;
      }

      if(!this.imgObjs[0].type.match(/image.*/)){
        window.alert("이미지가 아닙니다");
        return;
      }

      this.addImages(this.imgObjs);

      store.commit('setOBJ', Array.from(this.imgObjs));
      //vuex이용하여 사진을 저장. Array.from()=>유사배열을 배열로 전환(아직 공부 더 해야함), 데이터 전달 문제 해겨을 위하여 사용

      this.$emit("forTransfer", this.imgObjs);
      //컴포넌트간 데이터 통신(이벤트 버스X, 자식->부모). 단순히 파일이 업로드 되었다는 것을 알려주기 위하여 파일을 상위 컴포넌트(Intro.vue)에 전달. forTransger 이벤트에 인코딩 전 파일을 전달.
      
      e.target.value = '';
    },

    addImages: function(files) {
      loadImage(
        files[0],
        function(img){
          eventbus.$emit('original', img.toDataURL());
        },
        {
          maxWidth:300,
          maxHeight:300,
          orientation:true,
        }
      );
    },
  }
}
</script>

<style scoped>
.img_upload{
  text-align: center;
  position: relative;
  top:50px;
  margin: 0 auto;
  width:400px;
  height:150px;
  border-radius:20px;
  background-color:#f9f9f8;
  box-shadow: 0px 3px 3px #DCDCDC;
  color:#444020;
}

#drop-zone{
  width:100%;
  height:150px;
  border-radius:20px;
}

.drag-over {
  background-color:#DCDCDC;
  border:2px dashed #DCDCDC;
  color:silver;
}

.text-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#drop-zone input {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.img_upload_icon{
    margin-bottom:3%;
    font-weight:lighter;
    font-size:60px;
  }

.img_upload_txt{
  font-size:15px;
}
</style>
