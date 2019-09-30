<template>
  <div class="position-relative">
    <b-input-group class="flex-nowrap">
      <TagInput
          @blur="blur"
          v-model="getTags"
          field="sign"
          @focus="focus"></TagInput>
      <b-input-group-append>
        <b-button variant="success">
          <VIcon name="search"></VIcon>
        </b-button>
      </b-input-group-append>
    </b-input-group>
    <div v-show="selectFilter" class="filter-pre-modal-container position-absolute">
      <a href="" @click.prevent="toggleFilters(true)">
        {{$t('filter.useFilters')}}
      </a>
    </div>
    <FilterModal :show="showFilters" @close="closeModal"></FilterModal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Filtering',
  components: {
    FilterModal: () => import('@/components/Filtering/FilterModal'),
    TagInput: () => import('@/components/TagInput')
  },
  data() {
    return {
      selectFilter: false,
      showFilters: false
    }
  },
  methods: {
    ...mapActions({
      removeSearchFilters: 'filters/removeSearchFilters',
      setRouter: 'routing/setRouter'
    }),
    focus() {
      this.selectFilter = true
    },
    blur() {
      setTimeout(() => {
        this.selectFilter = false
      }, 200)
    },
    toggleFilters(status) {
      this.showFilters = status
      this.selectFilter = false
    },
    closeModal(val) {
      this.showFilters = val
    }
  },
  computed: {
    ...mapGetters({
      searchFilters: 'filters/searchFilters',
      filterTypes: 'filters/getFilterTypes',
      getAllColumns: 'externalData/getAllColumns'
    }),
    getTags: {
      get() {
        const tags = []
        this.searchFilters.search.map(sf => {
          const entity = this.filterTypes.find(ft => ft.value === sf.type)
          const sign = this.getAllColumns.find(ac => ac.key === sf.column)
          tags.push({ column: sf.column, value: sf.value, type: sf.type, sign: `${this.$t(`columns.${sf.column}`)} ${entity && entity.sign ? entity.sign : '|'} ${entity && entity.prefixText ? entity.prefixText : ''}${sf.value}${entity && entity.suffixText ? entity.suffixText : ''} ${sign && sign.type === 'currency' ? '€' : ''}` })
        })
        return tags
      },
      set(val) {
        this.removeSearchFilters(val)
          .then((data) => this.setRouter({ data, key: 'filters', func: 'filters/searchByFilter' }, { root: true }))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
