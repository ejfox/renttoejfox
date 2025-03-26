import pkg from './package.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'EJ Fox - Beacon Property Rental Application',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Professional, responsible tenant seeking studio/1BR with outdoor space in Beacon. Stable income, excellent credit, references available.'
        },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://renttoejfox.com/' },
        {
          property: 'og:title',
          content: 'EJ Fox - Beacon Property Rental Application'
        },
        {
          property: 'og:description',
          content:
            'Professional, responsible tenant seeking studio/1BR with outdoor space in Beacon. Stable income, excellent credit, references available.'
        },
        {
          property: 'og:image',
          content:
            'http://res.cloudinary.com/ejf/image/upload/c_fill,g_auto,w_1200,h_630,f_auto,q_auto/v1743017983/Screenshot_2025-03-26_at_3.39.31_PM.png'
        },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://renttoejfox.com/' },
        {
          name: 'twitter:title',
          content: 'EJ Fox - Beacon Property Rental Application'
        },
        {
          name: 'twitter:description',
          content:
            'Professional, responsible tenant seeking studio/1BR with outdoor space in Beacon. Stable income, excellent credit, references available.'
        },
        {
          name: 'twitter:image',
          content:
            'http://res.cloudinary.com/ejf/image/upload/c_fill,g_auto,w_1200,h_630,f_auto,q_auto/v1743017983/Screenshot_2025-03-26_at_3.39.31_PM.png'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://renttoejfox.com/' }
      ]
    }
  },
  ssr: false, // for netlify deploy
  devtools: { enabled: true },
  modules: [
    // '@nuxtjs/supabase',
    '@vueuse/nuxt',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Figtree: [400, 700]
        }
      }
    ]
  ],
  runtimeConfig: {
    public: {
      OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY,
      OPENAI_API_KEY: process.env.OPENAI_API_KEY,
      PRODUCTION: process.env.PRODUCTION
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
