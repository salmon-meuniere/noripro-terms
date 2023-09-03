// https://nuxt.com/docs/api/configuration/nuxt-config
export const locales = [
  { code: 'ja', iso: 'ja-JP', name: '日本語' },
  { code: 'en', iso: 'en-US', name: 'English' },
  { code: 'id', iso: 'id-ID', name: 'Bahasa Indonesia' }
];

const baseUrl = 'https://npterms.salmon-m.com';

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseUrl,
    },
  },
  css: [
    'github-markdown-css/github-markdown-light.css',
    '@/assets/css/tailwind.css',
  ],
  modules: [
    '@nuxt/content',
    '@nuxtjs/i18n',
  ],
  app: {
    head: {
      meta: [
        { name: 'robots', content: 'noindex' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Akshar&display=swap' },
				{ rel: 'stylesheet', href: '/fonts/fonts.css' },
      ]
    }
  },
  i18n: {
    baseUrl,
    vueI18n: './i18n.config.ts',
    locales,
    defaultLocale: 'en',
    strategy: 'prefix',
    trailingSlash: true,
  },
  postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
  experimental: {
    inlineSSRStyles: false,
    payloadExtraction: true,
  },
})
