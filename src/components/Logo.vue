<template>
  <div class="logo" @click="beclick">
    <img class="logo-up" :style="'transform:rotate('+rotate+'deg);transition-duration:'+time+'s;'"  src="../assets/svg/logoup.svg" alt="">
    <img class="logo-bg" :style="'transform:rotate('+rotate * 2+'deg);transition-duration:'+time+'s;'"  src="../assets/svg/logobg.svg" alt="">
  </div>
</template>

<script lang="ts" setup >
import { ref, onMounted } from 'vue'
const clicked = ref(false)
const rotate = ref(0)
const timer = ref(0)
const time = ref(5)
const init = () =>{
  rotating(10)
}
const beclick = () => {
  if(clicked.value) return
  clearInterval(timer.value)
  clicked.value = true
  time.value = .1
  resetRotate()
  setTimeout(() => {
    speedUp()
  }, 200);
  setTimeout(() => {
    cancelclick()
  }, 1500);
}
// 取消点击
const cancelclick = () => {
  init()
  clicked.value = false
}

// 加速
const speedUp = () =>{
  rotating(1)
}

// 复位
const resetRotate = () => {
  // 清除定时器
  clearInterval(timer.value)
  // 获取旋转满圈后的角度
  rotate.value = rotate.value - rotate.value%360
}

// 旋转(times:一圈所需时间)
const rotating = (times:number,step:number = 40) => {
  // 设置每帧动画时间
  time.value = times/step
  // 定时器实现连续动画
  if(timer.value) clearInterval(timer.value)
  timer.value = setInterval(()=>{
    rotate.value = rotate.value + 9   // 旋转角度增加
  }, times*1000/step )
}

onMounted(()=>{
  init()
})
</script>

<style lang="scss" scoped>
.logo{
  display: inline-block;
  position: relative;
  height: 100%;
  width: 100%;
  .logo-up{
    position: absolute;
    width: 66%;
    height: 66%;
    top: 17%;
    left: 17%;
    transition-timing-function: linear;
    transition-property: transform;
  }
  
  .logo-bg{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    transition-timing-function: linear;
    transition-property: transform;
    
  }
}
</style>