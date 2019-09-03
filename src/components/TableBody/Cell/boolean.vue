<template>
  <span>
    <VIcon :name="data === true ? 'check' : 'times'" />
  </span>
</template>

<script>
export default {
  name: 'Boolean',
  props: {
    data: {
      type: [String, Boolean],
      default: false
    }
  }
}
</script>

<style scoped>

</style>
