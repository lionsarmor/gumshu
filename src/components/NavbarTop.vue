<template>
  <nav class="w-full bg-gray-100 p-4 flex justify-between items-center shadow-md">
    <!-- Logo -->
    <RouterLink to="/" class="flex items-center">
      <img src="@/assets/gumshu.svg" alt="Gumshu Logo" class="h-16 mx-16 my-2" />
    </RouterLink>

    <!-- Profile -->
    <div class="flex items-center space-x-2">
      <font-awesome-icon icon="user-circle" class="text-2xl text-gray-600" />
      <span class="text-gray-800 font-medium">John Doe</span>
    </div>
  </nav>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

// Ensure FontAwesomeIcon is registered if not done globally
</script>

<style scoped>
.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
