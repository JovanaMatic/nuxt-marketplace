<template>
  <div class="detail-section container mx-auto max-w-4xl">
    <div>
      <h2 class="text-2xl">{{ listing.year }} {{ listing.make }} {{ listing.model }}</h2>
        <NuxtLink class="text-blue-400" :to="{ name: 'cars', query: { vehicle_condition: listing.vehicle_condition, tlocation: listing.zip, dealer_id: listing.dealer.id }}">
      <p>{{ listing.dealer.name }}</p>
    </NuxtLink>
    <div class="flex gap-8 py-2">
      <div>
        <p class="text-sm text-gray-400">Dealer advertised price</p>
        <div>{{ formatPrice(listing.price) }}</div>
      </div>
      <div>
        <p class="text-sm text-gray-400">Mileage</p>
        <div>{{ listing.mileage }}</div>
      </div>
      <div>
        <p class="text-sm text-gray-400">Distance</p>
        <div>{{ listing.distance }}</div>
      </div>
    </div>
    </div>
    <div class="middle-section">
      <img :src="`https://img.vast.com/apollo/${listing.id}/1/640x-?format=webp`" />
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { formatPrice } = useHelpers()
  const { data, error } = await useFetch(`https://dspappfeed.data.auto-prod.vast.com/listings/-/cars?apikey=15141224474137128101237914101551&filter_location_range=n&format=json&include_fields=*`, {
    query: { ...route.query }
  })

  if (error.value) {
    alert('Something went wrong')
  }

  const listing = data?.value.results?.data[0]
  console.log(listing.dealer.id)
</script>

<style scoped>
  .detail-section {
    margin-bottom: 600px;
  }
  img {
    width: 100%;
  }
</style>