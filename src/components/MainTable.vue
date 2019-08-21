<template>
  <table
      class="table-grid main-table"
      :class="{
        'content-full': data.length,
        'with-fixed-header': config.fixedHeader
      }"
  >
    <thead class="table-grid-header">
    <TableHeadColumn :columns="columns.filter(c => !c.fixed || c.fixed && !c.fixed.active)" />
    </thead>
    <tbody v-if="data.length">
    <TableBodyRow
        v-for="(row, rowIndex) in data"
        :data="row"
        :rowIndex="rowIndex"
        :columns="columns.filter(c => !c.fixed || c.fixed && !c.fixed.active)"
        :key="row.id.value"/>
    </tbody>
    <FixedHeader :columns="columns" v-if="config.fixedHeader" />
  </table>
</template>

<script>
export default {
  name: 'MainTable',
  props: {
    columns: {
      type: Array,
      default: () => ([])
    },
    data: {
      type: Array,
      default: () => ([])
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
  }
}
</script>

<style scoped>

</style>
