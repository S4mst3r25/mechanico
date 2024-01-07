<template>
  <div class="bg-zinc-800 w-full flex items-center p-6 text-zinc-400 justify-between font-bold">
    <NuxtLink to="/"><img src="/assets/images/mechanico-white.png" class="w-[150px] h-max"></NuxtLink>
    <div class="space-x-3 flex">
      <NuxtLink to="/library" class="hover:text-zinc-200 transition">
        <span class="flex items-center">
          <Icon size="20px">
            <BookGlobe20Filled />
          </Icon>
          <p>Library</p>
        </span>
      </NuxtLink>
      <NuxtLink to="/about" class="hover:text-zinc-200 transition">
        <span class="flex items-center">
          <Icon size="20px">
            <Info20Filled />
          </Icon>
          <p>About</p>
        </span>
      </NuxtLink>
    </div>
  </div>
  <slot />
</template>

<script setup>
import { Icon } from '@vicons/utils'
import { BookGlobe20Filled, Info20Filled } from '@vicons/fluent'


</script>

<style></style>