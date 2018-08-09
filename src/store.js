import Vue from 'vue'
import Vuex from 'vuex'

import contacts from './store/contacts'
import envelopes from './store/envelopes'
import templates from './store/templates'
import settings from './store/settings'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apikey: localStorage ? localStorage.getItem('apikey') : ''
  },
  mutations: {
    set_apikey (state, value) {
      if (localStorage) {
        localStorage.setItem('apikey', value)
      }
      state.apikey = value
    }
  },
  getters: {
    apikey: state => {
      return state.apikey
    }
  },
  actions: {
  },
  modules: {
    contacts,
    envelopes,
    templates,
    settings
  }
})
