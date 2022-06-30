import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/MainPage')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router