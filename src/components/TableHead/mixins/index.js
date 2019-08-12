export default {
  methods: {
    getWidth() {
      this.$nextTick(() => {
        const row = document.querySelector(`.with-fixed-header th[data-col-order="${this.$attrs['data-col-order']}"]`)
        if (!row) return
        this.width = {
          'width': `${row.clientWidth}px`,
          'min-width': `${row.clientWidth}px`,
          'max-width': `${row.clientWidth}px`
        }
      })
    }
  },
  created() {
    if (this.fixed) {
      this.getWidth()
      window.addEventListener('resize', this.getWidth)
      window.addEventListener('scroll', this.getWidth)
    }
  }
}
