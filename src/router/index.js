import { createWebHashHistory, createRouter } from 'vue-router';

import MainOnmounted from '@/views/MainOnmounted.vue';
import MainOnclick from '@/views/MainOnclick.vue';

const routes = [
  { path: '/', component: MainOnmounted },
  { path: '/onclick', component: MainOnclick }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
