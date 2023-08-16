<template>
  <user-banner/>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-row>
              <v-col v-for="(panel, index) in panels" :key="index" cols="4">
                <v-card :class="{ 'selected-panel': index === activePanel }">
                  <v-card-title>{{ panel.title }}</v-card-title>
                  <v-card-text>{{ panel.content }}</v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserBanner from '@/components/minicomps/UserBanner.vue';

export default {
  name:'TicketResponse',  
  components: {
      UserBanner
  },
  props: {
    activePanel: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      panels: [
        {
          title: 'Panel 1',
          content: 'Contenido del Panel 1',
        },
        {
          title: 'Panel 2',
          content: 'Contenido del Panel 2',
        },
        {
          title: 'Panel 3',
          content: 'Contenido del Panel 3',
        },
      ],
    };
  },
};
</script>

<style scoped>
.selected-panel {
  background-color: #2196F3;
  color: white;
}
</style>
