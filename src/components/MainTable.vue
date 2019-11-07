<template>
  <table
      class="table-grid main-table"
      :class="{
        'content-full': data.length,
        'with-fixed-header': config.fixedHeader,
        'is-not-resized': !isFixedColumns
      }"
  >
    <thead class="table-grid-header">
      <TableHeadColumn :columns="getNotFixedColumns" />
      <SummaryHeader :columns="getNotFixedColumns" />
    </thead>
    <tbody v-if="data.length">
    <CheckAll v-if="checkAllBlock" :isHaveSummary="config.isSummary" />
    <TableBodyRow
        v-for="(row, rowIndex) in data.slice(0).map(d => freezeObject(d))"
        :data="row"
        :rowIndex="rowIndex"
        :columns="getNotFixedColumns"
        :key="row.id.value"/>
    </tbody>
    <FixedHeader :columns="getNotFixedColumns" v-if="config.fixedHeader" mainTable />
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
    CheckAll: () => import('@/components/CheckAll'),
    SummaryHeader: () => import('@/components/SummaryHeader')
  },
  computed: {
    ...mapGetters({
      isMobile: 'app/isMobile',
      checkAllBlock: 'table/checkAllBlock',
      isFixedColumns: 'externalData/isFixedColumns'
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
    freezeObject,
    setStickyScroll() {
      const target = document.querySelector('.table.table-container')
      const bodyRect = document.body.getBoundingClientRect()
      const elemRect = target.getBoundingClientRect()
      const offset = elemRect.top - bodyRect.top
      const sticky = target.getBoundingClientRect().height + offset > window.scrollY + window.innerHeight
      const scroll = document.querySelector('.__rail-is-horizontal')
      if (scroll) {
        scroll.style.position = sticky ? 'fixed' : 'absolute'
        const table = scroll.previousSibling.getBoundingClientRect()
        scroll.style.left = table.left + 'px'
        scroll.style.right = window.innerWidth - (window.innerWidth - document.documentElement.clientWidth) - table.right + 'px'
      } else {
        setTimeout(this.setStickyScroll, 500)
      }
      if (scroll && !sticky) {
        scroll.style.left = 0
        scroll.style.right = 0
      }
    }
  },
  created() {
    this.setStickyScroll()
    document.addEventListener('scroll', this.setStickyScroll)
  }
}
</script>

<style scoped>

</style>
