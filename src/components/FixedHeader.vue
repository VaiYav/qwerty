<template>
  <div
      class="fixed-header-container"
      :style="{ width: tableWidth + 'px', left: tablePositionX + 'px' }">
    <table
        class="table table-grid"
        :hidden="hidden">
      <thead class="table-grid-header">
        <TableHeadColumn
            :columns="columns"
            fixed
        />
      </thead>
    </table>
  </div>
</template>

<script>
export default {
  name: 'FixedHeader',
  props: {
    columns: {
      type: Array,
      default: () => ({})
    }
  },
  components: {
    TableHeadColumn: () => import('@/components/TableHead/Column')
  },
  data() {
    return {
      hidden: true,
      totalOffset: null,
      tableWidth: null,
      tablePositionX: null
    }
  },
  watch: {
    columns: {
      handler() {
        this.getClientHeight()
        this.getTableWidth()
      }
    }
  },
  methods: {
    getClientHeight() {
      const target = this.$parent.$el
      const distanceScrolled = document.body.scrollTop
      const elemRect = target.getBoundingClientRect()
      const elemViewportOffset = elemRect.top
      this.tablePositionX = elemRect.x
      this.totalOffset = distanceScrolled + elemViewportOffset
      this.hidden = this.totalOffset > 0
    },
    getTableWidth() {
      const target = this.$parent.$el
      this.tableWidth = target.clientWidth
    }
  },
  created() {
    this.getClientHeight()
    this.getTableWidth()
    window.addEventListener('scroll', this.getClientHeight)
    window.addEventListener('resize', this.getClientHeight)
    window.addEventListener('resize', this.getTableWidth)
  }
}
</script>

<style scoped lang="scss">
  .fixed-header-container {
    position: fixed;
    top: 0;
  }
</style>
