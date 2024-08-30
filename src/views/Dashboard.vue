<template>
  <div class="dashboard flex h-screen">
    <!-- Sidebar -->
    <aside class="bg-gray-100 text-white w-64 flex flex-col p-4">
      <!-- Logo -->
      <!-- <div class="flex items-center justify-center mb-8">
        <RouterLink to="/">
          <img src="@/assets/gumshu.svg" alt="Gumshu Logo" class="h-16 logo-inverted" />
        </RouterLink>
      </div> -->

      <!-- Sidebar Navigation -->
      <nav class="flex flex-col space-y-6 mx-5 my-12 text-black">
        <RouterLink
          v-for="item in navItems"
          :key="item.name"
          :to="item.route"
          class="hover:bg-gray-800 hover:text-white p-2 nav-link flex items-center rounded-lg transition-all duration-300 ease-in-out"
        >
          <font-awesome-icon :icon="['fas', item.icon]" class="text-xl" />
          <span class="px-2">{{ item.name }}</span>
        </RouterLink>
      </nav>
    </aside>

    <!-- Main Content Area -->
    <main class="flex-1 bg-gray-100 p-8">
      <div class="bg-white h-full rounded-lg shadow-inner p-8">
        <!-- Page Content Goes Here -->
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faChalkboard,
  faTasks,
  faBriefcase,
  faGlobe,
  faFolder,
  faNewspaper,
  faComments
} from '@fortawesome/free-solid-svg-icons'

// Register the icons globally for use
const navItems = ref([
  { name: 'Whiteboard', route: '/whiteboard', icon: 'chalkboard' },
  { name: 'Tasks', route: '/tasks', icon: 'tasks' },
  { name: 'Cases', route: '/cases', icon: 'briefcase' },
  { name: 'Public Cases', route: '/public-cases', icon: 'globe' },
  { name: 'Resources', route: '/resources', icon: 'folder' },
  { name: 'News', route: '/news', icon: 'newspaper' },
  { name: 'Discussion', route: '/discussion', icon: 'comments' }
])
</script>

<style scoped>
.nav-link {
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.nav-link:hover {
  background-color: #7f1d1d; /* Tailwind's bg-gray-800 */
  color: white;
}
</style>
