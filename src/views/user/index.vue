<script setup lang="ts">
import { onMounted } from 'vue';
import { SmileOutlined,DownOutlined } from '@ant-design/icons-vue';
import UserModal from './components/UserModal.vue'
import useTableOption from './hooks/useTableOption'
import useUserData from './hooks/useUserData'
import useUserModal from './hooks/useUserModal'

const { listMode, columns, handleResizeColumn } = useTableOption()
const { loading, total, dataSource, pagination, getData, handleTableChange } = useUserData()
const { modal, modalType, add, edit, detail, modalOk } = useUserModal()

const init = () => {
  getData()
}

onMounted(init)
</script>

<template>
  <div class="h-40px   mb-10px flex justify-between items-center px-20px py-10px bg-white rounded-tl-14px">
    <div class="text-16px font-bold text-blue-300">
      总数：
      <span class="text-20px">{{ total }}</span>
    </div>
    <div class="text-14px text-blue-300 select-none cursor-pointer">
      <a-tooltip placement="top" title="点击切换表格类型">
        <span @click="listMode = !listMode">{{ listMode ? '完整' : '简易' }}</span>
      </a-tooltip>
      <a-divider type="vertical" />
      <span @click="getData">刷新</span>
      <a-divider type="vertical" />
      <span @click="add">新增</span>
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
      <template v-if="column.key === 'sex'">
        <span v-if="record.sex === 0">女</span>
        <span v-else-if="record.sex === 1">男</span>
        <span v-else>未知</span>
      </template>
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
                <a-menu-item @click="edit(record)">
                  编辑
                </a-menu-item>
                <a-menu-item>
                  删除
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </span>
      </template>
    </template>

  </a-table>
  <UserModal :type="modalType" ref="modal" @ok="modalOk"></UserModal>
</template>

<style lang="scss">

</style>