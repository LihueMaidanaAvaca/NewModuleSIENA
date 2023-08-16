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
  <!-- ///////// -->
  <v-card class="mb-3" elevation="3">
      <v-card-title>Seleccione método de pago</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="8"> <!-- Contenedor de los mensajes -->
            <!-- Contenido de los panels -->
            <v-card v-if="panels[0].isSelected" class="mb-3" elevation="3">
              <v-card-title>Pago Independiente</v-card-title>
              <v-card-text>
                Contenido del método de pago: Pago Independiente.
              </v-card-text>
            </v-card>
            <v-card v-if="panels[1].isSelected" class="mb-3" elevation="3">
              <v-card-title>Seleccione las cuotas a abonar</v-card-title>
              <v-card-text>
                Contenido del método de pago: Pago en cuotas fijas.
              </v-card-text>
            </v-card>
            <v-card v-if="panels[2].isSelected" class="mb-3" elevation="3">
              <v-card-title>Seleccione las cuotas a abonar</v-card-title>
              <v-card-text>
                Contenido del método de pago: Pago en cuotas variables.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4"> <!-- Contenedor de los checkboxes -->
            <div class="d-flex flex-column">
              <v-checkbox v-for="(panel, index) in panels"
                          :key="index"
                          v-model="panel.isSelected"
                          :label="panel.label"
                          @click="handleCheckboxClick(index)"
              ></v-checkbox>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
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
  },
  
  data() {
  return {
    panels: [
        { label: 'Pago Independiente', isSelected: false },
        { label: 'Pago en cuotas fijas', isSelected: false },
        { label: 'Pago en cuotas variables', isSelected: false },
      ],
  };
},

    methods: {
    handleCheckboxClick(selectedIndex) {
      this.panels.forEach((panel, index) => {
        if (index !== selectedIndex) {
          panel.isSelected = false;
        }
      });
    },
  },
};
</script>

<style scoped>
/* Estilos específicos de este componente */
</style>
