<script lang="ts" setup>

import type {Movie} from "@/models";
import type {Credits} from "@/models";
import type {CastMember} from "@/models";

import {useQuery} from "@vue/apollo-composable";
import {computed} from "vue";
import {MOVIE_QUERY} from "../graphql-operations";
import {useRoute} from "vue-router";
import CreditsDisplay from "@/views/CreditsDisplay.vue";
import moment, {Duration} from "moment";

const route = useRoute();
const movieSearchQuery = useQuery(MOVIE_QUERY, {id: route.params.id});

const movie = computed<Movie>(
    () => movieSearchQuery.result?.value?.movie ?? []
);
const runtimeDuration = computed<Duration | undefined>(
    () => movie.value.runtime ? moment.duration(movie.value.runtime, 'minutes') : undefined
);
/*
const genres = computed<Duration | undefined>(
    () => movie.value.genres.
);
*/
//const genres = movie.value.genres.map(genre => genre).join(', ');

//console.log(runtimeDuration);
/*
const goBack = () => {
  this.$router.go(-1);
}*/
</script>

<template>


  <div className="movie-detail">
    <h3>{{ movie.overview }}</h3>
    <img :src=movie.images.backdropPathW1280>
    <a href="/"><span className="close"></span></a>

    <div class="featureBody">
      <div class="featureRow">
        <div class="imgBox">
          <img :src=movie.images.backdropPathW1280>
        </div>

        <div class="details">
          <h2>{{ movie.title }}</h2>
          <p>{{ movie.releaseDate }} - {{ movie.productionCountries.join(', ') }} - {{ movie.genres.join(', ') }} -
            {{ runtimeDuration?.hours() }}h {{ runtimeDuration?.minutes() }}m</p>
          <p>{{ movie.tagline }}</p>
          <h5>Overview</h5>
          <p>{{ movie.overview }}</p>
        </div>

      </div>
      <hr class="hr"/>
      <div class="cast">
        <h5>Top Billed Cast</h5>
        <CreditsDisplay v-for="CastMember in movie.credits.cast" :cast-member="CastMember"/>

        <!--:id="CastMember.id" :character="CastMember.character"
                        :name="CastMember.name"
                        :profilePath="CastMember.profilePath"--->
      </div>
    </div>
  </div>
  <div class="backBtn" @click="$router.go(-1)">
    <!--<a alt="Back Button" >-->
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" fill="currentColor"/>
    </svg>
    <!-- </a>-->
  </div>


</template>
<style scoped>
.backBtn{
  color: #ffffff;
}
</style>
