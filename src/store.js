import Vue from 'vue'
import Vuex from 'vuex'
import {HTTP} from './http-common';


Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    movies: [],
  },

  mutations: {
    FETCH_MOVIES_SUCCESS(state, payload){
          state.movies = payload;
    },
    
    RATE_MOVIES(state, payload){
        const index = state.movies.findIndex(item => item.id === payload.id);
        state.movies[index].stars = payload.stars;
    }
  },

  actions: {


    fetchMovieList(store){
       // store.commit('FETCH_MOVIES_PENDING');

        return HTTP.get(`nowplaying`)
        .then(response => {
            store.commit('FETCH_MOVIES_SUCCESS', response.data.results) 

        }).catch(error => { 
            console.log(error);
           // store.commit('FETCH_MOVIES_FAILURE', error)
        })
    }


  }
})
