<script lang="ts">

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'

//Vue.component('font-awesome-icon', FontAwesomeIcon)


export default {
  name: "Header"
}
</script>



<template>
  <router-link to="/">
    <nav>
      <ul class="menu">
        <li class="logo"><a href="#"><img src="images/nowplaying-white-logo-nav.png"></a></li>
        <li class="item"><a href="#">Logout</a></li>
        <!-- <li className="toggle"><span><FontAwesomeIcon icon={menuActive ? faTimes : faBars} /></span></li> -->
        <!-- <li class="toggle"><a href="#"><i class='fas fa-bars'></i></a></li> -->
      </ul>
    </nav>
  </router-link>
</template>

<style scoped>

</style>