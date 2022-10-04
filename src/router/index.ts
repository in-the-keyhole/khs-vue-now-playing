import {createRouter, createWebHistory} from 'vue-router'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import ('@/views/Login.vue')
        },
        {
            path: '/now-playing',
            name: 'now-playing',
            component: () => import ('@/views/Movies.vue')
        },

        {
            path: '/movie/:id',
            name: 'movie',
            component: () => import ('@/views/MovieDetails.vue'),
            props: true
        }

    ]
})


export default router
