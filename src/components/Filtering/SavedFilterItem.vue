<template>
  <div class="selected-filter-item">
    <div class="selected-filter-item__head">
      <span>{{$t('filter.filter', { number: index + 1 }) }}</span>
      <b class="ml-2">{{ $t(`columns.${filter.column}`) }}</b>
    </div>
    <div class="selected-filter-item__body">
      <b-container class="bv-example-row">
        <b-row class="text-center align-items-center">
          <b-col cols="12" xs="12" md="6" class="pl-0 d-flex mb-sm-2 mb-md-0">
            <b-form-select @change="predefinedFields" @input="setActiveFilter" v-model="selected" :options="getAvailableFilterTypes"></b-form-select>
          </b-col>
          <b-col cols="10" xs="10" md="4" v-if="filter.type === 'is equal to'" class="pl-0">
            <div class="d-flex align-items-center">
              <b-input-group class="align-items-center">
                <b-form-select :disabled="!selected" v-model="value" @input="setActiveFilter" :options="options"></b-form-select>
              </b-input-group>
            </div>
          </b-col>
          <b-col v-else cols="10" xs="10" :md="filter.type === 'is between' ? 2 : 4" class="pl-0">
            <div class="d-flex align-items-center">
              <b-input-group class="align-items-center">
                <b-form-input :disabled="!selected" @input="setActiveFilter" v-model="value"></b-form-input>
                <b-input-group-append is-text v-if="isCurrency">
                  <span class="suffix">
                    <VIcon name="euro-sign" />
                  </span>
                </b-input-group-append>
              </b-input-group>
            </div>
          </b-col>
          <span class="mr-3" v-if="filter.type === 'is between'">und</span>
          <b-col cols="10" xs="10" :md="filter.type === 'is between' ? 2 : 4" class="pl-0 d-flex" v-if="filter.type === 'is between'">
            <b-input-group class="align-items-center">
              <b-form-input :disabled="!selected" @input="setActiveFilter" v-model="value2"></b-form-input>
              <b-input-group-append is-text v-if="isCurrency">
                  <span class="suffix">
                    <VIcon name="euro-sign" />
                  </span>
              </b-input-group-append>
            </b-input-group>
          </b-col>
          <b-col cols="2" xs="2" :md="filter.type === 'is between' ? 1 : 2" class="pl-0 d-flex align-items-center justify-content-end">
            <span @click="removeFilterColumn" class="pointer close-icon"></span>
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
      value: '',
      value2: '',
      options: [
        { value: 'a', text: 'Summer collection' },
        { value: 'b', text: 'Selected Option' }
      ]
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
    isCurrency() {
      return (this.findColumnType === 'number' ||
        this.findColumnType === 'float' ||
        this.findColumnType === 'int' ||
        this.findColumnType === 'currency')
    },
    getAvailableFilterTypes() {
      return this.filterTypes.filter(ft => {
        if (this.isCurrency) return ft.type === 'number'
        return ft.type === this.findColumnType
      })
    }
  },
  methods: {
    ...mapActions({
      removeFilter: 'filters/removeFilter',
      chooseFilter: 'filters/chooseFilter'
    }),
    predefinedFields() {
      if (this.isCurrency) {
        this.value = '10.00'
        this.value2 = '10.00'
      } else if (this.filter.type === 'is equal to') {
        this.value = 'a'
      } else if (this.findColumnType === 'string') {
        this.value = 'ABC'
      }
      this.setActiveFilter()
    },
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
