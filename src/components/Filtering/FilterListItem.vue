<template>
  <li
      @click.capture="selectFilter"
      class="filter-list-item pointer"
      :class="{ active: activeFilter.title === filter.title }"
  >
    <span class="d-flex justify-content-between align-items-center">
      <span>{{filter.title}}</span>
      <span v-if="editMode">
        <span @click.capture="renameSavedFilter">
          <VIcon class="mr-1" name="pencil-alt"></VIcon>
        </span>
        <span @click="removeFilter">
          <VIcon class="ml-1 mr-1" name="times"></VIcon>
        </span>
      </span>
    </span>
    <b-modal @hide="hideModal" v-model="renameModal" :title="$t('filter.renameModal')">
      <b-form-input v-model="modalTitle"></b-form-input>
      <template v-slot:modal-footer="{ ok, cancel }">
        <b-button size="sm" variant="success" @click="saveTitle">{{$t('button.save')}}</b-button>
      </template>
    </b-modal>
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
      modalTitle: ''
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
    },
    removeFilter() {
      this.removeSavedFilter({ data: this.filter, index: this.index })
    },
    renameSavedFilter() {
      this.renameModal = true
      this.modalTitle = this.filter.title
    },
    hideModal() {
      this.modalTitle = ''
    },
    saveTitle() {
      this.renameFilter({ oldVal: this.filter.title, newVal: this.modalTitle })
      this.renameModal = false
      this.toggleEditMode(false)
    }
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
