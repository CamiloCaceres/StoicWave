<script setup lang="ts">

import { useList } from '~~/stores/List';

const store = useList()



</script>

<template>
    <Window >
        {{store.items}}
    </Window>
</template>