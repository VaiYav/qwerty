<template>
  <sparkline :tooltipProps="spTooltipProps3">
    <sparklineBar
        :data="data"
        :margin="margin"
        :limit="data.length"
        :styles="barStyles"
    />
  </sparkline>
</template>

<script>
export default {
  name: 'Chart',
  data() {
    return {
      dataType: [
        { date: 'July 22, 2019', text: 'events' },
        { date: 'July 23, 2019', text: 'events' },
        { date: 'July 24, 2019', text: 'events' },
        { date: 'July 25, 2019', text: 'events' },
        { date: 'July 26, 2019', text: 'events' },
        { date: 'July 27, 2019', text: 'events' },
        { date: 'July 28, 2019', text: 'events' },
        { date: 'July 29, 2019', text: 'events' },
        { date: 'July 30, 2019', text: 'events' },
        { date: 'July 31, 2019', text: 'events' }
      ],
      margin: 1,
      barStyles: {
        fill: '#54a5ff'
      },
      spLineStyles4: {
        stroke: '#d14'
      },
      spTooltipProps3: {
        formatter: (val) => {
          return `<label style="font-weight:bold;">
          ${this.dataType[val.index].date}
          <p class="m-0">${val.value} ${this.dataType[val.index].text}</p>
          </label>`
        }
      }
    }
  },
  props: {
    chartOptions: {
      type: Object,
      default: () => ({})
    },
    data: {
      type: Array,
      default: () => ((() => {
        const len = 10
        return Array.from({
          length: len
        }, () => Math.floor(Math.random() * len))
      })())
    }
  }
}
</script>

<style lang="scss" scoped>
  .echarts {
    width: 100%;
    height: 55px;
  }
</style>
