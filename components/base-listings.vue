<template>
  <div class="bg-white text-black rounded">
    <NuxtLink :to="{ name: 'detail', query: { vin: listing.vin, make: listing.make, model: listing.model, dealer: listing.dealer.id }}">
      <h2 class="p-2 text-bold text-blue-700">{{ listing.dealer.name }}</h2>
      <div class="car-image">
        <img :src="`https://img.vast.com/apollo/${listing.id}/1/640x-?format=webp`" />
      </div>
      <div class="p-2">
        <p>Price: {{ listing.price }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
  const props = defineProps({
    listing: Object,
    required: true
  })
</script>

<style scoped>

.car-image img {
  height: 216px;
}

</style>