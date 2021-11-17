<script setup lang="ts">
import { useControlStore } from '~~/stores/controlStore';

const store = useControlStore()
const canControl = computed(() => store.outuputList.filter(item => item.canControl? true: false))
const canNotControl = computed(() => store.outuputList.filter(item => item.canControl? false: true))



</script>

<template>
    <Window>
        <h1 class="p-5 text-3xl text-center font-semibold tracking-widest">control_dichotomy.exe</h1>
        <h3 class="p-1 px-2">Focus on what you can control</h3>
        <h3 class="p-1 px-2">Let go of what you can't control</h3>
        <div class="w-full flex">
            <div class="w-1/2 h-30vh bg-pink-500">
                <h3 class="text-white text-center p-2 text">What you can control</h3>
                <ul class="px-5" v-for="item in canControl">
                    <li class="text-white">{{item.name}}</li>
                </ul>
            </div>
            <div class="w-1/2 bg-lime-500 h-30vh">
                <h3 class="text-white text-center p-2 text">What you should let go</h3>
                <ul class="px-5" v-for="item in canNotControl">
                    <li class="text-white">{{item.name}}</li>
                </ul>
            </div>
        </div>
    </Window>
</template>
