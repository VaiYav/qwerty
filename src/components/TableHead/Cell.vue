<template>
  <th
      class="table-grid-cell-head"
      :class="{ draggable }"
      :style="width">
    <div
        class="table-grid-cell-head-container">
      <span
          v-if="visibleText"
          v-b-tooltip.hover
          :title="$t(`columns.${columnKey}`)"
          class="table-grid-head-title">{{ $t(`columns.${columnKey}`) }}</span>
      <slot />
    </div>
  </th>
</template>
<script>
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
      default: () => ({})
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
      width: {}
    }
  },
  watch: {
    columns: {
      handler() {
        if (this.fixed) {
          this.getWidth()
        }
      }
    }
  },
  methods: {
    getWidth() {
      this.$nextTick(() => {
        const row = document.querySelector(`.with-fixed-header th[data-col-order="${this.$attrs['data-col-order']}"]`)
        if (!row) return
        this.width = {
          'width': `${row.clientWidth}px`,
          'min-width': `${row.clientWidth}px`,
          'max-width': `${row.clientWidth}px`
        }
      })
    }
  },
  created() {
    if (this.fixed) {
      this.getWidth()
      window.addEventListener('resize', this.getWidth)
      window.addEventListener('scroll', this.getWidth)
    }
  }
}
</script>

<style scoped>

</style>
