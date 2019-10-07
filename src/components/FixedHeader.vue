<template>
  <div
      class="fixed-header-container"
      :style="{ width: tableWidth + 'px', left: tablePositionX + 'px' }">
    <table
        class="table table-grid m-0"
        v-if="!hidden"
        :hidden="hidden">
      <thead class="table-grid-header">
        <TableHeadColumn
            :columns="columns"
            fixedHeader
            :fixedColumn="fixedColumn"
        />
        <tr v-if="checkAllBlock">
          <th :colspan="columns.length" class="table-grid-cell  table-grid-cell__checkAll">
            <span class="table-grid-cell-content"></span>
          </th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { EventBus } from '../EventBus'

export default {
  name: 'FixedHeader',
  props: {
    columns: {
      type: Array,
      default: () => ({})
    },
    fixedColumn: {
      type: Boolean,
      default: false
    },
    mainTable: {
      type: Boolean,
      default: false
    }
  },
  components: {
    TableHeadColumn: () => import('@/components/TableHead/Column')
  },
  data() {
    return {
      hidden: true,
      totalOffset: null,
      tableWidth: null,
      tablePositionX: null
    }
  },
  watch: {
    columns: {
      handler() {
        this.getClientHeight()
        this.getTableWidth()
      }
    }
  },
  computed: {
    ...mapGetters({
      checkAllBlock: 'table/checkAllBlock'
    })
  },
  methods: {
    ...mapActions({
      toggleFixedHeaderStatus: 'table/toggleFixedHeaderStatus'
    }),
    getClientHeight() {
      const target = this.$parent.$el
      if (!target) return
      const distanceScrolled = document.body.scrollTop
      const elemRect = target.getBoundingClientRect()
      const elemViewportOffset = elemRect.top
      this.tablePositionX = elemRect.x
      this.totalOffset = distanceScrolled + elemViewportOffset
      this.hidden = this.totalOffset > 0 || Math.abs(this.totalOffset) > elemRect.height
      this.toggleFixedHeaderStatus(this.hidden)
    },
    getTableWidth() {
      const target = this.$parent.$el
      if (!target) return
      this.tableWidth = target.clientWidth
    }
  },
  created() {
    this.getClientHeight()
    this.getTableWidth()
    window.addEventListener('scroll', this.getClientHeight)
    window.addEventListener('resize', this.getClientHeight)
    window.addEventListener('scroll', this.getTableWidth)
    window.addEventListener('resize', this.getTableWidth)
    EventBus.$on('handle-horizontal-scroll', () => {
      this.getClientHeight()
      this.getTableWidth()
    })
  }
}
</script>

<style scoped>

</style>
