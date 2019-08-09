<template>
  <td class="table-grid-cell">
    <span class="table-grid-cell-content">
      {{data.type}}
      <custom v-if="type === 'custom'" :data="data.formatted"></custom>
      <span v-else-if="data.formatted" v-html="data.formatted"></span>
      <span v-else>{{data.value}}</span>
    </span>
  </td>
</template>

<script>
export default {
  name: 'TableBodyCell',
  components: {
    Custom: () => import('@/components/TableBody/Cell/custom')
  },
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
