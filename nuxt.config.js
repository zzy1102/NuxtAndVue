import env from './env' // 环境配置文件
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'copyright',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['element-ui/lib/theme-chalk/index.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins ,
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/index',
    { src: '@/store/index.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: process.env.BASE_API,
    proxy: true,
  },
  proxy: {
    '/pro': {
      target: 'http://192.168.50.78:9999', // 目标主机
      pathRewrite: {
        '^/pro': '/',
      },
      ws: true, // 代理 websockets
      changeOrigin: true, //允许跨域
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
  env: {
    BASE_URL: env[process.env.NODE_ENV].BASE_API,
    NODE_ENV: env[process.env.NODE_ENV].NODE_ENV,
  },
}
