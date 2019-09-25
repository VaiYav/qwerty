import store from '@/store'

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
      const rect = window.innerWidth
      return rect <= WIDTH
    },
    resizeHandler() {
      if (!document.hidden) {
        const isMobile = this.checkIsMobile()
        store.dispatch('app/toggleDevice', isMobile ? 'mobile' : 'desktop')
      }
    }
  }
}
