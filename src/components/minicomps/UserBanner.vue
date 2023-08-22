<template>
  <div class="user-banner">
    <h3 class="user-name">{{ userName }}</h3>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item link to="/payments">
          <v-list-item-title>Pagos</v-list-item-title>
        </v-list-item>
        <v-list-item @click="logout">
          <v-list-item-title>Salir</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>


<script>

export default {
  name: 'UserBanner',
  
  data() {
    return {
      userName: 'Telefonica Argentina S.A.', // Cambia esto según el nombre real del usuario
    };
  },

  methods: {
    logout() {
      // Realiza las acciones necesarias para cerrar la sesión, como borrar el token del localStorage
      localStorage.removeItem('token'); // Por ejemplo, aquí borramos el token
      // Redirige al usuario a la página de inicio de sesión
      this.$router.push({ name: 'LoginPage' });
    },
  },
};
</script>

<style scoped>
.user-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #4ad4f2;
}

.user-name {
  margin: 0;
  color: white;
}

.options {
  display: flex;
  align-items: center;
}

.option {
  color: white;
  text-decoration: none;
  margin-right: 10px;
}
</style>
