<template>

  <div class="login">
    <form>
      <label for="username">Username </label>
      <input id="username" name="username" type="text"><br><br>
      <label for="password">Password </label>
      <input id="password" name="password" type="text">
      <RouterLink :to="'/now-playing'">
        <input class="loginBtn" type="submit" value="Log In">
      </RouterLink>
    </form>

  </div>

</template>

<script>


</script>

<style>

</style>

