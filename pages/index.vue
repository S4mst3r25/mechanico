<template>
    <div class="text-center mt-60">
        <h1 class="font-bold text-4xl mb-4">Welcome to Mechanico!</h1>
        <p class="font-bold text-xl mb-4">A library of interactive 3D mechanisms.</p>
        <button  @click="goToLibrary()" class="bg-zinc-700 p-2 rounded-md text-white font-bold hover:bg-zinc-800 transition">Get started</button>
    </div>
</template>

<script setup>
const router = useRouter()

function goToLibrary() {
    router.push("/library")
}
</script>

<style scoped>
</style>