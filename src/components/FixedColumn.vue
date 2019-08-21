<template>
  <table
      class="table-grid table-fixed-column"
      :style="{ [position]: 0 }">
    <thead class="table-grid-header">
      <TableHeadColumn :columns="getFixedColumns" fixedColumn />
    </thead>
    <tbody>
    <TableBodyRow
        v-for="(row, rowIndex) in data"
        :data="row"
        :rowIndex="rowIndex"
        :columns="getFixedColumns"
        :key="row.id.value"
        fixedColumn />
    </tbody>
    <FixedHeader :columns="getFixedColumns" fixedColumn v-if="config.fixedHeader" />
  </table>
</template>

<script>
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
  components: {
    TableBodyRow: () => import('@/components/TableBody/Row'),
    TableHeadColumn: () => import('@/components/TableHead/Column'),
    FixedHeader: () => import('@/components/FixedHeader')
  },
  computed: {
    getFixedColumns() {
      return this.columns.filter(c => c.fixed && c.fixed.active && c.fixed.position === this.position)
    }
  }
}
</script>

<style scoped>

</style>
