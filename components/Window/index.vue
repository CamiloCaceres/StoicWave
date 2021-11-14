<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const isHome = computed(() => {
  if(router.currentRoute.value.path === '/') {
    return true
  }
})

</script>
<template>
    <div class=" max-w-sm mx-4 lg:max-w-3xl md:mx-auto pb-10 bg-gray-300 flex flex-col items-center relative">
        <WindowBar />
           <!-- home button -->
        <NuxtLink v-if="!isHome" to="/">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="absolute top-10 left-2 text-gray-700 hover:text-pink-500 transition-all"
                width="32"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
            >
                <path d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5z" fill="currentColor" />
            </svg>
        </NuxtLink>
        <slot></slot>
    </div>
</template>