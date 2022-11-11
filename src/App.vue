<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'
import { onMounted } from "vue"
const WhiteList = ['Login']
const init = () => {
  router.beforeEach((to:any,from,next)=>{
    const token = localStorage.getItem("token")
    if(token || WhiteList.includes(to.name)){
      next()
    }else{
      next('/login')
    }    
  })
}
onMounted(()=>{
  init()
})
</script>

<style lang="scss">
#app{
  font-size: 12px;
}
</style>
