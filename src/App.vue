<template>
  <app-header />
  <router-view v-slot="{Component}">
    <transition name="increase">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>
  <app-footer />
</template>

<script>
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
.increase-enter-active {
  transition: 0.5s ease all;
}
.increase-enter-from {
  transform: scale(0.1);
}
.increase-enter-to {
  transform: scale(1.0);
}
</style>
