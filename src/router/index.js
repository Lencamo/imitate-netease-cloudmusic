import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/layout',
    component: () => import('@/views/layout'),
    redirect: '/layout/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home'),
        meta: {
          title: '首页'
        }
      },
      {
        path: 'search',
        component: () => import('@/views/search'),
        meta: {
          title: '搜索'
        }
      }
    ]
  },
  {
    path: '/play',
    component: () => import('@/views/play/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
