export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '首页',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
    ],
    script: [],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: `${process.env.NODE_ENV === 'development'?'':'/page'}/favicon.ico`
    }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  target: 'static',

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/element-ui',
    // '@/plugins/scrollAnimation',
    '@/plugins/setTitle',
    "@/plugins/aos.client"
  ],

  router: {
    base: process.env.NODE_ENV === 'development' ? '' : '/page'
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    publicPath: process.env.NODE_ENV === 'development' ? '' : 'page/',
    transpile: [/^element-ui/],
  },
  generate: {
    dir: '../docs'
  }
}
