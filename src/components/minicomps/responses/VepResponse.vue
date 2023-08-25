<template>
  <user-banner />
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-alert color="success" icon="mdi-check-circle-outline">
            ¡Tu vep se ha generado correctamente!
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'VepResponse'
  };
  </script>
  