<template>
  <div class="border-solid border-2 rounded-lg border-gray-600 p-10">
    <form>
      <div class="py-5 flex space-x-20">
      <URadio text-lg font-large v-for="method of methods" :key="method.value" v-model="selected" v-bind="method" :value="method.value" name="condition" />
    </div>

    <div>
      <UFormGroup v-slot="{ error }" label="ZIP" :error="!zip && 'You must enter a zip'" help="This is a nice zip!">
      <UInput v-model="zip" type="text" placeholder="Enter ZIP" :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
    </UFormGroup>
    </div>
    <UButton @click="submitForm" class="my-4" color="black">Submit</UButton>
    </form>
  </div>
</template>

<script setup>
  const zip = ref(77002)
  const methods = [
  { value: 'New', label: 'New' },
  { value: 'Used', label: 'Used' },
]
const selected = ref('New')


const submitForm = async () => {
  await navigateTo({
  path: '/cars',
  query: {
    vehicle_condition: selected.value,
    tlocation: zip.value
  }
})
}

</script>

<style scoped>

</style>