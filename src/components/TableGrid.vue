<template>
  <div
    class="table table-container"
    :class="{
      'loader-active': loader,
    }">
    <FixedColumn :columns="columns" :config="config" position="left" :data="data" ref="fixed-left" />
    <vueScroll @handle-scroll="handleHorizontalScroll">
      <MainTable :columns="columns" :data="data" :config="config" />
      <ColumnSettings />
    </vueScroll>
    <FixedColumn :columns="columns" :config="config" position="right" :data="data" ref="fixed-right" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { EventBus } from '../EventBus'

export default {
  name: 'TableGrid',
  props: {
    columns: {
      type: Array,
      default: () => ([])
    },
    data: {
      type: Array,
      default: () => ([])
    },
    fixedHeader: {
      type: Boolean,
      default: true
    },
    config: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    ColumnSettings: () => import('@/components/TableHead/ColumnSettings'),
    FixedColumn: () => import('@/components/FixedColumn'),
    MainTable: () => import('@/components/MainTable')
  },
  computed: {
    ...mapGetters({
      loader: 'externalData/getLoader'
    }),
    getColumns() {
      return this.columns.filter(c => !c.fixed || c.fixed && !c.fixed.active)
    }
  },
  methods: {
    handleHorizontalScroll() {
      EventBus.$emit('handle-horizontal-scroll')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
