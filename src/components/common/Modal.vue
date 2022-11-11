<script setup lang="ts">
  import { ref } from "vue"
  const emit = defineEmits(["ok","update:visible"])
  defineProps({
    visible: Boolean
  });
  const handleOk = () => {
    emit('ok')
  }
  const cancel = () => {
    emit('update:visible',false)
  }
</script>

<template>
  <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk" @cancel="cancel">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-modal>
</template>

<style lang="scss">
</style>