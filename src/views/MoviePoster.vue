<script lang="ts" setup>
import Rating from "@/views/Rating.vue";


const props = defineProps({
  posterPath: {type: String, required: true},
  id: {type: Number, required: true}
})

</script>

<template>
  <div class="poster-container">
    <RouterLink :to="'/movie/' + id">
      <Rating :id="props.id" class="position-absolute top-0 start-100 translate-middle"/>
      <img :src="posterPath" className="movie-poster"/>
    </RouterLink>
  </div>
</template>

<style scoped>


img {
  width: 375px;
}

.movie-poster {
  transition: all .2s ease-in-out;
}

div.poster-container:hover {

  transform: scale(1.25);
  transform-origin: top center;
  z-index: 100 !important;
}

.Rating {
  position: absolute;
}


</style>