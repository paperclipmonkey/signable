<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-card>
          <v-card-title
            class="grey lighten-4 py-4 title">
            Edit company settings
          </v-card-title>
          <v-container grid-list-sm class="pa-4">
            <v-layout row wrap>

              <v-flex xs12>
                  <v-switch
                    label="Signature more info"
                    v-model="settings.setting_signature_more_info">
                  </v-switch>
              </v-flex>

              <v-flex xs12>
                {{settings.setting_signature_format_accepted}}
                <v-text-field
                  v-model="settings.setting_signature_format_accepted"
                  label="Signature format accepted"
                  placeholder="Name"
                ></v-text-field>
                <v-checkbox
                  label="Typed"
                  value="typed"
                  v-model="formatsAccepted"
                ></v-checkbox>
                <v-checkbox
                  label="Drawn"
                  value="drawn"
                  v-model="formatsAccepted"
                ></v-checkbox>
                <v-checkbox
                  label="Upload"
                  value="upload"
                  v-model="formatsAccepted"
                ></v-checkbox>
              </v-flex>

              <v-flex xs12>
                  <v-switch
                    label="Signature format default"
                    v-model="settings.setting_signature_format_default">
                  </v-switch>
              </v-flex>

              <v-flex xs12>
                  <v-switch
                    label="Signature email pdf attach"
                    v-model="settings.setting_email_pdf_attach">
                  </v-switch>
              </v-flex>

              <v-flex xs12>
                  <v-switch
                    label="Email envelope open"
                    v-model="settings.setting_email_envelope_open">
                  </v-switch>
              </v-flex>

              <v-flex xs12>
                  <v-switch
                    label="Email main email"
                    v-model="settings.setting_email_main_email">
                  </v-switch>
              </v-flex>

              <v-flex xs12>
                  <v-switch
                    label="Email return address user"
                    v-model="settings.setting_email_return_address_user">
                  </v-switch>
              </v-flex>

              <v-flex xs12>
                  <v-switch
                    label="Signing consumer regulations act"
                    v-model="settings.setting_signing_consumer_regulations_act">
                  </v-switch>
              </v-flex>

              <v-flex xs12>
                  <v-switch
                    label="Signing tooltips"
                    v-model="settings.setting_signing_tooltips">
                  </v-switch>
              </v-flex>

              <v-flex xs12>
                  <v-switch
                    label="Signing Questions"
                    v-model="settings.setting_signing_questions">
                  </v-switch>
              </v-flex>

              <v-flex xs12>
                  <v-switch
                    label="Pdf audit trail hide"
                    v-model="settings.setting_pdf_audit_trail_hide">
                  </v-switch>
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
  watch: {},
  mounted () {},
  computed: {
    formatsAccepted: {
      get () {
        return this.settings.setting_signature_format_accepted.split(',')
      },
      set (arr) {
        // console.log(arr.join(','))
        this.settings.setting_signature_format_accepted = arr.join(',')
        console.log(this.settings.setting_signature_format_accepted)
        this.settings = this.settings
      }
    },
    settings: {
      get () {
        return sets
        // return this.$store.getters.getSettings()
      },
      set (updated) {
        console.log('Updating')
        sets = updated
      }
    }
  },
  methods: {
    ...mapActions([
      'saveSettings'
    ])
  }
}

let sets = {
  'setting_signature_more_info': true,
  'setting_signature_format_accepted': 'typed,drawn,upload',
  'setting_signature_format_default': false,
  'setting_email_pdf_attach': true,
  'setting_email_envelope_open': false,
  'setting_email_main_email': false,
  'setting_email_return_address_user': false,
  'setting_signing_consumer_regulations_act': false,
  'setting_signing_tooltips': true,
  'setting_signing_questions': true,
  'setting_pdf_audit_trail_hide': true
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
