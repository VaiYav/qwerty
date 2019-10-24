<template>
  <table
      class="table-grid table-fixed-column is-has-box-shadow"
      :style="{ [position]: 0, 'z-index': 4 }">
    <thead class="table-grid-header">
      <TableHeadColumn v-cloak :columns="getFixedColumns(columns, position)" fixedColumn />
    </thead>
    <tbody>
    <tr v-if="checkAllBlock" class="table-grid-row table-grid-row-body">
      <td class="table-grid-cell" colspan="200">
        <span class="table-grid-cell-content"></span>
      </td>
    </tr>
    <TableBodyRow
        v-for="(row, rowIndex) in data"
        :data="row"
        :rowIndex="rowIndex"
        :columns="getFixedColumns(columns, position)"
        :key="row.id.value"
        fixedColumn />
    </tbody>
    <FixedHeader :columns="getFixedColumns(columns, position)" fixedColumn v-if="config.fixedHeader" />
  </table>
</template>

<script>
import { mapGetters } from 'vuex'
import { EventBus } from '../EventBus'
export default {
  name: 'FixedColumn',
  props: {
    columns: {
      type: Array,
      default: () => ([])
    },
    data: {
      type: Array,
      default: () => ([])
    },
    position: {
      type: String,
      default: 'left'
    },
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      isBoxShadow: false
    }
  },
  components: {
    TableBodyRow: () => import('@/components/TableBody/Row'),
    TableHeadColumn: () => import('@/components/TableHead/Column'),
    FixedHeader: () => import('@/components/FixedHeader')
  },
  computed: {
    ...mapGetters({
      getFixedColumns: 'externalData/getSortedColumnsByPosition',
      checkAllBlock: 'table/checkAllBlock'
    })
  },
  methods: {
    setBoxShadow() {
      const table = document.querySelector('.table-grid.main-table')
      if (!table || !this.$el) {
        setTimeout(() => {
          this.setBoxShadow()
        }, 1000)
        return
      }
      const tablePosition = table.getBoundingClientRect()
      if (this.position === 'left' && this.$el) {
        this.isBoxShadow = tablePosition[this.position] !== this.$el.getBoundingClientRect().right
      } else if (this.position === 'right' && this.$el) {
        this.isBoxShadow = tablePosition[this.position] !== this.$el.getBoundingClientRect().left
      }
    }
  },
  created() {
    this.setBoxShadow()
    EventBus.$on('handle-horizontal-scroll', this.setBoxShadow)
  },
  beforeDestroy() {
    EventBus.$off('handle-horizontal-scroll', this.setBoxShadow)
  }
}
</script>

<style scoped>

</style>
