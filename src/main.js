import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router"; 
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import App from './App.vue';
import LogInForm from '@/views/LogInPage.vue';
import HomePage from '@/views/HomePage.vue';
import ResumeContractPage from '@/views/ResumeContractPage.vue';
import TicketGenerator from '@/views/TicketGenerator.vue'
// import TicketResponse from '@/views/TicketResponse.vue'
import PruebaMensaje from '@/views/PruebaMensaje.vue'
import RecordedPaymentsPage from '@/views/RecordedPaymentsPage.vue'

const routes = [
  { path: "/", name: 'LoginPage', component: LogInForm },
  { path: "/home", component: HomePage },
  { path: "/resume/:id", name: 'ContractDetailsPage', component: ResumeContractPage },
  { path: "/generator", component: TicketGenerator },
  // { path: "/response", component: TicketResponse },
  { path: "/response", component: PruebaMensaje },
  { path: "/payments", component: RecordedPaymentsPage },
];

const router = new createRouter({
      history: createWebHistory(),
      routes: routes
});

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
