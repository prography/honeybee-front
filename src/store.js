// 상태 관리 파일
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


export const store=new Vuex.Store({

  state:{
    signIn: true,
    imgOBJ:[],
    filterResult:'',
  },
  getters:{
    getSignIn(state){
      return state.signIn;
    },
    getOBJ(state){
      return state.imgOBJ;
    },
    getfilterResult(state){
      return state.filterResult;
    }
  },
  mutations:{
    signOut(state, payload){
      state.signIn=false;
    },
    setOBJ(state, payload){
      state.imgOBJ=payload;
    },
    setfilterResult(state, payload){
      state.filterResult=payload;
    }
  }
});