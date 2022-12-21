import { ref } from 'vue';

export default function () {
  const modal = ref<any>(null)

  // add,edit,detail
  const modalType = ref<string>("")

  const add = () => {
    modalType.value = "add"
    modal.value.open()
  }

  const edit = (record: any) => {
    modalType.value = "edit"
    modal.value.open(record)
  }

  const detail = (record: any) => {
    modalType.value = "detail"
    modal.value.open(record)
  }

  const modalOk = () => {
    modal.value.close()
  }

  return { modal, modalType, add, edit, detail, modalOk }
}