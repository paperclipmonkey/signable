import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import vueMoment from 'vue-moment'

Vue.use(vueMoment)

// var id = 2180673 // Number | ID of user to view
//
// var callback = function (error, data, response) {
//   if (error) {
//     console.error(error)
//   } else {
//     console.log('API called successfully. Returned data: ' + data)
//   }
// }
// apiInstance.getContact(id, callback)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
