<script setup>
import { ref, onMounted, computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart, faBookmark, faFlag } from '@fortawesome/free-solid-svg-icons'

const newsItems = ref([]) // Reactive variable to store news items
const loading = ref(true) // Reactive variable to manage loading state
const error = ref(null) // Reactive variable to handle errors

// Set default search filters
const keyword = ref('')
const fromDate = ref('')
const toDate = ref('')
const source = ref('')
const category = ref('crime')
const language = ref('en') // Default to English
const country = ref('us') // Default to USA

const apiKey = 'blocked -- pub_52096bc2503c1e77358c85d0f950e769a1a61'

// Computed property for API query string
const queryParams = computed(() => {
  let query = `apikey=${apiKey}&category=${encodeURIComponent(category.value)}`
  if (keyword.value) query += `&q=${encodeURIComponent(keyword.value)}`
  if (fromDate.value) query += `&from=${fromDate.value}`
  if (toDate.value) query += `&to=${toDate.value}`
  if (source.value) query += `&source=${encodeURIComponent(source.value)}`
  if (language.value) query += `&language=${encodeURIComponent(language.value)}`
  if (country.value) query += `&country=${encodeURIComponent(country.value)}`
  return query
})

// Fetch news from the NewsData.io API
const fetchNews = async () => {
  try {
    loading.value = true
    const response = await fetch(`https://newsdata.io/api/1/news?${queryParams.value}`)
    if (!response.ok) {
      throw new Error('Failed to fetch news')
    }
    const data = await response.json()
    newsItems.value = data.results
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

// Fetch news when the component is mounted or when filters change
onMounted(() => {
  fetchNews()
})
</script>

<template>
  <div class="dashboard flex justify-center h-screen roboto-condensed">
    <!-- Confine everything to a central container -->
    <div class="w-full max-w-5xl flex justify-center">
      <!-- Sidebar -->
      <aside class="bg-white text-black w-72 flex flex-col p-4 h-full">
        <h1 class="text-xl font-bold mb-4">NEWS</h1>

        <h2 class="text-xl font-bold mb-4">Search Filters</h2>
        <div class="mb-4">
          <label for="keyword" class="block text-gray-700">Keyword</label>
          <input
            id="keyword"
            v-model="keyword"
            placeholder="Keyword"
            class="p-2 w-full border rounded"
          />
        </div>
        <div class="mb-4">
          <label for="fromDate" class="block text-gray-700">From Date</label>
          <input id="fromDate" v-model="fromDate" type="date" class="p-2 w-full border rounded" />
        </div>
        <div class="mb-4">
          <label for="toDate" class="block text-gray-700">To Date</label>
          <input id="toDate" v-model="toDate" type="date" class="p-2 w-full border rounded" />
        </div>
        <div class="mb-4">
          <label for="source" class="block text-gray-700">Source</label>
          <input
            id="source"
            v-model="source"
            placeholder="Source"
            class="p-2 w-full border rounded"
          />
        </div>
        <div class="mb-4">
          <label for="category" class="block text-gray-700">Category</label>
          <select id="category" v-model="category" class="p-2 w-full border rounded">
            <option value="crime">Crime</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
            <!-- Add other categories as needed -->
          </select>
        </div>
        <div class="mb-4">
          <label for="language" class="block text-gray-700">Language</label>
          <select id="language" v-model="language" class="p-2 w-full border rounded">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <!-- Add other languages as needed -->
          </select>
        </div>
        <div class="mb-4">
          <label for="country" class="block text-gray-700">Country</label>
          <select id="country" v-model="country" class="p-2 w-full border rounded">
            <option value="us">United States</option>
            <option value="gb">United Kingdom</option>
            <option value="ca">Canada</option>
            <!-- Add other countries as needed -->
          </select>
        </div>
        <button
          @click="fetchNews"
          class="w-full p-2 bg-red-900 text-white rounded hover:bg-red-600"
        >
          Search
        </button>
      </aside>

      <!-- Main Content Area -->
      <div class="flex-1 max-w-2xl mx-auto p-6">
        <!-- Loading State -->
        <div v-if="loading" class="text-gray-500 text-center">Loading news...</div>

        <!-- Error State -->
        <div v-if="error" class="text-red-500 text-center">Error: {{ error }}</div>

        <!-- News Feed -->
        <div v-if="!loading && !error" class="space-y-8">
          <div
            v-for="item in newsItems"
            :key="item.title"
            class="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              v-if="item.image_url"
              :src="item.image_url"
              alt="Article Image"
              class="w-full h-64 object-cover"
            />
            <div class="p-6">
              <h2 class="text-2xl font-semibold mb-3">
                <a :href="item.link" target="_blank" class="text-blue-600 hover:underline">
                  {{ item.title }}
                </a>
              </h2>
              <p class="text-gray-600">{{ new Date(item.pubDate).toLocaleDateString() }}</p>
              <p class="mt-4 text-gray-800">{{ item.description }}</p>
            </div>
            <div class="flex justify-end p-4 bg-gray-100">
              <button class="mr-4 text-red-500 hover:text-red-700">
                <font-awesome-icon :icon="faHeart" /> Favorite
              </button>
              <button class="mr-4 text-blue-500 hover:text-blue-700">
                <font-awesome-icon :icon="faBookmark" /> Save
              </button>
              <button class="text-yellow-500 hover:text-yellow-700">
                <font-awesome-icon :icon="faFlag" /> Flag
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
