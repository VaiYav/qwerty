import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuescroll from 'vuescroll'
import VueScrollTo from 'vue-scrollto'
import { Taginput } from 'buefy'

const options = {
  VueAxios: axios,
  Vuescroll: {
    ops: {
      bar: {
        showDelay: 500,
        onlyShowBarOnScroll: true,
        keepShow: true,
        background: '#c1c1c1',
        opacity: 0,
        hoverStyle: false,
        specifyBorderRadius: false,
        minSize: 0,
        size: '9px',
        disable: false
      }
    }
  },
  VueScrollTo: {
    container: 'body',
    duration: 500,
    easing: 'ease',
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
  }
}

export {
  BootstrapVue,
  VueAxios,
  Vuescroll,
  VueScrollTo,
  Taginput,
  options
}
