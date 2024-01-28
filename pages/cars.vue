<template>
  <div class="grid grid-cols-3 gap-4">
    <div v-for="listing in data.results.data">
    <BaseListings :listing="listing"/>
  </div>
  </div>
</template>

<script setup>
  const route = useRoute()
  console.log(route.query)

  const { data, pending, error, refresh } = await useFetch('https://dspappfeed.data.auto-prod.vast.com/listings/-/cars?apikey=15141224474137128101237914101551&filter_location_range=n&format=json&include_fields=*', {
  query: { vehicle_condition: route.query.condition, tlocation: route.query.location }
})

console.log(data.value.results.data)

</script>

<style scoped>

</style>