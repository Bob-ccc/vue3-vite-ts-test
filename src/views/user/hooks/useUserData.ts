import { ref, computed, h } from 'vue';
import { notification } from 'ant-design-vue';
import { SmileOutlined } from '@ant-design/icons-vue';
import { getUserList } from '@/api/user';

export default function () {
  const loading = ref(false)
  const current = ref(1)
  const pageSize = ref(10)
  const dataSource = ref([])
  const total = ref(0)

  const pagination = computed(() => ({
    total: total.value,
    current: current.value,
    pageSize: pageSize.value,
  }));

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

  const handleTableChange = ((e: any) => {
    current.value = e.current
    getData()
  })

  return { loading, total, dataSource, pagination, getData, handleTableChange }
}