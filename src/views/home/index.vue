
<script setup lang="ts">
import { onMounted } from "vue"
import UseMap from './hooks/useMap'
import UseSex from './hooks/useSex'
import UseCount from './hooks/useCount'

const { option: mapOption, setMapData } = UseMap()
const { sexOption, setSexData } = UseSex()
const { countOption, setcountData } = UseCount()



const refresh = () =>{
  setSexData()
  setcountData()
  setMapData()
}

onMounted(() => {
  refresh()
})
</script>

<template>
  <div class="h-40px mb-10px flex justify-between items-center px-20px py-10px bg-white rounded-tl-14px">
    <div class="text-16px font-bold text-blue-300">
      人员数据统计
    </div>
    <div class="text-14px text-blue-300 select-none cursor-pointer">
      <span @click="refresh">刷新</span>
    </div>
  </div>
  <div class="w-[100%] h-400px flex mb-10px py-20px bg-white">
    <div class="w-[70%]">
      <EChart :options="countOption" />
    </div>
    <div class="w-[30%]">
      <EChart :options="sexOption" />
    </div>
  </div>
  <div class="w-[100%] h-500px py-20px bg-white">
    <EChart :options="mapOption" />
  </div>
</template>