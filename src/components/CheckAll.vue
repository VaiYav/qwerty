<template>
  <tr class="table-grid-row table-grid-row-body">
    <td class="table-grid-cell" colspan="200">
      <b class="table-grid-cell-content align-items-center">
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
export default {
  name: 'CheckAll',
  computed: {
    ...mapGetters({
      pagination: 'externalData/getPagination',
      checkAllEntities: 'table/checkAllEntities'
    }),
    status: {
      get() {
        return this.checkAllEntities
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
    }
  }
}
</script>

<style scoped>

</style>
