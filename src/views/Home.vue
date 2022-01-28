<template>
  <div class="home">
    <app-header/>
  </div>
</template>

<script>
// import NavBar from '../components/NavBar.vue'
import AppHeader from '../components/AppHeader.vue'
// import MainView from './MainView.vue'
// import AppFooter from '../components/Footer.vue'

export default {
  name: 'app-home',
  components: {
    // NavBar
    AppHeader
    // MainView,
    // AppFooter
  }
}
</script>
