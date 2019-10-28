<template>
  <div class="main-filter-container">
    <div class="main-filter-head d-flex align-items-start p-0 m-0 flex-column">
      <h3 class="main-filter__sub-title pl-2 pt-1">{{$t('filter.title')}}</h3>
      <span
          :class="{ active: activeFilter.title === filter.title }"
          @click="selectFilter"
          class="filter-list-item pointer w-100 p-1 pl-4">{{$t('filter.currentFilter')}}</span>
    </div>
    <div class="main-filter-body p-0">
      <h3 class="main-filter__sub-title pl-2">{{$t('filter.savedFilter')}}</h3>
      <ul class="filter-list-container">
        <FilterListItem
            v-for="(filter, filterIndex) in savedFilters"
            :editMode="editMode"
            :index="filterIndex"
            :filter="filter"
            :key="filterIndex" />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { cloneDeep } from '@/utils'
import unsavedModifications from '@/mixins/unsavedModifications'

export default {
  name: 'FilterList',
  mixins: [unsavedModifications],
  components: {
    FilterListItem: () => import('@/components/Filtering/FilterListItem')
  },
  data() {
    return {
      filter: {
        title: 'Current filter',
        search: []
      }
    }
  },
  computed: {
    ...mapGetters({
      activeFilter: 'filters/activeFilter',
      savedFilters: 'filters/savedFilters',
      defaultSavedFilters: 'filters/defaultSavedFilters',
      editMode: 'filters/editMode'
    })
  },
  methods: {
    ...mapActions({
      chooseFilter: 'filters/chooseFilter',
      resetFilter: 'filters/resetFilter',
      setDefaultSavedFilters: 'filters/setDefaultSavedFilters',
      toggleEditMode: 'filters/toggleEditMode',
      cloneSavedFilters: 'filters/cloneSavedFilters'
    }),
    selectFilter() {
      this.openUnsavedModificationModal()
        .then(() => {
          this.chooseFilter(cloneDeep(this.filter))
            .then(() => {
              this.cloneSavedFilters()
            })
        })
    },
    toggleEdit() {
      this.toggleEditMode(!this.editMode)
      if (this.editMode) {
        // this.setDefaultSavedFilters(cloneDeep(this.savedFilters))
      } else {
        this.resetFilter()
        this.$store.commit('filters/SET_FILTERS', cloneDeep(this.defaultSavedFilters))
      }
    }
  }
}
</script>

<style scoped>

</style>
