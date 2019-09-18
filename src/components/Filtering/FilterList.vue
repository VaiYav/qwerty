<template>
  <div class="main-filter-container">
    <div class="border-bottom main-filter-head d-flex justify-content-between align-items-center p-2 m-0">
      <b>{{$t('filter.mySavedFilters', { qty: savedFilters.length })}}</b>
      <span @click="toggleEdit">
        <VIcon class="pointer" :name="editMode ? 'arrow-left' : 'tools'"></VIcon>
      </span>
    </div>
    <div class="main-filter-body p-1">
      <ul class="filter-list-container">
        <FilterListItem v-for="(filter, filterIndex) in savedFilters" :editMode="editMode" :index="filterIndex" :filter="filter" :key="filterIndex" />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { cloneDeep } from '@/utils'
export default {
  name: 'FilterList',
  components: {
    FilterListItem: () => import('@/components/Filtering/FilterListItem')
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      savedFilters: 'filters/savedFilters',
      defaultSavedFilters: 'filters/defaultSavedFilters',
      editMode: 'filters/editMode'
    })
  },
  methods: {
    ...mapActions({
      resetFilter: 'filters/resetFilter',
      setDefaultSavedFilters: 'filters/setDefaultSavedFilters',
      toggleEditMode: 'filters/toggleEditMode'
    }),
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
