<script setup>
const props = defineProps({
  item: String
})
</script>

<template>
<div class="bg-white p-2 w-full border-b-1 border-purple-500/50 text-center">
    {{props.item}}
</div>
</template>