<template>
  <v-container fluid>
    <qd-drawer-left :visible.sync="drawerLeft"></qd-drawer-left>

    <v-app-bar clipped-left text short color="white" class="rounded-lg">
      <v-badge
        :value="badge"
        color="orange darken-2"
        bordered
        top
        dot
        offset-x="20"
        offset-y="20"
      >
        <v-app-bar-nav-icon
          :color="access ? 'primary' : 'grey'"
          @click.stop="openDrawer('left')"
        >
          <v-icon>fas fa-bars</v-icon>
        </v-app-bar-nav-icon>
      </v-badge>
      <img src="/img/logo-h.svg" alt="Logo" height="26px" class="ml-3" />
      <v-spacer />

      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <div
            class="h-full d-flex align-center"
            style="cursor: default"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon size="medium" color="primary" class="mr-2">
              {{
                userRol === 'super-administrador'
                  ? 'fa-user-tie'
                  : enterprise.isGroup
                  ? 'fa-sitemap'
                  : 'fa-building'
              }}
            </v-icon>
            {{ enterprise.tenantName }}
          </div>
        </template>
        <span>{{ $t(userRol) }}</span>
      </v-tooltip>
      <v-list disabled avatar color="transparent">
        <v-list-item two-line>
          <v-list-item-avatar class="mr-6">
            <v-img
              src="/img/tokens.svg"
              alt="tokens"
              max-height="1.9em"
              max-width="1.9em"
              class="ml-2"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold primary--text">
              {{ enterprise.tokens ? enterprise.tokens.balance : 0 }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ $t('tokens') }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div class="d-flex align-center" style="width: 460px">
        <v-text-field
          v-model="searchValue"
          :placeholder="$t('searchPlaceholder')"
          solo-inverted
          hide-details
          flat
          dense
          class="mr-2"
          append-icon="fa-search"
          @click:append="search"
          @keypress.enter="search"
        ></v-text-field>
        <v-btn color="secondary" @click="search">
          {{ $t('search') }}
        </v-btn>
      </div>

      <qd-select-language></qd-select-language>

      <v-btn
        :color="access ? 'primary' : 'grey'"
        class="mr-2"
        icon
        @click.stop="drawerRight = !drawerRight"
      >
        <v-avatar size="3em">
          <img src="/img/avatar_placeholder.png" alt="avatar" />
        </v-avatar>
      </v-btn>
    </v-app-bar>

    <qd-drawer-right :visible.sync="drawerRight"></qd-drawer-right>
  </v-container>
</template>
