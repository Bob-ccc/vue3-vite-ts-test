<template>
  <component :is="currentComp"></component>
</template>
<script lang="ts">
import { HomeTwoTone, IdcardTwoTone, ProfileTwoTone } from '@ant-design/icons-vue';
import { computed } from 'vue';
export default{
  components:{ HomeTwoTone, IdcardTwoTone, ProfileTwoTone },
  props:{
    name:{
      type: String,
      default: 'ProfileTwoTone'
    }
  },
  setup(props){
    const currentComp = computed(()=>{
      return props.name
    })
    return { currentComp }
  }
}
</script>