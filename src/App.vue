<template>
<!-- <home /> -->
<app-header />
  <router-view v-slot="{Component}">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>
  <app-footer />
</template>

<script>
// import Home from './views/Home.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    // Home,
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
</style>
