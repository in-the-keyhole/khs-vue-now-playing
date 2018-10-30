
<template>
 <div class="about">
   <h1>{{ msg }}</h1>
   <button @click="greet()">Greet Handler</button>
  </div>    
</template>

<script>
export default {
 name: 'AboutDescription',
  props: {
    msg: String
  },
  methods: {
    greet (){
      console.log('Greet click handler clicked!');
    }
  }
}
</script>

<style>

</style>
