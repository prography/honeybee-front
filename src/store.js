// 상태 관리 파일
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


export const store=new Vuex.Store({

  state:{
    signIn: false,
    filterSection:'close'
  },
  getters:{
    getSignIn(state){
      return state.signIn;
    },
    getFilterSection(state){
      return state.filterSeciton;
      //사용X
    }
  },
  mutations:{
    signOut(state, payload){
      state.signIn=false;
    },
    setFilterSection(state, payload){
      if(state.filterSection=='close'){
        state.filterSeciton='open';
      }else if(state.filterSection=='open'){
        state.filterSection='close';
      }
      //사용X
    }
  },
});