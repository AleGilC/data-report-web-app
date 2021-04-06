<template>
  <v-layout column class="px-3">
    <v-flex align-self-center class="text-center">
      <v-avatar width="6em" height="6em">
        <img src="/img/avatar_placeholder.png" alt="" />
      </v-avatar>
      <p class="headline primary--text my-2">
        <!-- {{ user.displayName }} -->
        user.displayName
      </p>
      <!-- <template v-if="isRoleNotAdmited">
        <p>{{ enterprise.name }}</p>
        <v-btn class="text-capitalize py-4 px-6" color="primary" small outlined>
          <v-icon small color="secondary" class="mr-1">fa-cog</v-icon>
           {{ $t('manageAccount') }}
          manageAccount
        </v-btn>
      </template> -->
    </v-flex>

    <v-flex>
      <div class="my-6">
        <p class="text-center mb-2">{{ $t('changeCompany') }}</p>

        <!-- <qd-enterprises-list dense></qd-enterprises-list> -->
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
// import { mapGetters } from 'vuex';
// import QdEnterprisesList from '@/components/qd-enterprises-list/QdEnterprisesList';

export default {
  name: 'MDrawerRightInner',
  // components: { QdEnterprisesList },
  data() {
    return {
      enterprises: null,
    };
  },
  computed: {
    // ...mapGetters({
    //   user: 'session/currentUser',
    //   enterprise: 'session/currentEnterprise',
    //   isActive: 'session/enterpriseIsActive',
    //   userRol: 'session/userRol',
    // }),
    // isRoleNotAdmited() {
    //   return (
    //     this.userRol !== 'super-administrador' &&
    //     !this.userRol.includes('master-data-')
    //   );
    // },
  },
};
</script>
