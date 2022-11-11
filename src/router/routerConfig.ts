export const tabList = [
  {
    path: "home",
    name: "Home",
    meta: { title: "首页", keepAlive: true },
    component: () => import("@/views/home/index.vue"),
  },
  {
    path: "user",
    name: "User",
    meta: { title: "用户列表", keepAlive: true },
    component: () => import("@/views/user/index.vue"),
  },
  {
    path: "antDesign",
    name: "AntDesign",
    meta: { title: "antDesign", keepAlive: true },
    component: () => import("@/views/antDesign/index.vue"),
  },
  {
    path: "list",
    name: "List",
    meta: { title: "列表", keepAlive: true },
    component: () => import("@/views/list/index.vue"),
  },
  {
    path: "workflow",
    name: "Workflow",
    meta: { title: "工作流", keepAlive: true },
    component: () => import("@/views/workflow/index.vue"),
  },
  {
    path: "indexedDB",
    name: "IndexedDB",
    meta: { title: "浏览器数据库IndexedDB", keepAlive: true },
    component: () => import("@/views/indexedDB/index.vue"),
  }
]
