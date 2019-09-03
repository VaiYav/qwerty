<template>
  <td
      v-cloak
      class="table-grid-cell"
      :class="{
        pointer: data.editable,
        active: visiblePopover
      }">
    <component v-if="component" :data="data" :rowIndex="$attrs['data-cellindex']" :is="component"/>
    <div v-if="!component" class="table-grid-cell-content">
      <custom
          v-if="type === 'custom'"
          :data="data.formatted">
      </custom>
       <component
           :is="type"
           v-else-if="type === 'currency'"
           :sign="data.inLineEditingModalSuffix"
           :data="data.value">
       </component>
      <component
          :is="type"
          v-else-if="type === 'chart'"
          :data="data.data">
       </component>
      <component
          :is="type"
          v-else-if="data.formatted"
          :data="data.formatted">
      </component>
      <component
          :is="type"
          v-else
          :data="data.value">
      </component>
      <VIcon
          v-if="data.editable || visiblePopover"
          class="ml-1 edit-pencil"
          name="pencil-alt" />
    </div>
    <button
        :id="`${$attrs['data-cellindex']}-${id.value}`"
        v-if="data.editable"
        v-b-tooltip.hover.d300
        :title="data.value"
        class="position-absolute cell-edit-button"></button>
    <b-popover
        ref="popover"
        v-if="data.editable"
        @show="() => {
          if (!this.multiModalAllowed) {
            this.closeEditMenu()
          }
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
          <span class="suffix" v-if="data.inLineEditingModalSuffix">
            <VIcon :name="data.inLineEditingModalSuffix"></VIcon>
          </span>
        </div>
        <div class="d-flex justify-content-end mt-1">
          <b-button @click="closePopover" class="mr-1 pointer" variant="danger">
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
    string: () => import('@/components/TableBody/Cell/string'),
    int: () => import('@/components/TableBody/Cell/string'),
    float: () => import('@/components/TableBody/Cell/string'),
    currency: () => import('@/components/TableBody/Cell/currency'),
    boolean: () => import('@/components/TableBody/Cell/boolean'),
    chart: () => import('@/components/TableBody/Cell/chart'),
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
      this.closePopover()
      this.$root.$emit('bv::hide::popover')
    },
    closePopover() {
      this.visiblePopover = false
      if (this.data.editable) {
        this.$refs.popover.$emit('close')
      }
    }
  }
}
</script>

<style scoped>

</style>
