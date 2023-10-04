import { createRouter, createWebHashHistory } from 'vue-router';
import Dashboard from '../components/Dashboard.vue';
import NewForm from '../components/NewForm.vue';

const routes = [
    { path: '/', name: 'Dashboard', component: Dashboard },
    { path: '/new-form', name: 'NewForm', component: NewForm},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
