<template>
  <div class="selected-filter-item mb-2">
    <div class="selected-filter-item__head">
      <span>{{$t('filter.filter', { number: index + 1 }) }}</span>
      <b class="ml-2">{{ $t(`columns.${filter.column}`) }}</b>
    </div>
    <div class="selected-filter-item__body">
      <b-container class="bv-example-row">
        <b-row class="text-center align-items-center">
          <b-col cols="12" xs="12" md="6" class="pl-0 mb-1">
            <b-form-select @change="value = ''" @input="setActiveFilter" v-model="selected" :options="getAvailableFilterTypes"></b-form-select>
          </b-col>
          <b-col cols="10" xs="10" md="4" class="pl-0 mb-1">
            <div class="d-flex align-items-center">
              <b-input-group class="align-items-center">
                <b-form-input :disabled="!selected" @input="setActiveFilter" v-model="value"></b-form-input>
                <b-input-group-append is-text v-if="findColumnType === 'currency'">
                  <span class="suffix">
                    <VIcon class="ml-1" name="euro-sign" />
                  </span>
                </b-input-group-append>
              </b-input-group>
            </div>
          </b-col>
          <b-col cols="2" xs="2" md="2" class="pl-0 mb-1">
            <span @click="removeFilterColumn">
              <VIcon class="pointer" name="times"></VIcon>
            </span>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { cloneDeep } from '../../utils'
export default {
  name: 'SavedFilterItem',
  props: {
    index: {
      type: [Number, String],
      default: '1'
    },
    title: {
      type: String,
      default: ''
    },
    filter: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      selected: '',
      value: ''
    }
  },
  computed: {
    ...mapGetters({
      filterTypes: 'filters/getFilterTypes',
      activeFilter: 'filters/activeFilter',
      getAllColumns: 'externalData/getAllColumns'
    }),
    findColumnType() {
      return this.getAllColumns.find(c => c.key === this.filter.column).type
    },
    getAvailableFilterTypes() {
      return this.filterTypes.filter(ft => {
        if (this.findColumnType === 'number' ||
          this.findColumnType === 'float' ||
          this.findColumnType === 'int' ||
          this.findColumnType === 'currency') return ft.type === 'number'
        return ft.type === this.findColumnType
      })
    }
  },
  methods: {
    ...mapActions({
      removeFilter: 'filters/removeFilter',
      chooseFilter: 'filters/chooseFilter'
    }),
    setFilter() {
      this.selected = this.filter.type
      this.value = this.filter.value
    },
    removeFilterColumn() {
      this.removeFilter(this.index)
    },
    setActiveFilter() {
      const clonedState = cloneDeep(this.activeFilter)
      Object.assign(clonedState.search[this.index], { type: this.selected, value: this.value })
      this.chooseFilter(clonedState)
    }
  },
  watch: {
    filter: {
      handler() {
        this.setFilter()
      },
      deep: true
    }
  },
  created() {
    this.setFilter()
  }
}
</script>

<style scoped>

</style>
