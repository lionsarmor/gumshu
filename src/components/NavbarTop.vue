<template>
  <nav class="w-full bg-gray-100 p-4 flex justify-between items-center shadow-md">
    <!-- Logo -->
    <RouterLink to="/" class="flex items-center">
      <img
        src="@/assets/gumshu.svg"
        alt="Gumshu Logo"
        class="h-16 mx-16 my-2"
        style="
          filter: invert(17%) sepia(39%) saturate(5973%) hue-rotate(339deg) brightness(99%)
            contrast(96%);
        "
      />
    </RouterLink>

    <!-- Profile -->
    <div class="profile flex items-center space-x-2 p-2 rounded-lg">
      <font-awesome-icon :icon="['fas', 'user-circle']" class="text-2xl text-gray-600" />
      <span class="text-gray-800 font-medium">John Doe</span>
    </div>
  </nav>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

// Ensure the FontAwesomeIcon is registered globally in main.js
</script>

<style scoped>
.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Profile hover effect */
.profile {
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.profile:hover {
  background-color: #e5e7eb; /* Tailwind's bg-gray-200 */
}

.profile:hover .text-gray-600 {
  color: white;
}

.profile:hover .text-gray-800 {
  color: white;
}

.profile:hover {
  background-color: #7f1d1d; /* Tailwind's bg-gray-800 */
  color: white;
}
</style>
