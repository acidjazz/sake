let config = {
  title: 'Designsake Studio',
  description: 'A strategic design agency that specializes in branding, packaging, web design, and development',
  url: 'https://designsakestudio.com',
  image: '/share.jpg',
  keywords: 'design, graphic design, branding, packaging, web design, identity design, web development, art direction, designsake, san francisco',
}

module.exports = {

  head: {
    title: config.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: config.description },
      { name: 'theme-color', content: '#484F62' },

      // Schema.org
      { hid: 'itemprop:name', itemprop: 'name', content: config.title },
      { hid: 'itemprop:description', itemprop: 'description', content: config.description },
      { hid: 'itemprop:image', itemprop: 'image', content: config.url + config.image },

      // facebook
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: config.url },
      { hid: 'og:image', property: 'og:image', content: config.url + config.image },

      { hid: 'og:title', property: 'og:title', content: config.title },
      { hid: 'og:description', property: 'og:description', content: config.description },

      // twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: config.url + config.image },

      { hid: 'twitter:title', name: 'twitter:title', content: config.title },
      { hid: 'twitter:description', name: 'twitter:description', content: config.description },
    ],

    link: [
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#484F62' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    ]

  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Build configuration
  */
  css: [{ src: '~assets/stylus/main.styl', lang: 'stylus' }],
  modules: [
    'nuxt-coffee',
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    }
  }
}
