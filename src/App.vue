<template>
  <div id="app">
    <div id="nav"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import store from './store';
export default {

  created() {
    store.dispatch('fetchMovieList');// fetch movies on init
  }
}
</script>
