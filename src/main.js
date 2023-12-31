import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router"; 
import App from './App.vue';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { loadFonts } from './plugins/webfontloader';
import LogInForm from '@/views/LogInPage.vue';
import HomePage from '@/views/HomePage.vue';
import ResumeContractPage from '@/views/ResumeContractPage.vue';
import TicketGenerator from '@/views/TicketGenerator.vue'
// import TicketResponse from '@/views/TicketResponse.vue'
import PruebaMensaje from '@/views/PruebaMensaje.vue'
import RecordedPaymentsPage from '@/views/RecordedPaymentsPage.vue'
import BoletaResponse from '@/components/minicomps/responses/BoletaResponse.vue'
import VepResponse from '@/components/minicomps/responses/VepResponse.vue'

const routes = [
  { path: "/", name: 'LoginPage', component: LogInForm },
  { path: "/home", component: HomePage },
  { path: "/resume/:id", name: 'ContractDetailsPage', component: ResumeContractPage },
  { path: "/generator", name: 'GeneratorPage', component: TicketGenerator, props: true },
  // { path: "/response", component: TicketResponse },
  { path: "/response", name: 'ResponsePage', component: PruebaMensaje },
  { path: "/payments", component: RecordedPaymentsPage },
  {
    path: '/boleta-response',
    name: 'BoletaResponse',
    component: BoletaResponse
  },
  {
    path: '/vep-response',
    name: 'VEPResponse',
    component: VepResponse
  },
];

const router = new createRouter({
      history: createWebHistory(),
      routes: routes
});

const vuetify = createVuetify({
  components,
  directives,
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('authToken');
  if (!token && to.name !== 'LoginPage') {
    // Si no hay token y no estás en la página de inicio de sesión,
    // redirige a la página de inicio de sesión
    next({ name: 'LoginPage' });
  } else {
    // Si hay token o estás en la página de inicio de sesión, permite la navegación
    next();
  }
});


loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
