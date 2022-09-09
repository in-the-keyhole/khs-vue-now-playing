<script setup lang="ts">
import Rating from "@/views/Rating.vue";


const props = defineProps({
  posterPath: { type: String, required: true },
  id : {type: Number, required : true}
})

</script>

<template>
  <div class="poster-container">
    <RouterLink :to="'/movie/' + id">
      <Rating :id="props.id" class="position-absolute top-0 start-100 translate-middle"/>
      <img className="movie-poster" :src="posterPath"/>
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

.movie-poster:hover {
  transform: scale(1.25);
  transform-origin: top center;
}

div.poster-container:hover{

  transform: scale(1.25);
  transform-origin: top center;
}

Rating {
  position: relative;
}



</style>