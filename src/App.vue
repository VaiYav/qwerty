<template>
  <div id="app">
    <Navbar />
    {{$t('message')}}
  </div>
</template>

<script>
export default {
  components: {
    Navbar: () => import('@/layout/Navbar')
  },
  created() {
    this.$store.dispatch('config/fetchConfig')
  }
}
</script>
