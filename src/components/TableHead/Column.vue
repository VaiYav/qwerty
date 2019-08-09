<template>
  <tr class="table-grid-row-head">
    <TableHeadColumnCell
        v-for="(column, columnIndex) in columns"
        :data-colindex="column.order"
        :key="columnIndex"
        :columnKey="column.key"
        :column="column" />
  </tr>
</template>

<script>
export default {
  name: 'TableHeadColumn',
  components: {
    TableHeadColumnCell: () => import('@/components/TableHead/Cell')
  },
  props: {
    columns: {
      type: Array,
      default: () => ({})
    }
  }
}
</script>

<style scoped>

</style>
