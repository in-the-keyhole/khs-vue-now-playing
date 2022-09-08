<script setup lang="ts">

const props = defineProps({
  posterPath: { type: String, required: true }
})


</script>

<template>
  <img :src=posterPath>
</template>