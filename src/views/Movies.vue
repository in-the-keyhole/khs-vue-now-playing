import gql from 'graphql-tag'

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

<template>
    <div class="movie-container">
    <h2>Now Playing</h2>
    <button v-on:click="logout">Logout</button>
    <input type="text"  v-model="search" placeholder="Search by title.."/>
    <ul>
        <li v-for="movie in movies" :key="movie.id">
            <a :href="'/#/movie/' + movie.id"><img :src="movie.posterPath"></a>

        </li>
    </ul>
</div>
</template>


<style>

</style>
