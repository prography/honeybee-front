// 상태 관리 파일
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


export const store=new Vuex.Store({

  state:{
    signIn: true
  },
  getters:{
    getSignIn(state){
      return state.signIn;
    }
  },
  mutations:{
    signOut(state, payload){
      state.signIn=false;
    }
  },
});