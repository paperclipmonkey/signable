import { createLocalVue, mount } from '@vue/test-utils'
import Page from '@/views/About.vue'
import Vuetify from 'vuetify'

// create an extended `Vue` constructor
const localVue = createLocalVue()
localVue.use(Vuetify)

describe('About.vue', () => {
  it('renders', () => {
    const wrapper = mount(Page, {
      localVue
    })
    expect(wrapper.text()).toMatch('Michael Waterworth')
  })
})
