<template>
  <v-card flat>
    <v-app-bar id="ae" height="90em">
      <v-toolbar-title>
        <NuxtLink :to="localePath('/')">
          <img src="/img/logo.png" alt="Logo" width="200px" class="mt-3 ml-6" />
        </NuxtLink>
      </v-toolbar-title>
      <v-toolbar-items class="ml-12">
        <v-btn
          :to="localePath({ name: 'about' })"
          color="primaryGray"
          nuxt
          text
        >
          {{ $t('about') }}
        </v-btn>
        <v-btn
          :to="localePath({ name: 'contact' })"
          color="primaryGray"
          nuxt
          text
        >
          {{ $t('contact') }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-menu open-on-hover offset-y>
        <template #activator="{ on, attrs }">
          <v-btn
            class="mr-4 text-capitalize"
            color="primary"
            width="12%"
            large
            text
            v-bind="attrs"
            v-on="on"
            >{{ $t('auth.signUp') }}</v-btn
          >
        </template>

        <v-list>
          <v-list-item v-for="(item, k) in dropdown" :key="k">
            <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn
        class="mr-3"
        color="primary"
        large
        width="12%"
        :loading="loading"
        @click="singIn"
      >
        {{ $t('auth.signIn') }}
      </v-btn>

      <m-select-language></m-select-language>
    </v-app-bar>
  </v-card>
</template>

<script>
import MSelectLanguage from '@/components/m-select-language/MSelectLanguage';
export default {
  name: 'MAuthToolbar',
  components: { MSelectLanguage },
  data() {
    return {
      loading: false,
      dropdown: [
        {
          title: 'By Username',
          policy: process.env.VUE_APP_B2C_PN_SINGUP_POLICY_ID,
        },
        {
          title: 'By Google Account',
          policy: process.env.VUE_APP_B2C_PJ_SINGUP_POLICY_ID,
        },
      ],
    };
  },
  methods: {
    async singIn() {
      this.loading = true;
      try {
        await this.$api.auth.signIn();
      } catch (error) {
        console.log(error);
      }
    },
    getRedirect(policy = 'B2C_1A_signin') {
      const openId = `openid
        https://${process.env.VUE_APP_B2C_TENANT}/master-data-client/read
        https://${process.env.VUE_APP_B2C_TENANT}/master-data-client/write
        https://${process.env.VUE_APP_B2C_TENANT}/master-data-client/user_impersonation
      `;
      window.location.href = `${process.env.VUE_APP_B2C_INSTANCE}${
        process.env.VUE_APP_B2C_TENANT
      }/oauth2/v2.0/authorize?p=${policy}&client_id=${
        process.env.VUE_APP_B2C_TENANT_ID
      }&nonce=defaultNonce&redirect_uri=${encodeURIComponent(
        process.env.VUE_APP_B2C_RETURN_URL
      )}&scope=${encodeURIComponent(
        openId
      )}&response_type=id_token%20token&prompt=login`;
    },
  },
};
</script>
