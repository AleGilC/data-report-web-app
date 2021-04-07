import lang from './lang';

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - ' + 'Master Report',
    title: 'Master Report',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Sistema centralizado para...',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/logo-flat.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css',
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@latest/css/all.min.css',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/toast',
    '@/plugins/alert',
    // '@/plugins/pdfmake',
    // '@/plugins/axios',
    // '@/plugins/signalrHub',
    // '@/plugins/components',
    // '@/services/api',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    ['@nuxtjs/dotenv', { filename: `.env.${process.env.APP_ENV}` }],
    '@nuxtjs/moment',
  ],

  loading: {
    color: '#29a19a',
    height: '4px',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-i18n',
    [
      'nuxt-sweetalert2',
      {
        confirmButtonColor: '#29a19a',
        cancelButtonColor: '#ff4848',
      },
    ],
  ],
  moment: {
    defaultLocale: 'es',
    locales: ['es'],
  },
  i18n: {
    locales: Object.keys(lang),
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: lang,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    credentials: true,
    debug: false,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['@/assets/vuetify-conf.scss'],
    optionsPath: '@/plugins/vuetify.options.js',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: true,
  },
};
