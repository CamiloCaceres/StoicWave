<script setup lang="ts">
import { ref } from 'vue'
import { useControlStore } from '~~/stores/controlStore';

const store = useControlStore()
const newItemInput = ref<HTMLElement>()

function addItem() {
    if (newItem.value) {
        store.addItem(newItem.value)
        newItem.value = ''
    }
}
const newItem = ref('')
const reset = () => {
    store.reset()
    newItem.value = ''
    if (newItemInput.value) { newItemInput.value.focus() }
}

</script>

<template>
    <Window>
        <h1 class="p-5 text-3xl md:text-5xl text-center font-semibold tracking-widest">Stoic_Wave</h1>
        <h3 class="p-1 px-2">Feeling worried? Overwhelmed? Overthinking?</h3>
        <h3 class="p-1 px-2">Let's start by writting your worries down</h3>
        <div class="w-full px-6 lg:w-1/2 mt-4">
            <div class="flex">
                <input
                    ref="newItemInput"
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
                        class="iconify iconify--mdi"
                        width="30"
                        height="30"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                    >
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" />
                    </svg>
                </button>
            </div>
            <div class="flex justify-end space-x-3 mt-3 mr-2">
                <button @click="reset" class="btn btn-secondary">Reset</button>

                <NuxtLink to="/control/question" class="btn btn-primary">Done</NuxtLink>
            </div>
        </div>
        <div v-if="store.inputList.length != 0" class="w-full md:w-10/12 px-4 mt-7">
            <div class="flex justify-between items-start">
                <h1 class="md:text-lg self-start p-2">Things that worry me now</h1>
            </div>
            <div class="bg-white font-semi md:text-lg p-1 rounded-md">
                <ListItem class="last:border-b-0" v-for="item in store.inputList" :item="item" />
            </div>
        </div>
    </Window>
</template>
