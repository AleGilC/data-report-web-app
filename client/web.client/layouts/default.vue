<template>
  <v-app class="pa-3 grey lighten-4">
    <qd-toolbar></qd-toolbar>

    <qd-navigation v-if="dontDashboard"></qd-navigation>

    <v-main class="min-h-75">
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import QdToolbar from '@/components/qd-toolbar/QdToolbar';
import QdNavigation from '@/components/qd-navigation/QdNavigation';

export default {
  components: { QdToolbar, QdNavigation },
  middleware: 'authenticated',
  data() {
    return {
      dontDashboard: true,
      expiredSession: false,
      maxTimeInactivitySession: 7200, // seconds
    };
  },
  computed: mapGetters({
    nav: 'layout/getNavigation',
    startSession: 'session/currentStartSession',
  }),
  watch: {
    $route: 'verifyRoute',
    expiredSession(val) {
      if (val) {
        this.$toast.error('Session expired');
        this.$router.replace(this.localeRoute({ name: 'sign-out' }));
      }
    },
  },
  created() {
    this.verifyRoute();
  },
  mounted() {
    this.activityWatcher();
  },
  updated() {},
  methods: {
    verifyRoute() {
      this.dontDashboard = this.$route.name.split('___')[0] !== 'dashboard';
    },
    activityWatcher() {
      const slf = this;
      let secondsSinceLastActivity = 0;
      const maxInactivity = this.maxTimeInactivitySession;

      setInterval(function () {
        secondsSinceLastActivity++;
        // console.log(
        //   secondsSinceLastActivity + ' seconds since the user was last active'
        // )
        if (secondsSinceLastActivity > maxInactivity) {
          // console.log(
          //   'User has been inactive for more than ' + maxInactivity + ' seconds'
          // )
          // Redirect them logout page.
          slf.expiredSession = true;
        }
      }, 1000);

      // function that will be called whenever a user is active
      function activity() {
        // reset the secondsSinceLastActivity variable
        //  back to 0
        secondsSinceLastActivity = 0;
      }

      // An array of DOM events that should be interpreted as
      // user activity.
      const activityEvents = [
        'mousedown',
        'mousemove',
        'keydown',
        'scroll',
        'touchstart',
      ];

      // register the activity function as the listener parameter.
      activityEvents.forEach(function (eventName) {
        document.addEventListener(eventName, activity, true);
      });
    },
  },
};
</script>
