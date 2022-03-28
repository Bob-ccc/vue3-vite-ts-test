<template>
  <div
    id="layout"
    class="common-height-100p common-flex common-flex-direction-column"
    :class="themeClass"
    :style="nowTheme"
  >
    <Head :theme='themes' @changeTheme='changeTheme' @changeColor="changeColor" />
    <div class="container common-flex common-flex-1">
      <TabList />
      <Container />
    </div>
  </div>
</template>

<script setup>
import Head from "./components/Head/index.vue";
import TabList from "./components/TabList.vue";
import Container from './components/Container/index.vue'
import themes  from '../styles/index.ts'
import { ref, onMounted } from 'vue'

// 主题模板 Object
const theme = ref(themes)


// 当前主题名称 String
const themeClass = ref(theme.value[0].key)


// 当前主题模板
const nowTheme = ref({})


// 更换主题
const changeTheme = item =>{
  themeClass.value = item.key
  nowTheme.value = {}
  // nowTheme.value = JSON.parse(JSON.stringify(theme.value[themeClass.value]))
}

// 自定义主题色
const changeColor = color =>{
  nowTheme.value = color
}


onMounted(() => {
})
</script>

<style lang="scss">
</style>