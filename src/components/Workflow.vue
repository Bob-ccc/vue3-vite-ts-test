<template>
  <div id="workflowEl" class="common-height-100p"></div>
</template>

<script setup>
import { ref, onMounted, markRaw, onUnmounted } from 'vue'
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
import BpmnModeler from 'bpmn-js/lib/Modeler';
const containerEl = ref(null)
const bpmnModeler = ref(null)

const init = () => {
  
  containerEl.value = document.querySelector('#workflowEl');
  // 加markRaw去除双向绑定作用域
  bpmnModeler.value = new BpmnModeler({
    container: containerEl.value,
    width: '100%',// 查看器宽度
	  height: '100%' // 查看器高度
  })
  console.log(bpmnModeler);
  bpmnModeler.value.createDiagram()
  // bpmnModeler.value.createDiagram(() => {
  //   bpmnModeler.value.get('canvas').zoom('fit-viewport');
  // });
}

onMounted(()=>{
  init()
})
onUnmounted(()=>{
})
</script>

<style lang="scss">
#workflowEl{
  .bjs-powered-by{
    display: none !important;
  }
}
</style>