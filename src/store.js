// 상태 관리 파일
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store=new Vuex.Store({

  state:{
    signIn: false,
    userId: '',
    imgOBJ:[],
    resultUrl:'',
  },
  getters:{
    getSignIn(state){
      return state.signIn;
      //로그인 상태 저장
    },
    getUserId(state) { // 사용자 아이디 반환
      return state.userId;
    },
    getOBJ(state){
      return state.imgOBJ;
      //원본 이미지 객체를 저장
    },
    getResultUrl(state){
      return state.imgExifOrientation;
    }
  },
  mutations:{
    signIn(state, userId) { // 로그인을 통해 회원 정보 전송
      state.signIn = true;
      state.userId = userId;
    },
    signOut(state, payload){
      state.signIn=false;
    },
    setOBJ(state, payload){
      state.imgOBJ=payload;
    },
    setResultUrl(state, payload){
      state.imgExifOrientation=payload;
    }
  }
});