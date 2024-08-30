<template>
  <div class="dashboard flex h-screen">
    <!-- Sidebar -->
    <aside class="bg-gray-100 text-white w-64 flex flex-col p-4">
      <!-- Sidebar Navigation -->
      <nav class="flex flex-col space-y-6 mx-5 my-12 text-black">
        <button
          v-for="item in navItems"
          :key="item.name"
          @click="setActiveComponent(item.name)"
          class="hover:bg-gray-800 hover:text-white p-2 nav-link flex items-center rounded-lg transition-all duration-300 ease-in-out focus:outline-none"
        >
          <font-awesome-icon :icon="['fas', item.icon]" class="text-xl" />
          <span class="px-2">{{ item.name }}</span>
        </button>
      </nav>
    </aside>

    <!-- Main Content Area -->
    <!-- Conditionally render components based on activeComponent -->
    <News v-if="activeComponent === 'News'" />
    <Whiteboard v-if="activeComponent === 'Whiteboard'" />
    <Tasks v-if="activeComponent === 'Tasks'" />
    <Cases v-if="activeComponent === 'Cases'" />
    <PublicCases v-if="activeComponent === 'Public Cases'" />
    <Resources v-if="activeComponent === 'Resources'" />
    <Discussion v-if="activeComponent === 'Discussion'" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import News from '@/components/News.vue'
// import Whiteboard from '@/components/Whiteboard.vue'
// import Tasks from '@/components/Tasks.vue'
// import Cases from '@/components/Cases.vue'
// import PublicCases from '@/components/PublicCases.vue'
// import Resources from '@/components/Resources.vue'
// import Discussion from '@/components/Discussion.vue'
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
  { name: 'Whiteboard', icon: 'chalkboard' },
  { name: 'Tasks', icon: 'tasks' },
  { name: 'Cases', icon: 'briefcase' },
  { name: 'Public Cases', icon: 'globe' },
  { name: 'Resources', icon: 'folder' },
  { name: 'News', icon: 'newspaper' },
  { name: 'Discussion', icon: 'comments' }
])

// Reactive variable to track the active component
const activeComponent = ref('')

// Function to set the active component
const setActiveComponent = (component) => {
  activeComponent.value = component
}
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
