<template>
  <div>
    <user-banner/>
    <v-row justify="center" class="mt-6">
      <v-col cols="12" sm="8" md="6">
        <v-sheet elevation="0" class="pa-4">
          <h2 class="headline text-center" style="color: grey;">Seleccione el contrato que desee abonar</h2>
        </v-sheet>
      </v-col>
    </v-row>  
    <list-contract/>
  </div>
</template>

<script>
import UserBanner from '@/components/minicomps/UserBanner.vue';
import ListContract from '@/components/lists/ListContract.vue';

export default {
  name: 'AboutPage',

  components: {
    ListContract,
    UserBanner,
  },

};
</script>
    

<style scoped>
/* Estilos específicos de esta página, si es necesario */
</style>
