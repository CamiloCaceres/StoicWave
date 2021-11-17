<script setup lang="ts">
import { useControlStore } from '~~/stores/controlStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useControlStore()

const inputList = store.inputList

const currentItem = ref(0)
const handleClick = (canControl: boolean) =>{
    store.addOutputItem(inputList[currentItem.value], canControl)
    currentItem.value++
    if(currentItem.value >= inputList.length){
        router.push('/control/result')
    }
}
const pageState = ref('instructions')


</script>

<template>
    <Window >
        <div v-if="pageState === 'instructions'">
            <h1>Instructions</h1>
            <p>
                This is a simple list of items.
                You can add new items by typing them in the input field.
                You can remove items by clicking on them.
                You can also reset the list by clicking on the reset button.
            </p>
            <button @click="pageState = 'showItems'">Start</button>
        </div>
       <div v-if="pageState === 'showItems'" class="flex flex-col">
       <h2 class="p-5 text-3xl text-center font-semibold tracking-widest">Can u control this?</h2>
                      <p  class="p-3 text-xl text-center font-medium tracking-wider">{{ inputList[currentItem] }}</p>

           <div class="flex mx-auto space-x-5">
                <button @click="handleClick(false)" class="btn btn-primary w-20 text-xl ">no</button>
               <button @click="handleClick(true)" class="btn btn-primary w-20 text-xl">yes</button>
           </div> 
       </div>
    </Window>
</template>