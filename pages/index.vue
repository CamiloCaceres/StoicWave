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
    <div class="h-screen bg-[#49257F] font-mono">
        <img class="absolute bottom-1 right-1 filter saturate-150" src="https://i.imgur.com/Owuze4P.png" alt="">
        <div class="bg-gradient-to-b from-rose-500 via-fuchsia-600 to-indigo-500 max-w-3xl h-full mx-auto flex flex-col items-center">
            <h1 class="p-5 text-5xl text-center text-white font-semibold tracking-widest">StoicWave</h1>
            <h3 class="text-white">Feeling worried? Overwhelmed? Overthinking?</h3>
            <h3 class="text-white">Let's start by writting all our worries down</h3>
            <div class="w-1/2 flex">
                <input
                    v-model="newItem"
                    autocomplete="off"
                    class="input[type='text'] w-full rounded-md focus:ring-[#DD517E] focus:border-[#DD517E]"
                    type="text"
                    name="item"
                    id="item"
                    @keypress.enter="addItem"
                />
                <button
                    class="button[type='submit'] bg-transparent text-white px-2 rounded-md focus:outline-none focus:text-[#DD517E]"
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
            <div class="w-7/12 mt-7">
                <h1 class="text-white text-lg self-start p-2">Things that worry me now</h1>
                <div v-if="items.length != 0" class="bg-white font-semi text-lg p-1 rounded-md">
                    <div class v-for="item in items" :key="item">
                        <ListItem :item="item" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

