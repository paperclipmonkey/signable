<template>
  <v-container grid-list-md >
    <v-slide-y-transition mode="out-in">

      <v-layout row wrap>
        <v-flex xs12>
          <v-data-table
            :headers="headers"
            :items="contacts"
            class="elevation-1"
            fill-height="false"
          >
          <template slot="items" slot-scope="props">
            <td @click="$router.push({name:'contact', params: {contactid: props.item.contact_id}})">
              {{ props.item.contact_name }}
            </td>
            <td class="text-xs-right">{{ props.item.contact_email }}</td>
          </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
    <v-btn
      fab
      bottom
      right
      color="pink"
      dark
      fixed
      @click.stop="$router.push({name:'contact', params: {contactid: 'new'}})">
      <v-icon>add</v-icon>
    </v-btn>
  </v-container>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'loadContacts'
    ])
  },
  mounted () {
    this.loadContacts()
  },
  data: () => ({
    dialog: false,
    headers: [
      {
        text: 'Name',
        value: 'contact_name'
      },
      {
        text: 'Email',
        value: 'contact_email'
      }
    ]
  }),
  computed: {
    contacts: {
      get () {
        return this.$store.getters.contacts
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
