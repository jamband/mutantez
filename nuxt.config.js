import Fiber from 'fibers'
import Sass from 'sass'
import { APP_NAME, APP_URL, APP_DESCRIPTION } from './plugins/constants'

export default {
  target: 'static',
  ssr: true,
  components: true,
  head: {
    titleTemplate: `%s - ${APP_NAME}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: APP_DESCRIPTION },

      { hid: 'og:site_name', property: 'og:site_name', content: APP_NAME },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: APP_URL }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~/assets/css/app.scss'
  ],
  plugins: [
    '~/plugins/app',
    '~/plugins/format'
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module'
  ],
  modules: [
    '@nuxt/content',
    '@nuxtjs/pwa'
  ],
  messages: {
    error_404: 'ページが見つかりませんでした'
  },
  build: {
    // analyze: true,
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber
        }
      }
    }
  },
  generate: {
    fallback: '404.html',
    routes: ['/']
  },
  // top levels options for packages
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },
  manifest: {
    name: APP_NAME,
    short_name: APP_NAME,
    description: APP_DESCRIPTION,
    lang: 'ja',
    background_color: '#fff',
    display: 'standalone',
    start_url: '/'
  }
}
