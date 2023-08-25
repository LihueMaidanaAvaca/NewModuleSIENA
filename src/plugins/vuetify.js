import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

const vuetify = createVuetify({
  theme: {
    dark: false, // Configura el modo nocturno en false por defecto
    themes: {
      light: {
        primary: '#4ad4f2', // Cambia el color primary a tu elección
        secondary: '#424242', // Cambia el color secondary a tu elección
      },
      dark: {
        primary: '#1976D2', // Cambia el color primary en modo nocturno
        secondary: '#424242', // Cambia el color secondary en modo nocturno
      },
    },
  },
  ssr: true,
})
