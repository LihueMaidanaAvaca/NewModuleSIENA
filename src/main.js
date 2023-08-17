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
  { path: "/", component: LogInForm },
  { path: "/home", component: HomePage },
  { path: "/resume", component: ResumeContractPage },
  { path: "/generator", component: TicketGenerator },
  // { path: "/response", component: TicketResponse },
  { path: "/response", component: PruebaMensaje },
  { path: "/payments", component: RecordedPaymentsPage },
];

const router = new createRouter({
      history: createWebHistory(),
      routes: routes
});


loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
