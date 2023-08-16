<template>
  <div>
    <v-list>
      <v-list-item v-for="card in cards" :key="card.id">
        <v-card class="mb-3" color="#4ad4f2" >
          <v-row align="center">
            <v-col cols="9">
              <v-card-title>{{ card.title }}</v-card-title>
              <v-card-subtitle>{{ card.type }}</v-card-subtitle>
              <v-card-text>{{ card.address }}</v-card-text>
            </v-col>
            <v-col cols="12" class="text-right">
              <v-card-subtitle>{{ card.count }}</v-card-subtitle>
            </v-col>
          </v-row>
        </v-card>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'ListContract',
  data() {
    return {
      cards: [
        { id: 1, title: 'Contrato 1', type: 'Alquiler', address: 'Av. Callo 234 CABA', count: 'Cuenta Corriente'},
        { id: 2, title: 'Contrato 2', type: 'Alquiler', address: 'Av. Callo 234 CABA', count: 'Cuenta Corriente'},
        { id: 3, title: 'Contrato 3', type: 'Alquiler', address: 'Av. Callo 234 CABA', count: 'Cuenta Corriente'},
        { id: 3, title: 'Contrato 3', type: 'Alquiler', address: 'Av. Callo 234 CABA', count: 'Cuenta Corriente'},
        { id: 3, title: 'Contrato 3', type: 'Alquiler', address: 'Av. Callo 234 CABA', count: 'Cuenta Corriente'},
        // Agrega más tarjetas según sea necesario
      ]
    };
  }
};
</script>

<style scoped>
/* Estilos específicos de esta página, si es necesario */
</style>
