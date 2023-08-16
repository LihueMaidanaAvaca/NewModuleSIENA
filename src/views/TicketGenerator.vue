<template>
    <user-banner/>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-text>
            <v-row>
              <v-col cols="6">Fecha de vencimiento:</v-col>
              <v-col cols="6">{{ paymentDueDate }}</v-col>
            </v-row>
            <v-row>
              <v-col cols="6">Monto a abonar:</v-col>
              <v-col cols="6">{{ paymentAmount }}</v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <v-card class="mt-3">
          <v-card-text>
            <v-row align="center" justify="space-between">
              <v-col cols="4">
                <label for="boleta-switch" class="text-right mr-2" :style="labelStyle('Boleta')">Boleta</label>
              </v-col>
              <v-col cols="4" class="text-center">
                <v-switch v-model="selectedOption" true-value="VEP" false-value="Boleta" id="vep-switch"></v-switch>
              </v-col>
              <v-col cols="4">
                <label for="vep-switch" class="text-left ml-2" :style="labelStyle('VEP')">VEP</label>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <v-btn color="#4ad4f2" @click="generatePayment" class="mt-3">Generar Pago</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserBanner from '@/components/minicomps/UserBanner.vue';

export default {
  name: 'PaymentSelection',
  components: {
      UserBanner
  },  
  data() {
    return {
      panels: [
        // Definición de los paneles de métodos de pago
      ],
      showCheckbox: false,
      paymentDueDate: '2023-09-30', // Fecha de vencimiento
      paymentAmount: '$150.00', // Monto a abonar
      selectedOption: 'Boleta', // Opción seleccionada (Boleta por defecto)
    };
  },
  methods: {
    labelStyle(option) {
      if (this.selectedOption === option) {
        return 'background-color: #2196F3; color: white; padding: 5px; border-radius: 4px;';
      }
      return 'background-color: #f0f0f0; padding: 5px; border-radius: 4px;';
    },
    generatePayment() {
      // Lógica para generar el pago
      console.log('Pago generado:', this.selectedOption);
    },
    // Métodos para la selección de paneles
  },
};
</script>

<style scoped>
/* Estilos específicos para PaymentSelection */
</style>
