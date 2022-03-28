<template>
<div class="now-time common-font-size-18">
  {{time}}
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import moment from 'moment';

const time = ref(null)
const timer = ref(null)

const timeRun = (hidden) =>{
  if(timer.value) clearInterval(timer.value)

  const inter = setInterval(()=>{
    const date = Date.now()
    time.value = moment(date).format('YYYY-MM-DD HH:mm:ss:') + (hidden ? date.toString().slice(-3,-2):date.toString().slice(-3,-1) )
  },hidden?100:10)

  timer.value = inter
}


onMounted(()=>{
  timeRun()
  // document.addEventListener('visibilitychange',() => {
  //   var isHidden = document.hidden
  //   if(isHidden){
  //     timeRun(true)
  //   }else{  
  //     timeRun(false)
  //   }
  // })
  window.onfocus = () =>{
    timeRun(false)
  }
  window.onblur  = () =>{
    timeRun(true)
  }
})

</script>

<style>

</style>