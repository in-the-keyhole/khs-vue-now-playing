<script setup lang="ts">
import type { Movie } from "@/models";
import { useQuery } from "@vue/apollo-composable";
import { computed, ref } from "vue";
import { NOW_PLAYING } from "@/graphql-operations";
import MoviePoster from "@/components/MoviePoster.vue";
const nowPlayingQuery = useQuery(NOW_PLAYING);

const filteredMovies = computed<Movie[]>(() => {
  return nowPlayingQuery.result?.value?.nowPlaying.filter((movie: Movie) => {
    return movie.title.toLowerCase().includes(searchFilter.value.toLowerCase());
  });
});

const searchFilter = ref("");
</script>

<template>
  <div class="movie-container">
    <h2>Now Playing</h2>
    <input
      type="text"
      v-model="searchFilter"
      placeholder="Filter by title..."
    />
    <ul>
      <MoviePoster
        v-for="movie in filteredMovies"
        :id="movie.id"
        :posterPath="movie.posterPath"
      />
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

.movie-container > img {
  width: 375px;
}
</style>
