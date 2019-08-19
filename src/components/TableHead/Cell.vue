<template>
  <th
      class="table-grid-cell-head"
      :class="{ draggable }"
      :style="{
        'min-width': width.default + 'px',
        'max-width': width.default + 'px',
        'width': width.default + 'px'
      }">
    <div
        class="table-grid-cell-head-container">
      <span
          v-if="visibleText"
          v-b-tooltip.hover.d200
          :title="$t(`columns.${columnKey}`)"
          class="table-grid-head-title">{{ $t(`columns.${columnKey}`) }}</span>
      <slot />
      <span v-if="draggable" class="table-grid-resize-button" @mousedown="clickDownEvt"></span>
    </div>
  </th>
</template>
<script>
import { EventBus } from '../../EventBus'
import { mapActions } from 'vuex'
export default {
  name: 'TableHeadColumnCell',
  props: {
    columnKey: {
      type: String,
      default: ''
    },
    fixed: {
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
      default: true
    }
  },
  data() {
    return {
      width: {
        'min': 0,
        'max': 0,
        'width': 0
      }
    }
  },
  methods: {
    ...mapActions({
      setColumnWidth: 'externalData/setColumnWidth'
    }),
    resize(e) {
      const size = e.pageX - this.$el.getBoundingClientRect().left
      if (size > this.column.width.max) {
        this.width.default = this.column.width.max
        this.setWidthCell()
      } else if (size < this.column.width.min) {
        this.width.default = this.column.width.min
        this.setWidthCell()
      } else {
        this.width.default = size
        this.setWidthCell()
      }
    },
    clickDownEvt(e) {
      document.addEventListener('mousemove', this.resize)
      document.addEventListener('mouseup', this.clickUpEvt)
      EventBus.$emit('resize', this)
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
    },
    setWidthCell() {
      const tds = document.querySelectorAll(`td[data-cellindex="${this.columnKey}"]`)
      const fixedTh = document.querySelector(`.fixed-header-container th[data-col-order="${this.$attrs['data-col-order']}"]`)
      const th = document.querySelector(`.with-fixed-header th[data-col-order="${this.$attrs['data-col-order']}"]`)
      const elements = [th, fixedTh, ...tds].filter(e => e)
      for (let i = 0; i < elements.length; i++) {
        this.setWidth(elements[i])
      }
    },
    widthForFixed() {
      this.$nextTick(() => {
        const row = document.querySelector(`.with-fixed-header th[data-col-order="${this.$attrs['data-col-order']}"]`)
        this.width = {
          'default': `${row.clientWidth}`
        }
      })
    }
  },
  mounted() {
    this.width = JSON.parse(JSON.stringify(this.column.width))
    if (this.fixed) {
      window.addEventListener('resize', this.widthForFixed)
      window.addEventListener('scroll', this.widthForFixed)
    }
  },
  beforeDestroy() {
    if (this.fixed) {
      window.removeEventListener('resize', this.widthForFixed)
      window.removeEventListener('scroll', this.widthForFixed)
    }
  }
}
</script>

<style scoped>

</style>
