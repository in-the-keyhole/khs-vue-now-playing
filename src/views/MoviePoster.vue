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
      <img className="movie-poster" :src="posterPath"/>

      <Rating :id="props.id" class="position-absolute top-0 start-100 translate-middle"/>
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

div.poster-container{

}

Rating {
  position: relative;
}



</style>