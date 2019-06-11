import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Layout
import Layout from '@/layouts'

const routes = [{
    path: '/',
    redirect: '/login'
  },
  {
    path: "/login",
    component: () => import('views/Login'),
  },
  {
    path: '/Layout',
    component: Layout,
    children: [{
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
];

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  next();
})

export default router