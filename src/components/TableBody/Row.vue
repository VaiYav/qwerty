<template>
  <tr
      @mouseover.prevent.capture="showPencil(`row-${data.id.value}`)"
      @mouseleave="hidePencil(`row-${data.id.value}`)"
      class="table-grid-row table-grid-row-body"
      :class="{ [`row-${data.id.value}`]: data.id }">
    <TableBodyCell
        v-for="(cell, cellIndex) in columns"
        :data-cellindex="cell.key"
        :key="cellIndex"
        :type="cell.type"
        :component="cell.component"
        :id="data.id"
        :fixedColumn="fixedColumn"
        :data="data[cell.key] || data">
    </TableBodyCell>
    <td v-if="!fixedColumn" class="table-grid-cell"></td>
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
    },
    rowIndex: {
      type: [String, Number],
      default: ''
    },
    fixedColumn: {
      type: Boolean,
      default: false
    },
    fixedHeader: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    showPencil(e) {
      const rows = document.querySelectorAll(`.${e}`)
      for (let i = 0; i < rows.length; i++) {
        rows[i].classList.add('active')
      }
    },
    hidePencil(e) {
      const rows = document.querySelectorAll(`.${e}`)
      for (let i = 0; i < rows.length; i++) {
        rows[i].classList.remove('active')
      }
    }
  }
}
</script>

<style scoped>

</style>
