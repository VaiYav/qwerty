<template>
  <b-modal
      @hide="closeModal"
      class="main-filter"
      size="lg"
      v-model="showFilters"
      centered
      title="">
    <b-container class="main-filter" fluid>
      <b-row>
        <b-col cols="12" md="3" class="p-0">
          <FilterList />
        </b-col>
        <b-col cols="12" md="9" class="p-0">
          <div class="border-bottom main-filter-head d-flex justify-content-between align-items-center p-2 m-0">
            <b>{{$t(`filter.searchForFilter`)}}</b>
          </div>
          <SavedFilterList />
          <div class="p-2">
            <b-button @click="openChooseColumn" variant="outline-primary">{{$t('filter.chooseFilter')}}</b-button>
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
          <b-col cols="6" md="3" class="p-1">
            <b-button
                class="w-100 h-100"
                size="sm"
                variant="warning"
                @click="createNewFilter">
              {{$t('button.createNewFilter')}}
            </b-button>
          </b-col>
          <b-col cols="6" md="3" class="p-1">
            <b-button
                class="w-100 h-100"
                size="sm"
                variant="info"
                @click="saveFilter">
              {{$t('button.saveFilter')}}
            </b-button>
          </b-col>
            <b-col cols="6" md="3" class="p-1">
              <b-button
                class="w-100 h-100"
                size="sm"
                variant="danger"
                @click="resetToDefault">
                {{$t('button.resetToDefault')}}
              </b-button>
            </b-col>
          <b-col cols="6" md="3" class="p-1">
            <b-button size="sm" class="w-100 h-100 p-1" variant="success" @click="search">{{$t('button.search')}}</b-button>
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
      showFilters: false,
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
