<template>
  <tr class="table-grid-row table-grid-row-body mb-0 mt-4">
    <td
        class="table-grid-cell"
        colspan="200"
        style="background: #fff; height: 56px; z-index: 10;"
        :style="addFixed">
      <b class="table-grid-cell-content align-items-center check-all-content" :style="style">
        {{$t('form.checkAll', { qty: pagination.total })}}
      <b-form-checkbox
          v-model="status"
          name="entity"
          value="checked"
          unchecked-value="not_checked"
          class="table-checkbox ml-1"
          @change="changeStatus"
      ></b-form-checkbox>
      </b>
    </td>
    <td
        colspan="200"
        v-if="!getFixedHeaderStatus"
        class="table-grid-cell"
        style="background: #fff; height: 56px;"></td>
  </tr>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { EventBus } from '@/EventBus'
export default {
  name: 'CheckAll',
  props: {
    isHaveSummary: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      style: {
        left: '0px'
      }
    }
  },
  computed: {
    ...mapGetters({
      pagination: 'externalData/getPagination',
      checkAllEntities: 'table/checkAllEntities',
      getFixedHeaderStatus: 'table/getFixedHeaderStatus'
    }),
    status: {
      get() {
        return this.checkAllEntities ? 'checked' : 'not_checked'
      },
      set(value) {}
    },
    addFixed() {
      if (this.getFixedHeaderStatus) return
      const table = document.querySelector('.table-grid.main-table')
      const tablePosition = table.getBoundingClientRect()
      return {
        position: 'fixed',
        width: '100%',
        top: this.isHaveSummary ? '110px' : '53px',
        padding: 0,
        'border-bottom': '2px solid #dee2e6',
        left: tablePosition.left + 'px'
      }
    }
  },
  methods: {
    ...mapActions({
      toggleCheckAll: 'table/toggleCheckAll'
    }),
    changeStatus(value) {
      this.toggleCheckAll({ entity: 'entities', data: value === 'checked' })
    },
    setInMiddlePage() {
      const table = document.querySelector('.table-grid.main-table')
      const windowWidth = window.innerWidth
      const fixedHeader = document.querySelector('.fixed-header-container .table')
      const tablePosition = table.getBoundingClientRect()
      if (fixedHeader) {
        this.style.left = (windowWidth / 4) + 'px'
      } else {
        this.style.left = (windowWidth / 3) - tablePosition.left + 'px'
      }
    }
  },
  created() {
    this.setInMiddlePage()
    EventBus.$on('handle-horizontal-scroll', () => {
      this.setInMiddlePage()
    })
    window.addEventListener('resize', this.setInMiddlePage)
    window.addEventListener('scroll', this.setInMiddlePage)
  },
  beforeDestroy() {
    EventBus.$off('handle-horizontal-scroll', () => {
      this.setInMiddlePage()
    })
    window.removeEventListener('resize', this.setInMiddlePage)
  }
}
</script>

<style lang="scss" scoped>
  .check-all-content {
    position: absolute;
    top: 0;
  }
</style>
