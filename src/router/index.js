import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Layout
import Layout from '@/layouts'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/ranking',
        component: () => import('views/Ranking')
      },
      {
        path: '/order',
        component: () => import('views/Order')
      },
      {
        path: '/stock',
        component: () => import('views/Stock')
      },
      {
        path: '/trend',
        component: () => import('views/Trend')
      }
    ]
  }
]

export default new Router({
  routes
})
