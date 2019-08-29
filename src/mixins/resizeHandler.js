import store from '@/store'

const { body } = document
const WIDTH = 1023

export default {
  beforeMount() {
    window.addEventListener('resize', this.resizeHandler)
  },
  mounted() {
    const isMobile = this.checkIsMobile()
    if (isMobile) {
      store.dispatch('app/toggleDevice', 'mobile')
    }
  },
  methods: {
    checkIsMobile() {
      const rect = body.getBoundingClientRect()
      return rect.width <= WIDTH
    },
    resizeHandler() {
      if (!document.hidden) {
        const isMobile = this.checkIsMobile()
        store.dispatch('app/toggleDevice', isMobile ? 'mobile' : 'desktop')
      }
    }
  }
}
