
<script lang="ts">

import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'



import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'



//used for testing
const CHARACTERS_QUERY = gql`
  query Characters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`

const movieQuery = gql
    `movie($id: ID!) {
        movie(id: $id) {
          id
          title
          overview
          posterPath
          backdropPathW1280
          }
      }`
const nowPlaying = gql
    `query nowPlaying { nowPlaying {
        id
        title
        overview
        posterPath
        posterPathW342
        }
      }`

export default {
  name: 'App',
  setup () {//needs update for now-playing q
    const { result, loading, error } = useQuery(CHARACTERS_QUERY);
    return {
      result,
      loading,
      error
    }
  }
}

</script>

<template>
  <p v-if="error">Something went wrong...</p>
  <p v-if="loading">Loading...</p>
  <p v-else v-for="character in result.characters.results" :key="character.id">
    {{ character.name }}
  </p>
  <div></div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
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

  .logo {
    margin: 0 2rem 0 0;
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
