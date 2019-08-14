<template>
  <tr class="table-grid-row table-grid-row-body">
    <td class="table-grid-cell">
      <div class="table-grid-cell-content context-container">
        <RowCheckbox :rowIndex="rowIndex" :data="data" :id="data.id.value" />
        <VIcon :id="`${data.id.value}`" name="bars" class="pointer" />
        <b-popover :target="`${data.id.value}`" triggers="focus">
          <template slot="title">Menu</template>
          <b-list-group>
            <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
            <b-list-group-item href="#" active>Link with active state</b-list-group-item>
            <b-list-group-item href="#">Action links are easy</b-list-group-item>
            <b-list-group-item href="#foobar" disabled>Disabled link</b-list-group-item>
          </b-list-group>
        </b-popover>
      </div>
    </td>
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
import VIcon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/bars'

export default {
  name: 'TableBodyRow',
  components: {
    TableBodyCell: () => import('@/components/TableBody/Cell'),
    RowCheckbox: () => import('@/components/TableBody/Cell/RowCheckbox'),
    VIcon
  },
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    columns: {
      type: Array,
      default: () => ({})
    },
    rowIndex: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
