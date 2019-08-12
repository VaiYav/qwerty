<template>
  <tr class="table-grid-row-head">
    <TableHeadCell
        data-col-order="1"
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
import 'vue-awesome/icons/sliders-h'
import VIcon from 'vue-awesome/components/Icon'

export default {
  name: 'TableHeadColumn',
  components: {
    TableHeadCell: () => import('@/components/TableHead/Cell'),
    ColumnCheckbox: () => import('@/components/TableHead/ColumnCheckbox'),
    VIcon
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
