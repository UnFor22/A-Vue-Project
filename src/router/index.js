import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)
import home from '../components/home'

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about/:id',
      name: 'about',
      component: ()=> import('../components/about')
    },
    {
      path: '/login',
      name: 'login',
      component: ()=> import('../components/login')
    }
 
  ]
})

export default router



