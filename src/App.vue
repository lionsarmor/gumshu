<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NavbarTop from './components/NavbarTop.vue'

// Use computed to reactively track the current route path
const route = useRoute()
const showNavbar = computed(() => route.path === '/dashboard')
</script>

<template>
  <div>
    <!-- Conditionally render the NavbarTop component -->
    <NavbarTop v-if="showNavbar" />

    <!-- RouterView to render the matched component for the current route -->
    <RouterView />
  </div>
</template>
