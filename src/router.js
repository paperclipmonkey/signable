import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import(/* webpackChunkName: "about" */ './views/Contacts.vue')
    },
    {
      path: '/contacts/:contactid',
      name: 'contact',
      component: () => import(/* webpackChunkName: "about" */ './views/Contact.vue')
    },

    {
      path: '/envelopes',
      name: 'envelopes',
      component: () => import(/* webpackChunkName: "about" */ './views/Envelopes.vue')
    },
    // {
    //   path: '/envelopes/:contactid',
    //   name: 'envelope',
    //   component: () => import(/* webpackChunkName: "about" */ './views/Envelope.vue')
    // },
    {
      path: '/templates',
      name: 'templates',
      component: () => import(/* webpackChunkName: "about" */ './views/Templates.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import(/* webpackChunkName: "about" */ './views/Settings.vue')
    }
  ]
})
