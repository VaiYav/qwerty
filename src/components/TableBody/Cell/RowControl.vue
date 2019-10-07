<template>
    <div v-cloak class="table-grid-cell-content context-container">
      <RowCheckbox
          :rowIndex="rowIndex"
          :data="data"
          :id="data.id.value" />
      <VIcon
          :id="`${data.id.value}`"
          name="bars"
          class="pointer" />
      <b-popover :target="`${data.id.value}`" triggers="focus">
        <template slot="title">{{$t('form.menu')}}</template>
        <b-list-group>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#" active>Link with active state</b-list-group-item>
          <b-list-group-item href="#">Action links are easy</b-list-group-item>
          <b-list-group-item href="#foobar" disabled>Disabled link</b-list-group-item>
        </b-list-group>
      </b-popover>
    </div>
</template>

<script>
export default {
  name: 'RowControl',
  components: {
    RowCheckbox: () => import('@/components/TableBody/Cell/RowCheckbox')
  },
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    rowIndex: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
