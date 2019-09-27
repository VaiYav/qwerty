<template>
  <tr class="table-grid-row table-grid-row-body">
    <td class="table-grid-cell" colspan="200" style="background: #fff; height: 57px;">
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
  </tr>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { EventBus } from '@/EventBus'
export default {
  name: 'CheckAll',
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
      checkAllEntities: 'table/checkAllEntities'
    }),
    status: {
      get() {
        return this.checkAllEntities ? 'checked' : 'not_checked'
      },
      set(value) {}
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
      const tablePosition = table.getBoundingClientRect()
      this.style.left = (windowWidth / 3) - tablePosition.left + 'px'
    }
  },
  created() {
    this.setInMiddlePage()
    EventBus.$on('handle-horizontal-scroll', () => {
      this.setInMiddlePage()
    })
    window.addEventListener('resize', this.setInMiddlePage)
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
