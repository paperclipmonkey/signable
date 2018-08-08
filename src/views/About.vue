<template>
  <v-container grid-list-md center>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap class="text-xs-center">
        <v-flex xs12>
            <h2 class="display-3"> Michael Waterworth </h2>
            <v-avatar
              :tile="tile"
              :size="300"
              color="grey lighten-4"
              text-center
              class="elevation-5">
              <img src="@/assets/mike.jpg" alt="avatar">
            </v-avatar>
            <p class="display-1 font-weight-light"> I hope you've enjoyed looking through the code, it's honestly been fun to work on.</p>
            <p class="display-1 font-weight-light"> Don't hesitate to get in contact with me on <a href="mailto:mike@3equals.co.uk">mike@3equals.co.uk</a></p>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>
