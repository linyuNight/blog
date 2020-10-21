<template>
  <div>
    <echart :chartData="echartData.user" style="height: 260px"></echart>
  </div>
</template>

<script>
import Echart from '@/components/EChart'

export default {
  data() {
    return {
      echartData: {
        order: {
          xData: [],
          series: [],
        },
        user: {
          xData: [],
          series: [],
        },
        video: {
          series: [],
        },
      },
    }
  },
  created() {
    setTimeout(() => {
      this.echartData.user.xData = [
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sun',
      ]
      this.echartData.user.series = [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)',
          },
        },
      ]
    }, 500)
  },
  components: {
    Echart,
  },
}
</script>

<style lang="scss" scoped>
</style>
