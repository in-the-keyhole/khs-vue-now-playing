import gql from 'graphql-tag'
<script lang="ts" setup>
import type {Movie} from "@/models";
import type {CastMember} from "@/models";


const props = defineProps({
  Credits: {type: Array, required: true},
  id: {type: Number, required: true}
})

</script>
<template>
  <h3 :src="Credits"></h3>
</template>
<style scoped>

</style>