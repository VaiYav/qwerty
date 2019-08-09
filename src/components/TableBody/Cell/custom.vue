<template>
  <span v-html="data">
  </span>
</template>

<script>
export default {
  name: 'Custom',
  props: {
    data: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
