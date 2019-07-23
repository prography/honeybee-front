import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import SignUp from './views/SignUp.vue'
import SignIn from './views/SignIn.vue'
import UserPage from './views/UserPage.vue'
import UserInfoChange from './views/UserInfoChange.vue'
import store from './vuex/store.js'


Vue.use(Router);


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/sign_up',
      name: 'sign_up',
      component: SignUp,
      beforeEnter:function(to, from, next){
        if(!localStorage.getItem('signIN')){
          next();
        }else{
          next('/');
        }
      }
    },
    {
      path: '/sign_in',
      name: 'sign_in',
      component: SignIn,
      beforeEnter:function(to, from, next){
        if(!localStorage.getItem('signIN')){
          next();
        }else{
          next('/');
        }
      }
    },
    {
      path: '/user_page',
      name: 'user_page',
      component: UserPage,
      beforeEnter: function(to, from, next){
        if(localStorage.getItem("signIN")){
          next();
        }else if (!localStorage.getItem("signIN")){
          next('/sign_in')
        }
      }
    },
    {
      path: '/user_info_change',
      name: 'user_info_change',
      component: UserInfoChange,
      beforeEnter: function(to, from, next){
        if(localStorage.getItem("signIN")){
          next();
        }else {
          next('/sign_in')
        }
      }
    }
  ]
})
