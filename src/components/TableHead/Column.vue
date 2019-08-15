<template>
  <tr class="table-grid-row-head">
    <TableHeadCell
        data-col-order="0"
        :draggable="false"
        :fixed="fixed"
        :visibleText="false"
        :columns="[]">
      <ColumnCheckbox />
      <VIcon name="sliders-h" class="pointer" />
    </TableHeadCell>
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
import { mapGetters } from 'vuex'

export default {
  name: 'TableHeadColumn',
  components: {
    TableHeadCell: () => import('@/components/TableHead/Cell'),
    ColumnCheckbox: () => import('@/components/TableHead/ColumnCheckbox')
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
