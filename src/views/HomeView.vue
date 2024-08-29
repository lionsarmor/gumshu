<script setup>
import { ref } from 'vue'

const isLogin = ref(true)

const toggleForm = () => {
  isLogin.value = !isLogin.value
}
</script>

<template>
  <main class="flex h-screen">
    <!-- Left Side - Logo -->
    <div class="w-1/2 bg-gray-100 flex items-center justify-center">
      <img src="@/assets/gumshu.svg" alt="Logo" class="w-1/2 logo" />
    </div>

    <!-- Right Side - Forms -->
    <div class="w-1/2 bg-white flex flex-col justify-center p-8">
      <div class="border-b border-gray-300 pb-8 mb-8 max-w-lg">
        <h2 class="text-2xl font-bold mb-4 text-gray-800">
          {{ isLogin ? 'Login' : 'Sign Up' }}
        </h2>
        <form @submit.prevent class="flex flex-col space-y-5">
          <div class="flex flex-col space-y-1">
            <label for="email" class="text-sm font-semibold text-gray-500">Email address</label>
            <input
              type="email"
              id="email"
              autofocus
              class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-red-200"
              required
            />
          </div>
          <div class="flex flex-col space-y-1">
            <div class="flex items-center justify-between">
              <label for="password" class="text-sm font-semibold text-gray-500">Password</label>
              <a href="#" class="text-sm text-red-600 hover:underline focus:text-red-800"
                >Forgot Password?</a
              >
            </div>
            <input
              type="password"
              id="password"
              class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-red-200"
              required
            />
          </div>
          <div v-if="!isLogin" class="flex flex-col space-y-1">
            <label for="confirm-password" class="text-sm font-semibold text-gray-500"
              >Confirm Password</label
            >
            <input
              type="password"
              id="confirm-password"
              class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-red-200"
              required
            />
          </div>
          <div class="flex items-center space-x-2">
            <input
              type="checkbox"
              id="remember"
              class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-red-200"
            />
            <label for="remember" class="text-sm font-semibold text-gray-500">Remember me</label>
          </div>
          <div>
            <button
              type="submit"
              class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-red-600 rounded-md shadow hover:bg-red-700 focus:outline-none focus:ring-red-200 focus:ring-4"
            >
              {{ isLogin ? 'Log in' : 'Sign Up' }}
            </button>
          </div>
          <div class="flex flex-col space-y-5">
            <span class="flex items-center justify-center space-x-2 mx-auto">
              <span class="h-px bg-gray-400 w-14"></span>
              <span class="font-normal text-gray-500">or login with</span>
              <span class="h-px bg-gray-400 w-14"></span>
            </span>
            <div class="flex flex-col space-y-4">
              <a
                href="#"
                class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
              >
                <span>
                  <svg
                    class="w-5 h-5 text-gray-800 fill-current group-hover:text-white"
                    viewBox="0 0 16 16"
                    version="1.1"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    ></path>
                  </svg>
                </span>
                <span class="text-sm font-medium text-gray-800 group-hover:text-white">Github</span>
              </a>
              <a
                href="#"
                class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-red-600 rounded-md group hover:bg-red-600 focus:outline-none"
              >
                <span>
                  <svg
                    class="text-red-600 group-hover:text-white"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.146 0.368c-0.793 0.37-1.64 0.619-2.53 0.733 0.91-0.554 1.609-1.431 1.938-2.479-0.853 0.51-1.792 0.881-2.795 1.085-0.805-0.858-1.948-1.395-3.214-1.395-2.437 0-4.412 2.02-4.412 4.513 0 0.354 0.038 0.697 0.116 1.027-3.663-0.186-6.914-1.985-9.086-4.72-0.379 0.663-0.596 1.433-0.596 2.257 0 1.556 0.774 2.931 1.948 3.736-0.718-0.023-1.393-0.224-1.984-0.551-0.001 0.019-0.001 0.037-0.001 0.055 0 2.171 1.521 3.982 3.542 4.391-0.37 0.103-0.76 0.158-1.164 0.158-0.284 0-0.561-0.027-0.831-0.079 0.562 1.775 2.19 3.067 4.119 3.103-1.51 1.203-3.416 1.922-5.487 1.922-0.356 0-0.708-0.021-1.054-0.062 1.956 1.274 4.28 2.017 6.78 2.017 8.134 0 12.577-6.85 12.577-12.79 0-0.194-0.004-0.388-0.013-0.581 0.865-0.635 1.617-1.429 2.211-2.334z"
                    />
                  </svg>
                </span>
                <span class="text-sm font-medium text-red-600 group-hover:text-white">Twitter</span>
              </a>
            </div>
          </div>
        </form>
      </div>

      <!-- Switch between forms -->
      <div class="text-center max-w-lg">
        <button @click="toggleForm" class="text-red-600 underline hover:text-red-800">
          {{ isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login' }}
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.logo {
  max-width: 30%;
}
</style>
