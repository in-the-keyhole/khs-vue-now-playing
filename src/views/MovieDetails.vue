<script lang="ts" setup>

import type {Movie} from "@/models";


import {useQuery} from "@vue/apollo-composable";
import {computed} from "vue";
import {MOVIE_QUERY} from "../graphql-operations";
import {useRoute} from "vue-router";


const route = useRoute();
const movieSearchQuery = useQuery(MOVIE_QUERY, {id: route.params.id});

const movie = computed<Movie>(
    () => movieSearchQuery.result?.value?.movie ?? []
);
</script>

<template>


  <div className="movie-detail">
    <h3>{{ movie.overview }}</h3>
    <img :src=movie.backdropPathW1280>
    <a href="/"><span className="close"></span></a>
  </div>

</template>
<style scoped>

.movie-detail img {
  width: 100%;
}

.movie-detail h3 {
  position: absolute;
  margin: 0px;
  bottom: 0px;
  width: 100%;
  padding: 5em 0em 1em 1em;
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.6) 10%,
      rgba(0, 0, 0, 0.4) 20%,
      rgba(0, 0, 0, 0.2) 60%,
      rgba(0, 0, 0, 0) 100%
  );
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

.close {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 50px;
  overflow: hidden;
}

.close::before {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.close::after {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.close::before,
.close::after {
  content: '';
  position: absolute;
  height: 4px;
  width: 100%;
  top: 50%;
  left: 0;
  margin-top: -2px;
  background: #fff;
  border-radius: 5px;
}

.close:hover::before,
.close:hover::after {
  background: #1ebcc5;
}

</style>
