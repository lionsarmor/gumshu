<template>
  <div class="dashboard flex h-screen">
    <!-- Sidebar -->
    <aside class="bg-red-900 text-white w-64 flex flex-col p-4">
      <!-- Logo -->
      <div class="flex items-center justify-center mb-8">
        <img src="@/assets/gumshu.svg" alt="Gumshu Logo" class="h-12 logo-inverted" />
      </div>

      <!-- Sidebar Navigation -->
      <nav class="flex flex-col space-y-4">
        <RouterLink v-for="item in navItems" :key="item.name" :to="item.route" class="nav-link">
          <font-awesome-icon :icon="['fas', item.icon]" />
          <span class="px-2">{{ item.name }}</span>
        </RouterLink>
      </nav>
    </aside>

    <!-- Main Content Area -->
    <main class="flex-1 bg-gray-100 p-8">
      <div class="bg-gray-300 h-full rounded-lg shadow-inner p-8">
        <!-- Page Content Goes Here -->
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
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
.logo-inverted {
  filter: invert(1);
  max-height: 50px; /* Adjust the logo size */
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: #ffffff;
  font-weight: 500;
  transition:
    background-color 0.3s,
    color 0.3s;
  text-decoration: none;
}

.nav-link i {
  margin-right: 0.5rem; /* Space between icon and text */
}

.nav-link:hover {
  background-color: #9b2c2c; /* Darker red for hover state */
}

.bg-gray-100 {
  background-color: #f3f4f6; /* Light gray background similar to the login page */
}

.bg-gray-300 {
  background-color: #d1d5db; /* Slightly darker gray for the placemat */
}

h-full {
  height: 100%;
}

.shadow-inner {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.bg-red-500 {
  background-color: #4b0e0e; /* Less jarring red color */
}
</style>
