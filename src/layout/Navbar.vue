<template lang="pug">
  div
    Locale
</template>

<script>
export default {
  name: 'Navbar',
  components: {
    Locale: () => import('@/components/Locale')
  }
}
</script>
