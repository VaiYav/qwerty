import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuescroll from 'vuescroll'
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
  }
}

export {
  BootstrapVue,
  VueAxios,
  Vuescroll,
  options
}
