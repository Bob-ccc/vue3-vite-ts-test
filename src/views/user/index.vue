<script setup lang="ts">
import { getUserList } from '@/api/user';
import { ref, onMounted, computed, h  } from 'vue';
import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
import { notification } from 'ant-design-vue';
const loading = ref(false)
const dataSource = ref([])
const current = ref(1)
const pageSize = ref(10)
const total = ref(0)
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
    title: '操作',
    dataIndex: 'control',
    key: 'control',
    align: 'center'
  }
])

const listMode = ref(true)

const visible = ref(false)

const columns = computed(() => {
  return listMode.value ? allColumns.value : simpleColumns.value
})

const pagination = computed(() => ({
  total: total.value,
  current: current.value,
  pageSize: pageSize.value,
}));


const handleTableChange = ((e: any) => {
  current.value = e.current
  getData()
})

const handleResizeColumn = (w: any, col: any) => {
  col.width = w;
}

const getData = () => {
  if (loading.value) {
    notification.open({
      message: '提示',
      description:
        '数据更新中，请稍候',
      icon: () => h(SmileOutlined, { style: 'color: #108ee9' }),
    });
    return
  }
  loading.value = true
  getUserList({ pageNum: current.value, pageSize: pageSize.value }).then((res: any) => {
    console.log(res);
    loading.value = false
    const { total: all, list } = res.data
    dataSource.value = list
    total.value = all

  })
}

const detail = (record: any) => {
  visible.value = true
  console.log(record);
}

const modalOk = () => {
  visible.value = false
}

const init = () => {
  getData()
}
onMounted(() => {
  init()
})
</script>

<template>
  <div class="mb-10px flex justify-between items-center p-10px bg-white rounded-tl-14px">
    <div>

      <span class="text-16px pl-10px font-bold text-blue-300">
        总数：
        <span class="text-20px">{{ total }}</span>
      </span>
    </div>
    <div>
      <a-tooltip placement="top" title="表格类型">
        <a-button type="primary" @click="listMode = !listMode">
          {{ listMode ? '完整' : '简易' }}
        </a-button>
        <!-- <a class="select-none cursor-pointer" @click="detail(record)">详情</a> -->
      </a-tooltip>
      <a-button class="ml-10px" type="primary" @click="getData">刷新</a-button>
    </div>
  </div>
  <a-table :dataSource="dataSource" :columns="columns" :pagination="pagination" :loading="loading"
    @change="handleTableChange" @resizeColumn="handleResizeColumn">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'name'">
        <span class="text-16px font-bold text-blue-300">
          <smile-outlined />
          {{ column.title }}
        </span>
      </template>
      <template v-else>
        <span class="text-16px font-bold text-blue-300">
          {{ column.title }}
        </span>
      </template>

    </template>


    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'control'">
        <span>
          <a-tooltip placement="top">
            <template #title>
              <span>{{ record.name }}</span>
            </template>
            <a class="select-none cursor-pointer" @click="detail(record)">详情</a>
          </a-tooltip>
          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link" @click.prevent>
              更多
              <DownOutlined />
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <a href="javascript:;">编辑</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;">删除</a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </span>
      </template>
    </template>

  </a-table>
  <Modal v-model:visible="visible" title="" @ok="modalOk"></Modal>
</template>

<style lang="scss">

</style>