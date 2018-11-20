import Vue from 'vue'
import Router from 'vue-router'
import Movies from './views/Movies.vue'
import Movie from './views/Movie.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
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
