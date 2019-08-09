<template>
  <tr class="table-grid-row-head">
    <TableHeadCell
        v-for="(column, columnIndex) in columns"
        :data-col-order="column.order"
        :key="columnIndex"
        :columnKey="column.key"
        :fixed="fixed"
        :columns="columns"
    />
  </tr>
</template>

<script>
export default {
  name: 'TableHeadColumn',
  components: {
    TableHeadCell: () => import('@/components/TableHead/Cell')
  },
  props: {
    columns: {
      type: Array,
      default: () => ({})
    },
    fixed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
