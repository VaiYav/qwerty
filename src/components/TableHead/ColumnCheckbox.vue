<template>
  <b-form-checkbox
      v-model="status"
      name="entity"
      value="checked"
      unchecked-value="not_checked"
      class="table-checkbox"
      :indeterminate="isIndeterminate"
      @change="changeStatus"
  ></b-form-checkbox>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ColumnCheckbox',
  computed: {
    ...mapGetters({
      selectedRow: 'table/getSelectedRow',
      allData: 'externalData/getData'
    }),
    isIndeterminate() {
      return (Boolean(this.selectedRow.length) && this.selectedRow.length !== this.allData.length)
    },
    status: {
      get() {
        if (this.allData.length > 0 && this.selectedRow.length === this.allData.length) return 'checked'
        else return 'not_checked'
      },
      set(value) {}
    }
  },
  methods: {
    ...mapActions({
      selectAllRow: 'table/selectAllRow',
      toggleCheckAll: 'table/toggleCheckAll'
    }),
    changeStatus(value) {
      this.selectAllRow({
        value,
        rowIndex: 'All',
        data: value === 'checked' ? this.allData : []
      })
      this.toggleCheckAll({ entity: 'block', data: value === 'checked' })
      if (value === 'not_checked') {
        this.toggleCheckAll({ entity: 'entities', data: false })
      }
    }
  }
}
</script>

<style scoped>
