<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        Contact
        <v-card>
          <v-card-title
            class="grey lighten-4 py-4 title">
            Edit contact
          </v-card-title>
          <v-container grid-list-sm class="pa-4">
            <v-layout row wrap>
              <v-flex xs12 align-center justify-space-between>
                <v-layout align-center>
                  <v-avatar size="40px" class="mr-3">
                    <img
                      src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                      alt=""
                    >
                  </v-avatar>
                  <v-text-field
                    v-model="contact.contact_name"
                    placeholder="Name"
                  ></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex xs12>
                <v-text-field
                  v-model="contact.contact_email"
                  prepend-icon="mail"
                  placeholder="Email"
                ></v-text-field>
              </v-flex>

              <v-flex xs12>
                Outstanding Documents: {{contact.contact_outstanding_documents}}
              </v-flex>

              <v-flex xs12 v-if="contact.contact_created">
                Created: {{contact.contact_created | moment("from", "now")}}
              </v-flex>

            </v-layout>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="$router.go(-1)">Cancel</v-btn>
            <v-btn flat @click="saveContact(contact)">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  props: ['contactid'],
  data: () => ({
    valid: false,
    name: '',
    updated: {},
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  }),
  mounted () {
    this.loadContact(this.$route.params.contactid)
  },
  computed: {
    contact: {
      get () {
        return this.$store.getters.getContactById(this.$route.params.contactid)
      }
    }
    // getContactById: {
    //   get () {
    //     return this.$store.getters.getContactById
    //   }
    // }
  },
  methods: {
    ...mapActions([
      'loadContact',
      'saveContact'
    ])
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
