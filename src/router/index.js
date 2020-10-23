import Vue from 'vue'
import VueRouter from 'vue-router'
import { Message } from 'element-ui';
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/Main/Main.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home/Home.vue'),
      }
    ]
  },
  // {
  //   path: '/test',
  //   name: 'Test',
  //   component: () => import('@/views/Test.vue')
  // },
  // {
  //   path: '/test2',
  //   name: 'Test2',
  //   component: () => import('@/views/Test2.vue')
  // },
  // {
  //   path: '/test3',
  //   name: 'Test3',
  //   component: () => import('@/views/Test3.vue')
  // },
  // {
  //   path: '/test4',
  //   name: 'Test4',
  //   component: () => import('@/views/Test4.vue')
  // },
  // {
  //   path: '/test5',
  //   name: 'Test5',
  //   component: () => import('@/views/Test5.vue')
  // },
  // {
  //   path: '/test6',
  //   name: 'Test6',
  //   component: () => import('@/views/Test6.vue')
  // },
  // {
  //   path: '/test7',
  //   name: 'Test7',
  //   component: () => import('@/views/Test7.vue')
  // },
  // {
  //   path: '/test8',
  //   name: 'Test8',
  //   component: () => import('@/views/Test8.vue')
  // }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    // const tokenStr = window.sessionStorage.getItem('token')
    const tokenStr = 1

    if (!tokenStr) {
      Message.error('没有token')
      return next('/login')
    }
  }
  next()
})

export default router
