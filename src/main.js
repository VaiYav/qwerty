import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import '@/styles/index.scss'
import * as plugin from '@/plugins/index'
import i18n from './i18n'

Object.keys(plugin).forEach(name => Vue.use(plugin[name], plugin.options[name]))

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
