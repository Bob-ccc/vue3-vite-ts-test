<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from "vue"
import * as echarts from "echarts";

const canvas = ref<null | HTMLElement>(null)

interface Props {
  needResize?: boolean
  options: any
}

const props = withDefaults(
  defineProps<Props>(), {
  needResize: true,
  options: {}
})

let myChart: any


function resize() {
  myChart.resize()
}

const init = () => {
  // 接初始化图表
  myChart = canvas.value && echarts.init(canvas.value);

  // set数据
  myChart?.setOption(props.options);

  // 大小自适应
  if (props.needResize) window.addEventListener('resize', resize)
}


watch(() => props.options, (newOptions) => {
  myChart.showLoading({
    text: "加载中...",
    color: "#409eff",
    textColor: "#409eff",
    maskColor: "rgba(255, 255, 255, 0.5)",
    zlevel: 10,
  });
  
  setTimeout(() => {
    myChart.hideLoading()
    myChart.dispose()
    init()
    // myChart.setOption(newOptions)
  }, 300);
}, {
  deep: true
})


onMounted(() => {
  init()
})

defineExpose({ myChart })


// 卸载
function dispose() {
  myChart.dispose()
  if (props.needResize) window.removeEventListener('resize', resize)
}
onBeforeUnmount(dispose)

</script>

<template>
  <div class="w-[100%] h-[100%]" ref="canvas"></div>
</template>

<style lang="scss">

</style>