<template>
  <div className="movie-detail">
    <h3>{{ movie.overview }}</h3>
    <a href="/#/movies"><span className="close"></span></a>
    <img :src="'/images/backdrops' + movie.backdrop_path"/>
  </div>
</template>

<script>
//import {HTTP} from '../http-common';
//import axios from "axios";
import gql from 'graphql-tag'


export default {
  props: ['id'],
  data() {
    return {
      movie: {},
      errors: []
    }
  },
  created() {

    apollo : ({
      url: 'https://movies.keyhole.institute/graphql',
      method: 'get',
      data: {
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
