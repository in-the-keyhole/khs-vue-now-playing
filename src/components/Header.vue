<template>
  <router-link to="/">
    <nav>
      <ul class="menu">
        <li class="logo"><a href="#"><img src="public/images/nowplaying-white-logo-nav.png"></a></li>
        <li class="item"><a href="#">Logout</a></li>
        <li class="toggle"><a href="#"><i class='fas fa-bars'></i></a></li>
      </ul>
    </nav>
  </router-link>
</template>

<script lang="ts">
export default {
  name: "Header"
}
</script>

<style scoped>

</style>