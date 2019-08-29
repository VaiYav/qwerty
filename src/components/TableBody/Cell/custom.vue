<template>
  <span v-b-tooltip.hover.html.d300 :title="data" v-html="data">
    <slot />
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
