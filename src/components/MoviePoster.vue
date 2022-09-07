<script lang="ts">
export default {
  props: ["id", "posterPath"],
};
</script>

<template>
  <RouterLink :to="'/movie/' + id">
    <img className="movie-poster" :src="posterPath" />
  </RouterLink>
</template>

<style scoped>
img {
  width: 375px;
}

.movie-poster {
  transition: all 0.2s ease-in-out;
}

.movie-poster:hover {
  transform: scale(1.25);
  transform-origin: top center;
}
</style>
