<template>
    <div v-cloak class="table-grid-cell-content context-container">
      <RowCheckbox
          :rowIndex="rowIndex"
          :data="data"
          :id="data.id.value" />
      <b-dropdown size="lg" lazy variant="link" toggle-class="text-decoration-none" no-caret>
        <template v-slot:button-content>
          <VIcon
              name="bars"
              class="pointer" />
        </template>
        <b-dropdown-item href="#">Action</b-dropdown-item>
        <b-dropdown-item href="#">Another action</b-dropdown-item>
        <b-dropdown-item href="#">Something else</b-dropdown-item>
      </b-dropdown>
    </div>
</template>

<script>
export default {
  name: 'RowControl',
  components: {
    RowCheckbox: () => import('@/components/TableBody/Cell/RowCheckbox')
  },
  props: {
    data: {
      type: Object,
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
