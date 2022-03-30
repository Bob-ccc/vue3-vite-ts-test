<template>
  <div id="head" class="common-flex">
    <div class="common-width-200">
      <Logo />
    </div>
    <div class="common-width-200">
      <div 
      v-for="item in theme" 
      :key="item.key"
      :class="{'common-font-size-24' : themeActive === item.key}"
      @click="change(item)">
        {{ item.name }}
      </div>
    </div>
    <div v-for="item in colorObj" :key="item.key">
      {{ item.name }}:
      <input type="color" @input="changeColor($event,item.key)">
    </div>
    <div>
      <NowTime />
    </div>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, ref, defineEmits, onMounted } from 'vue'
import colorConfig from './colorConfig'
const props = defineProps({
  theme: Array,
});

const emit = defineEmits(["changeTheme","changeColor"]);

const themeActive:any = ref(null)

const colorObj:any = ref(colorConfig) 

const change = (item:any) => {
  themeActive.value = item.key
  emit('changeTheme',item)
}

const changeColor = (event:any,colorType:string) =>{  
  const value = event.target.value
  colorObj.value.find((i:any) => i.key === colorType).value = value
  const data:any = {}
  colorObj.value.forEach((ele:any) => {
    if(ele.value){
      data[ele.key] = ele.value
    }
  });
  emit('changeColor', data)
}

onMounted(()=>{
  const item:any = props.theme && props.theme.find( (i:any) => i.key === 'normal')
  themeActive.value = item.key
  change(item)
})

</script>

<style lang="scss">
#head {
  height: 60px;
  padding: 10px;
  box-sizing: border-box;
}
</style>