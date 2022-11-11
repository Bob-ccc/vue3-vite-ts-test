<template>
  <div id="head" class="flex justify-between">
    <div class="w-200px flex items-center">
      <div class="text-46px text-[blue] font-bold whitespace-nowrap" style="font-family:wawwwsxt;letter-spacing: -8px;">bobccc</div>
      <div class="h-[100%] w-80px">
        <Logo />
      </div>
    </div>
    <div v-for="item in colorObj" :key="item.key">
      {{ item.name }}:
      <input type="color" @input="changeColor($event, item.key)">
    </div>
    <div>
      <NowTime />
    </div>
    <div class="common-width-200">
      <Theme :theme="theme" @change="change" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Theme from './theme.vue'
import { getCurrentInstance, ref } from 'vue'
import colorConfig from './colorConfig'
const props = defineProps({
  theme: <any>Array
});

const emit = defineEmits(["changeTheme", "changeColor"]);


const colorObj: any = ref(colorConfig)

const change = (item: any) => {
  emit('changeTheme', item)
}

const changeColor = (event: any, colorType: string) => {
  const value = event.target.value
  colorObj.value.find((i: any) => i.key === colorType).value = value
  const data: any = {}
  colorObj.value.forEach((ele: any) => {
    if (ele.value) {
      data[ele.key] = ele.value
    }
  });
  emit('changeColor', data)
}

</script>

<style lang="scss">
#head {
  height: 60px;
  padding: 10px;
  box-sizing: border-box;
}
</style>