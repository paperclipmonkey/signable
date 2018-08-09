import SignableApi from 'signable_api'
import store from '../store'

SignableApi.ApiClient.instance.basePath = 'http://localhost:8080/v1'

function getClient (key) {
  var defaultClient = SignableApi.ApiClient.instance
  // Configure HTTP basic authorization: basicAuth
  var basicAuth = defaultClient.authentications['basicAuth']
  basicAuth.username = store.getters.apikey
  basicAuth.password = 'x'
  return new SignableApi.SettingsApi()
}

// apiInstance.addSettings({
//   templateName: 'Bobby Tables',
//   templateEmail: 'test2@3equals.co.uk'
// }, callback)

export default {
  state: {
    settings: {}
  },
  mutations: {
  },
  actions: {
    loadSettings ({ commit, state }, id) {
      let apiInstance = getClient(state.apikey)
      apiInstance.getSettings(id, (err, data, res) => {
        if (err) return console.error(err)
        commit('add_template', data)
      })
    },
    saveSettings ({ commit, state }, settings) {
      let apiInstance = getClient(state.apikey)
      console.log('sending', settings)
      apiInstance.updateSettings(settings, (err, data, res) => {
        if (err) return console.error(err)
        console.log('Updated settings')
      })
    }
  },
  getters: {
    settings: state => {
      return state.settings
    }
  }
}
