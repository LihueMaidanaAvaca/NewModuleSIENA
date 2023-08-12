<template>
  <v-app>
    <v-main>
      <LogInForm/>
    </v-main>
  </v-app>
</template>

<script>
import LogInForm from './components/LogInForm.vue'

export default {
  name: 'App',

  components: {
    LogInForm,
  },

  data: () => ({
    //
  }),
}
</script>
