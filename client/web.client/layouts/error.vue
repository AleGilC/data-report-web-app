<template>
  <v-layout column align-center justify-center>
    <h1 v-if="error.statusCode === 404" class="display-2 font-weight-bold">
      {{ pageNotFound }}
    </h1>
    <h1 v-else class="display-2 font-weight-bold">
      {{ otherError }}
    </h1>
    <NuxtLink to="/" class="text-decoration-none"> Home page </NuxtLink>
  </v-layout>
</template>

<script>
export default {
  layout: 'content',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return { title };
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
