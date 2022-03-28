<template>
  <div>
    <div v-for="(item,index) in 20" :key="index" @click="click(item)">
      {{item}}
    </div>
  </div>
</template>

<script setup>

import {add} from '@/utils/websql';
import { ref, reactive, onMounted } from 'vue'
// const list = reactive([
//   {contont:'1111', time: '03-15 10:00'},
//   {contont:'2222', time: '03-15 10:01'},
//   {contont:'2222', time: '03-15 10:02'},
//   {contont:'2222', time: '03-15 10:03'}
// ])
const click = item => {
  console.log(item);
  const contont = item + new Date()
  const creatTime = new Date()+''
  add('Logtime',{contont,creatTime})
}

</script>

<style lang="scss" scoped>
</style>