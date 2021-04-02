<template>
  <v-container class="home py-10" fluid>
    <v-row justify="start" class="mt-10">
      <v-col xs="12" sm="4" align="center" justify="start" class="mt-10 mx-12">
        <h1 class="display-2 textPrimary">Lorem ipsum.</h1>
        <p class="subtitle-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </p>
      </v-col>
    </v-row>
    <v-row justify="start" class="mb-10">
      <v-col xs="12" sm="4" align="center" justify="start" class="mb-10 mx-12">
        <v-row>
          <v-col cols="8">
            <v-text-field :placeholder="$t('searchHome')" solo />
          </v-col>
          <v-col cols="4">
            <v-btn color="secondary" block large class="text-capitalize">
              {{ $t('search') }}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  layout: 'home',
  // async mounted() {
  //   const data = this.$api.business.report(companyId, {
  //     requestedCompanyNit: '8170007072',
  //     serviceId: 'e516b445-a623-4ab8-a6ba-dbdb9b200515',
  //   })
  //   await this.$pdf.generatePdf(data)
  // },
};
</script>

<style lang="scss">
.home {
  background-image: url('/img/landing1.jpg');
  background-size: cover;
  height: 90vh;
}
.textPrimary {
  color: #29a19a;
}
.align-vertically {
  margin-top: 0.3em;
}
</style>
