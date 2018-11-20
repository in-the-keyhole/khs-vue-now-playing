<template>
    <div class="movie-container">
    <h2>Now Playing</h2>
    <button v-on:click="logout">Logout</button>
    <input type="text"  v-model="search" placeholder="Search by title.."/>
    <ul>
        <li v-for="movie in filteredList" :key="movie.id">
            <a :href="'/#/movie/' + movie.id"><img :src="'http://localhost:8080/images/posters' + movie.poster_path"></a>           
            <Rating></Rating>
        </li>
    </ul>
</div>
</template>

<script>
import {HTTP} from '../http-common';
import Rating from '../components/Rating.vue';

export default {
    components:{
        Rating
    },

    data() {
        return {
        search: '',
        movies: [],
        errors: [],    
        }
    },

    methods: {
        logout: function () {
            this.$router.push('login');

            //TODO invalidate session
            
        }
    },
  computed: {
    filteredList() {
      return this.movies.filter(movie => {
        return movie.original_title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },

  created() {
    HTTP.get(`nowplaying`)
    .then(response => {
      this.movies = response.data.results      
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<style>

</style>
