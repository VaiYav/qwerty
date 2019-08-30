<template>
  <td
      v-cloak
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
      <VIcon
          v-if="data.editable || visiblePopover"
          class="ml-1 edit-pencil"
          name="pencil-alt" />
    </span>
    <button
        @blur="blurCell"
        :id="`${$attrs['data-cellindex']}-${id.value}`"
        v-if="data.editable"
        class="position-absolute cell-edit-button"></button>
    <b-popover
        v-if="data.editable"
        @show="() => {
          this.value = data.value
          this.visiblePopover = true
        }"
        placement="bottom"
        :show="visiblePopover"
        @hide="visiblePopover = false"
        :target="`${$attrs['data-cellindex']}-${id.value}`"
        :triggers="data.editable ? 'click' : ''">
      <template slot="title">{{label}}</template>
      <b-form class="p-1" @submit="onSubmit">
        <div class="d-flex align-items-center cell-editing">
          <span class="prefix" v-if="data.inLineEditingModalPrefix" v-html="data.inLineEditingModalPrefix"></span>
          <b-form-input v-model="value"></b-form-input>
          <span class="suffix" v-if="data.inLineEditingModalSuffix" v-html="data.inLineEditingModalSuffix"></span>
        </div>
        <div class="d-flex justify-content-end mt-1">
          <b-button @click="visiblePopover = false" class="mr-1 pointer" variant="danger">
            <VIcon name="times" />
          </b-button>
          <b-button class="pointer" type="submit" variant="success">
            <VIcon name="check" />
          </b-button>
        </div>
      </b-form>
    </b-popover>
  </td>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

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
    },
    label: {
      type: String,
      default: ''
    },
    multiModalAllowed: {
      type: [Boolean, Object],
      default: false
    }
  },
  data() {
    return {
      visiblePopover: false,
      value: ''
    }
  },
  computed: {
    ...mapGetters({
      loader: 'externalData/getLoader'
    })
  },
  watch: {
    loader: {
      handler() {
        this.closeEditMenu()
      }
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
      this.visiblePopover = false
      this.$root.$emit('bv::hide::popover')
    },
    blurCell() {
      if (!this.multiModalAllowed) {
        this.visiblePopover = false
      }
    }
  }
}
</script>

<style scoped>

</style>
