import { createApp } from 'vue';
import { Quasar, Notify } from 'quasar';
import App from './app.vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/routes';

// icon libraries
import '@quasar/extras/material-icons/material-icons.css';

// Quasar css
import 'quasar/src/css/index.sass';

createApp(App)
  .use(createPinia())
  .use(
    createRouter({
      history: createWebHistory(),
      routes,
    }),
  )
  .use(Quasar, {
    plugins: {
      Notify,
    }, // import Quasar plugins and add here
  })
  .mount('#app');
