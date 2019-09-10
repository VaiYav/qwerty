<template>
  <span>
    {{parseFloat(data).toFixed(2)}}
     <VIcon :name="sign" />
  </span>
</template>

<script>
export default {
  name: 'Currency',
  props: {
    data: {
      type: [String, Number],
      default: ''
    },
    sign: {
      type: String,
      default: 'euro-sign'
    }
  }
}
</script>

<style scoped>

</style>
