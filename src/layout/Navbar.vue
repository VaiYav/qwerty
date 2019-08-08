<template>
  <div>
    <Locale />
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  components: {
    Locale: () => import('@/components/Locale')
  }
}
</script>
