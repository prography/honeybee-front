import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SignUp from './views/SignUp.vue'
import SignIn from './views/SignIn.vue'
import UserPage from './views/UserPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/sign_up',
      name:'sing_up',
      component: SignUp
    },
    {
      path:'/sign_in',
      name:'sing_in',
      component: SignIn
    },
    {
      path:'/user_page',
      name:'user_page',
      component:UserPage
    }

  ]
})
