import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
//import vue from "@vitejs/plugin-vue";
/*import Movies from "./views/Movies";
import Movie from "./views/Movie";
import Login from "./views/Login";
*/
const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  //uri: 'https://movies.keyhole.institute/graphql', //used for production
  uri: '<https://rickandmortyapi.com/graphql>', //used for testing
})

/*
const router = VueRouter.createRouter({

  //replaced with router.ts
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
*/





const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  store,
  render: () => h(App),
})
app.use(router)
app.use(Vuex)
app.mount('#app');