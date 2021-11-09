<script setup>
const props = defineProps({
  item: String
})
</script>

<template>
<div class="bg-white p-2 w-full">
    {{props.item}}
</div>
</template>