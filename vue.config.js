module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    },
    lintStyleOnBuild: true,
    stylelint: {}
  },
  transpileDependencies: [
    /\bvue-awesome\b/
  ]
}
