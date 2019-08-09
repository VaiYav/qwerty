<template>
  <div id="app">
    <Navbar />
    <Table-grid
        :columns="columns"
        :data="data"
        :config="config"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    Navbar: () => import('@/layout/Navbar'),
    TableGrid: () => import('@/components/TableGrid')
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
      setAppLoader: 'app/setLoader'
    })
  },
  created() {
    Promise.all([
      this.setAppLoader(true),
      this.fetchConfig({}),
      this.fetchData({})
    ]).then(() => {
      this.setAppLoader(false)
    })
  }
}
</script>
