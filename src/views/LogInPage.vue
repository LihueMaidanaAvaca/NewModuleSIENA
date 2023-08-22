<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <div class="login-image-container">
          <img class="login-image" :src="require('@/assets/logo_aabe.png')" alt="Login Image" />
        </div>
        <v-form class="login-form" @submit.prevent="handleSubmit">
          <v-text-field v-model="cuil" label="CUIT/CUIL"></v-text-field>
          <v-text-field v-model="password" label="Password" type="password"></v-text-field>
          <v-btn type="submit" color="cyan darken-1">Login</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
// import axios from 'axios'

export default {
  data() {
    return {
      cuil: '',
      password: '',
    };
  },
  methods: {
    async handleSubmit() {
      try {
        // Simular una solicitud de autenticación al servidor (reemplaza con tu lógica real)
        // await axios.post('/api/login', {
        //   cuil: this.cuil,
        //   password: this.password,
        // });

        // Supongamos que el servidor devuelve un token o algún indicador de autenticación exitosa
        // const isAuthenticated = response.data.isAuthenticated;

        const isAuthenticated = this.cuil === this.password;

        if (isAuthenticated) {
          // Simulación de un token (reemplaza con el token real del servidor)
          const authToken = 'mi-token-secreto';

          // Guardar el token en el localStorage
          localStorage.setItem('authToken', authToken);

          // Redirigir a la página de inicio después de un inicio de sesión exitoso
          this.$router.push('/home');
        } else {
          // Manejar caso de autenticación fallida si es necesario
          // Por ejemplo, mostrar un mensaje de error al usuario
        }
      } catch (error) {
        console.error('Error de autenticación:', error);
        // Manejar errores de autenticación si es necesario
      }
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