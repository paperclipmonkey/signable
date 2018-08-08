<template>
  <v-container grid-list-md>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap>
        <v-flex xs12>
          <v-data-table
            :headers="headers"
            :items="envelopes"
            class="elevation-1"
            fill-height="false"
          >
          <template slot="items" slot-scope="props">
            <td @click="$router.push({name:'envelope', params: {fingerprint: props.item.envelope_fingerprint}})">
              {{ props.item.envelope_title }}
            </td>
            <td class="text-xs-right">{{ props.item.envelope_status }}</td>
            <td class="text-xs-right">{{ props.item.envelope_created | moment("from", "now") }}</td>
            <td class="text-xs-right">{{ props.item.envelope_sent | moment("from", "now") }}</td>
            <td class="text-xs-right">{{ props.item.envelope_processed | moment("from", "now") }}</td>
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
      @click.stop="$router.push({name:'envelope', params: {fingerprint: 'new'}})">
      <v-icon>add</v-icon>
    </v-btn>
  </v-container>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'loadEnvelopes'
    ])
  },
  mounted () {
    this.loadEnvelopes()
  },
  data: () => ({
    dialog: false,
    headers: [
      {
        text: 'Title',
        value: 'envelope_title'
      },
      {
        text: 'Status',
        value: 'envelope_status'
      },
      {
        text: 'Created',
        value: 'envelope_created'
      },
      {
        text: 'Sent',
        value: 'envelope_sent'
      },
      {
        text: 'Processed',
        value: 'envelope_processed'
      }
    ]
  }),
  computed: {
    envelopes: {
      get () {
        return this.$store.getters.envelopes
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
