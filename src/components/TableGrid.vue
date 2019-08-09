<template>
  <div>
    <table
        class="table table-grid"
        :class="{
          'loader-active': loader,
          'content-full': data.length,
          'with-fixed-header': config.fixedHeader
        }"
    >
      <thead class="table-grid-header">
        <TableHeadColumn :columns="columns" />
      </thead>
      <tbody>
        <TableBodyRow
          v-for="(row, rowIndex) in data"
          :data="row"
          :columns="columns"
          :key="rowIndex"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TableGrid',
  props: {
    columns: {
      type: Array,
      default: () => {}
    },
    data: {
      type: Array,
      default: () => ([])
    },
    fixedHeader: {
      type: Boolean,
      default: true
    },
    config: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    TableBodyRow: () => import('@/components/TableBody/Row'),
    TableHeadColumn: () => import('@/components/TableHead/Column')
  },
  computed: {
    ...mapGetters({
      loader: 'externalData/getLoader'
    })
  }
}
</script>

<style scoped>

</style>
