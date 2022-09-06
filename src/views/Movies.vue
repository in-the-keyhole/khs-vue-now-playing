import gql from 'graphql-tag'
<template>
    <div class="movie-container">
    <h2>Now Playing</h2>
    <button v-on:click="logout">Logout</button>
    <input type="text"  v-model="search" placeholder="Search by title.."/>
    <ul>
        <li v-for="movie in filteredList" :key="movie.id">
            <a :href="'/#/movie/' + movie.id"><img :src="'/images/posters' + movie.poster_path"></a>           
            <Rating 
                v-bind:id="movie.id"
                v-bind:stars="movie.stars"
            ></Rating>
        </li>
    </ul>
</div>
</template>

<script setup lang="ts">
import type { Movie } from "@/models";
import { useQuery } from "@vue/apollo-composable";
import { computed } from "vue";
import { NOW_PLAYING } from "../graphql-operations";
const nowPlayingQuery = useQuery(NOW_PLAYING);

const movies = computed<Movie[]>(
    () => nowPlayingQuery.result?.value?.nowPlaying ?? []
);
</script>

<style>

</style>
