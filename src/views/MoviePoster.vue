<script lang="ts" setup>
import Rating from "@/views/Rating.vue";
import moment from "moment";

const props = defineProps({
  posterPath: {type: String, required: true},
  id: {type: Number, required: true},
  title: {type: String, required: true},
  releaseDate: {type: String, required: true}
})

</script>

<template>
  <RouterLink :to="`/movie/${props.id}`">
  <div class="card">
    <a href="#">
      <img :src="props.posterPath"/>
      <h6>{{ props.title }}</h6>
      <p>{{ moment(props.releaseDate).format('MMM DD, yyyy') }}</p>
    </a>
  </div>
  </RouterLink>
  <!--<Rating :id="props.id" class="position-absolute top-0 start-100 translate-middle"/>
  <img :src="posterPath" className="movie-poster"/> -->
</template>

<style>

.card img {
  width: 210px !important;
}



</style>