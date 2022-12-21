import { ref, computed } from 'vue'
const oneDay = 24 * 3600 * 1000;

export default function () {
  const countData = ref<Array<any>>([])

  const countOption = computed(() => {
    return {
      tooltip: {
        trigger: 'axis',
        position: function (pt: any) {
          return [pt[0] - 50, '10%'];
        }
      },
      title: {
        left: 'center',
        text: '注册时间'
      },
      xAxis: {
        type: 'time',
        boundaryGap: false,
        axisLabel: {
          // formatter: '{yyyy}-{MM}-{dd}'
        }
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
      },
      dataZoom: [
        {
          type: 'inside',
          startValue: new Date(2008, 9, 3),
          endValue: new Date(2015, 9, 3),
          minValueSpan: oneDay * 7,
          maxValueSpan: oneDay * 366 * 7,
          // zoomLock: true,
          filterMode: 'none'
        },
      ],
      series: [
        {
          name: '注册人数',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: countData.value
        }
      ]
    }
  })

  const setcountData = () => {
    countData.value = []
    let base = +new Date(2008, 9, 3);
    countData.value.push([base, Math.random() * 20])
    for (let i = 1; i < 10000; i++) {
      let now = new Date((base += oneDay));
      if (now.getTime() > Date.now()) break
      countData.value.push([+now, Math.round((Math.random() + 0.5) * 20)]);
    }
  }

  return { countOption, setcountData }
}