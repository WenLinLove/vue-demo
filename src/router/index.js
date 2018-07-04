import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hw from '../components/haowenwen'
import In from '../components/input'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hw',
      name: 'HelloWorld',
      component: Hw
    }
  ]
})
