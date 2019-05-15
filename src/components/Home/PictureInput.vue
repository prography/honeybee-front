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
      <input type="file" @change="onChange">
    </div>
  </div>
</template>

<script>
import {eventbus} from '@/eventbus'

export default {
  name:'picture-input',
  data: function() {
  	return {
      isDragging : false,
    };
  },
  
  methods: {
  	onChange: function(e) {
      this.isDragging = false;
      let files = e.target.files || e.dataTransfer.files;

      if(files.length == 0) {
	      return;
      }
      
      if(!files[0].type.match(/image.*/)){
        window.alert("이미지가 아닙니다");
        return;
      }

      this.addImages(files);
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
        console.log(image_data);
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
  top:5%;
  left:26.5%;
  width:47.2937467157%;
  height:250px;
  border-radius:25px;
  background-color:#f9f9f8;
  box-shadow: 0px 5px 5px #DCDCDC;
  color:#DCDCDC;
}

#drop-zone{
  width:100%;
  height:240px;
  border-radius:25px;
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
    margin-top:20px;
    margin-bottom:3%;
    font-weight:lighter;
    font-size:120px;
  }

.img_upload_txt{
  font-size:30px;
} 
</style>