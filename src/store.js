//import Vue from 'vue'
import Vuex from 'vuex'
//import {HTTP} from './http-common';
//import axios from "axios";
//import gql from "graphql-tag";

//outdated
//Vue.use(Vuex)


//probably going to invalidate this file and move its contents to movies.vue
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

    //can I do this by replacing axios with gql for js?
        fetchMovieList(store){
            // store.commit('FETCH_MOVIES_PENDING');
/*
    return  apollo : ({
      url: 'https://movies.keyhole.institute/graphql',
      method: 'get',
                data: {
                    query:  `
      query nowPlaying { nowPlaying {
        id
        title
        overview
        posterPath
        posterPathW342
        }
      }
      `
                }
            })



 */
            return  axios({
                url: HTTP,
                method: 'get',
                data: {
                    query:  `
      query nowPlaying { nowPlaying {
        id
        title
        overview
        posterPath
        posterPathW342
        }
      }
      `
                }
            })
                .then(response => {
                    store.commit('FETCH_MOVIES_SUCCESS', response.data.results)

                }).catch(error => {
                    //console.log(error);
                    // store.commit('FETCH_MOVIES_FAILURE', error)
                })
        }


    }
})
