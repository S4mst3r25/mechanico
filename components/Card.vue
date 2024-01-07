<template>
    <div class="shadow-md shadow-gray-400 w-72">
      <img class="w-full" :src="props.image">
      <div class="p-3 h-20">
        <p class="text-lg font-bold line-clamp-2">{{ props.name }}</p>
      </div>
    </div>
</template>

<script setup>
   const props = defineProps(['image','name'])
</script>

<style scoped>

</style>