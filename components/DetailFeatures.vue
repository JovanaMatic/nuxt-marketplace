<template>
  <div class="features-section">
      <h3 class="text-2xl py-4">Feature highlights</h3>
      <div class="categories grid grid-cols-6 gap-6">
        <div v-for="features in sliceFeatures" :key="listing.features">
          <p>{{ features }}</p>
        </div>
        <UButton @click="toggleFeatures" color="black" variant="solid">{{ isOpen ? 'Show less' : 'Show all'}}</UButton>
      </div>
    </div>
</template>

<script setup>
  const props = defineProps({
    listing: {
      type: Object,
      required: true
    }
  })

  const isOpen = ref(false)

  const sliceFeatures = computed(() => props.listing.details.slice(0, 18))

  const toggleFeatures = () => {
    isOpen.value = !isOpen.value
    if (isOpen.value) {
      sliceFeatures.values = props.listing.details
    } else {
      sliceFeatures.values = computed(() => props.listing.details.slice(0, 18))
    }
  }
</script>

<style scoped>

</style>