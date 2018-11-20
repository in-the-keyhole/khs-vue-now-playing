

<template>
    <span class="rating">
        <span v-on:click="stars = 5" class="star"><i v-bind:class="{ fas: (stars > 4) }" class="far fa-star fa-lg"></i></span>
        <span v-on:click="stars = 4" class="star"><i v-bind:class="{ fas: (stars > 3) }" class="far fa-star fa-lg "></i></span>
        <span v-on:click="stars = 3" class="star"><i v-bind:class="{ fas: (stars > 2) }" class="far fa-star fa-lg "></i></span>
        <span v-on:click="stars = 2" class="star"><i v-bind:class="{ fas: (stars > 1) }" class="far fa-star fa-lg "></i></span>
        <span v-on:click="stars = 1" class="star"><i v-bind:class="{ fas: (stars > 0) }" class="far fa-star fa-lg "></i></span>
    </span>
</template>


<script>
    export default {
        name:"Rating",

        data: function () {
            return {
            stars: 0
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
