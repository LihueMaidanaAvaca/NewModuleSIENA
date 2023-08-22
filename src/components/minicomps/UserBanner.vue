<template>
  <div class="user-banner">
    <h3 class="user-name">{{ userName }}</h3>
    
      <v-list-item link to="/payments" class="option">
        <v-list-item-title class="option-title">Pagos</v-list-item-title>
      </v-list-item>
      <v-list-item @click="logout" class="option">
        <v-list-item-title class="option-title">Salir</v-list-item-title>
      </v-list-item>
    
  </div>
</template>

<script>
export default {
  name: 'UserBanner',
  
  data() {
    return {
      userName: 'Telefonica Argentina S.A.',
    };
  },

  methods: {
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
