import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',   //used for dev
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/',
      name: 'home',
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
