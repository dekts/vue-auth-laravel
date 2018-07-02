import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import DashboardComponent from './components/DashboardComponent'
import LoginComponent from './components/LoginComponent'
import LogoutComponent from './components/LogoutComponent'
import RegisterComponent from './components/RegisterComponent'
import store from "./store";

const routes = [
    {
        path: '/',
        redirect: { name: 'login' }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DashboardComponent,
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        name: 'login',
        component: LoginComponent
    },
    {
        path: '/logout',
        name: 'logout',
        component: LogoutComponent
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterComponent,
        meta: { requiresAuth: false }
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(route => route.meta.requiresAuth) && !store.state.isLoggedIn) {
        next({ name: 'login' });
        return
    }

    if ((to.path === '/login' || to.path === '/register') && store.state.isLoggedIn) {
        next({ name: 'dashboard' });
        return
    }

    next()
});

export default router;