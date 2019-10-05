import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      xDirection: '',
      oldX: 0
    }
  },
  computed: {
    ...mapGetters({
      columnSortedByOrder: 'externalData/getSortedByOrder',
      isMobile: 'app/isMobile'
    })
  },
  methods: {
    ...mapActions({
      setThOrder: 'externalData/setThOrder'
    }),
    getCoords(elem) {
      const cell = elem.getBoundingClientRect()
      return {
        left: cell.left + pageXOffset,
        right: cell.right + pageXOffset
      }
    },
    resetStyles(th, tds) {
      th.style.transform = null
      th.style['z-index'] = `1`
      th.style.transition = ``
      for (let i = 0; i < tds.length; i++) {
        tds[i].style.transform = null
        tds[i].style['z-index'] = `1`
        tds[i].style.transition = ``
      }
    },
    setStyles(th, tds, width, zindex = 2, setStyles = false) {
      th.style.transform = `translate3d(${width}px, 0, 0)`
      th.style['z-index'] = zindex
      if (setStyles) th.style.transition = 'all 200ms ease 0s'
      for (let i = 0; i < tds.length; i++) {
        tds[i].style.transform = `translate3d(${width}px, 0, 0)`
        tds[i].style['z-index'] = zindex
        if (setStyles) tds[i].style.transition = 'all 200ms ease 0s'
      }
    },
    changePosition(th, width) {
      const columnKey = th.getAttribute('data-col-key')
      const tds = document.querySelectorAll(`.main-table td[data-cellindex="${columnKey}"]`)
      // if (th.style.transform) {
      //   this.resetStyles(th, tds)
      // } else {
      //   this.setStyles(th, tds, width, 1, true)
      // }
      this.setStyles(th, tds, width, 1, true)
    },
    changeOrder(el, order) {
      el.setAttribute('data-col-order', order)
    },
    changeOrderRight(targetEl, th) {
      this.changeOrder(targetEl, +th.getAttribute('data-col-order'))
      this.changeOrder(th, +th.getAttribute('data-col-order') - 1)
    },
    changeOrderLeft(targetEl, th) {
      this.changeOrder(targetEl, +th.getAttribute('data-col-order'))
      this.changeOrder(th, +th.getAttribute('data-col-order') + 1)
    },
    between(x, min, max) {
      return x > min && x < max
    }
  },
  mounted() {
    if (this.draggable && !this.fixedColumn && !this.isMobile) {
      const self = this
      this.$el.ondragstart = () => {
        return false
      }
      this.$el.onmousedown = (e) => {
        const target = this.$el.querySelector('.table-grid-cell-head-container')
        if (!target.contains(e.target)) return
        const allThs = Array
          .from(document.querySelectorAll(this.fixedHeader ? '.fixed-header-container .table-grid-cell-head.draggable:not(.table-cell-hidden)' : '.main-table .table-grid-cell-head.draggable:not(.table-cell-hidden)'))
          .filter(th => th.getAttribute('data-col-key') !== this.columnKey)
        const coords = this.getCoords(this.$el)
        const shiftX = e.pageX - coords.left
        const tds = document.querySelectorAll(`.main-table td[data-cellindex="${this.columnKey}"]`)
        const left = self.$el.getBoundingClientRect().left
        function moveAt(e) {
          const currentDrag = self.$el.getBoundingClientRect()
          self.setStyles(self.$el, tds, e.pageX - left - shiftX)

          for (let i = 0; i < allThs.length; i++) {
            const th = allThs[i]
            const overTh = th.getBoundingClientRect()
            if (self.xDirection === 'left' && !th.style.transform && self.between(overTh.left, currentDrag.left, coords.right)) {
              self.changePosition(th, self.$el.clientWidth)
              self.changeOrderLeft(self.$el, th)
            } else if (self.xDirection === 'right' && !th.style.transform && self.between(overTh.right, coords.left, currentDrag.right)) {
              self.changePosition(th, -Math.abs(self.$el.clientWidth))
              self.changeOrderRight(self.$el, th)
            } else if (self.xDirection === 'right' && th.style.transform && self.between(currentDrag.right, overTh.left, coords.right)) {
              const columnKey = th.getAttribute('data-col-key')
              const tds = document.querySelectorAll(`.main-table td[data-cellindex="${columnKey}"]`)
              self.resetStyles(th, tds)
              self.changeOrderRight(self.$el, th)
            } else if (self.xDirection === 'left' && th.style.transform && self.between(currentDrag.left, coords.left, overTh.right)) {
              const columnKey = th.getAttribute('data-col-key')
              const tds = document.querySelectorAll(`.main-table td[data-cellindex="${columnKey}"]`)
              self.resetStyles(th, tds)
              self.changeOrderLeft(self.$el, th)
            }
          }
        }
        document.onmousemove = (e) => {
          moveAt(e)
          getMouseDirection(e)
        }
        document.onmouseup = () => {
          document.onmousemove = null
          const payload = {}
          self.columnSortedByOrder.map((th) => {
            const thDOM = document.querySelector(`.main-table th[data-col-key="${th.key}"]`)
            const tds = document.querySelectorAll(`.main-table td[data-cellindex="${th.key}"]`)
            const thFixedDOM = document.querySelector(`.fixed-header-container th[data-col-key="${th.key}"]`)
            if (thFixedDOM) {
              self.resetStyles(thFixedDOM, tds)
              payload[th.key] = thFixedDOM.getAttribute('data-col-order')
            } else if (thDOM) {
              self.resetStyles(thDOM, tds)
              payload[th.key] = thDOM.getAttribute('data-col-order')
            }
            return th
          })
          self.setThOrder(payload)
          document.onmouseup = null
        }
        function getMouseDirection(e) {
          if (self.oldX < e.pageX) {
            self.xDirection = 'right'
          } else {
            self.xDirection = 'left'
          }
          self.oldX = e.pageX
        }
      }
    }
  }
}
