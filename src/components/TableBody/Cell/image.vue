<template>
  <div>
    <img @click="modal = true" :src="data.src" :alt="data.alt" class="w-100 h-100">
    <b-modal v-model="modal" :title="data.alt">
      <img :src="data.src" :alt="data.alt" class="w-100 h-100">
      <template v-slot:modal-footer="{ ok, cancel, hide }">
        <span></span>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'CustomImage',
  props: {
    data: {
      type: Object,
      default: () => ({
        src: 'http://lorempixel.com/400/200',
        alt: 'Image ALT'
      })
    }
  },
  data() {
    return {
      modal: false
    }
  }
}
</script>

<style scoped>

</style>
