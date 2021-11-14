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
    <Window>
        <h1 class="p-5 text-5xl text-center font-semibold tracking-widest">Stoic_Wave</h1>
        <NuxtLink
            class="bg-gray-300 btn btn-primary"
            to="/control"
        >control</NuxtLink>
    </Window>
</template>
