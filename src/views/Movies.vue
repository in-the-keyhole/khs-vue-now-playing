import gql from 'graphql-tag'

<script setup lang="ts">
import type { Movie } from "@/models";
import { useQuery } from "@vue/apollo-composable";
import { computed } from "vue";
import { NOW_PLAYING } from "../graphql-operations";
import MoviePoster from "@/views/MoviePoster.vue";
const nowPlayingQuery = useQuery(NOW_PLAYING);

const movies = computed<Movie[]>(
    () => nowPlayingQuery.result?.value?.nowPlaying ?? []
);
//const posters = new MoviePoster[]

</script>

<template>
    <div class="movie-container" >
    <h2>Now Playing
      <div style="float: right;">
        <button v-on:click="logout">Logout</button>
        <input type="text"  v-model="search" placeholder="Search by title.."/>
      </div>
    </h2>

      <movie-container>
        <div class="poster_list">
            <MoviePoster v-for="movie in movies" :posterPath="movie.posterPath" />
        </div>
      </movie-container>
</div>
</template>


<style>

.movie-container ul {
  padding: 0;
  margin: 0;
  list-style: none;

  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  flex-flow: row wrap;
}

.movie-container li {
  position: relative;
}

.movie-container input {
  padding: 5px;
  background: #000;
  color: #fff;
  position: absolute;
  right: 95px;
  top: 10px;
}

.movie-container button {
  position: absolute;
  top: 11px;
  right: 25px;
  border: none;
  color: white;
  background-color: black;
  height: 33px;
  padding-top: 6px;
  line-height: 21px;
  width: auto;
  font-weight: bold;
}

.movie-container button:hover {
  border: 1px solid rgb(238, 238, 238);
}

.movie {
  padding: 5px;
  margin-top: 10px;

  font-weight: bold;
  text-align: center;
  cursor: pointer;
}

.movie img {
  display: block;
}

.movie-detail {
  position: relative;
}

.movie-header {
  text-align: left;
}

.movie-header img {
  width: 30%;
}

.movie-detail img {
  width: 100%;
}

.movie-detail h3 {
  position: absolute;
  left: 50px;
  bottom: 100px;
}

.movie-detail h4 {
  position: absolute;
  left: 50px;
  bottom: 25px;
}

.movie-detail span {
  position: absolute;
  top: 10px;
  right: 20px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 2em;
  cursor: pointer;
}
</style>
