import { ref, computed } from 'vue';

export default function () {
  const allColumns = ref([
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      resizable: true,
      width: 150,
      minWidth: 100,
      maxWidth: 200,
      align: 'center'
    },
    {
      title: '密码',
      dataIndex: 'password',
      key: 'password',
      resizable: true,
      width: 150,
      minWidth: 100,
      maxWidth: 200,
      align: 'center'
    },
    {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex',
      width: 100,
      align: 'center'
    },
    {
      title: '创建时间',
      dataIndex: 'creatTime',
      key: 'creatTime',
      align: 'center'
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      key: 'updateTime',
      align: 'center'
    },
    {
      title: '操作',
      dataIndex: 'control',
      key: 'control',
      align: 'center'
    }
  ])

  const simpleColumns = ref([
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      resizable: true,
      width: 250,
      minWidth: 100,
      maxWidth: 400,
      align: 'center'
    },
    {
      title: '密码',
      dataIndex: 'password',
      key: 'password',
      resizable: true,
      width: 250,
      minWidth: 100,
      maxWidth: 400,
      align: 'center'
    },
    {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex',
      width: 150,
      align: 'center'
    },
    {
      title: '操作',
      dataIndex: 'control',
      key: 'control',
      align: 'center'
    }
  ])

  const listMode = ref(true)

  const columns = computed(() => {
    return listMode.value ? allColumns.value : simpleColumns.value
  })

  const handleResizeColumn = (w: any, col: any) => {
    col.width = w;
  }

  return { listMode, columns, handleResizeColumn }
}