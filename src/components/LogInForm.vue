<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <div class="login-image-container">
          <img class="login-image" :src="require('@/assets/logo_aabe.png')" alt="Login Image" />
        </div>
        <v-form class="login-form" @submit="login">
          <v-text-field v-model="email" label="Email"></v-text-field>
          <v-text-field v-model="password" label="Password" type="password"></v-text-field>
          <v-btn type="submit" color="cyan darken-1">Login</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>      
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      // Aquí puedes agregar la lógica para enviar los datos de inicio de sesión al servidor.
    },
  },
};
</script>

<style>
.login-form {
  border: 1px solid #ccc; /* Agrega un borde de 1px de ancho y color gris */
  padding: 20px; /* Añade un espacio interno alrededor del formulario */
  border-radius: 8px; /* Añade esquinas redondeadas al formulario */
}

.login-image {
  max-width: 100%; /* Asegura que la imagen no exceda el ancho del contenedor */
  border-radius: 8px; /* Esquinas redondeadas para la imagen */
}
</style>