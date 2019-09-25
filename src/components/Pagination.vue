<template>
  <b-container
      fluid
      class="d-flex flex-row flex-md-nowrap align-items-baseline justify-content-end flex-wrap"
  >
    <b-pagination
        :disabled="loader"
        :value="pagination.current_page"
        :total-rows="pagination.total"
        :per-page="pagination.per_page"
        aria-controls="my-table"
        @change="(current_page) => changePage({ current_page })"
    ></b-pagination>
    <b-dropdown
        :disabled="loader"
        size="lg"
        variant="link"
        toggle-class="text-decoration-none"
        no-caret
    >
      <template slot="button-content">
        {{pagination.per_page}}
        <VIcon name="list-ol" scale="2" />
      </template>
      <b-dropdown-item
          @click="(e) => changePage({ per_page: +e.target.text })"
          v-for="size in config.pagination.page_sizes"
          :key="size"
          :active="size === pagination.per_page"
          href="#">{{size}}</b-dropdown-item>
    </b-dropdown>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Pagination',
  computed: {
    ...mapGetters({
      pagination: 'externalData/getPagination',
      loader: 'externalData/getLoader',
      config: 'config/getConfig'
    })
  },
  methods: {
    ...mapActions({
      fetchData: 'externalData/fetchData',
      setRouter: 'routing/setRouter'
    }),
    changePage({ current_page, per_page }) {
      if (this.config.pagination.position === 'bottom') {
        this.$scrollTo('.table.table-container')
      }
      const data = {
        current_page: current_page || this.pagination.current_page,
        per_page: per_page || this.pagination.per_page
      }
      this.setRouter({ data, key: 'pagination', func: 'externalData/setPagination' }, { root: true })
    }
  }
}
</script>

<style scoped>

</style>
