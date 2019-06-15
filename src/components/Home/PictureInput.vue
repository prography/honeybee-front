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

export default {
  name:'picture-input',
  data: function() {
  	return {
      isDragging : false,
      files1:'',
    };
  },

  methods: {
  	onChange: function(e) {
      this.isDragging = false;
      let files=this.files1=this.$refs.files.files;
      console.log(files[0]);
      if(files.length == 0) {
	      return;
      }

      if(!files[0].type.match(/image.*/)){
        window.alert("이미지가 아닙니다");
        return;
      }

      let formData=new FormData();
      for( var i = 0; i < this.files1.length; i++ ){
        let file = this.files1[i];
        formData.append('pic_address', file);
      }
      eventbus.$emit('image',formData);
      axios.post ('http://127.0.0.1:8000/tmppicture/',
        formData,
        {
           headers: {
               'Content-Type': 'multipart/form-data'
           }
        });

      this.addImages(files);
      //이미지 인코딩하는 부분
      this.$emit("forTransfer", files);
      //컴포넌트간 데이터 통신(이벤트 버스X, 자식->부모). 단순히 파일이 업로드 되었다는 것을 알려주기 위하여 파일을 상위 컴포넌트(Intro.vue)에 전달. forTransger 이벤트에 인코딩 전 파일을 전달.
      e.target.value = '';
    },

    addImages: function(files) {
      let file=files[0];
      let fileReader=new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = function(e) {
        let image_data=e.target.result;
        eventbus.$emit('transfer-file', image_data);
        //이벤트 버스를 이용한 데이터 전달. 인코딩된 이미지 전달.
      }
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
