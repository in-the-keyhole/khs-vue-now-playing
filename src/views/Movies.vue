import gql from 'graphql-tag'

<script lang="ts" setup>
import type { Movie, MovieSummary } from "@/models";
import { useQuery } from "@vue/apollo-composable";
import { computed, ref } from "vue";
import { NOW_PLAYING } from "../graphql-operations";
import MoviePoster from "@/views/MoviePoster.vue";

const nowPlayingQuery = useQuery(NOW_PLAYING);


const searchFilter = ref("");

const filtered = computed<MovieSummary[]>(() => {
  return nowPlayingQuery.result?.value?.nowPlaying.filter((movies: MovieSummary) => {
    return movies.title.toLowerCase().includes(searchFilter.value.toLowerCase());
  });
});

</script>

<template>

  <div class="search">
    <label for="search" hidden>Search</label>
    <input name="search" type="text" v-model="searchFilter" placeholder="Filter by title" />
    <!-- <button>
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
          fill="currentColor" />
      </svg>
    </button> -->
  </div>
  <div class="homeBody">
    <MoviePoster v-for="movie in filtered" :id="movie.id" :posterPath="movie.images.posterPath"
      :releaseDate="movie.releaseDate" :title="movie.title" />
  </div>

</template>


<style scoped>

</style>
