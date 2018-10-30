<template>
    <div class="movie-detail">
    <h2>{{movie.title}}</h2>
    <p>Released on {{movie.release_date}}</p>
    <h3>{{movie.overview}}</h3>
    <a href="/#/movies"><span class="close"></span></a>
    <img :src="'http://localhost:8080/images/backdrops' + movie.backdrop_path"/>
</div>
</template>

<script>
import {HTTP} from '../http-common';

export default {
    props: ['id'],
  data() {
    return {
      movie: {},
      errors: []
    }
  },

  created() {      
    HTTP.get(`movies/` + this.id)
    .then(response => {
      this.movie = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<style>

</style>
