<script setup lang="ts">

const props = defineProps({
  posterPath: { type: String, required: true },
  id : {type: Number, required : true}
})

</script>

<template>

  <RouterLink :to="'/movie/' + id">
    <img className="movie-poster" :src="posterPath"/>
  </RouterLink>
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



</style>