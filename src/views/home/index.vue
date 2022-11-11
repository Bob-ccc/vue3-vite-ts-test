
<script setup lang="ts">
import { ref } from "vue"
const list = ref([1,2,3])
// setInterval(()=>{
//   list.value.push(list.value.length)
//   setTimeout(() => {
//     const dom = document.querySelector("#dom"+list.value.length)
//     dom?.scrollIntoView(false)
//   }, 200);
// },1000)
</script>

<template>
  <div class="h-500px w-400px bg-light-900 overflow-auto">
    <div class="h-100px bg-cyan-900 m-20px" :id="'dom'+(index+1)" v-for="(item,index) in list" :key="index">
    </div>
  </div>
 
  <!-- <div class="h-500px w-400px bg-light-900 overflow-auto">
    <div class="h-100px bg-cyan-900 m-20px" v-for="(item,index) in list" :key="index">
    </div>
  </div> -->
</template>