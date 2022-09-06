<template>
    <div class="movie-container">
    <h2>Now Playing</h2>
    <button v-on:click="logout">Logout</button>
    <input type="text"  v-model="search" placeholder="Search by title.."/>
    <ul>
        <li v-for="movie in filteredList" :key="movie.id">
            <a :href="'/#/movie/' + movie.id"><img :src="'/images/posters' + movie.poster_path"></a>           
            <Rating 
                v-bind:id="movie.id"
                v-bind:stars="movie.stars"
            ></Rating>
        </li>
    </ul>
</div>
</template>

<script>
//not sure if the template above still holds after the 3x swap
//think this needs to be replaced with the call itself
import Rating from './Rating.vue';
import store from '../store';
import gql from "graphql-tag";
export default {
    components:{
        Rating
    },

    data() {
        return {
        search: '',
        errors: [],    
        }
    },

    methods: {
      apollo : ({
        url: 'https://movies.keyhole.institute/graphql',
        method: 'get',
        data: {

          return:{
            services: [],
          },
          query: gql `query movie($id: ID!) {
        movie(id: $id) {
          id
          title
          overview
          posterPath
          backdropPathW1280
          }
      }
      `
        }
      })

          .then(response => {
            return{
              response
            }
            //this.movies = response.data
          })
        }
    },

/*
//may need to be swapped out
  computed: {
    filteredList() {
      return store.state.movies.filter(movie => {
        return movie.original_title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }*/
}
</script>

<style>

</style>
