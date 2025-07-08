// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-llms'
  ],

  uiPro: {
    license: '18664695-FBE3-4265-B599-794BC7843E8D'
  },

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1
        }
      }
    }
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true,
      autoSubfolderIndex: false
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: {
    provider: 'iconify'
  },

  llms: {
    domain: 'https://docs.heeet.io/',
    title: 'Heeet Docs',
    description: 'Heeet is the marketing intelligence app that integrates with your favorite platforms. Track user journeys, sync campaign data, and optimize your marketing ROI across all platforms.',
    full: {
      title: 'Heeet Docs - Full Documentation',
      description: 'This is the full documentation for Heeet.'
    },
    sections: [
      {
        title: 'Salesforce',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/salesforce%' }
        ]
      },
      {
        title: 'HubSpot',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/hubspot%' }
        ]
      },
      {
        title: 'Zapier',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/zapier%' }
        ]
      }
    ]
  }
})
