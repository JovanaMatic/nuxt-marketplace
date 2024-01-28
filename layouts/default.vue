<template>
  <div class="flex flex-col h-screen justify-between">
    <div>
    <BaseHeader />
  </div>
  <div class="container mx-auto max-w-4xl">
    <main class="my-10">
      <slot />
    </main>
  </div>
  <BaseFooter />
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>