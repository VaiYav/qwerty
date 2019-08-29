<template>
  <div v-cloak class="table-grid-cell-head-container">
    <ColumnCheckbox />
    <div @click="$root.$emit('bv::show::modal', 'modal-column-settings', $event.target)">
      <VIcon name="sliders-h" class="pointer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RowControl',
  components: {
    ColumnCheckbox: () => import('@/components/TableHead/ColumnCheckbox')
  }
}
</script>

<style scoped>

</style>
