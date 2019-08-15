<template>
  <td
      :id="`${$attrs['data-cellindex']}-${id.value}`"
      class="table-grid-cell"
      @mouseover.prevent.capture="visiblePencil = true"
      @mouseleave="visiblePencil = false"
      :class="{ pointer: data.editable }">
    <span class="table-grid-cell-content">
      <custom
          v-if="type === 'custom'"
          :data="data.formatted"></custom>
      <span
          v-else-if="data.formatted"
          v-html="data.formatted"></span>
      <span v-else>{{data.value}}</span>
    </span>
    <VIcon
        v-if="data.editable && visiblePencil || visiblePopover"
        class="ml-1 position-absolute edit-pencil"
        name="pencil-alt" />
    <b-popover
        v-if="data.editable"
        @show="() => {
          this.value = data.value
          this.visiblePopover = true
        }"
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
    Custom: () => import('@/components/TableBody/Cell/custom')
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
    }
  },
  data() {
    return {
      visiblePencil: false,
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
    }
  }
}
</script>

<style scoped>

</style>
