import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import { tabList } from './routerConfig'


// 在 Vue-router新版本中，需要使用createRouter来创建路由
export default createRouter({
  // 指定路由的模式,此处使用的是hash模式
  // history: createWebHashHistory(),
  history: createWebHistory('bobccc'),
  // 路由地址
  routes: [
    {
      path: '/login',
      name: 'Login',
      meta: { title: '登录', keepAlive: true },
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: tabList
    }
  ]
})