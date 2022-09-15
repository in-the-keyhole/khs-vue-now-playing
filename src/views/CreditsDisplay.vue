import gql from 'graphql-tag'
<script lang="ts" setup>

import type {Credits} from "@/models";
import type {Cast} from "@/models";


const props = defineProps({
  id: {type: Number, required: true},
  name: {type: String, required: true},
  character: {type: String, required: true},
  profilePath: {type: String}
})

</script>
<template>
  <div class="container">
    <div class="text">{{props.name}}</div>
    <img :src="profilePath"/>
    <div class="text">{{props.character}}</div>

  </div>


</template>
<style scoped>
.movie-detail h4 {
  position: relative;
  left: 50px;
  bottom: 25px;
}

div.container {
  margin: 2px;
  float: left;
  width: 120px;
}

div.container img {
  display: block;
  margin: 0 auto;
}

div.text {
  font-size:10px;
  padding: 2px;
  text-align: center;
}


</style>