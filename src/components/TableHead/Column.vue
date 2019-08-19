<template>
  <tr class="table-grid-row-head">
    <TableHeadCell
        :style="{
          width: '88px',
          'max-width': '88px',
          'min-width': '88px'
        }"
        data-col-order="0"
        :draggable="false"
        :fixed="fixed"
        :visibleText="false"
        :columns="[]">
      <ColumnCheckbox />
      <div @click="$root.$emit('bv::show::modal', 'modal-column-settings', $event.target)">
        <VIcon name="sliders-h" class="pointer" />
      </div>
    </TableHeadCell>
    <TableHeadCell
        v-for="(column, columnIndex) in columns"
        :data-col-order="column.order"
        :key="columnIndex"
        :columnKey="column.key"
        :fixed="fixed"
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
