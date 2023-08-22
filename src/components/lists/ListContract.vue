<template>
  <div>
    <v-list>
      <v-list-item v-for="contract in contracts" :key="contract.id" @click="redirectToResume(contract)">
        <v-card class="mb-3" color="#4ad4f2" >
          <v-row align="center">
            <v-col cols="9">
              <v-card-title>{{ contract.title }}</v-card-title>
              <v-card-subtitle>{{ contract.type }}</v-card-subtitle>
              <v-card-text>{{ contract.address }}</v-card-text>
            </v-col>
            <v-col cols="12" class="text-right">
              <v-card-subtitle>{{ contract.count }}</v-card-subtitle>
            </v-col>
          </v-row>
        </v-card>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import mockData from './mockData.json'

export default {
  name: 'ListContract',
  methods: {
    redirectToResume(contract) {
      this.$router.push({ name: 'ContractDetailsPage', params: { id: contract.id } });
    },
  },
  data() {
    return {
      contracts: mockData
    };
  }
};
</script>

<style scoped>
/* Estilos específicos de esta página, si es necesario */
</style>
