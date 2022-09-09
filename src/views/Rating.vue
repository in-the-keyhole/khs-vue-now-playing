

import gql from 'graphql-tag'


<script setup lang="ts">
import type { Movie } from "@/models";
import { useQuery } from "@vue/apollo-composable";
import { computed } from "vue";
import {MOVIE_QUERY} from "../graphql-operations";



const props = defineProps({
  id : {type: Number, required : true}
})

const movieSearchQuery = useQuery(MOVIE_QUERY, {id: props.id});

const movie = computed<Movie>(
    () => movieSearchQuery.result?.value?.movie ?? []
);

</script>

<template>

  <div class="consensus details">
    <div class="outer_ring">
      <div class="user_score_chart" :data-percent="Math.floor(movie.voteAverage*10)" data-track-color="#204529" data-bar-color="#21d07a">
        <div class="percent">
          <span class="icon">
             <h3>{{Math.floor(movie.voteAverage*10)}}</h3>

          </span>
        </div>
        <canvas height="75" width="75" style="height: 60px; width: 60px;"></canvas>
      </div>
    </div>
  </div>
<!--
  <div class="consensus details">
    <div class="outer_ring">
      <div class="user_score_chart" data-percent="74.0" data-track-color="#204529" data-bar-color="#21d07a">
        <div class="percent">
          <span class="icon icon-r74"></span>
        </div>
        <canvas height="75" width="75" style="height: 60px; width: 60px;"></canvas></div>
    </div>
  </div>
-->
</template>
<style>

    div.consensus {
      z-index: 9;
      width: 68px;
      height: 68px;
      display: marker;
      transition: transform .2s;
      transform: scale(1);
    }

    div.consensus div.outer_ring {
      display: inline-block;
      width: 68px;
      height: 68px;
      border-radius: 50%;
      padding: 4px;
      background-color: limegreen;
      border-color: #b3b3b3;
    }

    div.consensus .user_score_chart {
      position: relative;
      display: inline-block;
      width: 100%;
      height: 100%;
      text-align: center;
    }

    div.consensus .user_score_chart .percent {
      width: 100%;
      height: 100%;
      z-index: 8;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }




    div.consensus .user_score_chart .percent .icon {
      font-family: Consensus !important;
      speak: none;
      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      text-transform: none;
      line-height: 1;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #fff;
      font-size: 2em;
    }






</style>
