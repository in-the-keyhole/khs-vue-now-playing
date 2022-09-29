import gql from 'graphql-tag'
<script lang="ts" setup>
import type {CastMember} from "@/models";
import MissingCastMember from '../missing-cast.svg';
import {computed} from "vue";

const props = defineProps({
  castMember: {
    type: Object,
    default(castMember: CastMember) {
      return castMember;
    },

    required: true
  }
})
const profilePath = computed<string | undefined>(
    () => props.castMember.profilePath ? props.castMember.profilePath: MissingCastMember
);


</script>
<template>
  <div class="castCard">
    <a href="#">
      <img :src="profilePath"/>
      <h6>{{ props.castMember.name }}</h6>
      <p>{{ props.castMember.character }}</p>
    </a>
  </div>


</template>
<style scoped>

</style>