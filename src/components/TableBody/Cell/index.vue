<template>
  <td
      @click="showPopover"
      v-cloak
      :id="`${$attrs['data-cellindex']}-${id.value}`"
      class="table-grid-cell"
      :class="{
        pointer: data.editable,
        active: visiblePopover
      }">
    <component v-if="component" :data="data" :rowIndex="$attrs['data-cellindex']" :is="component"/>
    <span v-if="!component" class="table-grid-cell-content">
      <custom
          v-if="type === 'custom'"
          :data="data.formatted">
      </custom>
      <span
          v-b-tooltip.hover.d300
          :title="data.formatted"
          v-else-if="data.formatted"
          v-html="data.formatted"></span>
      <span
          v-b-tooltip.hover.d300
          :title="data.value"
          v-else>{{data.value}}</span>
    </span>
    <VIcon
        v-if="data.editable || visiblePopover"
        class="ml-1 position-absolute edit-pencil"
        name="pencil-alt" />
    <b-popover
        v-if="data.editable && visiblePopover"
        @show="() => {
          this.value = data.value
          this.visiblePopover = true
        }"
        :show="visiblePopover"
        @hide="visiblePopover = false"
        :target="`${$attrs['data-cellindex']}-${id.value}`"
        :triggers="data.editable ? 'click' : ''">
      <template slot="title">{{$t('form.edit')}}</template>
      <b-form class="p-1" @submit="onSubmit">
        <div class="d-flex align-items-center">
          <b-form-input v-model="value"></b-form-input>
          <VIcon v-if="type === 'money'" scale="2" class="ml-1 mr-1" name="euro-sign" />
        </div>
        <div class="d-flex justify-content-end mt-1">
          <b-button @click="closeEditMenu" class="mr-1" variant="danger">
            <VIcon name="times" />
          </b-button>
          <b-button type="submit" variant="success">
            <VIcon name="check" />
          </b-button>
        </div>
      </b-form>
    </b-popover>
  </td>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TableBodyCell',
  components: {
    Custom: () => import('@/components/TableBody/Cell/custom'),
    RowControl: () => import('@/components/TableBody/Cell/RowControl')
  },
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    type: {
      type: String,
      default: ''
    },
    id: {
      type: Object,
      default: () => ({})
    },
    component: {
      type: String,
      default: ''
    },
    fixedColumn: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visiblePopover: false,
      value: ''
    }
  },
  methods: {
    ...mapActions({
      editEntity: 'externalData/editEntity'
    }),
    onSubmit(evt) {
      evt.preventDefault()
      this.editEntity({ value: this.value, id: this.id.value, field: this.$attrs['data-cellindex'] })
      this.$root.$emit('bv::hide::popover')
    },
    closeEditMenu() {
      this.$root.$emit('bv::hide::popover')
    },
    showPopover() {
      this.data.editable ? this.visiblePopover = true : ''
    }
  }
}
</script>

<style scoped>

</style>
