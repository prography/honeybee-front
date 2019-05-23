import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import SignUp from './views/SignUp.vue'
import SignIn from './views/SignIn.vue'
import UserPage from './views/UserPage.vue'
import UserInfoChange from './views/UserInfoChange.vue'

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
      name: 'sing_up',
      component: SignUp
    },
    {
      path: '/sign_in',
      name: 'sing_in',
      component: SignIn
    },
    {
      path: '/user_page',
      name: 'user_page',
      component: UserPage
    },
    {
      path: '/user_info_change',
      name: 'user_inf_change',
      component: UserInfoChange
    }
  ]
})
