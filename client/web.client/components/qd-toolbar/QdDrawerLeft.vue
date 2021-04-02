<template>
  <v-navigation-drawer
    v-model="drawer"
    temporary
    fixed
    app
    width="330px"
    class="pt-10"
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

    <v-layout column align-center>
      <v-flex>
        <h2 class="overline font-weight-bold">Menu</h2>
      </v-flex>
    </v-layout>

    <v-layout class="drawer-left-inner px-6 mt-6">
      <v-flex>
        <qd-drawe-left-inner></qd-drawe-left-inner>
      </v-flex>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
import QdDraweLeftInner from './QdDraweLeftInner';

export default {
  name: 'QdDrawerLeft',
  components: { QdDraweLeftInner },
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
};
</script>
