import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'
import Report from '@/components/dashboard/Report'
import ActionItems from '@/components/dashboard/ActionItems'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/report',
      name: 'Report',
      component: Report
    },
    {
      path: '/action_items',
      name: 'ActionItems',
      component: ActionItems
    },
  ]
})
