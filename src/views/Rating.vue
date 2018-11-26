

<template>
    <span class="rating">
        <span v-on:click="rate(5)" class="star"><i v-bind:class="{ fas: (stars > 4) }" class="far fa-star fa-lg"></i></span>
        <span v-on:click="rate(4)" class="star"><i v-bind:class="{ fas: (stars > 3) }" class="far fa-star fa-lg "></i></span>
        <span v-on:click="rate(3)" class="star"><i v-bind:class="{ fas: (stars > 2) }" class="far fa-star fa-lg "></i></span>
        <span v-on:click="rate(2)" class="star"><i v-bind:class="{ fas: (stars > 1) }" class="far fa-star fa-lg "></i></span>
        <span v-on:click="rate(1)" class="star"><i v-bind:class="{ fas: (stars > 0) }" class="far fa-star fa-lg "></i></span>
    </span>
</template>


<script>
    import store from '../store';
    export default {
        name:"Rating",
        props: ['id', 'stars'],
        methods: {
            rate: function (rating) {
                store.commit('RATE_MOVIES', {
                    id: this.id,
                    stars: rating
                })                
            }
        }
 
    }
</script>


<style>
    .rating {
        position: absolute;
        bottom: 5px;
        left: 5px;
        padding: 10px;
        unicode-bidi: bidi-override;
        direction: rtl;
        cursor: pointer;
    }
    .star .fas {
        color: yellow;
    }

    .star:hover,
    .star:hover ~ .star {
        color: yellow;
    }
</style>
