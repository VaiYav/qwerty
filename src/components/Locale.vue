<template>
  <b-container fluid>
    <b-row align-h="end" class="justify-content-end">
      <b-form-select
          v-model="locale"
          :options="$i18n.availableLocales"
          @change="switchLocale"
          class="container__locale m-1" />
    </b-row>
  </b-container>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'Locale',
  data() {
    return {
      locale: Cookies.get('locale') || process.env.VUE_APP_I18N_FALLBACK_LOCALE
    }
  },
  methods: {
    switchLocale(value) {
      if (!value) return
      this.$i18n.locale = value
      Cookies.set('locale', value)
    }
  }
}
</script>

<style lang="scss">
  .container__locale {
    width: 100px;
  }
</style>
