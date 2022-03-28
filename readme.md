# 构建过程

## 创建vite项目
  npm i -g create-vite-app
  create-vite-app 项目名

## 引入typescript
  npm i -D typescript
### 初始化tsconfig.json
  npx tsc --init

### 将main.js修改为main.ts,同时将index.html里面的引用也修改为main.ts

### 修改配置
  main.ts会发现import App from App.vue会报错:Cannot find module './App.vue' or its corresponding type declarations.,这是因为现在ts还没有识别vue文件，需要进行下面的配置:
  在项目根目录添加shim.d.ts文件
  内容为：
  declare module "*.vue" {
    import { Component } from "vue";
    const component: Component;
    export default component;
  }

## 安装vue-router
  npm i vue-router

### 新建router目录，添加index.ts文件
  import {createRouter, createWebHashHistory} from 'vue-router'

  // 在 Vue-router新版本中，需要使用createRouter来创建路由
  export default createRouter({
    // 指定路由的模式,此处使用的是hash模式
    history: createWebHashHistory(),
    // 路由地址
    routes: []
  })

## 安装vuex
  npm i vuex

## main.ts中引入vuex和vue-router
  import router from './router/index'
  import vuex from './store/index'