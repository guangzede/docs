import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import doc from '@/pages/doc/index'
import helloworld from '../components/helloworld'
import GeminiScrollbar from 'vue-gemini-scrollbar'
Vue.use(GeminiScrollbar)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/home',
      name: 'Index',
      component: Index
    },
    {
      path: '/helloworld',
      name: 'Helloworld',
      component: helloworld
    },
    {
      path: '/doc',
      name: 'doc',
      component: doc
    }
  ]
})
