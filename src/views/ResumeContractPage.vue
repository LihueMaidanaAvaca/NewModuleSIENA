<template>
 <user-banner/>
  <div>
    <v-card class="mb-3" elevation="3">
      <v-card-title>Resumen</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="4">
            <p>Deuda: {{ deuda }}</p>
            <p>Intereses: {{ intereses }}</p>
            <p>Total: {{ total }}</p>
          </v-col>
          <v-col cols="8">
            <p>Próximo Vencimiento: {{ proximoVencimiento }}</p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="mb-3" elevation="3">
      <v-card-title>Mensaje fijo</v-card-title>
      <v-card-text>
        <p>{{ mensaje }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import UserBanner from '@/components/minicomps/UserBanner.vue';

export default {
  name: 'ResumeContractPage',
  // Propiedades, datos, métodos y más aquí
  props: {
    deuda: Number,
    intereses: Number,
    total: Number,
    proximoVencimiento: String,
    mensaje: String,
  },
  components: {
      UserBanner
  }
  
};
</script>

<style scoped>
/* Estilos específicos de este componente */
</style>
