<template>
  <b-modal
      @hide="closeModal"
      class="main-filter"
      size="lg"
      v-model="showFilters"
      centered
      :title="$t('filter.title')">
    <b-container class="main-filter" fluid>
      <b-row>
        <b-col cols="12" md="3" class="p-0">
          <FilterList />
        </b-col>
        <b-col cols="12" md="9" class="p-2 justify-content-between d-flex flex-column">
          <div cols="12">
            <div class="main-filter-head d-flex justify-content-between align-items-center pl-3 mt-2">
              <b>{{$t(`filter.currentFilter`)}}</b>
            </div>
            <SavedFilterList />
            <div class="p-2">
              <b-button
                  @click="openChooseColumn"
                  class="border-0 text-primary bg-transparent d-flex align-items-center text-uppercase p-2 m-0"
                  variant="primary">
                <VIcon name="plus-circle" class="mr-1"></VIcon>
                <span>{{$t('filter.addFilters')}}</span>
              </b-button>
            </div>
          </div>
          <div cols="3" md="12" class="p-0">
            <div class="p-3 pl-2">
              <b-button disabled variant="success" class="pl-4 pr-4">{{$t('filter.saveFilters')}}</b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <ColumnFilterModal
        v-if="chooseFilter"
        @close="closeChooseFilter"
        :show="chooseFilter" />
    <template v-slot:modal-footer="{ ok, cancel }">
      <b-container class="main-filter" fluid>
        <b-row>
          <b-col offset-md="9" cols="12" md="3" class="p-1">
            <b-button size="sm" class="w-100 h-100 p-1" variant="secondary" @click="search">{{$t('button.search')}}</b-button>
          </b-col>
        </b-row>
      </b-container>
    </template>
    </b-modal>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { cloneDeep } from '@/utils'
export default {
  name: 'FilterModal',
  components: {
    FilterList: () => import('@/components/Filtering/FilterList'),
    SavedFilterList: () => import('@/components/Filtering/SavedFilterList'),
    ColumnFilterModal: () => import('@/components/Filtering/ColumnFilterModal')
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showFilters: true,
      chooseFilter: false
    }
  },
  watch: {
    show: {
      handler(val) {
        this.showFilters = val
        // this.setDefaultSavedFilters(cloneDeep(this.savedFilters))
        if (val) {
          this.setActiveFilter(this.searchFilters)
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      savedFilters: 'filters/savedFilters',
      defaultSavedFilters: 'filters/defaultSavedFilters',
      activeFilter: 'filters/activeFilter',
      searchFilters: 'filters/searchFilters'
    })
  },
  methods: {
    ...mapActions({
      resetFilter: 'filters/resetFilter',
      setActiveFilter: 'filters/chooseFilter',
      setDefaultSavedFilters: 'filters/setDefaultSavedFilters',
      createFilter: 'filters/createFilter',
      saveFilters: 'filters/saveFilters',
      searchByFilter: 'filters/searchByFilter',
      setRouter: 'routing/setRouter'
    }),
    createNewFilter() {
      this.createFilter({ title: this.$t('filter.newFilter'), search: this.activeFilter.title ? [] : this.searchFilters.search })
    },
    closeModal() {
      this.$emit('close', false)
      this.showFilters = false
      this.reset()
    },
    reset() {
      return new Promise((resolve, reject) => {
        this.resetFilter()
        this.$store.commit('filters/SET_FILTERS', cloneDeep(this.defaultSavedFilters))
        resolve()
      })
    },
    resetToast() {
      this.$bvToast.toast(`${this.$t('filter.filterWasReset')}`, {
        title: `${this.$t('filter.resetFilter')}`,
        autoHideDelay: 5000,
        variant: 'warning',
        appendToast: true
      })
    },
    resetToDefault() {
      this.reset()
        .then(() => {
          this.resetToast()
        })
    },
    openChooseColumn() {
      this.chooseFilter = true
    },
    closeChooseFilter() {
      this.chooseFilter = false
    },
    saveFilter() {
      this.saveFilters(this.activeFilter)
        .then(() => {
          this.$bvToast.toast(`${this.$t('filter.filterWasSaved')}`, {
            title: `${this.$t('filter.saveFilter')}`,
            autoHideDelay: 5000,
            variant: 'success',
            appendToast: true
          })
        })
    },
    search() {
      this.searchByFilter(this.activeFilter)
      this.$emit('close', false)
      this.showFilters = false
      this.setRouter({ data: this.activeFilter, key: 'filters', func: 'filters/searchByFilter' }, { root: true })
    }
  },
  created() {
    this.setDefaultSavedFilters(cloneDeep(this.savedFilters))
  }
}
</script>

<style scoped>

</style>
