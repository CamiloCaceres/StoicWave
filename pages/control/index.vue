<script setup lang="ts">
import { ref } from 'vue'

import { useList } from '~~/stores/List';

const store = useList()
function addItem() {
    store.addItem(newItem.value)
    newItem.value = ''
}
const newItem = ref('')

</script>

<template>
    <div class="max-w-4xl pb-10 bg-gray-300 mx-auto flex flex-col items-center relative">
        <WindowBar />
        <h1 class="p-5 text-5xl text-center font-semibold tracking-widest">Stoic_Wave</h1>
        <h3 class>Feeling worried? Overwhelmed? Overthinking?</h3>
        <h3 class>Let's start by writting your worries down</h3>
        <div class="w-1/2 flex mt-4">
            <input
                v-model="newItem"
                autocomplete="off"
                class="input[type='text'] w-full focus:border-violet-400"
                type="text"
                name="item"
                id="item"
                @keypress.enter="addItem()"
            />
            <button
                class="button[type='submit'] bg-transparent px-2 rounded-md focus:outline-none hover:text-purple-700 transition-all"
                @click="addItem()"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="iconify iconify--icon-park-outline"
                    width="30"
                    height="30"
                    viewBox="0 0 48 48"
                >
                    <g
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M44 44V4H24v16H4v24h40z" />
                        <path d="M21 28l-4 4l4 4" />
                        <path d="M34 23v9H17" />
                    </g>
                </svg>
            </button>
        </div>
        <div v-if="store.items.length != 0" class="w-7/12 mt-7">
            <div class="flex justify-between items-start">
                <h1 class="text-lg self-start p-2">Things that worry me now</h1>
                <NuxtLink to="/control/question"
                    class="px-2 py-1 rounded bg-purple-700 text-white text-lg mb-2 mr-10 font-medium w-min place-self-end"
                >next</NuxtLink>
            </div>
            <div class="bg-white font-semi text-lg p-1 rounded-md">
                <div class v-for="item in store.items">
                    <ListItem :item="item" />
                </div>
            </div>
        </div>
        <!-- home button -->
        <NuxtLink to="/">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="absolute top-10 left-2"
                width="32"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
            >
                <path d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5z" fill="currentColor" />
            </svg>
        </NuxtLink>
    </div>
</template>
