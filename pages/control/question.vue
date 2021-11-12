<script setup lang="ts">

import { useList } from '~~/stores/List';

const store = useList()



</script>

<template>
    <div class="max-w-4xl pb-10 bg-gray-300 mx-auto flex flex-col items-center relative">
        <WindowBar />
        {{store.items}}
    </div>
</template>