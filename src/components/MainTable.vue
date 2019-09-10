<template>
  <table
      class="table-grid main-table"
      :class="{
        'content-full': data.length,
        'with-fixed-header': config.fixedHeader
      }"
  >
    <thead class="table-grid-header">
      <TableHeadColumn :columns="getNotFixedColumns" />
    </thead>
    <tbody v-if="data.length">
    <CheckAll v-if="checkAllBlock" />
    <TableBodyRow
        v-for="(row, rowIndex) in data.slice(0).map(d => freezeObject(d))"
        :data="row"
        :rowIndex="rowIndex"
        :columns="getNotFixedColumns"
        :key="row.id.value"/>
    </tbody>
    <FixedHeader :columns="getNotFixedColumns" v-if="config.fixedHeader" />
  </table>
</template>

<script>
import { mapGetters } from 'vuex'
import { cloneDeep, freezeObject } from '@/utils'
export default {
  name: 'MainTable',
  props: {
    columns: {
      type: Array,
      default: () => ([])
    },
    data: {
      type: Array,
      default: () => ([])
    },
    config: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    TableBodyRow: () => import('@/components/TableBody/Row'),
    TableHeadColumn: () => import('@/components/TableHead/Column'),
    FixedHeader: () => import('@/components/FixedHeader'),
    CheckAll: () => import('@/components/CheckAll')
  },
  computed: {
    ...mapGetters({
      isMobile: 'app/isMobile',
      checkAllBlock: 'table/checkAllBlock'
    }),
    clonedColumns() {
      return cloneDeep(this.columns)
    },
    getNotFixedColumns() {
      if (this.isMobile) {
        return this.clonedColumns.map(c => {
          if (c.key !== 'context') {
            c.visible = false
          } else {
            c.fixed.active = false
          }
          return c
        })
      }
      return cloneDeep(this.columns).filter(c => !c.fixed || c.fixed && !c.fixed.active).map(c => freezeObject(c))
    }
  },
  methods: {
    freezeObject
  }
}
</script>

<style scoped>

</style>
