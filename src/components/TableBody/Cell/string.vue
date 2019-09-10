<template>
  <span
      v-b-tooltip.hover.d300
      :title="`${data}`">
    {{data}}
  </span>
</template>

<script>
export default {
  name: 'String',
  props: {
    data: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
