<template>
  <v-container grid-list-md >
    <v-slide-y-transition mode="out-in">

      <v-layout row wrap>
        <v-flex xs12>
          <v-data-table
            :headers="headers"
            :items="templates"
            class="elevation-1"
            fill-height="false"
          >
          <template slot="items" slot-scope="props">
            <td @click="$router.push({name:'template', params: {templateid: props.item.template_id}})">
              {{ props.item.template_title }}
            </td>
            <td class="text-xs-right">{{ props.item.template_page_total }}</td>
            <td class="text-xs-right">{{ props.item.template_in_progress }}</td>
            <td class="text-xs-right">{{ props.item.template_parties_total }}</td>
            <td class="text-xs-right"><a target='_blank' :href="props.item.template_pdf_url">{{ props.item.template_pdf_url }}</a></td>
            <td class="text-xs-right">{{ props.item.template_uploaded | moment("from", "now") }}</td>
          </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'loadTemplates'
    ])
  },
  mounted () {
    this.loadTemplates()
  },
  data: () => ({
    dialog: false,
    headers: [
      {
        text: 'Title',
        value: 'template_title'
      },
      {
        text: 'Pages',
        value: 'template_page_total'
      },
      {
        text: 'In Progress',
        value: 'template_in_progress'
      },
      {
        text: 'Parties',
        value: 'template_parties_total'
      },
      {
        text: 'PDF link',
        value: 'template_pdf_url'
      },
      {
        text: 'Created',
        value: 'template_uploaded'
      }
    ]
  }),
  computed: {
    templates: {
      get () {
        return this.$store.getters.templates
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
