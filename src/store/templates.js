import SignableApi from 'signable_api'
import store from '../store'

SignableApi.ApiClient.instance.basePath = 'http://localhost:8080/v1'

function getClient (key) {
  var defaultClient = SignableApi.ApiClient.instance
  // Configure HTTP basic authorization: basicAuth
  var basicAuth = defaultClient.authentications['basicAuth']
  basicAuth.username = store.getters.apikey
  basicAuth.password = 'x'
  return new SignableApi.TemplatesApi()
}

// apiInstance.addTemplate({
//   templateName: 'Bobby Tables',
//   templateEmail: 'test2@3equals.co.uk'
// }, callback)

export default {
  state: {
    templates: []
  },
  mutations: {
    set_templates (state, templates) {
      state.templates = templates
    },
    // Add or update template in the templates store
    add_template (state, template) {
      let existing = state.templates.find(item => item.template_id === template.template_id)
      if (existing) {
        // Replace the item in the templates array
        state.templates.splice(state.templates.indexOf(existing), 1, template)
      } else {
        state.templates.push(template) // Add to the existing templates array
      }
    }
  },
  actions: {
    loadTemplates ({ commit, state }) {
      let apiInstance = getClient(state.apikey)
      apiInstance.listTemplates({}, (err, data, res) => {
        if (err) return console.error(err)
        commit('set_templates', data.templates)
      })
    },
    loadTemplate ({ commit, state }, id) {
      let apiInstance = getClient(state.apikey)
      apiInstance.getTemplate(id, (err, data, res) => {
        if (err) return console.error(err)
        commit('add_template', data)
      })
    },
    saveTemplate ({ commit, state }, template) {
      if (template.template_id) {
        let apiInstance = getClient(state.apikey)
        console.log('sending', template)
        apiInstance.updateTemplate(template.template_id, {templateName: template.template_name, templateEmail: template.template_email}, (err, data, res) => {
          if (err) return console.error(err)
          console.log('Updated template')
          commit('add_template', data)
        })
      } else {
        let apiInstance = getClient(state.apikey)
        apiInstance.addTemplate(template, (err, data, res) => {
          if (err) return console.error(err)
          console.log('Added template')
          if (err) return
          commit('add_template', data)
        })
      }
    }
  },
  getters: {
    templates: state => {
      return state.templates
    },
    getTemplateById: (state) => function (id) {
      return state.templates.find(template => template.template_id.toString() === id.toString())
    }
  }
}
