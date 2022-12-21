<script setup lang="ts">
import { ref } from "vue"
const emit = defineEmits(["ok", "update:visible", "cancel"])
defineProps({
  visible: Boolean,
  title: [String || Number]
});
const handleOk = () => {
  emit('ok')
}
const cancel = () => {
  emit('cancel')
  emit('update:visible', false)
}
</script>

<template>
  <a-modal :visible="visible" centered :title="title" @cancel="cancel">
    <slot />
    <template #footer>
      <slot name="footer">
        <a-button @click="cancel">关闭</a-button>
        <a-button type="primary" @click="handleOk">确定</a-button>
      </slot>
    </template>
  </a-modal>
</template>

<style lang="scss">

</style>