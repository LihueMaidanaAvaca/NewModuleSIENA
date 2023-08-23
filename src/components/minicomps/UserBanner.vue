<template>
  <div class="user-banner">
    <h3 class="user-name">{{ userName }}</h3>
    
    <v-list-item link to="/payments" class="option">
      <v-list-item-title class="option-title">Pagos</v-list-item-title>
    </v-list-item>
    <v-list-item @click="showLogoutConfirmationDialog" class="option">
      <v-list-item-title class="option-title">Salir</v-list-item-title>
    </v-list-item>

    <!-- Modal de confirmación para cerrar sesión -->
    <v-dialog v-model="logoutConfirmationDialog" max-width="400">
      <v-card>
        <v-card-title class="headline">¿Estás seguro de que deseas cerrar sesión?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="logout">Sí, Cerrar Sesión</v-btn>
          <v-btn color="error" @click="closeLogoutConfirmationDialog">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'UserBanner',
  
  data() {
    return {
      userName: 'Telefonica Argentina S.A.',
      logoutConfirmationDialog: false,
    };
  },

  methods: {
    showLogoutConfirmationDialog() {
      this.logoutConfirmationDialog = true;
    },
    closeLogoutConfirmationDialog() {
      this.logoutConfirmationDialog = false;
    },
    logout() {
      localStorage.removeItem('authToken');
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

.option {
  color: white;
  text-decoration: none;
  cursor: pointer;
}

.option-title {
  margin: 0;
}
</style>
