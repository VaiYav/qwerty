<template>
  <th
      @mouseover="sortableHover = true"
      @mouseleave="sortableHover = false"
      class="table-grid-cell-head"
      :class="{
        draggable
      }"
      :style="{
        'min-width': width.default + 'px',
        'max-width': width.default + 'px',
        'width': width.default + 'px'
      }">
    <keep-alive>
      <component v-if="column.component" :is="column.component"></component>
    </keep-alive>
    <div
        v-if="!column.component"
        :class="{
          pointer: isSortable
        }"
        class="table-grid-cell-head-container">
      <span
          v-b-tooltip.hover.d200
          :title="$t(`columns.${columnKey}`)"
          :class="{ sortable: isSortable }"
          class="table-grid-head-title">{{ $t(`columns.${columnKey}`) }}</span>
      <span @click="changeSortingStatus">
         <VIcon
             class="sort-icon"
             v-if="column.sortable && column.sortable.direction || column.sortable && ((column.sortable.direction || column.sortable.default) && sortableHover)"
             :name="this.sortDirection[column.sortable.direction || column.sortable.default]"></VIcon>
      </span>
      <slot />
    </div>
    <span
        v-if="!fixedColumn && draggable && !isMobile"
        class="table-grid-resize-button"
        @mousedown="clickDownEvt"></span>
  </th>
</template>
<script>
import { mapActions } from 'vuex'
import { EventBus } from '../../EventBus'
import RowControl from './RowControl'
import { cloneDeep } from '@/utils'
import dragDrop from './mixins/dragDrop'
export default {
  name: 'TableHeadColumnCell',
  components: {
    RowControl
  },
  mixins: [dragDrop],
  props: {
    columnKey: {
      type: String,
      default: ''
    },
    fixedHeader: {
      type: Boolean,
      default: false
    },
    columns: {
      type: Array,
      default: () => ([])
    },
    column: {
      type: Object,
      default: () => ({
        width: {}
      })
    },
    visibleText: {
      type: Boolean,
      default: true
    },
    draggable: {
      type: Boolean,
      default: false
    },
    fixedColumn: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      sortableHover: false,
      sortDirection: {
        asc: 'sort-amount-up-alt',
        desc: 'sort-amount-down-alt'
      },
      width: {
        'min': 0,
        'max': 0,
        'width': 0
      },
      order: 0
    }
  },
  methods: {
    cloneDeep,
    ...mapActions({
      setColumnWidth: 'externalData/setColumnWidth',
      changeSorting: 'externalData/changeSorting',
      setRouter: 'routing/setRouter'
    }),
    changeSortingStatus() {
      if (!this.column.sortable) return
      const clonedColumn = this.cloneDeep(this.column)
      function toggleDirection(direction) {
        return direction === 'asc' ? 'desc' : 'asc'
      }
      if (!clonedColumn.sortable.direction) {
        clonedColumn.sortable.direction = clonedColumn.sortable.default
      } else {
        clonedColumn.sortable.direction = toggleDirection(clonedColumn.sortable.direction)
      }
      this.changeSorting(clonedColumn)
      this.setRouter({ data: clonedColumn, key: 'sort', func: 'externalData/changeSorting' }, { root: true })
    },
    resize(e) {
      const size = e.pageX - this.$el.getBoundingClientRect().left
      if (size > this.column.width.max) {
        this.width.default = this.column.width.max
      } else if (size < this.column.width.min) {
        this.width.default = this.column.width.min
      } else {
        this.width.default = size
      }
      this.setWidthCell()
    },
    clickDownEvt(e) {
      document.addEventListener('mousemove', this.resize)
      document.addEventListener('mouseup', this.clickUpEvt)
    },
    clickUpEvt(e) {
      this.stopResize()
      this.setColumnWidth({ field: this.columnKey, width: this.width.default })
    },
    stopResize() {
      document.removeEventListener('mousemove', this.resize)
      document.removeEventListener('mouseup', this.clickUpEvt)
    },
    setWidth(el) {
      el.style.width = this.width.default + 'px'
      el.style['min-width'] = this.width.default + 'px'
      el.style['max-width'] = this.width.default + 'px'
      EventBus.$emit('handle-horizontal-scroll')
    },
    setWidthCell() {
      const fixedHeaderTh = document.querySelector(`.fixed-header-container th[data-col-order="${this.$attrs['data-col-order']}"]`)
      const fixedColumnTh = document.querySelector(`.table-fixed-column th[data-col-order="${this.$attrs['data-col-order']}"]`)
      const th = document.querySelector(`.with-fixed-header th[data-col-order="${this.$attrs['data-col-order']}"]`)
      const elements = [th, fixedHeaderTh, fixedColumnTh].filter(e => e)
      for (let i = 0; i < elements.length; i++) {
        this.setWidth(elements[i])
      }
    },
    widthForFixed(el) {
      this.width = {
        'default': `${el.clientWidth}`
      }
    }
  },
  computed: {
    isSortable() {
      return this.column.sortable && this.column.sortable.status
    }
  },
  mounted() {
    this.width = JSON.parse(JSON.stringify(this.column.width))
    if (this.fixedColumn && this.fixedHeader) {
      const row = document.querySelector(`.table-fixed-column th[data-col-order="${this.$attrs['data-col-order']}"]`)
      this.widthForFixed(row)
    } else if (this.fixedHeader) {
      const row = document.querySelector(`.with-fixed-header th[data-col-order="${this.$attrs['data-col-order']}"]`)
      this.widthForFixed(row)
    }
  }
}
</script>

<style scoped>

</style>
