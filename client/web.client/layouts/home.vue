<template>
  <v-app>
    <qd-auth-toolbar></qd-auth-toolbar>

    <v-main>
      <nuxt />
    </v-main>

    <v-footer>
      <v-row>
        <v-col v-for="(item, k) in 3" :key="k" cols="12" xs="6" sm="3">
          <div><span class="title primary--text">Lorem ipsum</span></div>
          <div><span class="subtitle-1">Lorem ipsum</span></div>
          <div><span class="subtitle-1">Lorem ipsum</span></div>
          <div><span class="subtitle-1">Lorem ipsum</span></div>
        </v-col>
        <v-col cols="12" xs="6" sm="3">
          <v-btn
            v-for="(item, k) in 3"
            :key="k"
            color="secondary"
            fab
            dark
            small
            class="mr-3"
          >
            <v-icon small>fa-tshirt</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import QdAuthToolbar from '@/components/qd-auth-toolbar/QdAuthToolbar';

export default {
  components: { QdAuthToolbar },
};
</script>
