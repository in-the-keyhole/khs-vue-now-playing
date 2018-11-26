import Vue from 'vue'
import Vuex from 'vuex'
import {HTTP} from './http-common';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    test: ""
  },
  mutations: {
      initMovies(state, payload){
          state.movies = payload;
      }
      /*
    fetchMovies(state){

    }
*/
  },
  actions: {


    fetchMovies(store){
        store.commit('FETCH_MOVIES_PENDING');

        return HTTP.get(`nowplaying`)
        .then(response => {
            store.commit('initMovies', response.data.results) 

        }).catch(error => { 
       
            store.commit('FETCH_MOVIES_FAILURE', error)
        })
    }  
  }
})
