import gql from 'graphql-tag'

<script setup lang="ts">
import type { Movie } from "@/models";
import { useQuery } from "@vue/apollo-composable";
import { computed , ref} from "vue";
import { NOW_PLAYING } from "../graphql-operations";
import MoviePoster from "@/views/MoviePoster.vue";
const nowPlayingQuery = useQuery(NOW_PLAYING);
/*
const movies = computed<Movie[]>(
    () => nowPlayingQuery.result?.value?.nowPlaying ?? []
);
*/

const search = ref("");

const filtered = computed<Movie[]>(() => {
  return nowPlayingQuery.result?.value?.nowPlaying.filter((movie: Movie) => {
    return movie.title.toLowerCase().includes(search.value.toLowerCase());
  });
});

</script>

<template>
    <div class="movie-container" >
      <h2>Now Playing</h2>
        <input type="text"  v-model="search" placeholder="Filter by title.."/>
        <ul>
            <MoviePoster v-for="movie in filtered" :posterPath="movie.posterPath" :id="movie.id" />
        </ul>
    </div>
</template>


<style scoped>

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

div.movie-container > img {
  width: 375px;
}

div.movie-container:hover {
  cursor: pointer;
}

div.MoviePoster {
  transition: all .2s ease-in-out;
}

div.MoviePoster :hover {
  transform: scale(1.25);
  transform-origin: top center;
}
</style>
