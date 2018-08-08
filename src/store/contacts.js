import SignableApi from 'signable_api'
import store from '../store'

SignableApi.ApiClient.instance.basePath = 'http://localhost:8080/v1'

function getClient (key) {
  var defaultClient = SignableApi.ApiClient.instance
  // Configure HTTP basic authorization: basicAuth
  var basicAuth = defaultClient.authentications['basicAuth']
  basicAuth.username = store.getters.apikey
  basicAuth.password = 'x'
  return new SignableApi.ContactsApi()
}

// apiInstance.addContact({
//   contactName: 'Bobby Tables',
//   contactEmail: 'test2@3equals.co.uk'
// }, callback)

export default {
  state: {
    contacts: []
  },
  mutations: {
    set_contacts (state, contacts) {
      state.contacts = contacts
    },
    // Add or update contact in the contacts store
    add_contact (state, contact) {
      let existing = state.contacts.find(item => item.contact_id === contact.contact_id)
      if (existing) {
        // Replace the item in the contacts array
        state.contacts.splice(state.contacts.indexOf(existing), 1, contact)
      } else {
        state.contacts.push(contact) // Add to the existing contacts array
      }
    }
  },
  actions: {
    loadContacts ({ commit, state }) {
      let apiInstance = getClient(state.apikey)
      apiInstance.listContacts({}, (err, data, res) => {
        if (err) return console.error(err)
        commit('set_contacts', data.contacts)
      })
    },
    loadContact ({ commit, state }, id) {
      let apiInstance = getClient(state.apikey)
      apiInstance.getContact(id, (err, data, res) => {
        if (err) return console.error(err)
        commit('add_contact', data)
      })
    },
    saveContact ({ commit, state }, contact) {
      if (contact.contact_id) {
        let apiInstance = getClient(state.apikey)
        console.log('sending', contact)
        apiInstance.updateContact(contact.contact_id, {contactName: contact.contact_name, contactEmail: contact.contact_email}, (err, data, res) => {
          if (err) return console.error(err)
          console.log('Updated contact')
          commit('add_contact', data)
        })
      } else {
        let apiInstance = getClient(state.apikey)
        apiInstance.addContact(contact, (err, data, res) => {
          if (err) return console.error(err)
          console.log('Added contact')
          commit('add_contact', data)
        })
      }
    }
  },
  getters: {
    contacts: state => {
      return state.contacts
    },
    getContactById: (state) => function (id) {
      return state.contacts.find(contact => contact.contact_id.toString() === id.toString())
    }
  }
}
