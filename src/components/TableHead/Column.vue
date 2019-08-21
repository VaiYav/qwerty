<template>
  <tr class="table-grid-row-head">
    <TableHeadCell
        :class="{ 'table-cell-hidden': !fixedColumn && column.fixed && column.fixed.active }"
        v-for="(column, columnIndex) in columns"
        :data-col-order="column.order"
        :key="columnIndex"
        :columnKey="column.key"
        :fixedHeader="fixedHeader"
        :fixedColumn="fixedColumn"
        :columns="columns"
        :column="column"
    />
    <th class="table-grid-cell-head table-grid-cell-head__special-empty"></th>
  </tr>
</template>

<script>
import { mapGetters } from 'vuex'

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
    fixedHeader: {
      type: Boolean,
      default: false
    },
    fixedColumn: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      data: 'externalData/getData'
    })
  }
}
</script>

<style scoped>

</style>
