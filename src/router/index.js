import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index'
import about from '@/pages/about/index'
import detail from '@/pages/detail/index'
import photo from '@/pages/photo/index'
import tool from '@/pages/tool/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/photo',
      name: 'photo',
      component: photo
    },
    {
      path: '/tool',
      name: 'tool',
      component: tool
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ]
})
