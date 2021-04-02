import colors from 'vuetify/es5/util/colors';
import es from 'vuetify/es5/locale/es';
import en from 'vuetify/es5/locale/en';

export default function ({ app }) {
  return {
    lang: {
      locales: { es, en },
      current: 'es',
    },
    // breakpoint: {},
    // icons: {},
    // lang: {
    //   // t: (key, ...params) => app.i18n.t(key, params)
    // },
    theme: {
      light: true,
      // font: { family: 'Roboto' },
      themes: {
        light: {
          primary: '#29a19a',
          secondary: '#4b1755',
          primaryGray: '#a0a0a0',
          lightError: '#fc8181',
          error: '#ff4848',
          warning: '#fcaf14',
          success: '#50cb0a',
          black: '#000000',
          accent: colors.grey.darken3,
          info: colors.teal.lighten1,
        },
      },
    },
  };
}
