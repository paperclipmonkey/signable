import SignableApi from 'signable_api'
import store from '../store'

SignableApi.ApiClient.instance.basePath = 'http://localhost:8080/v1'

function getClient (key) {
  var defaultClient = SignableApi.ApiClient.instance
  // Configure HTTP basic authorization: basicAuth
  var basicAuth = defaultClient.authentications['basicAuth']
  basicAuth.username = store.getters.apikey
  basicAuth.password = 'x'
  return new SignableApi.EnvelopesApi()
}

// apiInstance.addEnvelope({
//   envelopeName: 'Bobby Tables',
//   envelopeEmail: 'test2@3equals.co.uk'
// }, callback)

export default {
  state: {
    envelopes: []
  },
  mutations: {
    set_envelopes (state, envelopes) {
      state.envelopes = envelopes
    },
    // Add or update envelope in the envelopes store
    add_envelope (state, envelope) {
      let existing = state.envelopes.find(item => item.envelope_id === envelope.envelope_id)
      if (existing) {
        // Replace the item in the envelopes array
        state.envelopes.splice(state.envelopes.indexOf(existing), 1, envelope)
      } else {
        state.envelopes.push(envelope) // Add to the existing envelopes array
      }
    }
  },
  actions: {
    loadEnvelopes ({ commit, state }) {
      let apiInstance = getClient(state.apikey)
      apiInstance.listEnvelopes({}, (err, data, res) => {
        if (err) return console.error(err)
        commit('set_envelopes', data.envelopes)
      })
    },
    loadEnvelope ({ commit, state }, id) {
      let apiInstance = getClient(state.apikey)
      apiInstance.getEnvelope(id, (err, data, res) => {
        if (err) return console.error(err)
        commit('add_envelope', data)
      })
    },
    saveEnvelope ({ commit, state }, envelope) {
      if (envelope.envelope_id) {
        let apiInstance = getClient(state.apikey)
        console.log('sending', envelope)
        apiInstance.updateEnvelope(envelope.envelope_id, {envelopeName: envelope.envelope_name, envelopeEmail: envelope.envelope_email}, (err, data, res) => {
          if (err) return console.error(err)
          console.log('Updated envelope')
          commit('add_envelope', data)
        })
      } else {
        let apiInstance = getClient(state.apikey)
        apiInstance.addEnvelope(envelope, (err, data, res) => {
          if (err) return console.error(err)
          console.log('Added envelope')
          if (err) return
          commit('add_envelope', data)
        })
      }
    }
  },
  getters: {
    envelopes: state => {
      return state.envelopes
    },
    getEnvelopeById: (state) => function (id) {
      return state.envelopes.find(envelope => envelope.envelope_id.toString() === id.toString())
    }
  }
}
