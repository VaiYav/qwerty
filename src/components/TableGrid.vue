<template>
  <div
    class="table table-container"
    :class="{
      'loader-active': loader,
    }">
    <FixedColumn
        v-if="!isMobile"
        :columns="columns"
        :config="config"
        position="left"
        :data="data"
        ref="fixed-left" />
    <vueScroll @handle-scroll="handleHorizontalScroll" ref="vs">
      <MainTable :columns="columns" :data="data" :config="config" />
      <ColumnSettings />
    </vueScroll>
    <FixedColumn
        v-if="!isMobile"
        :columns="columns"
        :config="config"
        position="right"
        :data="data"
        ref="fixed-right" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { EventBus } from '../EventBus'
import ResizeMixin from '@/mixins/resizeHandler'
export default {
  name: 'TableGrid',
  mixins: [ResizeMixin],
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
      loader: 'externalData/getLoader',
      isMobile: 'app/isMobile',
      sortedByOrder: 'externalData/getSortedByOrder'
    })
  },
  methods: {
    handleHorizontalScroll() {
      EventBus.$emit('handle-horizontal-scroll')
    }
  },
  watch: {
    sortedByOrder: {
      handler(newVal, oldVal) {
        if (newVal.length > oldVal.length) {
          this.$refs['vs'].scrollTo({ x: 2000 }, 1000, 'easeInQuad')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
