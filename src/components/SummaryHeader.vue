<template>
  <tr>
    <td
        v-for="(column, columnKey) in columns"
        :key="columnKey"
        class="p-0"
        :data-cellindex="column.key"
        >
      <div
          class="table-grid-cell table-grid-cell-content"
          :style="{ background: '#eaeaea' }"
          :class="{
        pointer: column.editable
      }">
        <span v-if="column.isSammary" class="table-grid-head-title">
          {{getSummaryData(column.key)}}
          <VIcon v-if="data[0][column.key].inLineEditingModalSuffix" :name="data[0][column.key].inLineEditingModalSuffix"></VIcon>
        </span>
      </div>
    </td>
  </tr>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SummaryHeader',
  props: {
    columns: {
      type: Array,
      default: () => ([])
    }
  },
  computed: {
    ...mapGetters({
      data: 'externalData/getData'
    })
  },
  methods: {
    getSummaryData(key) {
      return this.data.reduce((acc, current) => {
        if (typeof acc !== 'number' && !isFinite(acc)) acc = 0
        acc += +current[key].value
        acc = +acc.toFixed(2)
        return acc
      })
    }
  }
}
</script>

<style scoped>

</style>
