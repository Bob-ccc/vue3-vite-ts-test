import {createRouter, createWebHashHistory} from 'vue-router'

// 在 Vue-router新版本中，需要使用createRouter来创建路由
export default createRouter({
  // 指定路由的模式,此处使用的是hash模式
  history: createWebHashHistory(),
  // 路由地址
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: { title:'首页', keepAlive: true },
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/list',
      name: 'List',
      meta: { title:'列表', keepAlive: true },
      component: () => import('@/views/list/index.vue')
    },
    {
      path: '/workflow',
      name: 'Workflow',
      meta: { title:'工作流', keepAlive: true },
      component: () => import('@/views/workflow/index.vue')
    },
    {
      path: '/indexedDB',
      name: 'IndexedDB',
      meta: { title:'浏览器数据库IndexedDB', keepAlive: true },
      component: () => import('@/views/indexedDB/index.vue')
    }
  ]
})