<template>
  <v-layout align="center" class="mt-4 px-3">
    <v-flex xs12 sm4>
      <v-list-item two-line class="pl-2">
        <v-icon v-if="nav.icon" color="primary" class="mr-2" large>
          {{ nav.icon }}
        </v-icon>
        <v-list-item-content class="ml-2">
          <v-list-item-title class="primary--text">
            {{ $t(nav.title) }}
            <small class="ml-3">{{ $t(nav.smallText) }}</small>
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ $t(nav.subtitle) }}
          </v-list-item-subtitle>
          <span>
            <v-btn
              v-if="nav.textAction"
              :color="nav.colorAction"
              :loading="loading"
              x-small
              elevation="0"
              class="font-weight-bold"
              @click="action(nav.action)"
            >
              {{ $t(nav.textAction) }}
            </v-btn>
          </span>
        </v-list-item-content>
      </v-list-item>
    </v-flex>

    <v-flex xs12 sm4>
      <!-- <v-breadcrumbs
        :items="breadcrumbs"
        class="d-flex justify-end pb-0 pt-6 text-capitalize"
      >
        <template #divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs> -->
    </v-flex>

    <v-flex xs12 sm4 class="text-right">
      <v-btn
        v-if="nav.backButton"
        class="mt-4 mr-2 subtitle-1"
        color="white"
        @click="prev"
      >
        <v-icon color="primary" small class="mr-2">fa-angle-left</v-icon>
        {{ $t('back') }}
      </v-btn>

      <v-btn
        v-if="nav.showDashboardBtn"
        :to="localePath({ name: 'dashboard' })"
        class="subtitle-1 mt-4 px-6"
        color="white"
        exact
        nuxt
      >
        <img src="/img/logo-flat.svg" height="19px" class="mr-4" />
        {{ $t('mainDashboard') }}
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
// import { mapGetters } from 'vuex';
import configNav from '@/config/navigation';
export default {
  name: 'MdNavigation',
  data() {
    return {
      loading: false,
      nav: { ...configNav },
    };
  },
  computed: {
    // ...mapGetters({
    //   navigation: 'layout/getNavigation',
    //   breads: 'layout/getBreadcrumbs',
    // }),
    // breadcrumbs() {
    //   return this.breads.map((item, i) => ({
    //     ...item,
    //     disabled: i === this.breads.length - 1,
    //   }));
    // },
    // showBreadcrumbs() {
    //   return this.breadcrumbs.length;
    // },
  },
  watch: {
    $route: 'handleRoute',
  },
  mounted() {
    this.$nextTick(() => {
      this.nav = { ...this.navigation };
      this.$watch('$nuxt.$loading.show', (val) => {
        if (!val) {
          this.nav = { ...this.navigation };
        }
      });
    });
  },
  methods: {
    handleRoute() {
      if (!this.$nuxt.$loading.show) {
        this.nav = { ...this.navigation };
      }
    },
    async action(call) {
      this.loading = true;
      try {
        await call();
        this.$store.dispatch('layout/replaceNavigationValue', {
          textAction: 'Activo',
          colorAction: 'success darken-1',
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    prev() {
      this.$router.back();
    },
  },
};
</script>
