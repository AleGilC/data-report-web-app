<template>
  <v-menu offset-y left>
    <template #activator="{ on, attrs }">
      <v-btn class="mx-2 ml-3" text small v-bind="attrs" v-on="on">
        {{ currentLocale.toUpperCase() }}
      </v-btn>
    </template>
    <v-list dense>
      <v-list-item
        v-for="locale in locales"
        :key="locale"
        :to="switchLocalePath(locale)"
        nuxt
      >
        <v-list-item-title>{{ $t(locale) }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'MdSelectLanguage',
  computed: {
    currentLocale() {
      return this.$i18n.locale;
    },
    locales() {
      return this.$i18n.locales;
    },
  },
};
</script>
