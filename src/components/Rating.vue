

<template>
<Rating>
    <span class="rating">
        <span class="star"><i class="far fa-star fa-lg"></i></span>
        <span class="star"><i class="far fa-star fa-lg "></i></span>
        <span class="star"><i class="far fa-star fa-lg "></i></span>
        <span class="star"><i class="far fa-star fa-lg "></i></span>
        <span class="star"><i class="far fa-star fa-lg "></i></span>

    </span>
    </Rating>
</template>

<script>

export default {
 data: function () {
    return {
      stars: 1
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
    .star .fa-star {
        color: yellow;
    }

    .star:hover,
    .star:hover ~ .star {
        color: yellow;
    }
</style>
