<template>
    <div class="movie-detail">
    <h3>{{movie.overview}}</h3>
    <a href="/#/movies"><span class="close"></span></a>
    <img :src="'/images/backdrops' + movie.backdrop_path"/>
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
