<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div id="app">
    <div id="nav"></div>
    <RouterView />
  </div>
</template>

<style module>
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: #000 !important;
  color: #fff !important;
}

h2 {
  font-size: 1.2em;
  text-transform: uppercase;
}
</style>
