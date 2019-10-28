import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isHaveUnsavedChanges: 'filters/isHaveUnsavedChanges'
    })
  },
  methods: {
    openUnsavedModificationModal() {
      return new Promise((resolve, reject) => {
        if (this.isHaveUnsavedChanges) {
          this.$bvModal.msgBoxConfirm(`${this.$t('filter.unsavedModificationsText')}`, {
            title: `${this.$t('filter.unsavedModifications')}`,
            size: 'sm',
            buttonSize: 'sm',
            okVariant: 'secondary',
            okTitle: this.$t('button.continue'),
            footerClass: 'p-2',
            hideHeaderClose: false,
            centered: true
          }).then(value => {
            if (value) {
              resolve()
            } else {
              reject()
            }
          })
        } else {
          resolve()
        }
      })
    }
  }
}
