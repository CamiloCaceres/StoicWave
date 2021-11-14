<script setup lang="ts">
import { useControlStore } from '~~/stores/controlStore';

const store = useControlStore()

const inputList = store.inputList

const currentItem = ref(0)

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
           <div class="flex ">
               <button class="btn btn-primary">yes</button>
               <p>{{ inputList[currentItem] }}</p>
                <button>no</button>
           </div> 
       </div>
    </Window>
</template>