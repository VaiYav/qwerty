<template>
  <div id="app" class="mb-4">
    <Navbar />
    <div>
      <b-container fluid>
        <b-row class="align-items-center">
          <b-col cols="12" lg="6">
            <Filtering />
          </b-col>
          <b-col cols="12" lg="6" v-if="config.pagination.isActive && config.pagination.position === 'top'">
            <Pagination />
          </b-col>
        </b-row>
      </b-container>
      <div class="d-flex overflow-hidden">
        <b-list-group style="max-width: 250px;">
          <b-list-group-item>Cras justo odio</b-list-group-item>
          <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
          <b-list-group-item>Morbi leo risus</b-list-group-item>
          <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
          <b-list-group-item>Vestibulum at eros</b-list-group-item>
        </b-list-group>
        <Table-grid
            :columns="columns"
            :data="data"
            :config="config"
        />
      </div>
<!--      <Pagination v-if="config.pagination.isActive && config.pagination.position === 'bottom'" />-->
      <Pagination v-if="config.pagination.isActive" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { getObjectDiff } from '@/utils'
export default {
  components: {
    Navbar: () => import('@/layout/Navbar'),
    TableGrid: () => import('@/components/TableGrid'),
    Pagination: () => import('@/components/Pagination'),
    Filtering: () => import('@/components/Filtering')
  },
  computed: {
    ...mapGetters({
      columns: 'externalData/getSortedByOrder',
      data: 'externalData/getData',
      config: 'config/getConfig'
    })
  },
  methods: {
    ...mapActions({
      fetchConfig: 'config/fetchConfig',
      fetchData: 'externalData/fetchData',
      setTableLoader: 'externalData/setLoader',
      setAppLoader: 'app/setLoader',
      changeSorting: 'externalData/changeSorting'
    }),
    setData(data) {
      for (const key in data.query) {
        if (Object.prototype.hasOwnProperty.call(data.query, key)) {
          if (!data.query[key]) return
          const entity = JSON.parse(data.query[key])
          const func = entity.func
          delete entity.func
          this.$store.dispatch(`${func}`, entity)
        }
      }
    },
    resetState(val) {
      switch (val) {
        case 'sort':
          this.$store.dispatch('externalData/changeSorting', {})
          break
        case 'filters':
          this.$store.dispatch('filters/searchByFilter')
          break
        case 'pagination':
          this.$store.dispatch('externalData/setPagination', { per_page: 50, current_page: 1 })
          break
      }
    }
  },
  watch: {
    $route: {
      handler(val, oldVal) {
        this.setData(val)
        const type = getObjectDiff(val.query, oldVal.query)[0]
        if (!val.query[type]) {
          this.resetState(type)
        }
      }
    }
  },
  created() {
    Promise.all([
      this.setAppLoader(true),
      this.fetchConfig({}),
      this.fetchData()
      // this.fetchData({ query: 'response', payload: {}})
    ]).then(() => {
      this.setAppLoader(false)
    })
  }
}
</script>
