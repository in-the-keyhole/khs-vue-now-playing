import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'nowPlaying',
      component: () => import('@/views/Movies.vue')
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: () => import('@/views/Movie.vue'),
      props: true,
    },
  ]
})

export default router
