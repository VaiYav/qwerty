<template>
  <li
      @click.stop="selectFilter"
      class="filter-list-item pointer p-1 pl-4"
      :class="{ active: activeFilter.title === filter.title }"
  >
    <span class="d-flex justify-content-between align-items-center">
      <span>{{filter.title}}</span>
      <span>
        <span @click.stop="openContextMenu">
          <VIcon class="mr-1 text-primary" name="bars"></VIcon>
        </span>
        <div @click.stop v-show="filterContextMenu" class="filter-context-container">
          <ul>
            <li>{{$t('filter.renameFilter')}}</li>
            <li>{{$t('filter.deleteFilter')}}</li>
            <li>{{$t('filter.defineAsStandard')}}</li>
          </ul>
        </div>
      </span>
    </span>
  </li>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { cloneDeep } from '@/utils'
export default {
  name: 'FilterListItem',
  props: {
    filter: {
      type: Object,
      default: () => ({})
    },
    editMode: {
      type: Boolean,
      default: false
    },
    index: {
      type: [String, Number],
      default: '0'
    }
  },
  data() {
    return {
      active: false,
      renameModal: false,
      modalTitle: '',
      filterContextMenu: false
    }
  },
  methods: {
    ...mapActions({
      chooseFilter: 'filters/chooseFilter',
      removeSavedFilter: 'filters/removeSavedFilter',
      renameFilter: 'filters/renameFilter',
      toggleEditMode: 'filters/toggleEditMode'
    }),
    selectFilter() {
      this.chooseFilter(cloneDeep(this.filter))
      this.filterContextMenu = false
    },
    removeFilter() {
      this.removeSavedFilter({ data: this.filter, index: this.index })
    },
    openContextMenu() {
      this.filterContextMenu = !this.filterContextMenu
    }
  },
  computed: {
    ...mapGetters({
      activeFilter: 'filters/activeFilter'
    })
  },
  created() {
    document.addEventListener('click', () => {
      this.filterContextMenu = false
    })
  }
}
</script>

<style lang="scss" scoped>
  .filter-context-container {
    position: absolute;
    width: 143px;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, .16);
    border: 1px solid #707070;
    background-color: #fff;
    right: 6px;
    padding: 18px 13px 16px 13px;
    cursor: initial;
    ul {
      padding: 0;
      list-style-type: none;
      li {
        color: #343434;
        font-family: Roboto, sans-serif;
        font-size: 13px;
        font-weight: 500;
        line-height: 17px;
        padding-bottom: 6px;
        cursor: pointer;
        &:last-child {
          padding-bottom: 0;
        }
      }
    }
  }
</style>
