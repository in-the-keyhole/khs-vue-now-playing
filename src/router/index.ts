import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import Movies from '../views/Movies.vue'
import Movie from '../views/Movie.vue'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*{   //used for dev
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',   //used for dev
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },*/
    {
      path: '/',
      name: 'home',
      component: Movies,
    },
    {
      path: '/movies',
      name: 'movies',
      component: Movies
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: Movie,
      props: true
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})



export default router
