<script setup lang="ts">

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
    <div class="h-screen bg-gradient-to-b from-rose-400 via-fuchsia-600 to-violet-600 font-mono pt-20">
        <img class="hidden xl:block absolute bottom-1 w-80  right-1 " src="https://i.imgur.com/DheQKb7.png" alt="">
        <div class=" max-w-4xl pb-10 bg-gray-300 mx-auto flex flex-col items-center">
            <WindowBar />
            <h1 class="p-5 text-5xl text-center  font-semibold tracking-widest">Stoic_Wave</h1>
            <h3 class="">Feeling worried? Overwhelmed? Overthinking?</h3>
            <h3 class="">Let's start by writting your worries down</h3>
            <div class="w-1/2 flex mt-4">
                <input
                    v-model="newItem"
                    autocomplete="off"
                    class="input[type='text'] w-full  focus:border-violet-400  "
                    type="text"
                    name="item"
                    id="item"
                    @keypress.enter="addItem"
                />
                <button
                    class="button[type='submit'] bg-transparent  px-2 rounded-md focus:outline-none hover:text-purple-700 transition-all"
                    @click="addItem"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--icon-park-outline" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M44 44V4H24v16H4v24h40z"></path><path d="M21 28l-4 4l4 4"></path><path d="M34 23v9H17"></path></g></svg>
                </button>
            </div>
            <div v-if="items.length != 0" class="w-7/12 mt-7">
            <div class="flex justify-between items-start ">
                <h1 class=" text-lg self-start p-2">Things that worry me now</h1>
                <button class="px-2 py-1 rounded bg-purple-700 text-white text-lg mb-2 mr-10 font-medium w-min place-self-end">
                    next
                </button>
</div>
                <div  class="bg-white font-semi text-lg p-1 rounded-md">
                    <div class v-for="item in items">
                        <ListItem :item="item" />
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

