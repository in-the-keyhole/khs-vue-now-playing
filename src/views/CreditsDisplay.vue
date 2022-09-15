import gql from 'graphql-tag'
<script lang="ts" setup>

import type {Credits} from "@/models";
import type {Cast} from "@/models";


const props = defineProps({
  id: {type: Number, required: true},
  name: {type: String, required: true},
  character: {type: String, required: true},
  profilePath: {type: String, required: true}
})

</script>
<template>
  <h4>{{props.name}}</h4>
  <img :src="profilePath"/>
  <h4>{{props.character}}</h4>

</template>
<style scoped>
.movie-detail h4 {
  position: relative;
  left: 50px;
  bottom: 25px;
}
</style>