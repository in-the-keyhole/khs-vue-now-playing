import gql from 'graphql-tag'


<script lang="ts" setup>
import type { Movie } from "@/models";
import { useQuery } from "@vue/apollo-composable";
import { computed } from "vue";
import { MOVIE_QUERY } from "../graphql-operations";

const props = defineProps({
  id: { type: Number, required: true }
})

const movieSearchQuery = useQuery(MOVIE_QUERY, { id: props.id });
const movie = computed<Movie>(
  () => movieSearchQuery.result?.value?.movie ?? []
);

</script>
<template>
  <div class="consensus details">
    <div class="outer_ring">
      <div :data-percent="Math.floor(movie.voteAverage*10)" class="user_score_chart" data-bar-color="#21d07a"
        data-track-color="#204529">
        <div class="percent">
          <span class="icon">
            <h3>{{ Math.floor(movie.voteAverage * 10) }}</h3>
          </span>
        </div>
        <canvas height="75" style="height: 60px; width: 60px;" width="75"></canvas>
      </div>
    </div>
  </div>
</template>
<style>

</style>
