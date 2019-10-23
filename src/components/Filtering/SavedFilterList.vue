<template>
  <div class="main-filter-body p-2 pl-4 pr-4" v-if="activeFilter.search && activeFilter.search.length">
    <div class="selected-filter-container">
      <SavedFilterItem
          v-for="(filter, filterIndex) in activeFilter.search"
          :key="filterIndex"
          :title="activeFilter.title"
          :index="filterIndex"
          :filter="filter"></SavedFilterItem>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SavedFilterList',
  components: {
    SavedFilterItem: () => import('@/components/Filtering/SavedFilterItem')
  },
  computed: {
    ...mapGetters({
      activeFilter: 'filters/activeFilter'
    })
  }
}
</script>

<style scoped>

</style>
