// 상태 관리 파일
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store=new Vuex.Store({

  state:{
    signIn: false,
    userId: '',
    imgOBJ:[],
    filterResult:'',
  },
  getters:{
    getSignIn(state){
      return state.signIn;
      //로그인 상태 저장
    },
    getOBJ(state){
      return state.imgOBJ;
      //원본 이미지 객체를 저장
    },
    getfilterResult(state){
      return state.filterResult;
      //필터를 적용한 결과를 저장
    },
    getUserId(state) { // 사용자 아이디 반환
      return state.userId;
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
    setfilterResult(state, payload){
      state.filterResult=payload;
    },
  }
});