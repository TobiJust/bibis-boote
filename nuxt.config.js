import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - canoe-rental',
    title: 'BiBi\'s Boote',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo2.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/firebase',
    '@nuxtjs/i18n'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  firebase: {
    config: {
      apiKey: "AIzaSyDaxuO74eJT8P7X1ZEUNKayRJvMThL56xg",
      authDomain: "kanuverleih-3232e.firebaseapp.com",
      projectId: "kanuverleih-3232e",
      storageBucket: "kanuverleih-3232e.appspot.com",
      messagingSenderId: "296719985017",
      appId: "1:296719985017:web:cd6a18e43236b3ae3027a8",
      measurementId: "G-J8Q4MD9WZW"
    },
    services: {
      firestore: true
    }
  },

  i18n: {
    locales: [{
        code: 'en',
        flag: 'us',
        name: 'EN'
      },{
        code: 'de',
        flag: 'de',
        name: 'DE'
      }
    ],
    defaultLocale: 'de',
    vueI18n: {
      fallbackLocale: 'de',
      messages: {
        de: {
          title: 'BiBi\'s Bootsverleih',
          banner_text: 'Wir haben geöffnet: Jetzt reservieren und Wunschtermin sichern!',
          day: 'Tag',
          equipments: 'Ausstattung',
          from: 'ab',
          halfDay: 'halber Tag',
          hour: 'h',
          location: 'An- & Ablegestelle',
          opening_hours: "Öffnungszeiten",
          optional_waterbag: 'wasserdichter Beutel (optional)',
          our_prices: 'Unsere Preise',
          per: 'pro',
          rates: 'Mietpreise & Tarife',
          rent: 'mieten',
        },
        en: {
          title: 'BiBi\'s Boat Rental',
          banner_text: 'We\'re open: Reserve now and secure your preferred date!',
          day: 'day', 
          equipments: 'Equipments',
          from: 'from',
          halfDay: 'half day',
          hour: 'h',
          location: 'Location',
          opening_hours: "Opening hours",
          optional_waterbag: 'waterproof bag (optional)',
          our_prices: 'Our Prices',
          per: 'per',
          rates: 'Rental Prices & Rates',
          rent: 'rent',
        },
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
