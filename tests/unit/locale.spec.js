import { expect } from 'chai'
import { mount, createLocalVue } from '@vue/test-utils'
import $i18n from 'vue-i18n'
import BootstrapVue from 'bootstrap-vue'
import Locale from '@/components/Locale.vue'

describe('Locale.vue', () => {
  it('Is switcher working.', () => {
    const localVue = createLocalVue()
    localVue.use(BootstrapVue)
    const wrapper = mount(Locale, {
      localVue,
      mocks: {
        $i18n
      }
    })
    const select = wrapper.find({ name: 'BFormSelect' })
    const value = 'de'
    select.vm.$emit('input', value)
    select.vm.$emit('change', value)
    expect(wrapper.vm.locale).to.have.string(value)
  })
})
