
<script lang="ts">



</script>
<template>
  <h2>

    <div class="wrapper">

    </div>
  </h2>

  <RouterView />
  <body/>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;

}

body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background-color: #000 !important;
  color: #fff !important;
}

h2 {
  font-size: 1.2em;
  text-transform: uppercase;


}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }


  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
