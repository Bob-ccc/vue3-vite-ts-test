import { ref, computed } from 'vue'
import { getSexStatistics } from '@/api/user'

export default function () {
  const sexData = ref<Array<any>>([])

  const sexOption = computed(() => {
    return {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      title: {
        left: 'center',
        text: '性别比例'
      },
      // xAxis: {
      //   type: 'category',
      //   data: ['男', '女', '未知']
      // },
      // yAxis: { type: 'value' },
      series: {
        name: '人数',
        type: 'pie',
        radius: '70%',
        label: {
          position: 'inner',
          fontSize: 14
        },
        labelLine: {
          show: false
        },
        data: sexData.value
      }
    };
  })

  const setSexData = () => {
    getSexStatistics({}).then(res => {
      const { men, women, total } = res.data
      sexData.value = [
        {value: men, name: '男'},
        {value: women, name: '女'},
        {value: total, name: '未知'},
      ]
    })
  }

  return { sexOption, setSexData }
}