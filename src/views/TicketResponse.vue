<template>
  <user-banner />
  <v-container>
    <v-row class="d-flex justify-center align-center" style="height: 100vh;">
      <v-col cols="12">
        <v-card class="custom-card">
          <v-card-text class="text-center custom-text">
            <template v-if="boleta">
              <span class="highlighted-text">Su Boleta se ha generado correctamente,</span>
              usted puede <a :href="boletaLink" download class="download-link">descargarla aquí</a>
            </template>
            <template v-else-if="vep">
              <span class="highlighted-text">Su VEP se ha generado correctamente. Podra verlo desde su Home Banking con el numero VEP{{vepnumber}}</span>
            </template>
            <template v-else-if="error">
              <span class="highlighted-text">Ha habido un problema con su Generacion, intentelo nuevamente</span>
            </template>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserBanner from '@/components/minicomps/UserBanner.vue';

export default {
  name: 'TicketResponse',
  components: {
    UserBanner,
  },
  props: {
    boleta: Boolean,
    vep: Boolean,
    error: Boolean,
    boletaLink: String,
    vepnumber: String,
  },
};
</script>

<style scoped>
.custom-card {
  background-color: #c9f2fb; /* Fondo gris mate */
  padding: 20px;
  border-radius: 10px;
}

.custom-text {
  font-size: 24px; /* Tamaño de fuente más grande */
}

.highlighted-text {
  font-weight: bold; /* Texto en negrita */
}

.download-link {
  color: #2196F3; /* Color azul para el enlace de descarga */
  text-decoration: none;
  font-weight: bold;
  cursor: pointer; /* Cambia el cursor al pasar el mouse */
}

.download-link:hover {
  text-decoration: underline;
}
</style>
