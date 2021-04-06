<template>
  <v-list dense nav>
    <template v-for="item in routes">
      <v-hover v-if="!item.subItems" v-slot="{ hover }" :key="item.title">
        <v-list-item
          :to="localePath({ name: item.route })"
          class="elevation-2 mb-3"
          nuxt
          exact
          link
        >
          <v-icon small class="mx-2" :color="hover ? 'primary' : 'black'">
            {{ item.icon }}
          </v-icon>

          <v-list-item-title class="overflow-visible">
            <div>
              <v-badge :value="badge" color="orange darken-2" bordered top dot>
                {{ $t(item.title) }}
              </v-badge>
            </div>
          </v-list-item-title>
        </v-list-item>
      </v-hover>

      <v-list-group
        v-else
        :key="item.title"
        :value="false"
        class="elevation-2 mb-4"
        link
      >
        <template #activator>
          <v-icon small class="mx-2">
            {{ item.icon }}
          </v-icon>
          <v-list-item-title class="overflow-visible">
            <div>
              <v-badge :value="badge" color="orange darken-2" bordered top dot>
                {{ $t(item.title) }}
              </v-badge>
            </div>
          </v-list-item-title>
        </template>
        <template v-for="(subItem, i) in item.subItems">
          <v-list-item
            :key="i"
            :to="localePath({ name: subItem.route })"
            nuxt
            link
            exact
          >
            <v-list-item-title
              class="justify-start"
              v-text="$t(subItem.name)"
            ></v-list-item-title>
          </v-list-item>
        </template>
      </v-list-group>
    </template>
  </v-list>
</template>

<script>
// import { mapGetters } from 'vuex';
import drawerLeftInner from '@/config/drawer-left-inner';

export default {
  name: 'MdDraweLeftInner',
  data() {
    return {
      actions: [],
      badge: false,
    };
  },
  computed: {
    // ...mapGetters({
    //   userRol: 'session/userRol',
    // }),
    routes() {
      return drawerLeftInner;
    },
  },
};
</script>
