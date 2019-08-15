<template>
  <b-container
      fluid
      class="d-flex flex-row flex-md-nowrap align-items-baseline justify-content-end"
  >
    <b-pagination
        :disabled="loader"
        :value="pagination.current_page"
        :total-rows="pagination.total"
        :per-page="pagination.per_page"
        aria-controls="my-table"
        @change="changePage"
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
          @click="(e) => changePage(e.target.text)"
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
  data() {
    return {
      currentPage: 1
    }
  },
  computed: {
    ...mapGetters({
      pagination: 'externalData/getPagination',
      loader: 'externalData/getLoader',
      config: 'config/getConfig'
    })
  },
  methods: {
    ...mapActions({
      fetchData: 'externalData/fetchData'
    }),
    changePage(page) {
      this.fetchData({
        query: 'response',
        payload: { _page: page, _limit: this.pagination.per_page }
      })
    }
  }
}
</script>

<style scoped>

</style>
