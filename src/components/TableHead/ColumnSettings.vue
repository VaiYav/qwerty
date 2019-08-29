<template>
  <b-modal
      id="modal-column-settings"
      :title="$t(`columns.column_settings`)"
      hide-backdrop
      content-class="shadow"
      @ok="saveChanges">
    <b-container fluid>
      <b-form-checkbox-group :checked="sortedByOrder" @input="changeColumn">
        <b-form-checkbox
            v-for="column in filteredColumns"
            :key="column.key"
            :value="column"
            class="setting-column-checkbox"
        >{{$t(`columns.${column.key}`)}}</b-form-checkbox>
      </b-form-checkbox-group>
    </b-container>
    <template slot="modal-ok">
      <VIcon name="save"></VIcon>
    </template>
  </b-modal>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { arrayDiffByKey } from '@/utils'
export default {
  name: 'ColumnSettings',
  data() {
    return {
      selected: []
    }
  },
  computed: {
    ...mapGetters({
      allColumns: 'externalData/getAllColumns',
      sortedByOrder: 'externalData/getSortedByOrder'
    }),
    filteredColumns() {
      return this.allColumns.filter(c => c.settable)
    }
  },
  methods: {
    ...mapActions({
      changeColumns: 'externalData/changeColumns'
    }),
    changeColumn(val) {
      this.selected = val.map((v, index) => {
        v.order = index + 1
        v.visible = true
        return v
      })
    },
    saveChanges() {
      this.changeColumns([].concat(this.selected, arrayDiffByKey('key', this.selected, this.allColumns).map(c => {
        c.visible = false
        return c
      })))
    }
  }
}
</script>

<style scoped>

</style>
