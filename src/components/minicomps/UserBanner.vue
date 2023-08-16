<template>
  <div class="text-center">
    <h3 class="text-white p-2" style="background-color: #4ad4f2;">{{ userName }}</h3>
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
};
</script>

<style scoped>
/* Estilos específicos de esta página, si es necesario */
</style>
