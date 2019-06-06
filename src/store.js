// 상태 관리 파일
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


export const store=new Vuex.Store({

  state:{
    signIn: true,
    imgOBJ:[{}],
  },
  getters:{
    getSignIn(state){
      return state.signIn;
    },
    getOBJ(state){
      return state.imgOBJ;
    }
  },
  mutations:{
    signOut(state, payload){
      state.signIn=false;
    },
    setOBJ(state, payload){
      state.imgOBJ=payload;
    }
  }
});