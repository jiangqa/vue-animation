import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import routers from './routers'
const routes: Array<RouteRecordRaw> = [
    {
        name: 'home',
        path: '/',
        component: () => import('../views/Home.vue')
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('../views/Login.vue')
    },
    ...routers
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
