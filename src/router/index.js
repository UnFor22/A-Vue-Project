import Router from 'vue-router'
import Vue from 'vue'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)
import home from '../components/home'

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/about/:id',
      name: 'about',
      component: ()=> import('../components/about'),
      meta: {
        title: '详情页'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: ()=> import('../components/login'),
      meta: {
        title: '登录页'
      }
    }
 
  ]
})
router.beforeEach((to,from,next)=>{
  Nprogress.start()
  if(to.mata&&to.mata.title){
    document.title = to.meta.title
  }
  next()
})
router.afterEach((to,from) => {
  Nprogress.done()
})
export default router



