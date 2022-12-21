<script setup lang="ts">
import { ref, computed } from "vue"
import { message } from 'ant-design-vue';
import { addUser } from '@/api/user';
const emit = defineEmits(["ok"])

interface Props {
  type: string
}
const props = withDefaults(
  defineProps<Props>(), {
  type: "add"
})

// const props = defineProps<{type: string }>()

const modalTypeDic = <any>{
  'add': "新增",
  'edit': "编辑",
  'detail': "详情"
}
const templateDic = <any>{
  'name': "账号",
  'password': "密码",
  'sex': "性别"
}

const visible = ref<Boolean>(false)
const loading = ref<Boolean>(false)
const originData = ref<any>()
const template = ref<any>({
  name: '',
  password: '',
  sex: ''
})

const title = computed(() => {
  return modalTypeDic[props.type]
})



const open = (detail: any) => {
  template.value = {
    name: '',
    password: '',
    sex: ''
  }
  visible.value = true
  originData.value = detail
  if (detail) {
    const { name, password,sex } = originData.value
    template.value = { name, password, sex }
  }
}

const modalOk = () => {
  loading.value = true
  if(props.type === "add"){
    addUser(template.value)
      .then(
        res => {
          loading.value = false
          emit('ok')
        }
      ).catch(err => {
        loading.value = false
        message.error(err.data.message)
      })
  }else if(props.type === "edit"){
    if(originData.value.id){
      console.log(originData.value.id);
      
    }
  }
}
const cancel = () => {
  visible.value = false
}
const close = () => {
  visible.value = false
}


defineExpose({ open, close })
</script>

<template>
  <Modal v-model:visible="visible" :title="title">
    <div class="flex items-center mb-10px" v-for="(val, key) in template" :key="key">
      <span class="w-50px mr-10px">{{ templateDic[key] }}:</span>
      <a-input v-if="props.type !== 'detail'" v-model:value="template[key]" placeholder="" />
      <span v-else>{{ val }}</span>
    </div>
    <template #footer>
      <a-button @click="cancel">关闭</a-button>
      <a-button v-if="props.type !== 'detail'" :loading="loading" type="primary" @click="modalOk">确定</a-button>
    </template>
  </Modal>
</template>

<style lang="scss">

</style>