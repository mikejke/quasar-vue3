import { RouteRecordRaw } from 'vue-router';
import Home from '@/views/home.vue';
import About from '@/views/about.vue';

export const routes: RouteRecordRaw[] = [
  { name: 'home', path: '/', component: Home },
  { name: 'about', path: '/about', component: About },
];
