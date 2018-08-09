import { createLocalVue, mount } from '@vue/test-utils'
import Page from '@/views/Contact.vue'
import Vuetify from 'vuetify'
import Vuex from 'Vuex'

// create an extended `Vue` constructor
const localVue = createLocalVue()
localVue.use(Vuetify)
localVue.use(Vuex)

const $route = {
  path: '/contacts',
  hash: '',
  params: { contactid: '123' }
}

describe('About.vue', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      actions: {
        loadContact ({ commit, state }, id) {}
      },
      getters: {
        getContactById: (state) => function (id) {
          return {
            contact_name: '',
            contact_email: ''
          }
        }
      }
    })
  })

  it('renders', () => {
    const wrapper = mount(Page, {
      localVue,
      mocks: {
        $route
      },
      store
    })
    expect(wrapper.text()).toMatch('Contact')
  })
})
