<template>
  <nav class="w-full bg-gray-100 p-4 flex justify-between items-center">
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

    <!-- Profile with Dropdown -->
    <div class="relative">
      <div
        @click="toggleDropdown"
        class="profile flex items-center space-x-2 p-2 rounded-lg cursor-pointer"
      >
        <font-awesome-icon :icon="['fas', 'user-circle']" class="text-2xl text-gray-600" />
        <span class="text-gray-800 font-medium roboto-condensed">John Doe</span>
      </div>

      <!-- Dropdown Menu -->
      <div
        v-if="dropdownOpen"
        class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
      >
        <RouterLink
          to="/settings"
          class="block px-4 py-2 text-gray-800 hover:bg-red-900 hover:text-white flex items-center"
        >
          <font-awesome-icon :icon="['fas', 'cog']" class="mr-2" />
          Settings
        </RouterLink>
        <RouterLink
          to="/signout"
          class="block px-4 py-2 text-gray-800 hover:bg-red-900 hover:text-white flex items-center"
        >
          <font-awesome-icon :icon="['fas', 'sign-out-alt']" class="mr-2" />
          Sign Out
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserCircle, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

// Reactive variable to control the dropdown visibility
const dropdownOpen = ref(false)

// Function to toggle the dropdown
const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}
</script>

<style scoped>
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
  background-color: #7f1d1d; /* Tailwind's bg-red-900 */
  color: white;
}

/* Dropdown menu styling */
.dropdown {
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
</style>
