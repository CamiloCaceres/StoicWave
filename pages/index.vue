<script setup lang="ts">
import { ref, reactive } from 'vue'
const newItem = ref('')
const items = reactive<String[]>([])

const addItem = () => {
    if (newItem.value) {
        items.push(newItem.value)
        newItem.value = ''
    }

}
</script>

<template>
    <div class="max-w-4xl pb-10 bg-gray-300 mx-auto flex flex-col items-center relative">
        <WindowBar />
        <h1 class="p-5 text-5xl text-center font-semibold tracking-widest">Stoic_Wave</h1>
        <NuxtLink
            class="px-2 py-1 rounded bg-purple-700 text-white text-lg mb-2 mr-10 font-medium w-min place-self-end"
            to="/control"
        >control</NuxtLink>
    </div>
</template>
