<template>
  <th class="table-grid-cell-head">
    <span class="table-grid-cell-head-container">
      <span class="table-grid-head-title">{{ $t(`columns.${columnKey}`) }}</span>
    </span>
  </th>
</template>
<script>
export default {
  name: 'TableHeadColumnCell',
  props: {
    column: {
      type: Object,
      default: () => {}
    },
    columnKey: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
