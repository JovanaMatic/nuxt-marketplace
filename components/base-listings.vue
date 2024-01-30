<template>
  <div class="bg-white text-black rounded h-full">
    <NuxtLink :to="{ name: 'detail', query: { vin: listing.vin, make: listing.make, model: listing.model, dealer_id: listing.dealer.id, tlocation: listing.zip, condition: listing.vehicle_condition }}">
      <h2 class="p-2 text-bold text-blue-700">{{ listing.vehicle_condition }} - {{ listing.dealer.name }}</h2>
      <div class="car-image">
        <img :src="`https://img.vast.com/apollo/${listing.id}/1/640x-?format=webp`" />
      </div>
      <div class="p-2">
        <p>{{ formatPrice(listing.price) ? formatPrice(listing.price) : 'no price' }} | {{ listing.mileage > 0 ? listing.mileage : 'no mileage'}}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
  const props = defineProps({
    listing: {
    type: Object,
    required: true
    }
  })

  const { formatPrice } = useHelpers()
</script>

<style scoped>

.car-image img {
  height: 216px;
}

</style>