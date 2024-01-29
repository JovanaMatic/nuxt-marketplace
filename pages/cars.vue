<template>
  <div class="grid grid-cols-3 gap-4">
    <div v-for="listing in data?.results?.data">
    <BaseListings :listing="listing"/>
  </div>
  </div>
</template>

<script setup>
  const route = useRoute()

  const { data, pending, error, refresh } = await useFetch(`https://dspappfeed.data.auto-prod.vast.com/listings/-/cars?apikey=15141224474137128101237914101551&filter_location_range=n&format=json&include_fields=*`, {
  query: { ...route.query }
})

if (error.value) {
  alert('Something went wrong')
}

</script>

<style scoped>

</style>