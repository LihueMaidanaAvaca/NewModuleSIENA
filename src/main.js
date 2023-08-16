import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router"; 
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import App from './App.vue';
import LogInForm from '@/views/LogInPage.vue';
import HomePage from '@/views/HomePage.vue';
import ResumeContractPage from '@/views/ResumeContractPage.vue'

const routes = [
  { path: "/", component: LogInForm },
  { path: "/home", component: HomePage },
  { path: "/resume", component: ResumeContractPage }
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
