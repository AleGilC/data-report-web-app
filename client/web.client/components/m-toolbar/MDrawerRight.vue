<template>
  <v-navigation-drawer
    v-model="drawer"
    right
    temporary
    fixed
    app
    width="290px"
    class="pt-10 pb-8"
  >
    <template #prepend>
      <v-layout column align-center>
        <v-flex flex-grow-0 align-self-end class="px-5 mb-6">
          <v-btn color="primary" icon @click="drawer = !drawer">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </template>

    <m-drawer-right-inner></m-drawer-right-inner>

    <template #append>
      <div class="pt-4 d-flex flex-column align-center">
        <!-- <v-btn color="primary" class="mb-3" width="66%" outlined>
          {{ $t('auth.changePass') }}
        </v-btn> -->
        <v-btn color="secondary" width="66%" @click="signOut">
          <!-- {{ $t('auth.signOut') }} -->
          Sing out
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import MDrawerRightInner from './MDrawerRightInner';
export default {
  name: 'MDrawerRight',
  components: { MDrawerRightInner },
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    drawer: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit('update:visible', val);
      },
    },
  },
  methods: {
    signOut() {
      this.$router.replace(this.localeRoute({ name: 'sign-out' }));
    },
  },
};
</script>
