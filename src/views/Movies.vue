<template>
    <div class="movie-container">
    <h2>Now Playing</h2>
    <button v-on:click="logout">Logout</button>
    <input type="text"  v-model="search" placeholder="Search by title.."/>
    <ul>
        <li v-for="movie in filteredList" :key="movie.id">
            <a :href="'/#/movie/' + movie.id"><img :src="'/images/posters' + movie.poster_path"></a>           
            <Rating></Rating>
        </li>
    </ul>
</div>
</template>

<script>
import Rating from './Rating.vue';
import store from '../store';
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
        logout: function () {
            this.$router.push('login');

            //TODO invalidate session
            
        }
    },
  computed: {
    filteredList() {
      return store.state.movies.filter(movie => {
        return movie.original_title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<style>

</style>
