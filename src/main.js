import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import '@/styles/index.scss'
import store from '@/store'
import * as plugin from '@/plugins/index'
import i18n from './i18n'
import '@/components/index'
import Sparkline from '@/plugins/vue-sparklines'
Vue.use(Sparkline)

Object.keys(plugin).forEach(name => Vue.use(plugin[name], plugin.options[name]))

Vue.config.productionTip = false

new Vue({
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
