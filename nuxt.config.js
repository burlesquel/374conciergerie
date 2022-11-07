export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,
  server: {
    host: "0.0.0.0"
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '374 Conciergerie',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '374 Conciergerie is a private concierge based in Istanbul. Our members benefit from the best travel solutions, addresses and activities.' },
      { hid: 'keywords', name: 'keywords', content: '374conciergerie, conciergerie, concierge, istanbul, turkey, türkiye, travel, otel, otels, tourist, tour, sailing, bosphorus, transit, cruis, cruising, vacation, travel planning, drive, cars, yacht, helicopter, activities, ticketing, events, offers, sea, bridge, travel assistant, easy life, luxury, exclusive, unique, personal concierge, personal travel assistant, priviliged, first-class, business, company, experience, restaurants, istanbul travel tips, airport, shuttle, travel guide, private, rich, turkish, istanbul best hotels, istanbul best places, istanbul shopping malls, istanbul best breakfests, istanbul best things to do, best, cappadocia, air balloons, transportation, luxury cars'},
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css",
        rel: "stylesheet",
        integrity: "sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==",
        crossorigin: "anonymous",
        referrerpolicy: "no-referrer"
      }
    ],
    script: [
      { src: "https://popupsmart.com/freechat.js", body: true, async:true },
      { src: '/popup.js', body: true, async:true },
      { src: "https://www.googletagmanager.com/gtag/js?id=AW-10985542941", async:true},
      { src: '/google_tag.js', async:true}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/tailwind.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: "English",
        file: 'en.json'
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        name: "Français",
        file: 'fr.json'
      },
      {
        code: "tr",
        iso: 'tr-TR',
        name: "Türkçe",
        file: "tr.json"
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
    baseUrl: 'https://374conciergerie.com'
  },

  sitemap: {
    hostname: 'https://374conciergerie.com',
    gzip: true,
    trailingSlash: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      css: {
        modules: false,
      },
    },
  }
}