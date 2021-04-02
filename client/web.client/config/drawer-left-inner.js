const route = {
  dashboard: {
    title: 'drawerLeftInner.dashboard',
    icon: 'fa-th-large',
    route: 'dashboard',
  },
  notifications: {
    title: 'drawerLeftInner.notifications',
    icon: 'fa-comment-alt',
    route: 'dashboard-notifications',
  },
  adminEnterprises: {
    title: 'drawerLeftInner.adminEnterprises',
    icon: 'fa-building',
    route: 'dashboard-enterprises',
  },
  adminTokens: {
    title: 'drawerLeftInner.adminTokens',
    icon: 'fa-coins',
    route: 'dashboard-tokens',
  },
  documents: {
    title: 'drawerLeftInner.documents',
    icon: 'far fa-file-alt',
    route: 'dashboard-folders',
  },
  othersDocuments: {
    title: 'drawerLeftInner.othersDocuments',
    icon: 'far fa-copy',
    route: 'dashboard-others-documents',
  },
  manageRequest: {
    title: 'drawerLeftInner.manageRequest',
    icon: 'fa fa-address-card',
    route: 'dashboard-manage-requests',
  },
  audit: {
    title: 'drawerLeftInner.audit',
    icon: 'fa-search',
    route: 'dashboard-audit',
  },
  configuration: {
    title: 'drawerLeftInner.configuration',
    icon: 'fas fa-cog',
    route: 'dashboard-configurations',
  },
  users: {
    title: 'drawerLeftInner.users',
    icon: 'fa-user',
    route: 'dashboard-users',
  },
  configurationEnterpriseGroup: {
    title: 'drawerLeftInner.configuration',
    icon: 'fas fa-cog',
    route: 'dashboard-configurations-enterprise-group',
  },
  mdNotifications: {
    title: 'drawerLeftInner.mdNotifications',
    icon: 'fa-comment-alt',
    route: 'dashboard-admin-notifications',
  },
  mdClients: {
    title: 'drawerLeftInner.mdClients',
    icon: 'fa-users',
    route: 'dashboard-clients',
  },
  mdExternalServices: {
    title: 'drawerLeftInner.mdExternalServices',
    icon: 'fa-reply',
    route: 'dashboard-admin-external-services',
  },
  mdAudit: {
    title: 'drawerLeftInner.mdAudit',
    icon: 'fa-search',
    route: 'dashboard-audit',
  },
  mdConfiguration: {
    title: 'drawerLeftInner.mdConfiguration',
    icon: 'fas fa-cog',
    route: 'dashboard-admin-configurations',
  },
  mdRoles: {
    title: 'drawerLeftInner.mdRoles',
    icon: 'fa-users',
    route: 'dashboard-users',
  },
};

export default {
  'client-administrador-grupo': [
    route.dashboard,
    route.notifications,
    route.adminEnterprises,
    route.audit,
    route.configurationEnterpriseGroup,
  ],
  'client-administrador-empresa': [
    route.dashboard,
    route.notifications,
    route.adminTokens,
    route.documents,
    route.othersDocuments,
    route.audit,
    route.configuration,
    route.users,
  ],
  'client-operador': [
    route.dashboard,
    route.notifications,
    route.adminTokens,
    route.documents,
    route.othersDocuments,
  ],
  'client-aprobador': [route.dashboard, route.manageRequest],
  'super-administrador': [
    route.dashboard,
    route.mdNotifications,
    route.mdClients,
    route.mdExternalServices,
    route.mdAudit,
    route.mdConfiguration,
    route.mdRoles,
  ],
  'master-data-operador': [
    route.dashboard,
    route.mdNotifications,
    route.mdClients,
    route.mdConfiguration,
  ],
  'master-data-aprobador': [
    route.dashboard,
    route.mdNotifications,
    route.mdClients,
  ],
};
