import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/MainPage')
    },
    {
        path: '/nru-story',
        name: 'NRU STORY',
        component: () => import('../views/NruStory')
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: () => import('../views/Gallery')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router