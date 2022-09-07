<template>
  <div className="movie-detail">
    <h3>{{ movie.overview }}</h3>
    <a href="/#/movies"><span className="close"></span></a>
    <img :src="'/images/backdrops' + movie.backdrop_path"/>
  </div>
</template>

<script>
/*import type { Movie } from "@/models";
import { useQuery } from "@vue/apollo-composable";
import { computed } from "vue";
import { MOVIE_QUERY } from "../graphql-operations";
const movieSearchQuery = useQuery(MOVIE_QUERY);

const movie = computed<Movie>(
    () => movieSearchQuery.result?.value?.movie ?? []
);*/
</script>

<style>

</style>
