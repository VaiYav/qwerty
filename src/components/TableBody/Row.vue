<template>
  <tr class="table-grid-row table-grid-row-body">
    <TableBodyCell
        v-for="(cell, cellIndex) in columns"
        :data-cellindex="cell.key"
        :key="cellIndex"
        :type="cell.type"
        :data="data[cell.key]">
    </TableBodyCell>
  </tr>
</template>

<script>
export default {
  name: 'TableBodyRow',
  components: {
    TableBodyCell: () => import('@/components/TableBody/Cell')
  },
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    columns: {
      type: Array,
      default: () => ({})
    }
  }
}
</script>

<style scoped>

</style>
