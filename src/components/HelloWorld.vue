<template>
  <div class="tittle">{{ msg }}</div>
  <button @click="add">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(){
    const count = ref(0)
    const add = () => {
      count.value++      

      let obj:any  = { name: String }
      // obj.name = "pppp"
      // console.log('obj===>', obj);
      // let obj : { name: String }
      // obj.name = "pppp"
      console.log('obj===>', obj);
      
    }
    return { count, add }
  }
  // data() {
    // return {
      // count: 0
    // }
  // }
}
</script>
