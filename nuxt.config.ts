export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  
  app: {
    baseURL: '/band-invitation/',
    head: {
      title: 'ROCK BAND 공연 초대',
      htmlAttrs: {
        lang: 'ko'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'ROCK BAND 라이브 공연에 초대합니다' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],
  
  compatibilityDate: '2024-11-22'
})