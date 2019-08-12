<template>
  <b-form-checkbox
      v-model="status"
      name="entity"
      value="checked"
      unchecked-value="not_checked"
      class="table-checkbox"
      @change="changeStatus"
  ></b-form-checkbox>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'RowCheckbox',
  props: {
    rowIndex: {
      type: [String, Number],
      default: ''
    },
    data: {
      type: Object,
      default: () => ({})
    },
    id: {
      type: [Number, String],
      default: ''
    }
  },
  computed: {
    ...mapGetters({
      selectedRow: 'table/getSelectedRow'
    }),
    status: {
      get(val) {
        const entity = this.selectedRow.find(sr => sr.id.value === this.id)
        if (entity) return 'checked'
        else return 'not_checked'
      },
      set(value) {}
    }
  },
  methods: {
    ...mapActions({
      selectRow: 'table/selectRow'
    }),
    changeStatus(value) {
      this.selectRow({
        value,
        rowIndex: this.rowIndex,
        data: this.data,
        id: this.id
      })
    }
  }
}
</script>

<style scoped>

</style>
