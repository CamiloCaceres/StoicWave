<script setup>

const newItem = ref('')
const items = reactive([])

const addItem = () => {
    if (newItem.value) {
        items.push(newItem.value)
        newItem.value = ''
    }

}
</script>

<template>
    <div class="h-screen bg-[#E7D4B7]">
        <div class="bg-[#926A2F] max-w-3xl h-full mx-auto flex flex-col items-center">
            <h1 class="p-5 text-5xl text-center text-white font-semibold tracking-tight">StoicWall</h1>
            <h3 class="text-white">Feeling worried? Overwhelmed? Overthinking?</h3>
            <h3 class="text-white">Let's start by writting all our worries down</h3>
            <div class="w-1/2 flex">
                <input
                    v-model="newItem"
                    autocomplete="off"
                    class="input[type='text'] w-full rounded-md"
                    type="text"
                    name="item"
                    id="item"
                    @keypress.enter="addItem"
                />
                <button
                    class="button[type='submit'] bg-transparent text-white px-2 rounded-md"
                    @click="addItem"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        class="iconify iconify--mdi"
                        width="40"
                        height="40"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                    >
                        <path d="M4 15V9h8V4.16L19.84 12L12 19.84V15H4z" fill="currentColor" />
                    </svg>
                </button>
            </div>
            <div v-for="item in items" :key="item">
                <ListItem :item="item" />
            </div>
        </div>
    </div>
</template>

