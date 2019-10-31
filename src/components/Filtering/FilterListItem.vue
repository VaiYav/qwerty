<template>
  <li
      @click.stop="selectFilter"
      class="filter-list-item pointer p-1 pl-4"
      :class="{ active: activeFilter.title === filter.title }"
  >
    <span class="d-flex justify-content-between align-items-center">
      <span>{{filter.title}}</span>
      <img
          v-if="activeFilter.title === filter.title && activeFilter.isDefault"
          :src="require('@/assets/push-pin.svg')"
          class="filter-pin"
          alt="">
      <span>
        <span @click.stop="openContextMenu">
          <VIcon class="mr-1 text-primary" name="bars"></VIcon>
        </span>
        <div @click.stop v-show="filterContextMenu" class="filter-context-container">
          <ul>
            <li @click="openRenameModal">{{$t('filter.renameFilter')}}</li>
            <li @click="openDeleteModal">{{$t('filter.deleteFilter')}}</li>
            <li
                v-if="activeFilter.title === filter.title && activeFilter.isDefault"
                @click="removeAsStandard">{{$t('filter.removeAsStandard')}}</li>
            <li
                v-else
                @click="defineAsStandard">{{$t('filter.defineAsStandard')}}</li>
          </ul>
        </div>
      </span>
      <b-modal centered size="sm" v-model="renameFilterModal" :title="$t('filter.renameFilter')">
      <b-form-group
          class="mr-2"
          id="fieldset-horizontal"
          label-for="filterName"
          :label="$t('filter.filterName')"
      >
        <b-form-input v-model="filterName" id="filterName"></b-form-input>
      </b-form-group>
      <template v-slot:modal-footer="{ ok, cancel }">
        <b-container class="main-filter" fluid>
          <b-row>
            <b-col offset-md="8" cols="12" md="4" class="p-1">
              <b-button size="sm" class="w-100 h-100" variant="secondary" @click="saveFilter">{{$t('button.save')}}</b-button>
            </b-col>
          </b-row>
        </b-container>
      </template>
    </b-modal>
      <b-modal centered size="sm" v-model="deleteFilterModal" :title="$t('filter.renameFilter')">
     <span class="filter-modal-text">{{$t('filter.deleteModalText')}}</span>
      <template v-slot:modal-footer="{ ok, cancel }">
        <b-container class="main-filter" fluid>
          <b-row>
            <b-col offset-md="8" cols="12" md="4" class="p-1">
              <b-button size="sm" class="w-100 h-100 p-0" variant="secondary" @click="removeFilter">{{$t('button.delete')}}</b-button>
            </b-col>
          </b-row>
        </b-container>
      </template>
    </b-modal>
    </span>
  </li>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { cloneDeep } from '@/utils'
import unsavedModifications from '@/mixins/unsavedModifications'
export default {
  name: 'FilterListItem',
  mixins: [unsavedModifications],
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
      renameFilterModal: false,
      deleteFilterModal: false,
      filterName: '',
      filterContextMenu: false
    }
  },
  methods: {
    ...mapActions({
      chooseFilter: 'filters/chooseFilter',
      removeSavedFilter: 'filters/removeSavedFilter',
      renameFilter: 'filters/renameFilter',
      toggleEditMode: 'filters/toggleEditMode',
      saveFilters: 'filters/saveFilters',
      cloneSavedFilters: 'filters/cloneSavedFilters',
      toggleStandardFilter: 'filters/toggleStandardFilter'
    }),
    selectFilter() {
      if (this.activeFilter.title === this.filter.title) return
      return new Promise((resolve) => {
        this.openUnsavedModificationModal()
          .then(() => {
            this.chooseFilter(cloneDeep(this.filter))
              .then(() => {
                this.cloneSavedFilters()
                resolve()
              })
            this.filterContextMenu = false
          })
      })
    },
    removeFilter() {
      this.removeSavedFilter({ data: this.filter, index: this.index })
      this.deleteFilterModal = false
    },
    openContextMenu() {
      this.filterContextMenu = !this.filterContextMenu
    },
    openRenameModal() {
      this.filterName = this.filter.title
      this.renameFilterModal = true
      this.filterContextMenu = false
    },
    saveFilter() {
      this.saveFilters({ oldTitle: this.filter.title, data: this.filter.search, newTitle: this.filterName })
        .then(() => {
          this.$bvToast.toast(`${this.$t('filter.filterWasSaved')}`, {
            title: `${this.$t('filter.saveFilter')}`,
            autoHideDelay: 5000,
            variant: 'success',
            appendToast: true
          })
          this.renameFilterModal = false
        })
    },
    openDeleteModal() {
      this.deleteFilterModal = true
      this.filterContextMenu = false
    },
    defineAsStandard() {
      this.chooseFilter(cloneDeep(this.filter))
        .then(() => {
          this.cloneSavedFilters()
          this.toggleStandardFilter(true)
        })
      this.filterContextMenu = false
    },
    removeAsStandard() {
      this.toggleStandardFilter(false)
      this.filterContextMenu = false
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
  .filter-modal-text {
    display: block;
    color: #5e6164;
    font-family: Roboto, sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
  }
</style>
