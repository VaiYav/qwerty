<template>
  <b-modal @hide="closeModal" class="main-filter" size="lg" v-model="chooseFilter" centered :title="$t('filter.filters')">
    <b-container fluid>
      <b-form-checkbox-group :checked="getCheckedValues" @input="changeColumnFilter">
        <b-form-checkbox
            v-for="column in filteredColumns"
            :key="column.key"
            :value="column"
            class="setting-column-checkbox"
        >{{$t(`columns.${column.key}`)}}</b-form-checkbox>
      </b-form-checkbox-group>
    </b-container>
    <template v-slot:modal-footer="{ ok, cancel }">
      <b-button size="sm" variant="secondary" @click="saveSelectedColumn">{{$t('button.select')}}</b-button>
    </template>
  </b-modal>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { cloneDeep } from '@/utils'
export default {
  name: 'ColumnFilterModal',
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      chooseFilter: false,
      selectedColumnFilter: []
    }
  },
  watch: {
    show: {
      handler(val) {
        this.toggleModal(val)
      }
    }
  },
  computed: {
    ...mapGetters({
      allColumns: 'externalData/getAllColumns',
      activeFilter: 'filters/activeFilter'
    }),
    filteredColumns() {
      return this.allColumns.filter(c => c.filterable)
    },
    getCheckedValues() {
      return this.filteredColumns.filter(c => {
        if (this.activeFilter.search) {
          if (this.activeFilter.search.find(af => af.column === c.key)) {
            return c
          }
        }
      })
    }
  },
  methods: {
    ...mapActions({
      saveColumns: 'filters/saveColumns'
    }),
    toggleModal(val) {
      this.chooseFilter = val
    },
    closeModal() {
      this.$emit('close', false)
    },
    changeColumnFilter(payload) {
      this.selectedColumnFilter = payload.map(entity => {
        const activeFilter = this.activeFilter.search.find(af => af.column === entity.key)
        if (activeFilter) {
          return {
            type: activeFilter.type,
            value: activeFilter.value,
            column: activeFilter.column
          }
        } else {
          return {
            type: '',
            value: '',
            column: entity.key
          }
        }
      })
    },
    saveSelectedColumn() {
      this.saveColumns(cloneDeep(this.selectedColumnFilter))
      this.closeModal()
    }
  },
  mounted() {
    this.toggleModal(true)
    this.changeColumnFilter(this.getCheckedValues.map(entity => {
      const activeFilter = this.activeFilter.search.find(af => af.column === entity.key)
      if (activeFilter) {
        return {
          type: activeFilter.type,
          value: activeFilter.value,
          column: activeFilter.column
        }
      }
    }))
  }
}
</script>

<style scoped>

</style>
