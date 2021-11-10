<script setup>
const props = defineProps({
  item: String
})
</script>

<template>
<div class="bg-white p-2 w-full border-t-1 text-center">
    {{props.item}}
</div>
</template>